import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";

export function Card({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={cn("card-elevated p-5", hover && "card-hover", className)}>
      {children}
    </div>
  );
}

export function KpiCard({
  label,
  value,
  delta,
  trend = "up",
  icon: Icon,
  hint,
}: {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "flat";
  icon: LucideIcon;
  hint?: string;
}) {
  return (
    <Card hover className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </div>
        <div
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
          style={{ backgroundColor: "color-mix(in oklab, var(--brand, var(--primary)) 12%, transparent)", color: "var(--brand, var(--primary))" }}
        >
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        {(delta || hint) && (
          <div className="mt-1 flex items-center gap-1.5 text-xs">
            {delta && (
              <span
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 font-medium",
                  trend === "up" && "bg-success/10 text-success",
                  trend === "down" && "bg-destructive/10 text-destructive",
                  trend === "flat" && "bg-muted text-muted-foreground",
                )}
              >
                {trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : trend === "down" ? (
                  <ArrowDownRight className="h-3 w-3" />
                ) : null}
                {delta}
              </span>
            )}
            {hint && <span className="text-muted-foreground">{hint}</span>}
          </div>
        )}
      </div>
    </Card>
  );
}

export function SectionCard({
  title,
  action,
  children,
  className,
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
        {action}
      </div>
      {children}
    </Card>
  );
}

export function ActivityList({
  items,
}: {
  items: { title: string; meta: string; time: string; icon: LucideIcon }[];
}) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <li key={i} className="flex items-start gap-3">
            <div
              className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg"
              style={{
                backgroundColor:
                  "color-mix(in oklab, var(--brand, var(--primary)) 10%, transparent)",
                color: "var(--brand, var(--primary))",
              }}
            >
              <Icon className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">{it.title}</div>
              <div className="truncate text-xs text-muted-foreground">{it.meta}</div>
            </div>
            <div className="shrink-0 text-xs text-muted-foreground">{it.time}</div>
          </li>
        );
      })}
    </ul>
  );
}

export function QuickActions({
  actions,
}: {
  actions: { label: string; icon: LucideIcon }[];
}) {
  return (
    <SectionCard title="Quick Actions">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {actions.map((a) => {
          const Icon = a.icon;
          return (
            <button
              key={a.label}
              className="group flex flex-col items-start gap-2 rounded-xl border bg-card p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <div
                className="grid h-8 w-8 place-items-center rounded-lg"
                style={{
                  backgroundColor:
                    "color-mix(in oklab, var(--brand, var(--primary)) 12%, transparent)",
                  color: "var(--brand, var(--primary))",
                }}
              >
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-xs font-medium">{a.label}</span>
            </button>
          );
        })}
      </div>
    </SectionCard>
  );
}

export function TaskList({
  tasks,
}: {
  tasks: { title: string; due: string; priority: "low" | "med" | "high" }[];
}) {
  const badge = {
    low: "bg-muted text-muted-foreground",
    med: "bg-warning/15 text-warning",
    high: "bg-destructive/10 text-destructive",
  } as const;
  return (
    <SectionCard title="Task List">
      <ul className="flex flex-col gap-2">
        {tasks.map((t, i) => (
          <li
            key={i}
            className="flex items-center gap-3 rounded-lg border bg-secondary/40 p-2.5"
          >
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-border accent-[var(--brand,var(--primary))]"
            />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">{t.title}</div>
              <div className="text-[11px] text-muted-foreground">Due {t.due}</div>
            </div>
            <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase", badge[t.priority])}>
              {t.priority}
            </span>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

export function Announcements({
  items,
}: {
  items: { title: string; body: string; tag: string }[];
}) {
  return (
    <SectionCard title="Announcements">
      <div className="flex flex-col gap-3">
        {items.map((a, i) => (
          <div key={i} className="rounded-xl border bg-secondary/40 p-3">
            <div className="mb-1 flex items-center gap-2">
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase"
                style={{
                  backgroundColor:
                    "color-mix(in oklab, var(--brand, var(--primary)) 15%, transparent)",
                  color: "var(--brand, var(--primary))",
                }}
              >
                {a.tag}
              </span>
            </div>
            <div className="text-sm font-semibold">{a.title}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">{a.body}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export function MiniCalendar() {
  const today = new Date();
  const month = today.toLocaleString("en", { month: "long", year: "numeric" });
  const day = today.getDay();
  const date = today.getDate();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const cells = Array.from({ length: firstDay + daysInMonth }, (_, i) =>
    i < firstDay ? null : i - firstDay + 1,
  );
  void day;
  return (
    <SectionCard title={month}>
      <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-muted-foreground">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <div key={i} className="py-1 font-medium">{d}</div>
        ))}
        {cells.map((c, i) => (
          <div
            key={i}
            className={cn(
              "grid aspect-square place-items-center rounded-md text-xs",
              c === date && "font-bold text-white",
              c === date
                ? "bg-[var(--brand,var(--primary))]"
                : c
                ? "hover:bg-accent"
                : "",
            )}
          >
            {c ?? ""}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export function ProgressRow({
  label,
  value,
  meta,
}: {
  label: string;
  value: number;
  meta?: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{meta ?? `${value}%`}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${Math.min(100, value)}%`,
            backgroundColor: "var(--brand, var(--primary))",
          }}
        />
      </div>
    </div>
  );
}