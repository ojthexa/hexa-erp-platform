import {
  Boxes,
  ArrowDownToLine,
  ArrowUpFromLine,
  AlertTriangle,
  Warehouse as WarehouseIcon,
  Handshake,
  ShoppingCart,
  Receipt,
  Plus,
  Package,
} from "lucide-react";
import { KpiCard, SectionCard, ActivityList, QuickActions, TaskList, Announcements, MiniCalendar, ProgressRow } from "../widgets";
import { AreaTrend, BarSeries } from "../charts";

const movement = [
  { name: "Mon", value: 320 },
  { name: "Tue", value: 380 },
  { name: "Wed", value: 410 },
  { name: "Thu", value: 360 },
  { name: "Fri", value: 450 },
  { name: "Sat", value: 280 },
  { name: "Sun", value: 190 },
];

const suppliers = [
  { name: "PT Alfa", value: 96 },
  { name: "CV Beta", value: 88 },
  { name: "PT Gamma", value: 74 },
  { name: "CV Delta", value: 65 },
  { name: "PT Epsilon", value: 82 },
];

export function WarehouseDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Stock Value" value="IDR 3.2B" delta="+1.8%" icon={Boxes} />
        <KpiCard label="Incoming Today" value="184" delta="+22" icon={ArrowDownToLine} />
        <KpiCard label="Outgoing Today" value="216" delta="+31" icon={ArrowUpFromLine} />
        <KpiCard label="Low Stock Items" value="18" trend="down" delta="-4" icon={AlertTriangle} />
      </div>

      <SectionCard title="Stock Movement — This Week" className="lg:col-span-8">
        <AreaTrend data={movement} dataKey="value" />
      </SectionCard>

      <SectionCard title="Warehouse Capacity" className="lg:col-span-4">
        <div className="flex flex-col gap-4">
          <ProgressRow label="WH-01 Jakarta" value={78} meta="78% full" />
          <ProgressRow label="WH-02 Surabaya" value={54} meta="54% full" />
          <ProgressRow label="WH-03 Medan" value={92} meta="Near capacity" />
          <ProgressRow label="WH-04 Makassar" value={38} meta="38% full" />
        </div>
      </SectionCard>

      <SectionCard title="Supplier Performance (on-time %)" className="lg:col-span-6">
        <BarSeries data={suppliers} dataKey="value" />
      </SectionCard>

      <SectionCard title="Recent Movements" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "GR-4021 · received 240 boxes", meta: "Supplier PT Alfa", time: "10m", icon: ArrowDownToLine },
            { title: "SO-8812 · dispatched 60 units", meta: "Customer Zenmart", time: "35m", icon: ArrowUpFromLine },
            { title: "PO-3391 · approved", meta: "IDR 128M · 4 items", time: "1h", icon: ShoppingCart },
            { title: "Adjustment · WH-03", meta: "Cycle count · +12 / -3", time: "2h", icon: Boxes },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "New Product", icon: Package },
            { label: "Purchase Order", icon: ShoppingCart },
            { label: "Sales Order", icon: Receipt },
            { label: "Receive Goods", icon: ArrowDownToLine },
            { label: "Ship Goods", icon: ArrowUpFromLine },
            { label: "Add Supplier", icon: Handshake },
          ]}
        />
      </div>
      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Cycle count WH-03 rack B", due: "today", priority: "high" },
            { title: "Follow up late PO from CV Delta", due: "Wed", priority: "med" },
            { title: "Rebalance stock to WH-04", due: "Fri", priority: "med" },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <Announcements
          items={[
            { tag: "Ops", title: "WH-03 nearing capacity", body: "Consider rerouting incoming shipments or moving slow-movers to WH-04." },
            { tag: "Vendor", title: "New supplier onboarded: PT Zeta", body: "Category: packaging materials. Contract active from next week.", },
          ]}
        />
        <div className="mt-4">
          <div className="flex items-center gap-2 rounded-2xl border bg-secondary/40 px-4 py-3 text-xs text-muted-foreground">
            <WarehouseIcon className="h-4 w-4" />
            Real-time sync across 4 warehouses · last update just now
          </div>
        </div>
      </div>
    </div>
  );
}