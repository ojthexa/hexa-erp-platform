import {
  GraduationCap,
  Building2,
  UtensilsCrossed,
  Factory as FactoryIcon,
  Stethoscope,
  Warehouse,
  LayoutDashboard,
  Users,
  UserCog,
  ClipboardCheck,
  BookOpen,
  Mic2,
  School,
  CalendarDays,
  FileCheck2,
  Award,
  Wallet,
  Banknote,
  Boxes,
  FileText,
  Settings,
  BriefcaseBusiness,
  UserPlus,
  CalendarClock,
  Package,
  FolderKanban,
  Mail,
  PieChart,
  ShoppingCart,
  ChefHat,
  Table2,
  BookMarked,
  Truck,
  BadgePercent,
  Factory,
  Car,
  Wrench,
  Fuel,
  IdCard,
  ShieldCheck,
  Route as RouteIcon,
  HeartPulse,
  UserRound,
  Pill,
  FlaskConical,
  Receipt,
  Move3d,
  ArrowDownToLine,
  ArrowUpFromLine,
  Handshake,
  Megaphone,
  Repeat,
  Landmark,
  HandCoins,
  HeartHandshake,
  Kanban,
  ListChecks,
  Timer,
  Milestone,
  GitBranch,
  Target,
  type LucideIcon,
} from "lucide-react";

export type MenuItem = { label: string; icon: LucideIcon };
export type MenuGroup = { label: string; items: MenuItem[] };

export type IndustryId =
  | "school-hr"
  | "school-academic"
  | "tahfidz"
  | "office"
  | "restaurant"
  | "manufacture"
  | "clinic"
  | "warehouse"
  | "project"
  | "yayasan";

export type IndustryConfig = {
  id: IndustryId;
  name: string;
  tagline: string;
  description: string;
  route: string;
  icon: LucideIcon;
  brandVar: string; // css var name
  gradient: string; // tailwind gradient classes for card accent
  menu: MenuGroup[];
};

