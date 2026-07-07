import {
  Users,
  UserCog,
  ClipboardCheck,
  BookOpen,
  Award,
  Plus,
  FileText,
  CalendarClock,
  Banknote,
  UserPlus,
} from "lucide-react";
import { KpiCard, SectionCard, ActivityList, QuickActions, TaskList, Announcements, MiniCalendar, ProgressRow } from "../widgets";
import { AreaTrend, Donut } from "../charts";

const finance = [
  { name: "Jan", value: 42 },
  { name: "Feb", value: 50 },
  { name: "Mar", value: 48 },
  { name: "Apr", value: 61 },
  { name: "May", value: 66 },
  { name: "Jun", value: 72 },
  { name: "Jul", value: 80 },
];

const classDist = [
  { name: "Grade 1", value: 120 },
  { name: "Grade 2", value: 145 },
  { name: "Grade 3", value: 132 },
  { name: "Grade 4", value: 118 },
  { name: "Grade 5", value: 96 },
  { name: "Grade 6", value: 84 },
];

export function SchoolDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Total Students" value="1,284" delta="+3.2%" icon={Users} hint="vs last month" />
        <KpiCard label="Total Teachers" value="86" delta="+2" icon={UserCog} hint="new hires" />
        <KpiCard label="Today's Attendance" value="94.6%" delta="+1.1%" icon={ClipboardCheck} />
        <KpiCard label="Tahfidz Progress" value="68%" delta="+4%" icon={BookOpen} hint="term avg" />
      </div>

      <SectionCard title="Monthly Finance" className="lg:col-span-8">
        <AreaTrend data={finance} dataKey="value" />
      </SectionCard>
      <SectionCard title="Class Distribution" className="lg:col-span-4">
        <Donut data={classDist} />
      </SectionCard>

      <SectionCard title="Tahfidz Progress" className="lg:col-span-6">
        <div className="flex flex-col gap-4">
          <ProgressRow label="Juz 30 — Grade 4" value={82} meta="82 / 100 students" />
          <ProgressRow label="Juz 29 — Grade 5" value={64} meta="61 / 96 students" />
          <ProgressRow label="Juz 28 — Grade 6" value={51} meta="43 / 84 students" />
          <ProgressRow label="Tilawah level A" value={73} />
        </div>
      </SectionCard>

      <SectionCard title="Upcoming Exams" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Mid-term Math — Grade 5", meta: "Room 3B · 45 students", time: "Mon", icon: FileText },
            { title: "Arabic — Grade 6", meta: "Room 2A · 38 students", time: "Tue", icon: BookOpen },
            { title: "Science practical — Grade 4", meta: "Lab 1 · 42 students", time: "Wed", icon: Award },
            { title: "Tahfidz oral — Grade 3", meta: "Musholla · 30 students", time: "Fri", icon: BookOpen },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-8">
        <SectionCard title="Recent Activities">
          <ActivityList
            items={[
              { title: "New student enrolled: Aisyah R.", meta: "Grade 4 · Approved", time: "10m", icon: UserPlus },
              { title: "Payroll released for July", meta: "86 teachers · IDR 412M", time: "1h", icon: Banknote },
              { title: "Tahfidz report submitted", meta: "Ustadz Fahmi · Grade 5", time: "3h", icon: BookOpen },
              { title: "Parent meeting scheduled", meta: "Grade 6 · Sat 10:00", time: "6h", icon: CalendarClock },
            ]}
          />
        </SectionCard>
      </div>
      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "Add Student", icon: UserPlus },
            { label: "Create Exam", icon: FileText },
            { label: "Record Attendance", icon: ClipboardCheck },
            { label: "New Announcement", icon: Plus },
            { label: "Payroll Run", icon: Banknote },
            { label: "Tahfidz Log", icon: BookOpen },
          ]}
        />
      </div>

      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Approve grade 5 exam schedule", due: "today", priority: "high" },
            { title: "Review new admissions batch", due: "tomorrow", priority: "med" },
            { title: "Finalize term report cards", due: "Fri", priority: "med" },
            { title: "Send parent newsletter", due: "next week", priority: "low" },
          ]}
        />
      </div>
      <div className="lg:col-span-4">
        <Announcements
          items={[
            { tag: "Academic", title: "Term 2 assessment window opens Monday", body: "All homeroom teachers submit rubrics by Friday." },
            { tag: "Event", title: "Parent-teacher meeting this Saturday", body: "Grades 4-6 · 10:00 in the main hall." },
          ]}
        />
      </div>
    </div>
  );
}