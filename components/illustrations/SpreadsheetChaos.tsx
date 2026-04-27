import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/cn";

export default function SpreadsheetChaos({ className }: { className?: string }) {
  const rows = 8;
  const cols = 6;
  const errors = new Set(["1-2", "3-4", "5-1", "6-3", "2-5"]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-surface-border bg-white shadow-card",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-surface-border bg-surface-muted px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold text-ink">
            Legacy Spreadsheet
          </span>
          <span className="flex items-center gap-1 rounded-md bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-500">
            <AlertTriangle size={11} /> 5 errors
          </span>
        </div>
        <span className="text-[10px] text-ink-muted">vendors.xlsx</span>
      </div>
      <table className="w-full text-[11px]">
        <thead className="bg-surface-muted text-ink-muted">
          <tr>
            <th className="w-10 border-b border-r border-surface-border px-2 py-1.5 text-left">
              #
            </th>
            {Array.from({ length: cols }).map((_, i) => (
              <th
                key={i}
                className="border-b border-r border-surface-border px-2 py-1.5 text-left font-semibold"
              >
                {String.fromCharCode(65 + i)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, r) => (
            <tr key={r}>
              <td className="border-b border-r border-surface-border bg-surface-muted px-2 py-1.5 text-ink-muted">
                {r + 1}
              </td>
              {Array.from({ length: cols }).map((_, c) => {
                const isErr = errors.has(`${r}-${c}`);
                return (
                  <td
                    key={c}
                    className={cn(
                      "border-b border-r border-surface-border px-2 py-1.5",
                      isErr
                        ? "bg-rose-50 text-rose-500 font-semibold"
                        : "text-ink-secondary",
                    )}
                  >
                    {isErr ? "#REF!" : mockCell(r, c)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function mockCell(r: number, c: number) {
  const words = ["Vendor", "PO-", "Pending", "$1,2", "2024", "Active"];
  return `${words[c]}${((r + 1) * 7) % 100}`;
}
