import { Calendar, Hash, MapPin, Send, Ticket, Users } from "lucide-react";

type ThumbProps = {
  children: React.ReactNode;
  from?: string;
  to?: string;
};

function Thumb({ children, from = "#EEF2FF", to = "#F5F3FF" }: ThumbProps) {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(rgba(108,99,255,0.12) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-6 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

function MiniCard({
  icon,
  label,
  className = "",
}: {
  icon: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl border border-surface-border bg-white px-3 py-2 shadow-card ${className}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-primary">
        {icon}
      </span>
      <span className="text-[12px] font-semibold text-ink">{label}</span>
    </div>
  );
}

export function NumberFieldThumb() {
  return (
    <Thumb>
      <div className="flex w-full max-w-[260px] flex-col gap-2.5">
        <MiniCard icon={<Hash size={14} />} label="Invoice Number" />
        <div className="rounded-xl border border-purple-200 bg-white p-3 shadow-card">
          <div className="text-[9px] font-bold uppercase tracking-wider text-purple-primary">
            Number Field
          </div>
          <div className="mt-1 flex h-8 items-center rounded-md border border-surface-border bg-purple-50 px-2 text-[12px] font-semibold text-ink">
            #123456
          </div>
        </div>
      </div>
    </Thumb>
  );
}

export function DateBoxThumb() {
  return (
    <Thumb from="#FFF7ED" to="#FEF3C7">
      <div className="flex w-full max-w-[260px] flex-col gap-2.5">
        <MiniCard icon={<Calendar size={14} />} label="Inquiry Form" />
        <div className="grid grid-cols-7 gap-1 rounded-xl border border-surface-border bg-white p-3 shadow-card">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className={`flex h-5 items-center justify-center rounded-[4px] text-[9px] font-semibold ${
                i === 6
                  ? "bg-purple-cta text-white"
                  : "bg-purple-50 text-ink-secondary"
              }`}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>
    </Thumb>
  );
}

export function TextBoxThumb() {
  return (
    <Thumb from="#ECFEFF" to="#F0F9FF">
      <div className="flex w-full max-w-[260px] flex-col gap-2.5">
        <MiniCard icon={<MapPin size={14} />} label="Location" />
        <div className="rounded-xl border border-purple-200 bg-white p-3 shadow-card">
          <div className="text-[9px] font-bold uppercase tracking-wider text-purple-primary">
            Custom Text
          </div>
          <div className="mt-1 h-2 w-full rounded bg-purple-50" />
          <div className="mt-1 h-2 w-4/5 rounded bg-purple-50" />
          <div className="mt-1 h-2 w-3/5 rounded bg-purple-50" />
        </div>
      </div>
    </Thumb>
  );
}

export function TransferEntryThumb() {
  return (
    <Thumb from="#FDF2F8" to="#FCE7F3">
      <div className="flex w-full max-w-[260px] flex-col gap-2.5">
        <div className="inline-flex w-fit rounded-pill bg-ink px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
          Step 1 · Navigate
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-surface-border bg-white p-3 shadow-card">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-cta text-white">
            <Send size={14} />
          </div>
          <div className="flex-1">
            <div className="h-2 w-3/4 rounded bg-purple-100" />
            <div className="mt-1 h-2 w-2/3 rounded bg-purple-50" />
          </div>
          <span className="rounded-md bg-purple-50 px-2 py-1 text-[9px] font-bold text-purple-primary">
            →
          </span>
        </div>
      </div>
    </Thumb>
  );
}

export function RaiseTicketThumb() {
  return (
    <Thumb from="#F0FDF4" to="#ECFDF5">
      <div className="flex w-full max-w-[260px] flex-col gap-2.5">
        <MiniCard icon={<Ticket size={14} />} label="Support Ticket" />
        <div className="rounded-xl border border-purple-200 bg-white p-3 shadow-card">
          <div className="flex items-center justify-between text-[9px] font-bold">
            <span className="uppercase tracking-wider text-ink-muted">
              #TK-2041
            </span>
            <span className="rounded-pill bg-green-100 px-2 py-0.5 text-green-700">
              Open
            </span>
          </div>
          <div className="mt-2 h-2 w-full rounded bg-purple-50" />
          <div className="mt-1 h-2 w-4/5 rounded bg-purple-50" />
        </div>
      </div>
    </Thumb>
  );
}

export function UserRolesThumb() {
  return (
    <Thumb from="#EDE9FE" to="#E0E7FF">
      <div className="flex w-full max-w-[260px] flex-col gap-2.5">
        <MiniCard icon={<Users size={14} />} label="Admin Roles" />
        <div className="rounded-xl border border-purple-200 bg-white p-3 shadow-card">
          <div className="grid grid-cols-3 gap-1.5">
            {["Admin", "Editor", "Viewer"].map((r, i) => (
              <div
                key={r}
                className={`rounded-md px-1.5 py-1 text-center text-[9px] font-bold ${
                  i === 0
                    ? "bg-purple-cta text-white"
                    : "bg-purple-50 text-ink"
                }`}
              >
                {r}
              </div>
            ))}
          </div>
          <div className="mt-2 h-1.5 w-full rounded bg-purple-50" />
          <div className="mt-1 h-1.5 w-4/5 rounded bg-purple-50" />
        </div>
      </div>
    </Thumb>
  );
}
