import {
  Factory,
  Wrench,
  Boxes,
  ClipboardCheck,
  ShieldCheck,
  Plus,
  Package,
  Gauge,
  FolderKanban,
  BookMarked,
} from "lucide-react";
import {
  KpiCard,
  SectionCard,
  ActivityList,
  QuickActions,
  TaskList,
  Announcements,
  MiniCalendar,
  ProgressRow,
} from "../widgets";
import { AreaTrend, BarSeries } from "../charts";

const output = [
  { name: "Mon", value: 4.2 },
  { name: "Tue", value: 4.5 },
  { name: "Wed", value: 4.1 },
  { name: "Thu", value: 4.8 },
  { name: "Fri", value: 5.1 },
  { name: "Sat", value: 4.9 },
  { name: "Sun", value: 3.8 },
];

const linesLoad = [
  { name: "Line A", value: 92 },
  { name: "Line B", value: 78 },
  { name: "Line C", value: 85 },
  { name: "Line D", value: 64 },
];

export function ManufactureDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Output Hari Ini" value="12,480 pcs" delta="+5.4%" icon={Factory} />
        <KpiCard label="OEE" value="82.4%" delta="+1.2%" icon={Gauge} />
        <KpiCard label="Quality Pass" value="98.6%" delta="+0.3%" icon={ShieldCheck} />
        <KpiCard label="Attendance" value="96.2%" delta="+0.8%" icon={ClipboardCheck} />
      </div>

      <SectionCard title="Production Output (k pcs)" className="lg:col-span-8">
        <AreaTrend data={output} dataKey="value" />
      </SectionCard>
      <SectionCard title="Machine Health" className="lg:col-span-4">
        <div className="flex flex-col gap-4">
          <ProgressRow label="CNC-01" value={92} meta="Good" />
          <ProgressRow label="Press-04" value={78} meta="Service in 40h" />
          <ProgressRow label="Injector-02" value={54} meta="Service due" />
          <ProgressRow label="Conveyor-07" value={88} meta="Good" />
        </div>
      </SectionCard>

      <SectionCard title="Line Utilization" className="lg:col-span-6">
        <BarSeries data={linesLoad} dataKey="value" />
      </SectionCard>

      <SectionCard title="Work Orders" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "WO-2041 — Housing A", meta: "Line A · 4,200 pcs", time: "in-prog", icon: FolderKanban },
            { title: "WO-2042 — Bracket B", meta: "Line B · 2,800 pcs", time: "queued", icon: FolderKanban },
            { title: "WO-2043 — Cover C", meta: "Line C · 3,600 pcs", time: "QC", icon: ShieldCheck },
            { title: "WO-2044 — Frame D", meta: "Line D · 1,900 pcs", time: "hold", icon: FolderKanban },
          ]}
        />
      </SectionCard>

      <SectionCard title="Maintenance Schedule" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Press-04 — 500h service", meta: "Team A", time: "today", icon: Wrench },
            { title: "Injector-02 — hydraulic check", meta: "Team B", time: "tomorrow", icon: Wrench },
            { title: "CNC-01 — filter change", meta: "Team A", time: "Thu", icon: Wrench },
            { title: "Conveyor-07 — belt inspection", meta: "Workshop 2", time: "Fri", icon: Gauge },
          ]}
        />
      </SectionCard>

      <SectionCard title="Raw Material Stock" className="lg:col-span-6">
        <div className="flex flex-col gap-4">
          <ProgressRow label="Steel sheet 2mm" value={72} meta="14.4 / 20 t" />
          <ProgressRow label="ABS pellet" value={45} meta="9 / 20 t" />
          <ProgressRow label="Aluminum bar" value={88} meta="17.6 / 20 t" />
          <ProgressRow label="Packaging carton" value={31} meta="reorder soon" />
        </div>
      </SectionCard>

      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "New Work Order", icon: Plus },
            { label: "Log Output", icon: Factory },
            { label: "QC Report", icon: ShieldCheck },
            { label: "Maintenance", icon: Wrench },
            { label: "Raw Material", icon: Package },
            { label: "BOM", icon: BookMarked },
          ]}
        />
      </div>
      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Approve overtime line B", due: "today", priority: "high" },
            { title: "Reorder ABS pellet", due: "Wed", priority: "high" },
            { title: "Weekly safety toolbox", due: "Fri", priority: "med" },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <Announcements
          items={[
            { tag: "Safety", title: "Zero-incident streak: 42 days", body: "Keep it going. Toolbox meeting every morning at 06:30." },
            { tag: "Ops", title: "New product trial run — Line C", body: "Trial batch 500 pcs scheduled Thursday 14:00." },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <SectionCard title="Inventory Snapshot">
          <ActivityList
            items={[
              { title: "Finished goods — Warehouse 1", meta: "34,800 pcs · 82% capacity", time: "now", icon: Boxes },
              { title: "WIP — Line A staging", meta: "1,240 pcs", time: "now", icon: Boxes },
              { title: "Return / rework queue", meta: "86 pcs · QC", time: "now", icon: ShieldCheck },
            ]}
          />
        </SectionCard>
      </div>
    </div>
  );
}