import {
  Factory,
  Car,
  Fuel,
  Wrench,
  Boxes,
  ClipboardCheck,
  ShieldCheck,
  Plus,
  Route as RouteIcon,
  Gauge,
} from "lucide-react";
import { KpiCard, SectionCard, ActivityList, QuickActions, TaskList, Announcements, MiniCalendar, ProgressRow } from "../widgets";
import { AreaTrend, BarSeries } from "../charts";

const production = [
  { name: "Mon", value: 4.2 },
  { name: "Tue", value: 4.5 },
  { name: "Wed", value: 4.1 },
  { name: "Thu", value: 4.8 },
  { name: "Fri", value: 5.1 },
  { name: "Sat", value: 4.9 },
  { name: "Sun", value: 3.8 },
];

const fuel = [
  { name: "Excavator", value: 820 },
  { name: "Dumper", value: 1240 },
  { name: "Loader", value: 610 },
  { name: "Truck", value: 980 },
];

export function MiningDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Production Today" value="4,820 t" delta="+6.1%" icon={Factory} />
        <KpiCard label="Fleet Active" value="42 / 48" delta="88%" icon={Car} />
        <KpiCard label="Fuel Usage" value="3,650 L" trend="down" delta="-2.4%" icon={Fuel} />
        <KpiCard label="Attendance" value="96.2%" delta="+0.8%" icon={ClipboardCheck} />
      </div>

      <SectionCard title="Production Trend (kt)" className="lg:col-span-8">
        <AreaTrend data={production} dataKey="value" />
      </SectionCard>
      <SectionCard title="Equipment Health" className="lg:col-span-4">
        <div className="flex flex-col gap-4">
          <ProgressRow label="Excavator EX-04" value={92} meta="Good" />
          <ProgressRow label="Dumper D-11" value={78} meta="Service in 40h" />
          <ProgressRow label="Loader L-02" value={54} meta="Service due" />
          <ProgressRow label="Truck T-19" value={88} meta="Good" />
        </div>
      </SectionCard>

      <SectionCard title="Fuel Usage by Class" className="lg:col-span-6">
        <BarSeries data={fuel} dataKey="value" />
      </SectionCard>

      <SectionCard title="Maintenance Schedule" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Dumper D-11 — 500h service", meta: "Mechanic team A", time: "today", icon: Wrench },
            { title: "Loader L-02 — hydraulic check", meta: "Mechanic team B", time: "tomorrow", icon: Wrench },
            { title: "Excavator EX-01 — filter change", meta: "Mechanic team A", time: "Thu", icon: Wrench },
            { title: "Truck T-22 — brakes inspection", meta: "Workshop 2", time: "Fri", icon: Gauge },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "Log Production", icon: Plus },
            { label: "Dispatch Fleet", icon: RouteIcon },
            { label: "Fuel Entry", icon: Fuel },
            { label: "Maintenance", icon: Wrench },
            { label: "Inventory", icon: Boxes },
            { label: "Safety Report", icon: ShieldCheck },
          ]}
        />
      </div>
      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Approve overtime for team C", due: "today", priority: "high" },
            { title: "Order tires for D-14", due: "Wed", priority: "med" },
            { title: "Weekly safety toolbox", due: "Fri", priority: "med" },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <Announcements
          items={[
            { tag: "Safety", title: "Zero-incident streak: 42 days", body: "Keep it going. Toolbox meeting every morning at 06:30." },
            { tag: "Ops", title: "Rain forecast Thursday", body: "Adjust haul plan and secure ramps at pit 3." },
          ]}
        />
      </div>
    </div>
  );
}