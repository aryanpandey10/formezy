export default function CodeEditorMock() {
  const lines = [
    { n: 1, tokens: [["keyword", "module"], ["", " "], ["const", "VendorModule"], ["", " = "], ["punct", "{"]] },
    { n: 2, tokens: [["", "  "], ["prop", "name"], ["punct", ": "], ["str", "\"Vendor Onboarding\""], ["punct", ","]] },
    { n: 3, tokens: [["", "  "], ["prop", "fields"], ["punct", ": ["]] },
    { n: 4, tokens: [["", "    "], ["call", "text"], ["punct", "("], ["str", "\"Name\""], ["punct", "),"]] },
    { n: 5, tokens: [["", "    "], ["call", "email"], ["punct", "("], ["str", "\"Contact\""], ["punct", "),"]] },
    { n: 6, tokens: [["", "    "], ["call", "file"], ["punct", "("], ["str", "\"GST Cert\""], ["punct", "),"]] },
    { n: 7, tokens: [["", "  "], ["punct", "],"]] },
    { n: 8, tokens: [["", "  "], ["prop", "flow"], ["punct", ": "], ["call", "approval"], ["punct", "(["], ["str", "\"Finance\""], ["punct", ", "], ["str", "\"Ops\""], ["punct", "])"]] },
    { n: 9, tokens: [["punct", "};"]] },
  ];

  const color: Record<string, string> = {
    keyword: "#A78BFA",
    const: "#6C63FF",
    prop: "#06B6D4",
    str: "#F59E0B",
    call: "#10B981",
    punct: "#6B7280",
    "": "#CBD5E1",
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-surface-border bg-ink text-[12px] font-mono text-white shadow-card-hover">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 text-[11px] text-white/50">
          modules/vendor.ts
        </span>
      </div>
      <div className="grid grid-cols-[auto_1fr]">
        <div className="border-r border-white/10 bg-ink py-3 text-right text-white/30">
          {lines.map((l) => (
            <div key={l.n} className="px-3 leading-[1.8]">
              {l.n}
            </div>
          ))}
        </div>
        <div className="overflow-x-auto py-3 pr-6">
          {lines.map((l) => (
            <div key={l.n} className="whitespace-pre px-3 leading-[1.8]">
              {l.tokens.map(([t, text], i) => (
                <span key={i} style={{ color: color[t] }}>
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
