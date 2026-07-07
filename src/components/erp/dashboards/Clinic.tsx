import {
  UserRound,
  CalendarClock,
  HeartPulse,
  Pill,
  Wallet,
  Receipt,
  Plus,
  FlaskConical,
  Stethoscope,
  FileText,
} from "lucide-react";
import { KpiCard, SectionCard, ActivityList, QuickActions, TaskList, Announcements, MiniCalendar, ProgressRow } from "../widgets";
import { AreaTrend, Donut } from "../charts";

const revenue = [
  { name: "W1", value: 82 },
  { name: "W2", value: 91 },
  { name: "W3", value: 88 },
  { name: "W4", value: 104 },
  { name: "W5", value: 112 },
];

const services = [
  { name: "General", value: 42 },
  { name: "Pediatric", value: 28 },
  { name: "Dental", value: 18 },
  { name: "Lab", value: 22 },
  { name: "Pharmacy", value: 34 },
];

export function ClinicDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Patients Today" value="128" delta="+6%" icon={UserRound} />
        <KpiCard label="Appointments" value="42" delta="8 waiting" icon={CalendarClock} />
        <KpiCard label="Doctors On Duty" value="12" delta="all shifts" icon={HeartPulse} />
        <KpiCard label="Revenue (Wk)" value="IDR 112M" delta="+7.4%" icon={Wallet} />
      </div>

      <SectionCard title="Weekly Revenue" className="lg:col-span-8">
        <AreaTrend data={revenue} dataKey="value" />
      </SectionCard>
      <SectionCard title="Service Mix" className="lg:col-span-4">
        <Donut data={services} />
      </SectionCard>

      <SectionCard title="Medicine Stock" className="lg:col-span-6">
        <div className="flex flex-col gap-4">
          <ProgressRow label="Paracetamol 500mg" value={72} meta="720 / 1000" />
          <ProgressRow label="Amoxicillin 500mg" value={38} meta="Low — reorder" />
          <ProgressRow label="Ibuprofen 400mg" value={64} meta="640 / 1000" />
          <ProgressRow label="Vitamin C 1000" value={22} meta="Critical" />
        </div>
      </SectionCard>

      <SectionCard title="Pending Payments" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Invoice INV-2041 · IDR 480K", meta: "Patient: Ahmad F.", time: "2d", icon: Receipt },
            { title: "Invoice INV-2038 · IDR 1.2M", meta: "Patient: Nadia R.", time: "3d", icon: Receipt },
            { title: "Invoice INV-2031 · IDR 260K", meta: "Patient: Yoga P.", time: "5d", icon: Receipt },
            { title: "Insurance claim BPJS · 12 cases", meta: "Batch July W1", time: "in review", icon: FileText },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "New Patient", icon: Plus },
            { label: "Book Appointment", icon: CalendarClock },
            { label: "Add Doctor", icon: Stethoscope },
            { label: "Lab Request", icon: FlaskConical },
            { label: "Dispense Medicine", icon: Pill },
            { label: "Create Invoice", icon: Receipt },
          ]}
        />
      </div>
      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Reorder Amoxicillin", due: "today", priority: "high" },
            { title: "Submit BPJS batch", due: "Wed", priority: "high" },
            { title: "Doctor roster next week", due: "Fri", priority: "med" },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <Announcements
          items={[
            { tag: "Clinic", title: "Vaccination drive this Saturday", body: "Free MMR vaccine for children under 5. Register at reception." },
            { tag: "Ops", title: "New lab equipment arriving", body: "Chemistry analyzer XR-90 will be operational next Monday." },
          ]}
        />
      </div>
    </div>
  );
}