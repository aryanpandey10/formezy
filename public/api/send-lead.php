<?php
/**
 * Form lead mail for static hosting (cPanel / Apache + PHP).
 * Place send-lead-config.local.php next to this file (see send-lead-config.local.php.example).
 * Expects vendor/ at site root (from composer + build-out copy to out/vendor).
 */
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

header('Content-Type: application/json; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input') ?: '';
$body = json_decode($raw, true);
if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid JSON']);
    exit;
}

$source = isset($body['source']) ? (string) $body['source'] : '';
$name = isset($body['name']) ? trim((string) $body['name']) : '';
$email = isset($body['email']) ? trim((string) $body['email']) : '';
$phone = isset($body['phone']) ? trim((string) $body['phone']) : '';
$company = isset($body['company']) ? trim((string) $body['company']) : '';
$companySize = isset($body['company_size']) ? trim((string) $body['company_size']) : '';
$message = isset($body['message']) ? trim((string) $body['message']) : '';
$subject = isset($body['subject']) ? trim((string) $body['subject']) : '';
$fromName = isset($body['from_name']) ? trim((string) $body['from_name']) : '';

if ($name === '' || $email === '' || $message === '' || $subject === '') {
    http_response_code(400);
    echo json_encode(['message' => 'Missing required fields.']);
    exit;
}

function esc($v): string
{
    $t = (string) ($v ?? '');
    return htmlspecialchars($t, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$html = '
    <h2 style="font-family:system-ui,sans-serif;color:#2C0E3A;">New lead — ' . esc($source) . '</h2>
    <table style="font-family:system-ui,sans-serif;font-size:14px;color:#6366A8;line-height:1.6;">'
    . ($fromName !== '' ? '<tr><td><strong>From</strong></td><td>' . esc($fromName) . '</td></tr>' : '')
    . '<tr><td><strong>Name</strong></td><td>' . esc($name) . '</td></tr>'
    . '<tr><td><strong>Email</strong></td><td>' . esc($email) . '</td></tr>'
    . ($phone !== '' ? '<tr><td><strong>Phone</strong></td><td>' . esc($phone) . '</td></tr>' : '')
    . ($company !== '' ? '<tr><td><strong>Company</strong></td><td>' . esc($company) . '</td></tr>' : '')
    . ($companySize !== '' ? '<tr><td><strong>Company size</strong></td><td>' . esc($companySize) . '</td></tr>' : '')
    . '</table>
    <p style="font-family:system-ui,sans-serif;font-size:14px;color:#2C0E3A;"><strong>Message</strong></p>
    <p style="font-family:system-ui,sans-serif;font-size:14px;color:#6366A8;white-space:pre-wrap;">' . esc($message) . '</p>';

$textLines = array_filter([
    'Source: ' . $source,
    $fromName !== '' ? 'From label: ' . $fromName : '',
    'Name: ' . $name,
    'Email: ' . $email,
    $phone !== '' ? 'Phone: ' . $phone : '',
    $company !== '' ? 'Company: ' . $company : '',
    $companySize !== '' ? 'Company size: ' . $companySize : '',
    '',
    $message,
], static fn ($x) => $x !== '');

$text = implode("\n", $textLines);

$configPath = __DIR__ . '/send-lead-config.local.php';
if (!is_file($configPath)) {
    http_response_code(503);
    echo json_encode([
        'success' => false,
        'message' => 'Email is not configured. Add send-lead-config.local.php next to send-lead.php.',
    ]);
    exit;
}

/** @var array{smtp_host:string,smtp_port:int|numeric-string,smtp_user:string,smtp_pass:string,smtp_from?:string,notification_emails?:string[]} $config */
$config = require $configPath;

$autoload = dirname(__DIR__) . '/vendor/autoload.php';
if (!is_file($autoload)) {
    http_response_code(503);
    echo json_encode([
        'success' => false,
        'message' => 'Mail dependencies missing. Upload vendor/ (run composer install, then npm run build:out).',
    ]);
    exit;
}

require $autoload;

$recipients = [];
if (!empty($config['notification_emails']) && is_array($config['notification_emails'])) {
    foreach ($config['notification_emails'] as $addr) {
        $addr = trim((string) $addr);
        if ($addr !== '') {
            $recipients[] = $addr;
        }
    }
}
if ($recipients === []) {
    http_response_code(503);
    echo json_encode(['success' => false, 'message' => 'No notification_emails in config.']);
    exit;
}

$to = array_shift($recipients);
$bcc = $recipients;

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = (string) $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = (string) $config['smtp_user'];
    $mail->Password = (string) $config['smtp_pass'];
    $port = (int) $config['smtp_port'];
    $mail->Port = $port;
    if ($port === 465) {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->SMTPAutoTLS = true;
    }

    $smtpUser = (string) $config['smtp_user'];
    $fromNameDisplay = 'Formezy';
    if (!empty($config['smtp_from'])) {
        $sf = trim((string) $config['smtp_from']);
        if (preg_match('/^(.+?)\s*<([^>]+)>\s*$/u', $sf, $m)) {
            $fromNameDisplay = trim($m[1], " \t\"'");
        }
    }
    $mail->setFrom($smtpUser, $fromNameDisplay);

    $mail->addAddress($to);
    foreach ($bcc as $b) {
        $mail->addBCC($b);
    }
    $mail->addReplyTo($email, $name);
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $html;
    $mail->AltBody = $text;

    $mail->send();
    echo json_encode(['success' => true]);
} catch (PHPMailerException $e) {
    error_log('[send-lead] ' . $mail->ErrorInfo);
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Email could not be sent. Check SMTP settings.',
    ]);
} catch (Throwable $e) {
    error_log('[send-lead] ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Email could not be sent.']);
}
