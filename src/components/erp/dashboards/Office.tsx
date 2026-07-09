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
        <KpiCard label="Karyawan" value="248" delta="+6" icon={Users} hint="aktif" />
        <KpiCard label="Hadir Hari Ini" value="231" delta="93%" icon={ClipboardCheck} />
        <KpiCard label="Payroll (Jul)" value="IDR 390M" delta="+3.1%" icon={Banknote} />
        <KpiCard label="Cuti Pending" value="14" trend="down" delta="-3" icon={CalendarClock} />
      </div>

      <SectionCard title="Ringkasan Payroll" className="lg:col-span-8">
        <BarSeries data={payroll} dataKey="value" />
      </SectionCard>

      <SectionCard title="Aset Kantor" className="lg:col-span-4">
        <div className="flex flex-col gap-4">
          <ProgressRow label="Laptop" value={87} meta="87 / 100" />
          <ProgressRow label="Monitor" value={64} meta="64 / 90" />
          <ProgressRow label="Ruang Rapat" value={42} meta="42% terpakai" />
          <ProgressRow label="Kendaraan" value={71} meta="5 / 7 digunakan" />
        </div>
      </SectionCard>

      <SectionCard title="Proyek" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Rollout ERP — Fase 2", meta: "12 anggota · 72% selesai", time: "on track", icon: FolderKanban },
            { title: "Renovasi Kantor", meta: "3 vendor · 45% selesai", time: "risiko", icon: Package },
            { title: "Revamp Onboarding Karyawan", meta: "Tim HR · 88% selesai", time: "on track", icon: CheckCircle2 },
            { title: "Perencanaan OKR Q3", meta: "Leadership · 30% selesai", time: "planning", icon: FolderKanban },
          ]}
        />
      </SectionCard>

      <SectionCard title="Tugas" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Approve reimbursement", meta: "Keuangan · 8 pengajuan", time: "hari ini", icon: CheckCircle2 },
            { title: "Interview 3 kandidat", meta: "HR · role Frontend", time: "hari ini", icon: UserPlus },
            { title: "Kirim memo bulanan", meta: "Komunikasi · all-hands", time: "besok", icon: Mail },
            { title: "Review kontrak vendor", meta: "Legal · 4 vendor", time: "Jum", icon: CheckCircle2 },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "Tambah Karyawan", icon: UserPlus },
            { label: "Jalankan Payroll", icon: Banknote },
            { label: "Proyek Baru", icon: FolderKanban },
            { label: "Buat Surat", icon: Mail },
            { label: "Pengumuman", icon: Megaphone },
            { label: "Tugas Baru", icon: Plus },
          ]}
        />
      </div>
      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Approve payroll Juli", due: "hari ini", priority: "high" },
            { title: "Publikasi update kebijakan cuti", due: "Rab", priority: "med" },
            { title: "Booking tiket konferensi", due: "Jum", priority: "low" },
          ]}
        />
      </div>
      <div className="lg:col-span-12">
        <Announcements
          items={[
            { tag: "Perusahaan", title: "Town hall all-hands Jumat ini", body: "Review Q2 + roadmap oleh CEO. 15:00 di auditorium utama." },
            { tag: "HR", title: "Perpanjangan asuransi kesehatan", body: "Mohon review data tanggungan sebelum akhir bulan." },
          ]}
        />
      </div>
    </div>
  );
}