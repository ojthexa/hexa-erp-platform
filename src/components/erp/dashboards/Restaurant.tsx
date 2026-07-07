import {
  Receipt,
  ShoppingCart,
  ChefHat,
  UtensilsCrossed,
  AlertTriangle,
  Plus,
  Table2,
  BadgePercent,
  Truck,
} from "lucide-react";
import { KpiCard, SectionCard, ActivityList, QuickActions, TaskList, Announcements, MiniCalendar, ProgressRow } from "../widgets";
import { AreaTrend, BarSeries } from "../charts";

const cashFlow = [
  { name: "Mon", value: 12 },
  { name: "Tue", value: 15 },
  { name: "Wed", value: 14 },
  { name: "Thu", value: 18 },
  { name: "Fri", value: 26 },
  { name: "Sat", value: 34 },
  { name: "Sun", value: 30 },
];

const outlets = [
  { name: "Kemang", value: 42 },
  { name: "Menteng", value: 38 },
  { name: "PIK", value: 51 },
  { name: "BSD", value: 29 },
  { name: "Bandung", value: 36 },
];

export function RestaurantDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Today's Sales" value="IDR 24.8M" delta="+8.4%" icon={Receipt} />
        <KpiCard label="Orders" value="316" delta="+22" icon={ShoppingCart} />
        <KpiCard label="Kitchen Queue" value="12" trend="flat" delta="live" icon={ChefHat} />
        <KpiCard label="Inventory Alerts" value="7" trend="down" delta="-2" icon={AlertTriangle} />
      </div>

      <SectionCard title="Cash Flow — This Week" className="lg:col-span-8">
        <AreaTrend data={cashFlow} dataKey="value" />
      </SectionCard>
      <SectionCard title="Best Selling Menu" className="lg:col-span-4">
        <div className="flex flex-col gap-3">
          {[
            { name: "Nasi Goreng Spesial", pct: 92, sold: 148 },
            { name: "Ayam Bakar Madu", pct: 78, sold: 121 },
            { name: "Sate Ayam", pct: 66, sold: 104 },
            { name: "Es Teh Tarik", pct: 58, sold: 92 },
          ].map((m) => (
            <ProgressRow key={m.name} label={m.name} value={m.pct} meta={`${m.sold} sold`} />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Outlet Performance" className="lg:col-span-6">
        <BarSeries data={outlets} dataKey="value" />
      </SectionCard>

      <SectionCard title="Kitchen Queue" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Table 12 · Nasi Goreng x2", meta: "waiter Rani · 4m ago", time: "cooking", icon: ChefHat },
            { title: "Table 5 · Ayam Bakar x1", meta: "waiter Doni · 2m ago", time: "queued", icon: ChefHat },
            { title: "Takeaway #4821", meta: "GoFood · 3 items", time: "ready", icon: ShoppingCart },
            { title: "Table 9 · Sate x3", meta: "waiter Rani · 6m ago", time: "cooking", icon: ChefHat },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "New Order", icon: Plus },
            { label: "Open Table", icon: Table2 },
            { label: "Add Menu", icon: UtensilsCrossed },
            { label: "Purchase Order", icon: ShoppingCart },
            { label: "Promotion", icon: BadgePercent },
            { label: "Suppliers", icon: Truck },
          ]}
        />
      </div>
      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Restock chicken from supplier A", due: "today", priority: "high" },
            { title: "Update weekend promo banner", due: "Fri", priority: "med" },
            { title: "Train new waiter", due: "Sat", priority: "low" },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <Announcements
          items={[
            { tag: "Ops", title: "New POS build 2.4 deployed to all outlets", body: "Includes faster receipt printing and split-bill support." },
            { tag: "Promo", title: "Weekend combo starts Friday", body: "Nasi Goreng + Es Teh Tarik for IDR 39K. Auto-applied at POS." },
          ]}
        />
      </div>
    </div>
  );
}