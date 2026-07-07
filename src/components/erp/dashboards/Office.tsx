import {
  Users,
  ClipboardCheck,
  Banknote,
  CalendarClock,
  FolderKanban,
  Package,
  CheckCircle2,
  Megaphone,
  UserPlus,
  Mail,
  Plus,
} from "lucide-react";
import { KpiCard, SectionCard, ActivityList, QuickActions, TaskList, Announcements, MiniCalendar, ProgressRow } from "../widgets";
import { BarSeries } from "../charts";

const payroll = [
  { name: "Feb", value: 320 },
  { name: "Mar", value: 340 },
  { name: "Apr", value: 355 },
  { name: "May", value: 362 },
  { name: "Jun", value: 378 },
  { name: "Jul", value: 390 },
];

export function OfficeDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Employees" value="248" delta="+6" icon={Users} hint="active" />
        <KpiCard label="Attendance Today" value="231" delta="93%" icon={ClipboardCheck} />
        <KpiCard label="Payroll (Jul)" value="IDR 390M" delta="+3.1%" icon={Banknote} />
        <KpiCard label="Pending Leave" value="14" trend="down" delta="-3" icon={CalendarClock} />
      </div>

      <SectionCard title="Payroll Summary" className="lg:col-span-8">
        <BarSeries data={payroll} dataKey="value" />
      </SectionCard>

      <SectionCard title="Office Assets" className="lg:col-span-4">
        <div className="flex flex-col gap-4">
          <ProgressRow label="Laptops" value={87} meta="87 / 100" />
          <ProgressRow label="Monitors" value={64} meta="64 / 90" />
          <ProgressRow label="Meeting Rooms" value={42} meta="42% used" />
          <ProgressRow label="Vehicles" value={71} meta="5 / 7 in use" />
        </div>
      </SectionCard>

      <SectionCard title="Projects" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "ERP rollout — Phase 2", meta: "12 members · 72% done", time: "on track", icon: FolderKanban },
            { title: "Office renovation", meta: "3 vendors · 45% done", time: "risk", icon: Package },
            { title: "Employee onboarding revamp", meta: "HR team · 88% done", time: "on track", icon: CheckCircle2 },
            { title: "Q3 OKR planning", meta: "Leadership · 30% done", time: "planning", icon: FolderKanban },
          ]}
        />
      </SectionCard>

      <SectionCard title="Tasks" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Approve reimbursements", meta: "Finance · 8 requests", time: "today", icon: CheckCircle2 },
            { title: "Interview 3 candidates", meta: "HR · Frontend role", time: "today", icon: UserPlus },
            { title: "Send monthly memo", meta: "Comms · all-hands", time: "tomorrow", icon: Mail },
            { title: "Review vendor contracts", meta: "Legal · 4 vendors", time: "Fri", icon: CheckCircle2 },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "Add Employee", icon: UserPlus },
            { label: "Run Payroll", icon: Banknote },
            { label: "New Project", icon: FolderKanban },
            { label: "Create Letter", icon: Mail },
            { label: "Announcement", icon: Megaphone },
            { label: "New Task", icon: Plus },
          ]}
        />
      </div>
      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Approve July payroll", due: "today", priority: "high" },
            { title: "Publish leave policy update", due: "Wed", priority: "med" },
            { title: "Book conference tickets", due: "Fri", priority: "low" },
          ]}
        />
      </div>
      <div className="lg:col-span-12">
        <Announcements
          items={[
            { tag: "Company", title: "All-hands town hall this Friday", body: "Q2 review + roadmap by the CEO. 15:00 in the main auditorium." },
            { tag: "HR", title: "Health insurance renewal", body: "Please review your dependents by end of month." },
          ]}
        />
      </div>
    </div>
  );
}