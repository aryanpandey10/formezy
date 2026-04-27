import { integrationsList } from "@/lib/constants";

export default function IntegrationMarketplace() {
  const mock = [
    ...integrationsList,
    { name: "Slack", short: "Sk" },
    { name: "Zoom", short: "Zm" },
    { name: "Teams", short: "Tm" },
    { name: "Stripe", short: "Sr" },
  ].slice(0, 12);

  return (
    <div className="rounded-2xl border border-surface-border bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-ink">
          Integrations Marketplace
        </span>
        <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[11px] font-bold text-purple-primary">
          50+ available
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-4">
        {mock.map((m) => (
          <div
            key={m.name}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-surface-border bg-gradient-to-br from-purple-50/50 to-white p-3 transition-all hover:border-purple-200 hover:shadow-card"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[12px] font-bold text-purple-primary shadow-card">
              {m.short}
            </span>
            <span className="text-[11px] font-medium text-ink">
              {m.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
