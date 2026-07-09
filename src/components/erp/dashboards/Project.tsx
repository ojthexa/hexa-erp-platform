import {
  FolderKanban,
  Kanban,
  ListChecks,
  Timer,
  Milestone,
  Users,
  Target,
  Plus,
  CheckCircle2,
  CalendarDays,
  Wallet,
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

const velocity = [
  { name: "W1", value: 24 },
  { name: "W2", value: 28 },
  { name: "W3", value: 32 },
  { name: "W4", value: 30 },
  { name: "W5", value: 36 },
  { name: "W6", value: 41 },
];

const statusMix = [
  { name: "Selesai", value: 42 },
  { name: "Berjalan", value: 28 },
  { name: "Direncanakan", value: 18 },
  { name: "Ditunda", value: 6 },
];

export function ProjectDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Proyek Aktif" value="24" delta="+3" icon={FolderKanban} />
        <KpiCard label="Tugas Selesai" value="1,284" delta="+128" icon={CheckCircle2} />
        <KpiCard label="Jam Tercatat" value="4,820" delta="+9.2%" icon={Timer} hint="bulan ini" />
        <KpiCard label="Anggaran Terpakai" value="IDR 1.8M" delta="+4.1%" icon={Wallet} />
      </div>

      <SectionCard title="Velocity Tim (story points / minggu)" className="lg:col-span-8">
        <AreaTrend data={velocity} dataKey="value" />
      </SectionCard>
      <SectionCard title="Status Proyek" className="lg:col-span-4">
        <Donut data={statusMix} />
      </SectionCard>

      <SectionCard title="Progress Proyek Utama" className="lg:col-span-6">
        <div className="flex flex-col gap-4">
          <ProgressRow label="Website Redesign" value={82} meta="82% · deadline 2 Ags" />
          <ProgressRow label="Mobile App v2" value={64} meta="64% · deadline 20 Ags" />
          <ProgressRow label="Integrasi ERP" value={48} meta="48% · deadline 5 Sep" />
          <ProgressRow label="Kampanye Q3" value={31} meta="31% · deadline 30 Sep" />
        </div>
      </SectionCard>

      <SectionCard title="Milestone Mendatang" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Rilis Beta Mobile App v2", meta: "Tim Product · 12 tugas", time: "Sen", icon: Milestone },
            { title: "Handoff Website Redesign", meta: "Tim Design", time: "Rab", icon: Milestone },
            { title: "Kickoff Integrasi ERP fase 2", meta: "Tim Engineering", time: "Jum", icon: Target },
            { title: "Review sprint 24", meta: "Semua tim · 60 min", time: "Sab", icon: ListChecks },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-8">
        <SectionCard title="Aktivitas Tim Terbaru">
          <ActivityList
            items={[
              { title: "Dinda merge PR #482", meta: "Website Redesign · dashboard", time: "10m", icon: CheckCircle2 },
              { title: "Rendi update kanban", meta: "Mobile App v2 · 6 kartu", time: "35m", icon: Kanban },
              { title: "Tim Product buat milestone baru", meta: "Kampanye Q3", time: "1h", icon: Milestone },
              { title: "Sarah catat 6 jam waktu kerja", meta: "Integrasi ERP", time: "2h", icon: Timer },
            ]}
          />
        </SectionCard>
      </div>
      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "Buat Proyek", icon: Plus },
            { label: "Tambah Tugas", icon: ListChecks },
            { label: "Buka Kanban", icon: Kanban },
            { label: "Undang Anggota", icon: Users },
            { label: "Milestone Baru", icon: Milestone },
            { label: "Log Waktu", icon: Timer },
          ]}
        />
      </div>

      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Review desain onboarding", due: "hari ini", priority: "high" },
            { title: "QA build 2.4", due: "Kamis", priority: "high" },
            { title: "Update dokumentasi API", due: "Jumat", priority: "med" },
            { title: "Retrospective sprint 24", due: "minggu depan", priority: "low" },
          ]}
        />
      </div>
      <div className="lg:col-span-4">
        <Announcements
          items={[
            { tag: "Tim", title: "Sprint planning bergeser ke Selasa", body: "Semua tim gabung di ruang Nebula pukul 10:00." },
            { tag: "Tools", title: "Papan Kanban dapat template baru", body: "Coba template 'Agile Delivery' dari daftar proyek." },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <SectionCard title="Beban Kerja Tim">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Engineering", value: "18", meta: "5 aktif · 82% load" },
              { label: "Design", value: "9", meta: "3 aktif · 67% load" },
              { label: "Product", value: "6", meta: "4 aktif · 74% load" },
              { label: "Marketing", value: "7", meta: "2 aktif · 55% load" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="h-3.5 w-3.5" /> {s.label}
                </div>
                <div className="mt-1 text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.meta}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-2xl border bg-secondary/40 px-4 py-3 text-xs text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            Sinkron dengan kalender tim · pembaruan otomatis setiap 5 menit
          </div>
        </SectionCard>
      </div>
    </div>
  );
}