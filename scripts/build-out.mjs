/**
 * Produces ./out for static hosting by temporarily moving app/api (Route Handlers
 * are incompatible with output: 'export'). Restore runs even if build fails.
 *
 * Lead forms use EmailJS in the browser only — no API routes or PHP required.
 * Ensure NEXT_PUBLIC_EMAILJS_* are set in .env.local before building so the export
 * includes your EmailJS config.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const apiDir = path.join(root, "app", "api");
const backupDir = path.join(root, ".export-api-backup");

function moveApiOut() {
  if (!fs.existsSync(apiDir)) return false;
  if (fs.existsSync(backupDir)) {
    fs.rmSync(backupDir, { recursive: true, force: true });
  }
  try {
    fs.renameSync(apiDir, backupDir);
  } catch {
    fs.cpSync(apiDir, backupDir, { recursive: true });
    fs.rmSync(apiDir, { recursive: true, force: true });
  }
  return true;
}

function restoreApi(moved) {
  if (!moved || !fs.existsSync(backupDir)) return;
  if (fs.existsSync(apiDir)) {
    fs.rmSync(apiDir, { recursive: true, force: true });
  }
  try {
    fs.renameSync(backupDir, apiDir);
  } catch {
    fs.cpSync(backupDir, apiDir, { recursive: true });
    fs.rmSync(backupDir, { recursive: true, force: true });
  }
}

const moved = moveApiOut();
try {
  const base = process.env.NODE_OPTIONS?.trim() ?? "";
  const heap =
    /\bmax-old-space-size=/.test(base) ? "" : "--max-old-space-size=8192";
  const merged = [base, heap].filter(Boolean).join(" ").trim();
  const env = {
    ...process.env,
    STATIC_EXPORT: "true",
    ...(merged ? { NODE_OPTIONS: merged } : {}),
  };
  const r = spawnSync(process.platform === "win32" ? "npx.cmd" : "npx", ["next", "build"], {
    cwd: root,
    env,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (r.status !== 0) {
    process.exit(r.status ?? 1);
  }
} finally {
  restoreApi(moved);
}

console.log("\nDone. Static files are in ./out (forms use EmailJS only; upload all of out/ including .htaccess).\n");
