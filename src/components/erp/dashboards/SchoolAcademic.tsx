import {
  Users,
  ClipboardCheck,
  BookOpen,
  FileCheck2,
  Award,
  Plus,
  FileText,
  CalendarClock,
  UserPlus,
  School,
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
import { AreaTrend, Donut } from "../charts";

const grades = [
  { name: "Sem 1", value: 78 },
  { name: "Sem 2", value: 80 },
  { name: "Sem 3", value: 82 },
  { name: "Sem 4", value: 81 },
  { name: "Sem 5", value: 84 },
  { name: "Sem 6", value: 86 },
];

const classDist = [
  { name: "Grade 1", value: 120 },
  { name: "Grade 2", value: 145 },
  { name: "Grade 3", value: 132 },
  { name: "Grade 4", value: 118 },
  { name: "Grade 5", value: 96 },
  { name: "Grade 6", value: 84 },
];

export function SchoolAcademicDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Total Siswa" value="1,284" delta="+3.2%" icon={Users} />
        <KpiCard label="Kelas Aktif" value="42" delta="+2" icon={School} />
        <KpiCard label="Kehadiran Hari Ini" value="94.6%" delta="+1.1%" icon={ClipboardCheck} />
        <KpiCard label="Rata-rata Nilai" value="84.2" delta="+1.4" icon={Award} hint="term avg" />
      </div>

      <SectionCard title="Tren Rata-rata Nilai" className="lg:col-span-8">
        <AreaTrend data={grades} dataKey="value" />
      </SectionCard>
      <SectionCard title="Distribusi Siswa" className="lg:col-span-4">
        <Donut data={classDist} />
      </SectionCard>

      <SectionCard title="Progress Mata Pelajaran" className="lg:col-span-6">
        <div className="flex flex-col gap-4">
          <ProgressRow label="Matematika — Grade 5" value={78} meta="12 / 16 bab" />
          <ProgressRow label="Bahasa Indonesia — Grade 4" value={86} meta="14 / 16 bab" />
          <ProgressRow label="IPA — Grade 6" value={64} meta="9 / 14 bab" />
          <ProgressRow label="Bahasa Arab — Grade 5" value={72} meta="10 / 14 bab" />
        </div>
      </SectionCard>

      <SectionCard title="Jadwal Ujian" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Mid-term Matematika — Grade 5", meta: "Ruang 3B · 45 siswa", time: "Sen", icon: FileCheck2 },
            { title: "Bahasa Arab — Grade 6", meta: "Ruang 2A · 38 siswa", time: "Sel", icon: BookOpen },
            { title: "IPA praktikum — Grade 4", meta: "Lab 1 · 42 siswa", time: "Rab", icon: Award },
            { title: "Ulangan Harian — Grade 3", meta: "Ruang 1C · 30 siswa", time: "Jum", icon: FileText },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-8">
        <SectionCard title="Aktivitas Akademik">
          <ActivityList
            items={[
              { title: "Siswa baru: Aisyah R.", meta: "Grade 4 · disetujui", time: "10m", icon: UserPlus },
              { title: "Rapor semester dipublikasi", meta: "Grade 6 · 84 siswa", time: "1h", icon: Award },
              { title: "Jadwal ujian diperbarui", meta: "Grade 5 · Matematika", time: "3h", icon: CalendarClock },
              { title: "Kurikulum baru diunggah", meta: "IPS · Grade 4", time: "6h", icon: BookMarked },
            ]}
          />
        </SectionCard>
      </div>
      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "Tambah Siswa", icon: UserPlus },
            { label: "Buat Ujian", icon: FileCheck2 },
            { label: "Input Nilai", icon: Award },
            { label: "Catat Absensi", icon: ClipboardCheck },
            { label: "Jadwal Kelas", icon: CalendarClock },
            { label: "Pengumuman", icon: Plus },
          ]}
        />
      </div>

      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Approve jadwal ujian Grade 5", due: "today", priority: "high" },
            { title: "Review pendaftaran siswa baru", due: "tomorrow", priority: "med" },
            { title: "Finalisasi rapor semester", due: "Fri", priority: "med" },
            { title: "Kirim newsletter orang tua", due: "next week", priority: "low" },
          ]}
        />
      </div>
      <div className="lg:col-span-4">
        <Announcements
          items={[
            { tag: "Akademik", title: "Jendela penilaian term 2 buka Senin", body: "Wali kelas kirim rubrik paling lambat Jumat." },
            { tag: "Event", title: "Pertemuan wali murid Sabtu ini", body: "Grade 4-6 · 10:00 di aula utama." },
          ]}
        />
      </div>
    </div>
  );
}