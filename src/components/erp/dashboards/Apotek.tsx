import {
  Pill,
  ShoppingCart,
  Receipt,
  Wallet,
  Boxes,
  CalendarX2,
  ClipboardList,
  Truck,
  UserRound,
  ScanBarcode,
  FileText,
  Users,
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

const sales = [
  { name: "Feb", value: 186 },
  { name: "Mar", value: 204 },
  { name: "Apr", value: 232 },
  { name: "Mei", value: 258 },
  { name: "Jun", value: 244 },
  { name: "Jul", value: 291 },
];

const category = [
  { name: "Obat Resep", value: 38 },
  { name: "Obat Bebas", value: 27 },
  { name: "Vitamin & Suplemen", value: 19 },
  { name: "Alkes", value: 16 },
];

const daily = [
  { name: "Sen", value: 9.2 },
  { name: "Sel", value: 8.4 },
  { name: "Rab", value: 10.1 },
  { name: "Kam", value: 9.8 },
  { name: "Jum", value: 11.4 },
  { name: "Sab", value: 12.6 },
  { name: "Min", value: 7.3 },
];

export function ApotekDashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-12 xl:grid-cols-4">
        <KpiCard label="Penjualan Bulan Ini" value="IDR 291jt" delta="+19.3%" icon={Receipt} />
        <KpiCard label="Transaksi Hari Ini" value="184" delta="+12" icon={ShoppingCart} />
        <KpiCard label="Resep Dilayani" value="76" delta="+8" icon={ClipboardList} />
        <KpiCard label="Stok Kritis" value="14 item" delta="perlu order" trend="down" icon={Boxes} />
      </div>

      <SectionCard title="Tren Penjualan (IDR juta)" className="lg:col-span-8">
        <AreaTrend data={sales} dataKey="value" />
      </SectionCard>
      <SectionCard title="Penjualan per Kategori" className="lg:col-span-4">
        <Donut data={category} />
      </SectionCard>

      <SectionCard title="Penjualan Harian (IDR juta)" className="lg:col-span-7">
        <BarSeries data={daily} dataKey="value" />
      </SectionCard>

      <SectionCard title="Ketersediaan Stok" className="lg:col-span-5">
        <div className="flex flex-col gap-4">
          <ProgressRow label="Paracetamol 500mg" value={82} meta="820 / 1000 tablet" />
          <ProgressRow label="Amoxicillin 500mg" value={46} meta="230 / 500 kapsul" />
          <ProgressRow label="Vitamin C 1000mg" value={28} meta="84 / 300 botol" />
          <ProgressRow label="Masker Medis 3ply" value={15} meta="30 / 200 box" />
        </div>
      </SectionCard>

      <SectionCard title="Transaksi Terbaru" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "INV-24081 — IDR 186.000", meta: "3 item · tunai · kasir Rina", time: "5m", icon: Receipt },
            { title: "INV-24080 — IDR 412.500", meta: "Resep dr. Andi · debit", time: "18m", icon: ClipboardList },
            { title: "INV-24079 — IDR 68.000", meta: "2 item · QRIS", time: "32m", icon: Receipt },
            { title: "INV-24078 — IDR 1.240.000", meta: "Alkes · transfer · korporat", time: "1j", icon: Receipt },
          ]}
        />
      </SectionCard>

      <SectionCard title="Mendekati Kadaluarsa" className="lg:col-span-6">
        <ActivityList
          items={[
            { title: "Cefixime 200mg — 40 strip", meta: "Batch B2411 · exp 30 Sep 2026", time: "50 hari", icon: CalendarX2 },
            { title: "Sirup OBH 100ml — 24 btl", meta: "Batch S1902 · exp 15 Okt 2026", time: "65 hari", icon: CalendarX2 },
            { title: "Insulin Pen — 6 unit", meta: "Batch I0731 · exp 5 Nov 2026", time: "86 hari", icon: CalendarX2 },
          ]}
        />
      </SectionCard>

      <div className="lg:col-span-4">
        <QuickActions
          actions={[
            { label: "Buka Kasir", icon: ShoppingCart },
            { label: "Input Resep", icon: ClipboardList },
            { label: "Tambah Produk", icon: Pill },
            { label: "Stok Opname", icon: ScanBarcode },
            { label: "Order Supplier", icon: Truck },
            { label: "Cetak Laporan", icon: FileText },
          ]}
        />
      </div>
      <div className="lg:col-span-4"><MiniCalendar /></div>
      <div className="lg:col-span-4">
        <TaskList
          tasks={[
            { title: "Order ulang 14 item stok kritis", due: "hari ini", priority: "high" },
            { title: "Retur obat expired ke distributor", due: "besok", priority: "high" },
            { title: "Verifikasi resep BPJS mingguan", due: "Jumat", priority: "med" },
            { title: "Rekap laporan narkotika", due: "akhir bulan", priority: "low" },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <Announcements
          items={[
            { tag: "Operasional", title: "Jadwal apoteker penanggung jawab", body: "Shift pagi: Apt. Dewi · Shift sore: Apt. Bayu. Berlaku mulai 12 Agustus." },
            { tag: "Regulasi", title: "Pelaporan SIPNAP bulanan", body: "Batas unggah laporan narkotika & psikotropika tanggal 10 setiap bulan." },
          ]}
        />
      </div>

      <div className="lg:col-span-12">
        <SectionCard title="Ringkasan Keuangan Apotek">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Nilai Persediaan</div>
              <div className="mt-1 text-2xl font-bold">IDR 684jt</div>
              <div className="text-xs text-muted-foreground">2.148 SKU aktif</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Margin Kotor</div>
              <div className="mt-1 text-2xl font-bold">24.6%</div>
              <div className="text-xs text-muted-foreground">Rata-rata Juli 2026</div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground">Utang Supplier</div>
              <div className="mt-1 text-2xl font-bold">IDR 128jt</div>
              <div className="text-xs text-muted-foreground">9 tagihan jatuh tempo</div>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
