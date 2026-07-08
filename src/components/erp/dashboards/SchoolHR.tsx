import {
  Users,
  UserCog,
  ClipboardCheck,
  Banknote,
  CalendarClock,
  UserPlus,
  Mail,
  Package,
  Plus,
  Megaphone,
  FileText,
  BriefcaseBusiness,
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
import { BarSeries, Donut } from "../charts";

const payroll = [
  { name: "Feb", value: 380 },
  { name: "Mar", value: 395 },
  { name: "Apr", value: 402 },
  { name: "May", value: 410 },
  { name: "Jun", value: 418 },
  { name: "Jul", value: 425 },
];

const staffMix = [
  { name: "Guru Tetap", value: 62 },
  { name: "Guru Honor", value: 24 },
  { name: "Staf TU", value: 18 },
  { name: "Support", value: 12 },
];

export function SchoolHRDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Total Karyawan" value="116" delta="+4" icon={BriefcaseBusiness} hint="active" />
        <KpiCard label="Guru Aktif" value="86" delta="+2" icon={UserCog} />
        <KpiCard label="Hadir Hari Ini" value="108" delta="93.1%" icon={ClipboardCheck} />
        <KpiCard label="Payroll (Jul)" value="IDR 425M" delta="+1.7%" icon={Banknote} />
      </div>

      <SectionCard title="Payroll Trend" className="lg:col-span-8">
        <BarSeries data={payroll} dataKey="value" />
      </SectionCard>
      <SectionCard title="Komposisi Karyawan" className="lg:col-span-4">
        <Donut data={staffMix} />
      </SectionCard>

      <SectionCard title="Absensi Minggu Ini" className="lg:col-span-6">
        <div className="flex flex-col gap-4">
          <ProgressRow label="Guru Tetap" value={95} meta="59 / 62 hadir" />
          <ProgressRow label="Guru Honor" value={88} meta="21 / 24 hadir" />
          <ProgressRow label="Staf TU" value={94} meta="17 / 18 hadir" />
          <ProgressRow label="Support" value={83} meta="10 / 12 hadir" />
        </div>
      </SectionCard>

      <SectionCard title="Permohonan Cuti" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Ustadz Rahman — Cuti tahunan", meta: "3 hari · menunggu approval", time: "today", icon: CalendarClock },
            { title: "Bu Salma — Cuti melahirkan", meta: "90 hari · disetujui", time: "1d", icon: CalendarClock },
            { title: "Pak Budi — Izin sakit", meta: "1 hari · surat dokter", time: "2d", icon: FileText },
            { title: "Bu Nadia — Cuti menikah", meta: "5 hari · pending", time: "3d", icon: CalendarClock },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-8">
        <SectionCard title="Aktivitas HR Terbaru">
          <ActivityList
            items={[
              { title: "Karyawan baru: Ust. Hafidz M.", meta: "Guru Al-Qur'an · onboarding", time: "10m", icon: UserPlus },
              { title: "Payroll Juli dirilis", meta: "116 karyawan · IDR 425M", time: "1h", icon: Banknote },
              { title: "Surat tugas dikirim", meta: "5 dokumen · TU", time: "3h", icon: Mail },
              { title: "Aset diserahkan", meta: "10 laptop · lab komputer", time: "6h", icon: Package },
            ]}
          />
        </SectionCard>
      </div>
      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "Tambah Karyawan", icon: UserPlus },
            { label: "Absensi", icon: ClipboardCheck },
            { label: "Ajukan Cuti", icon: CalendarClock },
            { label: "Jalankan Payroll", icon: Banknote },
            { label: "Buat Surat", icon: Mail },
            { label: "Pengumuman", icon: Megaphone },
          ]}
        />
      </div>

      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Approve cuti Ustadz Rahman", due: "today", priority: "high" },
            { title: "Finalisasi kontrak guru baru", due: "Kamis", priority: "med" },
            { title: "Kirim slip gaji Juli", due: "Jumat", priority: "med" },
            { title: "Update SOP absensi", due: "next week", priority: "low" },
          ]}
        />
      </div>
      <div className="lg:col-span-4">
        <Announcements
          items={[
            { tag: "HR", title: "Pelatihan guru bulan ini", body: "Kurikulum Merdeka · Sabtu 09:00 aula utama." },
            { tag: "Kebijakan", title: "Update aturan lembur", body: "Berlaku 1 Agustus. Lihat dokumen di menu Letters." },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <SectionCard title="Ringkasan Divisi">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Akademik</div>
              <div className="mt-1 text-2xl font-bold">86</div>
              <div className="text-xs text-muted-foreground">Guru · 12 mapel</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Tata Usaha</div>
              <div className="mt-1 text-2xl font-bold">18</div>
              <div className="text-xs text-muted-foreground">Staf administrasi</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Pendukung</div>
              <div className="mt-1 text-2xl font-bold">12</div>
              <div className="text-xs text-muted-foreground">Kebersihan · keamanan</div>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}