export const industries: IndustryConfig[] = [
  {
    id: "school-hr",
    name: "Manajemen Karyawan Sekolah",
    tagline: "School HR & Staff",
    description:
      "Kelola karyawan sekolah — guru, staf, absensi, cuti, payroll dan rekrutmen.",
    route: "/school-hr",
    icon: BriefcaseBusiness,
    brandVar: "--brand-school-hr",
    gradient: "from-violet-500/15 to-indigo-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Karyawan",
        items: [
          { label: "Guru", icon: UserCog },
          { label: "Guru Pengganti", icon: Repeat },
          { label: "Staf", icon: Users },
          { label: "Karyawan", icon: BriefcaseBusiness },
          { label: "Rekrutmen", icon: UserPlus },
        ],
      },
      {
        label: "Waktu & Gaji",
        items: [
          { label: "Absensi", icon: ClipboardCheck },
          { label: "Cuti", icon: CalendarClock },
          { label: "Payroll", icon: Banknote },
          { label: "Kontrak", icon: FileText },
        ],
      },
      {
        label: "Administrasi",
        items: [
          { label: "Aset", icon: Package },
          { label: "Surat", icon: Mail },
          { label: "Keuangan", icon: Wallet },
          { label: "Laporan", icon: PieChart },
          { label: "Pengaturan", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "school-academic",
    name: "Sistem Informasi Akademik Sekolah",
    tagline: "Academic Operations",
    description:
      "Sistem akademik — siswa, kelas, jadwal, ujian, nilai dan rapor.",
    route: "/school-academic",
    icon: GraduationCap,
    brandVar: "--brand-school-academic",
    gradient: "from-indigo-500/15 to-blue-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Siswa",
        items: [
          { label: "Data Siswa", icon: Users },
          { label: "Penerimaan", icon: UserPlus },
          { label: "Absensi", icon: ClipboardCheck },
        ],
      },
      {
        label: "Akademik",
        items: [
          { label: "Kelas", icon: School },
          { label: "Jadwal", icon: CalendarDays },
          { label: "Mata Pelajaran", icon: BookMarked },
          { label: "Ujian", icon: FileCheck2 },
          { label: "Rapor", icon: Award },
        ],
      },
      {
        label: "Operasional",
        items: [
          { label: "Keuangan", icon: Wallet },
          { label: "Dokumen", icon: FileText },
          { label: "Laporan", icon: PieChart },
          { label: "Pengaturan", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "tahfidz",
    name: "Manajemen Tahfidz",
    tagline: "Islamic Studies",
    description:
      "Manajemen hafalan Al-Qur'an — santri, halaqoh, murojaah, tilawah dan ustadz.",
    route: "/tahfidz",
    icon: BookOpen,
    brandVar: "--brand-tahfidz",
    gradient: "from-emerald-500/15 to-teal-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Santri",
        items: [
          { label: "Data Santri", icon: Users },
          { label: "Halaqoh", icon: School },
          { label: "Absensi", icon: ClipboardCheck },
        ],
      },
      {
        label: "Hafalan",
        items: [
          { label: "Tahfidz", icon: BookOpen },
          { label: "Murojaah", icon: BookMarked },
          { label: "Tilawah", icon: Mic2 },
          { label: "Ujian Hafalan", icon: FileCheck2 },
          { label: "Sertifikat", icon: Award },
        ],
      },
      {
        label: "Ustadz",
        items: [
          { label: "Ustadz", icon: UserCog },
          { label: "Jadwal", icon: CalendarDays },
          { label: "Laporan", icon: FileText },
        ],
      },
      {
        label: "Administrasi",
        items: [
          { label: "Laporan", icon: PieChart },
          { label: "Pengaturan", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "office",
    name: "ERP Kantor",
    tagline: "HR & Administrasi",
    description:
      "HR, payroll, absensi, inventaris dan administrasi untuk kantor modern.",
    route: "/office",
    icon: Building2,
    brandVar: "--brand-office",
    gradient: "from-sky-500/15 to-cyan-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Karyawan",
        items: [
          { label: "Karyawan", icon: Users },
          { label: "HR", icon: UserCog },
          { label: "Rekrutmen", icon: UserPlus },
          { label: "Absensi", icon: ClipboardCheck },
          { label: "Cuti", icon: CalendarClock },
          { label: "Payroll", icon: Banknote },
        ],
      },
      {
        label: "Operasional",
        items: [
          { label: "Inventaris", icon: Boxes },
          { label: "Aset", icon: Package },
          { label: "Proyek", icon: FolderKanban },
          { label: "Surat", icon: Mail },
        ],
      },
      {
        label: "Keuangan",
        items: [
          { label: "Keuangan", icon: Wallet },
          { label: "Laporan", icon: PieChart },
          { label: "Pengaturan", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "restaurant",
    name: "ERP Restoran",
    tagline: "POS & Dapur",
    description:
      "POS, dapur, inventaris, pembelian dan manajemen outlet untuk tim F&B.",
    route: "/restaurant",
    icon: UtensilsCrossed,
    brandVar: "--brand-restaurant",
    gradient: "from-orange-500/15 to-rose-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Penjualan",
        items: [
          { label: "POS", icon: ShoppingCart },
          { label: "Pesanan", icon: Receipt },
          { label: "Dapur", icon: ChefHat },
          { label: "Meja", icon: Table2 },
          { label: "Menu", icon: BookMarked },
        ],
      },
      {
        label: "Pasokan",
        items: [
          { label: "Inventaris", icon: Boxes },
          { label: "Resep", icon: BookOpen },
          { label: "Supplier", icon: Truck },
          { label: "Pembelian", icon: ShoppingCart },
        ],
      },
      {
        label: "Karyawan",
        items: [
          { label: "Karyawan", icon: Users },
          { label: "Absensi", icon: ClipboardCheck },
          { label: "Payroll", icon: Banknote },
        ],
      },
      {
        label: "Pertumbuhan",
        items: [
          { label: "Pelanggan", icon: UserRound },
          { label: "Promosi", icon: BadgePercent },
          { label: "Keuangan", icon: Wallet },
          { label: "Laporan", icon: PieChart },
          { label: "Pengaturan", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "manufacture",
    name: "ERP Manufaktur",
    tagline: "Produksi & Pabrik",
    description:
      "Manajemen produksi, mesin, quality control, maintenance dan logistik pabrik.",
    route: "/manufacture",
    icon: FactoryIcon,
    brandVar: "--brand-manufacture",
    gradient: "from-amber-500/15 to-yellow-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Produksi",
        items: [
          { label: "Produksi", icon: Factory },
          { label: "Work Order", icon: FolderKanban },
          { label: "BOM", icon: BookMarked },
          { label: "Mesin", icon: Wrench },
          { label: "Quality Control", icon: ShieldCheck },
          { label: "Maintenance", icon: Wrench },
        ],
      },
      {
        label: "Karyawan",
        items: [
          { label: "Karyawan", icon: Users },
          { label: "Operator", icon: IdCard },
          { label: "Absensi", icon: ClipboardCheck },
          { label: "Payroll", icon: Banknote },
        ],
      },
      {
        label: "Pasokan",
        items: [
          { label: "Gudang", icon: Warehouse },
          { label: "Inventaris", icon: Boxes },
          { label: "Bahan Baku", icon: Package },
          { label: "Pembelian", icon: ShoppingCart },
          { label: "Logistik", icon: RouteIcon },
          { label: "Energi & Bahan Bakar", icon: Fuel },
          { label: "Armada", icon: Car },
        ],
      },
      {
        label: "Keuangan",
        items: [
          { label: "Keuangan", icon: Wallet },
          { label: "Laporan", icon: PieChart },
          { label: "Pengaturan", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "clinic",
    name: "ERP Klinik",
    tagline: "Layanan Pasien",
    description:
      "Manajemen pasien, apotek, inventaris dan keuangan untuk klinik.",
    route: "/clinic",
    icon: Stethoscope,
    brandVar: "--brand-clinic",
    gradient: "from-teal-500/15 to-emerald-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Layanan",
        items: [
          { label: "Pasien", icon: UserRound },
          { label: "Dokter", icon: HeartPulse },
          { label: "Janji Temu", icon: CalendarClock },
          { label: "Rekam Medis", icon: FileText },
        ],
      },
      {
        label: "Fasilitas",
        items: [
          { label: "Apotek", icon: Pill },
          { label: "Laboratorium", icon: FlaskConical },
          { label: "Inventaris", icon: Boxes },
          { label: "Tagihan", icon: Receipt },
        ],
      },
      {
        label: "Karyawan",
        items: [
          { label: "Karyawan", icon: Users },
          { label: "Absensi", icon: ClipboardCheck },
          { label: "Payroll", icon: Banknote },
        ],
      },
      {
        label: "Keuangan",
        items: [
          { label: "Keuangan", icon: Wallet },
          { label: "Laporan", icon: PieChart },
          { label: "Pengaturan", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "warehouse",
    name: "ERP Warehouse",
    tagline: "Stok & Logistik",
    description:
      "Inventaris, pembelian, pergerakan stok dan manajemen supplier skala besar.",
    route: "/warehouse",
    icon: Warehouse,
    brandVar: "--brand-warehouse",
    gradient: "from-violet-500/15 to-purple-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Stok",
        items: [
          { label: "Inventaris", icon: Boxes },
          { label: "Produk", icon: Package },
          { label: "Pergerakan Stok", icon: Move3d },
          { label: "Gudang", icon: Warehouse },
        ],
      },
      {
        label: "Perdagangan",
        items: [
          { label: "Supplier", icon: Handshake },
          { label: "Purchase Order", icon: ShoppingCart },
          { label: "Sales Order", icon: Receipt },
          { label: "Penerimaan", icon: ArrowDownToLine },
          { label: "Pengiriman", icon: ArrowUpFromLine },
        ],
      },
      {
        label: "Karyawan",
        items: [
          { label: "Karyawan", icon: Users },
          { label: "Absensi", icon: ClipboardCheck },
          { label: "Payroll", icon: Banknote },
        ],
      },
      {
        label: "Keuangan",
        items: [
          { label: "Laporan", icon: PieChart },
          { label: "Keuangan", icon: Wallet },
          { label: "Pengaturan", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "project",
    name: "ERP Manajemen Proyek",
    tagline: "Proyek & Kolaborasi",
    description:
      "Kelola proyek, tim, timeline, tugas dan anggaran dalam satu ruang kerja.",
    route: "/manajemen-proyek",
    icon: Kanban,
    brandVar: "--brand-project",
    gradient: "from-cyan-500/15 to-blue-500/5",
    menu: [
      { label: "Ringkasan", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Proyek",
        items: [
          { label: "Daftar Proyek", icon: FolderKanban },
          { label: "Papan Kanban", icon: Kanban },
          { label: "Milestone", icon: Milestone },
          { label: "Tugas", icon: ListChecks },
          { label: "Gantt Chart", icon: GitBranch },
          { label: "Sasaran", icon: Target },
        ],
      },
      {
        label: "Tim",
        items: [
          { label: "Anggota Tim", icon: Users },
          { label: "Time Tracking", icon: Timer },
          { label: "Kalender", icon: CalendarDays },
        ],
      },
      {
        label: "Keuangan",
        items: [
          { label: "Anggaran", icon: Wallet },
          { label: "Tagihan", icon: Receipt },
          { label: "Laporan", icon: PieChart },
          { label: "Pengaturan", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "yayasan",
    name: "ERP Yayasan",
    tagline: "Manajemen Yayasan",
    description:
      "Kelola donasi, program sosial, relawan, unit usaha dan pelaporan yayasan.",
    route: "/yayasan",
    icon: Landmark,
    brandVar: "--brand-yayasan",
    gradient: "from-rose-500/15 to-orange-500/5",
    menu: [
      { label: "Ringkasan", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Program",
        items: [
          { label: "Program Sosial", icon: HeartHandshake },
          { label: "Penerima Manfaat", icon: UserRound },
          { label: "Unit Usaha", icon: Building2 },
          { label: "Dokumen", icon: FileText },
        ],
      },
      {
        label: "Donasi",
        items: [
          { label: "Donatur", icon: Handshake },
          { label: "Donasi Masuk", icon: HandCoins },
          { label: "Zakat & Infaq", icon: Banknote },
          { label: "Kampanye", icon: Megaphone },
        ],
      },
      {
        label: "SDM",
        items: [
          { label: "Pengurus", icon: UserCog },
          { label: "Relawan", icon: Users },
          { label: "Absensi", icon: ClipboardCheck },
          { label: "Payroll", icon: Banknote },
        ],
      },
      {
        label: "Keuangan",
        items: [
          { label: "Keuangan", icon: Wallet },
          { label: "Laporan", icon: PieChart },
          { label: "Pengaturan", icon: Settings },
        ],
      },
    ],
  },
];

export const getIndustry = (id: IndustryId) =>
  industries.find((i) => i.id === id)!;