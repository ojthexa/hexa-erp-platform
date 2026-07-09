import {
  HandCoins,
  HeartHandshake,
  Users,
  Wallet,
  Megaphone,
  Handshake,
  Building2,
  Plus,
  FileText,
  Banknote,
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

const donations = [
  { name: "Feb", value: 220 },
  { name: "Mar", value: 260 },
  { name: "Apr", value: 310 },
  { name: "May", value: 380 },
  { name: "Jun", value: 420 },
  { name: "Jul", value: 468 },
];

const allocation = [
  { name: "Pendidikan", value: 42 },
  { name: "Sosial", value: 28 },
  { name: "Kesehatan", value: 16 },
  { name: "Dakwah", value: 14 },
];

export function YayasanDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Donasi Bulan Ini" value="IDR 468M" delta="+11.4%" icon={HandCoins} />
        <KpiCard label="Donatur Aktif" value="2,184" delta="+124" icon={Handshake} />
        <KpiCard label="Penerima Manfaat" value="6,420" delta="+320" icon={HeartHandshake} />
        <KpiCard label="Program Berjalan" value="18" delta="+2" icon={Building2} />
      </div>

      <SectionCard title="Tren Donasi (IDR juta)" className="lg:col-span-8">
        <AreaTrend data={donations} dataKey="value" />
      </SectionCard>
      <SectionCard title="Alokasi Dana per Bidang" className="lg:col-span-4">
        <Donut data={allocation} />
      </SectionCard>

      <SectionCard title="Progress Program" className="lg:col-span-6">
        <div className="flex flex-col gap-4">
          <ProgressRow label="Beasiswa Yatim" value={82} meta="82 / 100 penerima" />
          <ProgressRow label="Wakaf Sumur" value={64} meta="16 / 25 titik" />
          <ProgressRow label="Ambulans Gratis" value={48} meta="48% target dana" />
          <ProgressRow label="Sekolah Pelosok" value={31} meta="31% pembangunan" />
        </div>
      </SectionCard>

      <SectionCard title="Donasi Terbaru" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Bpk Rahman — IDR 5.000.000", meta: "Beasiswa Yatim · transfer", time: "10m", icon: HandCoins },
            { title: "Ibu Salma — IDR 1.200.000", meta: "Zakat maal · e-wallet", time: "40m", icon: HandCoins },
            { title: "Donatur Anonim — IDR 25.000.000", meta: "Wakaf Sumur", time: "2h", icon: HandCoins },
            { title: "PT Cahaya — IDR 50.000.000", meta: "CSR · Sekolah Pelosok", time: "5h", icon: HandCoins },
          ]}
        />
      </SectionCard>

      <SectionCard title="Kampanye Aktif" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Qurban Peduli 2026", meta: "1.284 pequrban · IDR 620M terkumpul", time: "live", icon: Megaphone },
            { title: "Wakaf Al-Qur'an", meta: "3.200 mushaf · IDR 96M", time: "live", icon: Megaphone },
            { title: "Ambulans untuk Papua", meta: "48% dari IDR 500M", time: "live", icon: Megaphone },
          ]}
        />
      </SectionCard>

      <SectionCard title="Unit Usaha" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Klinik Sehat Sejahtera", meta: "surplus IDR 42M · bulan ini", time: "aktif", icon: Building2 },
            { title: "Minimarket Barokah", meta: "surplus IDR 18M · bulan ini", time: "aktif", icon: Building2 },
            { title: "Percetakan Amanah", meta: "surplus IDR 9M · bulan ini", time: "aktif", icon: Building2 },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "Catat Donasi", icon: HandCoins },
            { label: "Buat Kampanye", icon: Megaphone },
            { label: "Tambah Program", icon: HeartHandshake },
            { label: "Data Donatur", icon: Users },
            { label: "Kirim Laporan", icon: FileText },
            { label: "Salur Dana", icon: Banknote },
          ]}
        />
      </div>
      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Verifikasi 24 penerima beasiswa", due: "hari ini", priority: "high" },
            { title: "Publikasi laporan bulan Juli", due: "Jumat", priority: "high" },
            { title: "Follow up donatur korporat", due: "Sabtu", priority: "med" },
            { title: "Rapat pengurus bulanan", due: "minggu depan", priority: "low" },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <Announcements
          items={[
            { tag: "Program", title: "Distribusi Al-Qur'an tahap 3", body: "Sabtu depan · 12 pesantren mitra di Jawa Tengah." },
            { tag: "Keuangan", title: "Audit eksternal Q2 selesai", body: "Laporan tersedia di menu Dokumen. Opini: wajar tanpa pengecualian." },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <SectionCard title="Ringkasan Keuangan Yayasan">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Kas Yayasan</div>
              <div className="mt-1 text-2xl font-bold">IDR 3.2M</div>
              <div className="text-xs text-muted-foreground">Tersedia untuk penyaluran</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Dana Terikat</div>
              <div className="mt-1 text-2xl font-bold">IDR 1.8M</div>
              <div className="text-xs text-muted-foreground">Wakaf & program spesifik</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Surplus Unit Usaha</div>
              <div className="mt-1 text-2xl font-bold">IDR 69M</div>
              <div className="text-xs text-muted-foreground">Kontribusi bulan ini</div>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}