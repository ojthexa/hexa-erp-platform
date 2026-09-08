import {
  Plane,
  Users,
  Ticket,
  Wallet,
  Stamp,
  BedDouble,
  Handshake,
  HandCoins,
  FileText,
  CalendarDays,
  Package,
  MapPinned,
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
import { AreaTrend, Donut, BarSeries } from "../charts";

const revenue = [
  { name: "Feb", value: 1850 },
  { name: "Mar", value: 2140 },
  { name: "Apr", value: 2680 },
  { name: "Mei", value: 3120 },
  { name: "Jun", value: 2950 },
  { name: "Jul", value: 3480 },
];

const paketMix = [
  { name: "Umroh Reguler", value: 46 },
  { name: "Umroh Plus", value: 24 },
  { name: "Haji Khusus", value: 18 },
  { name: "Umroh Ramadhan", value: 12 },
];

const jamaahPerBulan = [
  { name: "Feb", value: 120 },
  { name: "Mar", value: 168 },
  { name: "Apr", value: 204 },
  { name: "Mei", value: 246 },
  { name: "Jun", value: 218 },
  { name: "Jul", value: 288 },
];

export function UmrohDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Jamaah Terdaftar" value="1,284" delta="+96" icon={Users} />
        <KpiCard label="Keberangkatan Bulan Ini" value="7 grup" delta="+2" icon={Plane} />
        <KpiCard label="Pendapatan" value="IDR 3.48M" delta="+17.9%" icon={Wallet} />
        <KpiCard label="Visa Diproses" value="212" delta="18 pending" trend="flat" icon={Stamp} />
      </div>

      <SectionCard title="Tren Pendapatan (IDR juta)" className="lg:col-span-8">
        <AreaTrend data={revenue} dataKey="value" />
      </SectionCard>
      <SectionCard title="Komposisi Paket" className="lg:col-span-4">
        <Donut data={paketMix} />
      </SectionCard>

      <SectionCard title="Jamaah Berangkat per Bulan" className="lg:col-span-7">
        <BarSeries data={jamaahPerBulan} dataKey="value" />
      </SectionCard>

      <SectionCard title="Kesiapan Grup Keberangkatan" className="lg:col-span-5">
        <div className="flex flex-col gap-4">
          <ProgressRow label="UMR-0812 · 12 Agu" value={94} meta="45/48 dokumen lengkap" />
          <ProgressRow label="UMR-0825 · 25 Agu" value={72} meta="visa 26/40 terbit" />
          <ProgressRow label="UMR-0903 · 3 Sep" value={58} meta="pelunasan 58%" />
          <ProgressRow label="HAJ-0914 · 14 Sep" value={35} meta="manasik tahap 1" />
        </div>
      </SectionCard>

      <SectionCard title="Booking Terbaru" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Keluarga Hidayat — 4 pax", meta: "Umroh Plus Turki · IDR 148jt", time: "15m", icon: Ticket },
            { title: "Ibu Nurhayati — 1 pax", meta: "Umroh Reguler 9 hari", time: "1j", icon: Ticket },
            { title: "Agen Barokah Tour — 12 pax", meta: "Umroh Ramadhan", time: "3j", icon: Handshake },
            { title: "Bpk Salim — 2 pax", meta: "Haji Khusus 2027", time: "6j", icon: Ticket },
          ]}
        />
      </SectionCard>

      <SectionCard title="Status Operasional" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Hotel Makkah — Anjum", meta: "48 kamar terkonfirmasi · 12–20 Agu", time: "ok", icon: BedDouble },
            { title: "Saudia SV827 CGK–JED", meta: "48 seat issued", time: "ok", icon: Plane },
            { title: "Bus Madinah–Makkah", meta: "2 unit · vendor Al Rajhi", time: "ok", icon: MapPinned },
            { title: "Paket Umroh Plus Aqsa", meta: "kuota tersisa 6 seat", time: "warn", icon: Package },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "Daftar Jamaah", icon: Users },
            { label: "Buat Booking", icon: Ticket },
            { label: "Input Paket", icon: Package },
            { label: "Proses Visa", icon: Stamp },
            { label: "Cetak Dokumen", icon: FileText },
            { label: "Bayar Komisi", icon: HandCoins },
          ]}
        />
      </div>
      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Kirim paspor 14 jamaah ke Kedutaan", due: "hari ini", priority: "high" },
            { title: "Konfirmasi hotel Madinah grup UMR-0825", due: "besok", priority: "high" },
            { title: "Manasik grup Agustus", due: "Sabtu", priority: "med" },
            { title: "Rekap komisi agen Juli", due: "minggu depan", priority: "low" },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <Announcements
          items={[
            { tag: "Keberangkatan", title: "Grup UMR-0812 berangkat 12 Agustus", body: "Kumpul Terminal 3 Soekarno-Hatta pukul 15.00 WIB. Tour leader: Ust. Faiz." },
            { tag: "Kebijakan", title: "Aturan baru visa Saudi", body: "Vaksin meningitis wajib maksimal 10 hari sebelum keberangkatan." },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <SectionCard title="Ringkasan Keuangan Travel">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Uang Muka Diterima</div>
              <div className="mt-1 text-2xl font-bold">IDR 1.9M</div>
              <div className="text-xs text-muted-foreground">312 jamaah belum lunas</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Piutang Agen</div>
              <div className="mt-1 text-2xl font-bold">IDR 420jt</div>
              <div className="text-xs text-muted-foreground">18 agen aktif</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Komisi Terbayar</div>
              <div className="mt-1 text-2xl font-bold">IDR 268jt</div>
              <div className="text-xs text-muted-foreground">Periode Juli 2026</div>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
