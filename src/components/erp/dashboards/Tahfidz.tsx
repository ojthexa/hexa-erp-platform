import {
  BookOpen,
  BookMarked,
  Mic2,
  Users,
  UserCog,
  ClipboardCheck,
  Award,
  Plus,
  FileCheck2,
  CalendarDays,
  School,
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

const hafalanTrend = [
  { name: "Jan", value: 42 },
  { name: "Feb", value: 48 },
  { name: "Mar", value: 55 },
  { name: "Apr", value: 61 },
  { name: "May", value: 66 },
  { name: "Jun", value: 72 },
  { name: "Jul", value: 78 },
];

const juzDist = [
  { name: "Juz 30", value: 120 },
  { name: "Juz 29", value: 84 },
  { name: "Juz 28", value: 56 },
  { name: "Juz 1-5", value: 42 },
  { name: "Juz 6+", value: 18 },
];

export function TahfidzDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Total Santri" value="320" delta="+12" icon={Users} />
        <KpiCard label="Ustadz / Ustadzah" value="24" delta="+1" icon={UserCog} />
        <KpiCard label="Rata-rata Hafalan" value="6.4 Juz" delta="+0.3" icon={BookOpen} />
        <KpiCard label="Setoran Hari Ini" value="184" delta="+18" icon={FileCheck2} hint="halaman" />
      </div>

      <SectionCard title="Tren Setoran Hafalan (halaman/hari)" className="lg:col-span-8">
        <AreaTrend data={hafalanTrend} dataKey="value" />
      </SectionCard>
      <SectionCard title="Distribusi Juz" className="lg:col-span-4">
        <Donut data={juzDist} />
      </SectionCard>

      <SectionCard title="Progress Halaqoh" className="lg:col-span-6">
        <div className="flex flex-col gap-4">
          <ProgressRow label="Halaqoh A — Ust. Fahmi" value={88} meta="14 santri · Juz 30" />
          <ProgressRow label="Halaqoh B — Ust. Rahman" value={72} meta="12 santri · Juz 29" />
          <ProgressRow label="Halaqoh C — Ustzh. Salma" value={64} meta="10 santri · Juz 28" />
          <ProgressRow label="Halaqoh D — Ust. Yusuf" value={51} meta="12 santri · Juz 5" />
        </div>
      </SectionCard>

      <SectionCard title="Setoran Terbaru" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Aisyah — QS. An-Naba 1-20", meta: "Halaqoh A · lancar", time: "10m", icon: BookOpen },
            { title: "Fatimah — Murojaah Juz 30", meta: "Halaqoh A · mumtaz", time: "25m", icon: BookMarked },
            { title: "Umar — QS. Al-Mulk 15-30", meta: "Halaqoh B · perlu ulang", time: "1h", icon: BookOpen },
            { title: "Bilal — Tilawah level B", meta: "Halaqoh C · jayyid", time: "2h", icon: Mic2 },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-8">
        <SectionCard title="Ujian Hafalan Mendatang">
          <ActivityList
            items={[
              { title: "Ujian Juz 30 — kelompok A", meta: "20 santri · Ust. Fahmi", time: "Sen", icon: FileCheck2 },
              { title: "Ujian Juz 29 — kelompok B", meta: "14 santri · Ust. Rahman", time: "Rab", icon: FileCheck2 },
              { title: "Sertifikasi Juz 28", meta: "8 santri · panel penguji", time: "Jum", icon: Award },
              { title: "Ujian Tilawah level B", meta: "12 santri · Ustzh. Salma", time: "Sab", icon: Mic2 },
            ]}
          />
        </SectionCard>
      </div>
      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "Catat Setoran", icon: BookOpen },
            { label: "Log Murojaah", icon: BookMarked },
            { label: "Tambah Santri", icon: Users },
            { label: "Jadwal Halaqoh", icon: CalendarDays },
            { label: "Ujian Hafalan", icon: FileCheck2 },
            { label: "Pengumuman", icon: Plus },
          ]}
        />
      </div>

      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Approve sertifikat Juz 30", due: "today", priority: "high" },
            { title: "Review target hafalan bulanan", due: "Kamis", priority: "med" },
            { title: "Rekap absensi halaqoh", due: "Jumat", priority: "med" },
            { title: "Persiapan wisuda tahfidz", due: "2 minggu", priority: "low" },
          ]}
        />
      </div>
      <div className="lg:col-span-4">
        <Announcements
          items={[
            { tag: "Event", title: "Wisuda Tahfidz Angkatan 12", body: "18 santri Juz 30 · Sabtu depan di aula utama." },
            { tag: "Program", title: "Karantina hafalan liburan", body: "Program intensif 10 hari · pendaftaran dibuka." },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <SectionCard title="Ringkasan Kelas">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Halaqoh A", value: "14", meta: "Juz 30" },
              { label: "Halaqoh B", value: "12", meta: "Juz 29" },
              { label: "Halaqoh C", value: "10", meta: "Juz 28" },
              { label: "Halaqoh D", value: "12", meta: "Juz 5" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <School className="h-3.5 w-3.5" /> {s.label}
                </div>
                <div className="mt-1 text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.meta}</div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="lg:col-span-12">
        <SectionCard title="Aktivitas Ustadz">
          <ActivityList
            items={[
              { title: "Ust. Fahmi input 42 setoran", meta: "Halaqoh A · hari ini", time: "1h", icon: UserCog },
              { title: "Ustzh. Salma rekap murojaah", meta: "Halaqoh C · minggu ini", time: "3h", icon: ClipboardCheck },
              { title: "Ust. Yusuf ajukan kenaikan Juz", meta: "3 santri · menunggu review", time: "5h", icon: Award },
            ]}
          />
        </SectionCard>
      </div>
    </div>
  );
}