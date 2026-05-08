/**
 * Same static export as `npm run build:out` (EmailJS-only forms; no PHP/API mail path).
 */
import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const r = spawnSync(process.platform === "win32" ? "node.exe" : "node", ["--max-old-space-size=8192", "scripts/build-out.mjs"], {
  cwd: root,
  env: { ...process.env },
  stdio: "inherit",
  shell: process.platform === "win32",
});

process.exit(r.status ?? 1);
