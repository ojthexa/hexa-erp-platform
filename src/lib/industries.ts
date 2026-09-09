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
  Zap,
  FlaskConical,
  Receipt,
  Move3d,
  ArrowDownToLine,
  ArrowUpFromLine,
  Handshake,
  Network,
  Database,
  Monitor,
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
  Plane,
  BedDouble,
  MapPinned,
  Stamp,
  Ticket,
  Gift,
  Pill as PillIcon,
  ScanBarcode,
  CalendarX2,
  ClipboardList,
  Stethoscope as StethoscopeIcon,
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
  | "manajemen-proyek"
  | "yayasan"
  | "umroh"
  | "apotek";

export type LandingItem = { title: string; description: string; icon: LucideIcon };
export type MenuCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: { label: string; icon: LucideIcon }[];
};
export type LandingContent = {
  headline: string;
  intro: string;
  features: LandingItem[];
  requirements: LandingItem[];
  menuCards: MenuCard[];
};
export type AppPageRoute =
  | "/office"
  | "/school-hr"
  | "/school-academic"
  | "/tahfidz"
  | "/manufacture"
  | "/manajemen-proyek"
  | "/warehouse"
  | "/restaurant"
  | "/yayasan"
  | "/umroh"
  | "/apotek"
  | "/clinic";
export type IndustryLandingRoute =
  | "/office/landing"
  | "/school-hr/landing"
  | "/school-academic/landing"
  | "/tahfidz/landing"
  | "/manufacture/landing"
  | "/manajemen-proyek/landing"
  | "/warehouse/landing"
  | "/restaurant/landing"
  | "/yayasan/landing"
  | "/umroh/landing"
  | "/apotek/landing"
  | "/clinic/landing";

export type IndustryConfig = {
  id: IndustryId;
  name: string;
  tagline: string;
  description: string;
  route: AppPageRoute;
  landingRoute: IndustryLandingRoute;
  icon: LucideIcon;
  brandVar: string; // css var name
  gradient: string; // tailwind gradient classes for card accent
  menu: MenuGroup[];
  landing: LandingContent;
};

export const industries: IndustryConfig[] = [
  {
    id: "office",
    name: "ERP Kantor",
    tagline: "HR & Administrasi",
    description:
      "HR, payroll, absensi, inventaris dan administrasi untuk kantor modern.",
    route: "/office",
    landingRoute: "/office/landing",
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
    landing: {
      headline: "Satu ruang kerja yang rapi untuk HR, penggajian, dan operasional.",
      intro: "Jaga data karyawan, absensi, aset, dan administrasi tetap sinkron.",
      features: [
        {
          title: "Catatan HR",
          description: "Profil karyawan, kontrak, dan riwayat pekerjaan.",
          icon: Users,
        },
        {
          title: "Absensi & cuti",
          description: "Absensi harian, saldo cuti, dan alur persetujuan.",
          icon: CalendarClock,
        },
        {
          title: "Penggajian",
          description: "Komponen gaji, pajak, dan slip gaji otomatis.",
          icon: Banknote,
        },
        {
          title: "Rekrutmen",
          description: "Alur dari lowongan hingga onboarding karyawan baru.",
          icon: UserPlus,
        },
        {
          title: "Aset & inventaris",
          description: "Pantau peralatan kantor, aset, dan barang habis pakai.",
          icon: Package,
        },
        {
          title: "Laporan & analitik",
          description: "Wawasan jumlah karyawan dan biaya HR per departemen.",
          icon: PieChart,
        },
      ],
      requirements: [
        {
          title: "Struktur organisasi",
          description: "Departemen, jabatan, dan garis pelaporan.",
          icon: Network,
        },
        {
          title: "Kebijakan kepegawaian",
          description: "Hak cuti, komponen gaji, serta pengaturan pajak/BPJS.",
          icon: FileText,
        },
        {
          title: "Alur persetujuan",
          description: "Tentukan siapa yang menyetujui cuti, klaim, dan perubahan data.",
          icon: UserCog,
        },
        {
          title: "Data master karyawan",
          description: "Data pribadi, kontrak, dan rekening bank setiap karyawan.",
          icon: Database,
        },
      ],
      menuCards: [
        {
          title: "KPI Karyawan",
          description: "Monitor total karyawan, kehadiran, payroll, dan cuti secara real-time.",
          icon: Users,
          items: [
            { label: "Total Karyawan", icon: Users },
            { label: "Hadir Hari Ini", icon: ClipboardCheck },
            { label: "Payroll Bulanan", icon: Banknote },
            { label: "Cuti Pending", icon: CalendarClock },
          ],
        },
        {
          title: "Ringkasan Payroll",
          description: "Tren gaji bulanan dengan grafik batang interaktif.",
          icon: Banknote,
          items: [
            { label: "Grafik Tren", icon: PieChart },
            { label: "Rekap Bulanan", icon: Receipt },
            { label: "Per Departemen", icon: Wallet },
          ],
        },
        {
          title: "Aset Kantor",
          description: "Pantau ketersediaan laptop, monitor, ruang rapat, dan kendaraan.",
          icon: Package,
          items: [
            { label: "Laptop", icon: Package },
            { label: "Monitor", icon: Package },
            { label: "Ruang Rapat", icon: Building2 },
            { label: "Kendaraan", icon: Car },
          ],
        },
        {
          title: "Proyek & Tugas",
          description: "Aktivitas terbaru, daftar tugas, dan aksi cepat untuk tim.",
          icon: FolderKanban,
          items: [
            { label: "Dashboard Proyek", icon: LayoutDashboard },
            { label: "Tambah Tugas", icon: ListChecks },
            { label: "Aksi Cepat", icon: Zap },
          ],
        },
      ],
    },
  },
  {
    id: "school-hr",
    name: "Manajemen Karyawan Sekolah",
    tagline: "School HR & Staff",
    description:
      "Kelola karyawan sekolah — guru, staf, absensi, cuti, payroll dan rekrutmen.",
    route: "/school-hr",
    landingRoute: "/school-hr/landing",
    icon: BriefcaseBusiness,
    brandVar: "--brand-school-hr",
    gradient: "from-violet-500/15 to-indigo-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Karyawan",
        items: [
          { label: "Guru", icon: UserCog },
          { label: "Staf", icon: Users },
          { label: "SOP", icon: BriefcaseBusiness },
          { label: "Rekrutmen", icon: UserPlus },
        ],
      },
      {
        label: "Waktu & Gaji",
        items: [
          { label: "Absensi", icon: ClipboardCheck },
          { label: "Guru Pengganti", icon: Repeat },
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
    landing: {
      headline: "Kelola karyawan sekolah tanpa ribet administrasi.",
      intro: "Guru, staf, absensi, pengganti guru, cuti, dan payroll dalam satu sistem.",
      features: [
        {
          title: "Data guru & staf",
          description: "Profil lengkap, riwayat kerja, dan dokumen yang tertata.",
          icon: UserCog,
        },
        {
          title: "Absensi harian",
          description: "Catat kehadiran guru setiap hari dengan verifikasi cepat.",
          icon: ClipboardCheck,
        },
        {
          title: "Guru pengganti",
          description: "Atur dan lacak guru pengganti untuk setiap pelajaran kosong.",
          icon: Repeat,
        },
        {
          title: "Manajemen cuti",
          description: "Ajukan, menyetujui, dan pantau saldo cuti karyawan.",
          icon: CalendarClock,
        },
        {
          title: "Payroll terintegrasi",
          description: "Hitung gaji otomatis dengan pemotongan yang telah dikonfigurasi.",
          icon: Banknote,
        },
        {
          title: "Administrasi & laporan",
          description: "Aset, surat, keuangan, dan laporan HR kapan saja.",
          icon: PieChart,
        },
      ],
      requirements: [
        {
          title: "Data karyawan terpusat",
          description: "Nama, jabatan, golongan, dan data keluarga setiap karyawan.",
          icon: Database,
        },
        {
          title: "Kebijakan gaji & hak cuti",
          description: "Besaran gaji, tingkat penyesuaian, dan aturan cuti.",
          icon: FileText,
        },
        {
          title: "Jadwal mengajar",
          description: "Penugasan guru per jam pelajaran untuk pelacakan absensi.",
          icon: CalendarClock,
        },
        {
          title: "Peran & izin akses",
          description: "Pembedaan hak akses admin HR, kepala sekolah, dan staf.",
          icon: ShieldCheck,
        },
      ],
      menuCards: [
        {
          title: "KPI Guru & Staf",
          description: "Monitor total guru, kehadiran, payroll, dan guru pengganti.",
          icon: UserCog,
          items: [
            { label: "Total Guru", icon: UserCog },
            { label: "Hadir Hari Ini", icon: ClipboardCheck },
            { label: "Guru Pengganti", icon: Repeat },
            { label: "Payroll Bulanan", icon: Banknote },
          ],
        },
        {
          title: "Absensi & Cuti",
          description: "Catat kehadiran harian dan kelola permintaan cuti.",
          icon: CalendarClock,
          items: [
            { label: "Absensi Harian", icon: ClipboardCheck },
            { label: "Guru Pengganti", icon: Repeat },
            { label: "Permintaan Cuti", icon: CalendarClock },
            { label: "Saldo Cuti", icon: Banknote },
          ],
        },
        {
          title: "Administrasi",
          description: "Aset, surat, keuangan, dan laporan HR.",
          icon: Package,
          items: [
            { label: "Aset Sekolah", icon: Package },
            { label: "Surat Edaran", icon: Mail },
            { label: "Keuangan", icon: Wallet },
            { label: "Laporan HR", icon: PieChart },
          ],
        },
        {
          title: "Rekrutmen",
          description: "Proses perekrutan guru dan staf baru.",
          icon: UserPlus,
          items: [
            { label: "Lowongan", icon: UserPlus },
            { label: "Calon Kandidat", icon: Users },
            { label: "Wawancara", icon: BriefcaseBusiness },
            { label: "Onboarding", icon: UserCog },
          ],
        },
      ],
    },
  },
  {
    id: "school-academic",
    name: "Sistem Informasi Akademik Sekolah",
    tagline: "Academic Operations",
    description:
      "Sistem akademik — siswa, kelas, jadwal, ujian, nilai dan rapor.",
    route: "/school-academic",
    landingRoute: "/school-academic/landing",
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
    landing: {
      headline: "Jalankan seluruh operasional akademik dari satu ruang kerja.",
      intro: "Siswa, kelas, jadwal, ujian, nilai, dan rapor tanpa berpindah aplikasi.",
      features: [
        {
          title: "Data siswa",
          description: "Profil siswa lengkap dengan riwayat akademik dan orang tua.",
          icon: Users,
        },
        {
          title: "Manajemen kelas",
          description: "Kelas, guru kelas, dan penempatan siswa setiap tahun.",
          icon: School,
        },
        {
          title: "Jadwal pelajaran",
          description: "Jadwal mingguan yang sinkron dengan guru dan ruang kelas.",
          icon: CalendarDays,
        },
        {
          title: "Ujian & penilaian",
          description: "Ulangan, ujian tengah dan akhir semester dengan rubrik nilai.",
          icon: FileCheck2,
        },
        {
          title: "Rapor digital",
          description: "Rapor otomatis dari nilai harian, tengah, dan akhir.",
          icon: Award,
        },
        {
          title: "Keuangan & dokumen",
          description: "Pembayaran SPP, arsip dokumen akademik, dan laporan.",
          icon: Wallet,
        },
      ],
      requirements: [
        {
          title: "Data master siswa",
          description: "Data pribadi, kelas, dan wali murid setiap siswa.",
          icon: Database,
        },
        {
          title: "Kurikulum & struktur kelas",
          description: "Mata pelajaran, kelas, dan pengelompokan siswa.",
          icon: BookMarked,
        },
        {
          title: "Kalender akademik",
          description: "Jadwal ujian, libur, dan kebijakan penilaian.",
          icon: CalendarDays,
        },
        {
          title: "Standar penilaian",
          description: "Kriteria ketuntasan dan bobot masing-masing komponen nilai.",
          icon: FileCheck2,
        },
      ],
      menuCards: [
        {
          title: "KPI Akademik",
          description: "Monitor jumlah siswa, kehadiran, dan rata-rata nilai.",
          icon: Users,
          items: [
            { label: "Data Siswa", icon: Users },
            { label: "Absensi", icon: ClipboardCheck },
            { label: "Rata-rata Nilai", icon: Award },
            { label: "Penerimaan", icon: UserPlus },
          ],
        },
        {
          title: "Manajemen Kelas",
          description: "Kelola kelas, guru kelas, dan penempatan siswa.",
          icon: School,
          items: [
            { label: "Daftar Kelas", icon: School },
            { label: "Guru Kelas", icon: UserCog },
            { label: "Jadwal", icon: CalendarDays },
            { label: "Mata Pelajaran", icon: BookMarked },
          ],
        },
        {
          title: "Ujian & Rapor",
          description: "Kelola ujian dan generate rapor otomatis.",
          icon: FileCheck2,
          items: [
            { label: "Ujian", icon: FileCheck2 },
            { label: "Nilai", icon: Award },
            { label: "Rapor", icon: Award },
            { label: "Rekap Nilai", icon: PieChart },
          ],
        },
        {
          title: "Keuangan SPP",
          description: "Pantau pembayaran SPP dan laporan keuangan.",
          icon: Wallet,
          items: [
            { label: "Pembayaran SPP", icon: Wallet },
            { label: "Tagihan", icon: Receipt },
            { label: "Laporan Keuangan", icon: PieChart },
            { label: "Dokumen", icon: FileText },
          ],
        },
      ],
    },
  },
  {
    id: "tahfidz",
    name: "Manajemen Tahfidz",
    tagline: "Islamic Studies",
    description:
      "Manajemen hafalan Al-Qur'an — santri, halaqoh, murojaah, tilawah dan ustadz.",
    route: "/tahfidz",
    landingRoute: "/tahfidz/landing",
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
    landing: {
      headline: "Kelola tahfidz dengan tertib, transparan, dan terukur.",
      intro: "Data santri, halaqoh, setoran hafalan, murojaah, tilawah, dan ustadz dalam satu sistem.",
      features: [
        {
          title: "Data santri",
          description: "Data pribadi, kelas halaqoh, dan riwayat peserta.",
          icon: Users,
        },
        {
          title: "Manajemen halaqoh",
          description: "Kelompok belajar dengan ustadz, jadwal, dan kehadiran.",
          icon: School,
        },
        {
          title: "Pemantauan hafalan",
          description: "Catat setoran, ujian hafalan, dan progres setiap santri.",
          icon: BookOpen,
        },
        {
          title: "Murojaah & tilawah",
          description: "Pantau murojaah dan tilawah sebagai bagian dari progres.",
          icon: BookMarked,
        },
        {
          title: "Sertifikat",
          description: "Otentikasi dan pencetakan sertifikat khatam / lulus.",
          icon: Award,
        },
        {
          title: "Laporan ustadz",
          description: "Laporan per halaqoh, santri, dan progres mingguan.",
          icon: PieChart,
        },
      ],
      requirements: [
        {
          title: "Struktur halaqoh",
          description: "Jumlah santri, pembagian kelas, dan pengajar.",
          icon: Users,
        },
        {
          title: "Standar setoran",
          description: "Kurikulum, jumlah jilid/ halaman, dan kriteria khatam.",
          icon: BookOpen,
        },
        {
          title: "Data ustadz",
          description: "Kualifikasi, keahlian, dan jadwal mengajar.",
          icon: UserCog,
        },
        {
          title: "Absensi & kehadiran",
          description: "Aturan kehadiran santri dan laporan mingguan.",
          icon: ClipboardCheck,
        },
      ],
      menuCards: [
        {
          title: "KPI Santri",
          description: "Monitor total santri, kehadiran, dan progres hafalan.",
          icon: Users,
          items: [
            { label: "Data Santri", icon: Users },
            { label: "Absensi", icon: ClipboardCheck },
            { label: "Progres Hafalan", icon: BookOpen },
            { label: "Halaqoh", icon: School },
          ],
        },
        {
          title: "Manajemen Halaqoh",
          description: "Kelola kelompok belajar, ustadz, dan jadwal.",
          icon: School,
          items: [
            { label: "Daftar Halaqoh", icon: School },
            { label: "Ustadz", icon: UserCog },
            { label: "Jadwal", icon: CalendarDays },
            { label: "Laporan", icon: PieChart },
          ],
        },
        {
          title: "Progres Hafalan",
          description: "Pantau setoran, murojaah, tilawah, dan ujian hafalan.",
          icon: BookOpen,
          items: [
            { label: "Tahfidz", icon: BookOpen },
            { label: "Murojaah", icon: BookMarked },
            { label: "Tilawah", icon: Mic2 },
            { label: "Ujian Hafalan", icon: FileCheck2 },
          ],
        },
        {
          title: "Sertifikat & Laporan",
          description: "Otentikasi sertifikat dan laporan perkembangan.",
          icon: Award,
          items: [
            { label: "Sertifikat", icon: Award },
            { label: "Laporan Ustadz", icon: PieChart },
            { label: "Progres Mingguan", icon: BookMarked },
          ],
        },
      ],
    },
  },
  {
    id: "manufacture",
    name: "ERP Manufaktur",
    tagline: "Produksi & Pabrik",
    description:
      "Manajemen produksi, mesin, quality control, maintenance dan logistik pabrik.",
    route: "/manufacture",
    landingRoute: "/manufacture/landing",
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
    landing: {
      headline: "Kelola titik produksi, mesin, kualitas, dan bahan baku dalam satu sistem.",
      intro: "Work order, BOM, mesin, perawatan, QC, dan logistik pabrik dalam satu ruang kerja.",
      features: [
        {
          title: "Manajemen produksi",
          description: "Perencanaan, eksekusi, dan pantau work order per lini.",
          icon: Factory,
        },
        {
          title: "Bill of Materials",
          description: "Struktur bahan baku dan komponen untuk setiap produk.",
          icon: BookMarked,
        },
        {
          title: "Kontrol kualitas",
          description: "Inspeksi, non-konformitas, dan standar terukur.",
          icon: ShieldCheck,
        },
        {
          title: "Mesin & perawatan",
          description: "Data mesin, riwayat servis, dan rencana perawatan.",
          icon: Wrench,
        },
        {
          title: "Manajemen bahan baku",
          description: "Stok gudang, permintaan, dan penerimaan barang.",
          icon: Package,
        },
        {
          title: "Absensi & payroll operator",
          description: "Data karyawan, absensi, dan penggajian terintegrasi.",
          icon: Users,
        },
      ],      requirements: [
        {
          title: " Struktur produk & BOM",
          description: "Daftar produk dengan bahan baku, komponen, dan langkah.",
          icon: BookMarked,
        },
        {
          title: "Data mesin & lini",
          description: "Kapasitas, lokasi, dan parameter operasional masing-masing.",
          icon: Wrench,
        },
        {
          title: "Standar operasional",
          description: "SOP produksi, toleransi kualitas, dan prosedur QC.",
          icon: ShieldCheck,
        },
        {
          title: "Pemasok & persediaan",
          description: "Vendor, daftar harga, dan titik pemesanan ulang.",
          icon: Truck,
        },
      ],
      menuCards: [
        {
          title: "KPI Manufaktur",
          description: "Monitor produksi, work order, mesin, dan kualitas.",
          icon: Factory,
          items: [
            { label: "Dashboard Produksi", icon: LayoutDashboard },
            { label: "Work Order", icon: FolderKanban },
            { label: "Mesin", icon: Wrench },
            { label: "Quality Control", icon: ShieldCheck },
          ],
        },
        {
          title: "Manajemen Produksi",
          description: "Kelola BOM, work order, dan jadwal produksi.",
          icon: BookMarked,
          items: [
            { label: "BOM", icon: BookMarked },
            { label: "Work Order", icon: FolderKanban },
            { label: "Jadwal Produksi", icon: CalendarDays },
            { label: "Target Produksi", icon: Target },
          ],
        },
        {
          title: "Mesin & Maintenance",
          description: "Pantau mesin, perawatan, dan riwayat servis.",
          icon: Wrench,
          items: [
            { label: "Data Mesin", icon: Wrench },
            { label: "Maintenance", icon: Wrench },
            { label: "Rencana Servis", icon: CalendarClock },
            { label: "Riwayat", icon: FileText },
          ],
        },
        {
          title: "Bahan Baku & Gudang",
          description: "Kelola stok bahan baku, pembelian, dan logistik.",
          icon: Warehouse,
          items: [
            { label: "Bahan Baku", icon: Package },
            { label: "Gudang", icon: Warehouse },
            { label: "Pembelian", icon: ShoppingCart },
            { label: "Logistik", icon: RouteIcon },
          ],
        },
      ],
    },
  },
  {
    id: "manajemen-proyek",
    name: "ERP Manajemen Proyek",
    tagline: "Proyek & Kolaborasi",
    description:
      "Kelola proyek, tim, timeline, tugas dan anggaran dalam satu ruang kerja.",
    route: "/manajemen-proyek",
    landingRoute: "/manajemen-proyek/landing",
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
    landing: {
      headline: "Kelola proyek, tim, timeline, dan anggaran dengan lebih terstruktur.",
      intro: "Papan Kanban, milestone, tugas, Gantt, dan time tracking dalam satu ruang kerja.",
      features: [
        {
          title: "Papan Kanban",
          description: "Visualisasikan progres tugas dengan kolom yang dapat dikustomisasi.",
          icon: Kanban,
        },
        {
          title: "Milestone & timeline",
          description: "Tetapkan capaian penting dan pantau progres terhadap target.",
          icon: Milestone,
        },
        {
          title: "Gantt Chart",
          description: "Lihat dependensi dan jadwal proyek dalam tampilan timeline.",
          icon: GitBranch,
        },
        {
          title: "Time tracking",
          description: "Catat jam kerja per tugas untuk estimasi dan billing akurat.",
          icon: Timer,
        },
        {
          title: "Manajemen anggaran",
          description: "Pantau biaya, biaya melebihi anggaran, dan sisa dana.",
          icon: Wallet,
        },
        {
          title: "Laporan proyek",
          description: "Analitik progres, sumber daya, dan kinerja keuangan.",
          icon: PieChart,
        },
      ],
      requirements: [
        {
          title: " Struktur proyek",
          description: "Breakdown pekerjaan, fase, dan deliverable yang jelas.",
          icon: FolderKanban,
        },
        {
          title: "Tim & peran",
          description: "Anggota tim dengan peran dan tanggung jawab yang ditetapkan.",
          icon: Users,
        },
        {
          title: "Estimasi waktu",
          description: "Perkiraan durasi tugas dan keseluruhan proyek.",
          icon: Timer,
        },
        {
          title: "Batasan anggaran",
          description: "Anggaran per proyek, biaya aktual, dan varians.",
          icon: Receipt,
        },
      ],
      menuCards: [
        {
          title: "KPI Proyek",
          description: "Monitor progres proyek, anggota tim, dan anggaran.",
          icon: FolderKanban,
          items: [
            { label: "Daftar Proyek", icon: FolderKanban },
            { label: "Papan Kanban", icon: Kanban },
            { label: "Milestone", icon: Milestone },
            { label: "Anggaran", icon: Wallet },
          ],
        },
        {
          title: "Manajemen Tugas",
          description: "Kelola tugas, tim, dan time tracking.",
          icon: ListChecks,
          items: [
            { label: "Tugas", icon: ListChecks },
            { label: "Anggota Tim", icon: Users },
            { label: "Time Tracking", icon: Timer },
            { label: "Kalender", icon: CalendarDays },
          ],
        },
        {
          title: "Timeline & Gantt",
          description: "Visualisasikan jadwal dan dependensi proyek.",
          icon: GitBranch,
          items: [
            { label: "Gantt Chart", icon: GitBranch },
            { label: "Milestone", icon: Milestone },
            { label: "Timeline", icon: CalendarDays },
            { label: "Sasaran", icon: Target },
          ],
        },
        {
          title: "Keuangan Proyek",
          description: "Pantau anggaran, tagihan, dan laporan keuangan.",
          icon: Wallet,
          items: [
            { label: "Anggaran", icon: Wallet },
            { label: "Tagihan", icon: Receipt },
            { label: "Laporan", icon: PieChart },
          ],
        },
      ],
    },
  },
  {
    id: "warehouse",
    name: "ERP Warehouse",
    tagline: "Stok & Logistik",
    description:
      "Inventaris, pembelian, pergerakan stok dan manajemen supplier skala besar.",
    route: "/warehouse",
    landingRoute: "/warehouse/landing",
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
    landing: {
      headline: "Setiap barang, setiap pergerakan, sepenuhnya terlihat.",
      intro: "Inventaris, pembelian, dan logistik dalam skala gudang.",
      features: [
        {
          title: "Kontrol inventaris",
          description: "Akurasi stok hingga level SKU, batch, dan lokasi.",
          icon: Boxes,
        },
        {
          title: "Pergerakan stok",
          description: "Barang masuk, keluar, dan transfer antar gudang.",
          icon: Move3d,
        },
        {
          title: "Pembelian",
          description: "Purchase order, penerimaan barang, dan manajemen pemasok.",
          icon: ShoppingCart,
        },
        {
          title: "Penjualan & pengiriman",
          description: "Pengiriman pesanan dan pelacakan pengiriman.",
          icon: ArrowUpFromLine,
        },
        {
          title: "Pemasok",
          description: "Skor penilaian vendor dan daftar harga.",
          icon: Handshake,
        },
        {
          title: "Laporan",
          description: "Analitik nilai stok, perputaran, dan kapasitas.",
          icon: PieChart,
        },
      ],
      requirements: [
        {
          title: "Pengaturan lokasi",
          description: "Zona, rak, dan bin untuk stok Anda.",
          icon: Warehouse,
        },
        {
          title: "Data produk & pemasok",
          description: "Master SKU dengan satuan dan daftar vendor.",
          icon: Database,
        },
        {
          title: "Kebijakan pemesanan ulang",
          description: "Level min–maks dan waktu tunggu pemasok.",
          icon: ArrowDownToLine,
        },
        {
          title: "Alur kerja gudang",
          description: "Peran untuk picking, packing, penerimaan, dan pengiriman.",
          icon: Users,
        },
      ],
      menuCards: [
        {
          title: "KPI Gudang",
          description: "Monitor inventaris, produk, pergerakan stok, dan gudang.",
          icon: Boxes,
          items: [
            { label: "Inventaris", icon: Boxes },
            { label: "Produk", icon: Package },
            { label: "Pergerakan Stok", icon: Move3d },
            { label: "Gudang", icon: Warehouse },
          ],
        },
        {
          title: "Pembelian & Supplier",
          description: "Kelola purchase order, sales order, dan pemasok.",
          icon: ShoppingCart,
          items: [
            { label: "Purchase Order", icon: ShoppingCart },
            { label: "Sales Order", icon: Receipt },
            { label: "Supplier", icon: Handshake },
            { label: "Penerimaan", icon: ArrowDownToLine },
          ],
        },
        {
          title: "Operasional Gudang",
          description: "Kelola penerimaan barang dan pengiriman.",
          icon: Warehouse,
          items: [
            { label: "Penerimaan", icon: ArrowDownToLine },
            { label: "Pengiriman", icon: ArrowUpFromLine },
            { label: "Stock Opname", icon: ScanBarcode },
            { label: "Transfer Stok", icon: Move3d },
          ],
        },
        {
          title: "Laporan & Keuangan",
          description: "Analitik nilai stok, perputaran, dan kapasitas.",
          icon: PieChart,
          items: [
            { label: "Laporan", icon: PieChart },
            { label: "Keuangan", icon: Wallet },
            { label: "Nilai Stok", icon: Boxes },
            { label: "Perputaran", icon: Move3d },
          ],
        },
      ],
    },
  },
  {
    id: "restaurant",
    name: "ERP Restoran",
    tagline: "POS & Dapur",
    description:
      "POS, dapur, inventaris, pembelian dan manajemen outlet untuk tim F&B.",
    route: "/restaurant",
    landingRoute: "/restaurant/landing",
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
    landing: {
      headline: "Dari pesanan hingga keuntungan, dalam satu sistem.",
      intro: "Alat POS, dapur, pasokan, dan pertumbuhan untuk satu outlet maupun jaringan.",
      features: [
        {
          title: "POS & pesanan",
          description: "Pesanan dine-in, takeaway, dan antar dalam satu layar.",
          icon: ShoppingCart,
        },
        {
          title: "Layar dapur",
          description: "Pesanan langsung masuk ke dapur secara real time.",
          icon: ChefHat,
        },
        {
          title: "Resep & inventaris",
          description: "Perhitungan biaya resep dan peringatan stok sebelum habis.",
          icon: BookOpen,
        },
        {
          title: "Pemasok & pembelian",
          description: "Manajemen vendor dan purchase order.",
          icon: Truck,
        },
        {
          title: "Promosi & loyalitas",
          description: "Diskon, paket bundling, dan program pelanggan setia.",
          icon: BadgePercent,
        },
        {
          title: "Keuangan & laporan",
          description: "Analitik pendapatan, biaya, dan laba harian.",
          icon: PieChart,
        },
      ],
      requirements: [
        {
          title: "Menu & biaya resep",
          description: "Item menu lengkap dengan bahan, hasil, dan harga pokok.",
          icon: BookMarked,
        },
        {
          title: "Tata letak outlet",
          description: "Pemetaan meja, stasiun POS, dan layar dapur.",
          icon: Table2,
        },
        {
          title: "Data pemasok & pembelian",
          description: "Vendor, daftar harga, dan waktu tunggu pemesanan.",
          icon: Truck,
        },
        {
          title: "Perangkat POS",
          description: "Printer struk, laci kas, atau layar dapur.",
          icon: Monitor,
        },
      ],
      menuCards: [
        {
          title: "KPI Restoran",
          description: "Monitor penjualan, pesanan, antrian dapur, dan stok.",
          icon: Receipt,
          items: [
            { label: "Penjualan Hari Ini", icon: Receipt },
            { label: "Pesanan", icon: ShoppingCart },
            { label: "Antrian Dapur", icon: ChefHat },
            { label: "Stok", icon: Boxes },
          ],
        },
        {
          title: "POS & Pesanan",
          description: "Kelola pesanan dine-in, takeaway, dan antar.",
          icon: ShoppingCart,
          items: [
            { label: "POS", icon: ShoppingCart },
            { label: "Pesanan", icon: Receipt },
            { label: "Meja", icon: Table2 },
            { label: "Menu", icon: BookMarked },
          ],
        },
        {
          title: "Dapur & Resep",
          description: "Kelola layar dapur, resep, dan inventaris bahan.",
          icon: ChefHat,
          items: [
            { label: "Layar Dapur", icon: ChefHat },
            { label: "Resep", icon: BookOpen },
            { label: "Inventaris", icon: Boxes },
          ],
        },
        {
          title: "Outlet & Promosi",
          description: "Kelola outlet, supplier, pembelian, dan promosi.",
          icon: Table2,
          items: [
            { label: "Outlet", icon: Building2 },
            { label: "Supplier", icon: Truck },
            { label: "Pembelian", icon: ShoppingCart },
            { label: "Promosi", icon: BadgePercent },
          ],
        },
      ],
    },
  },
  {
    id: "yayasan",
    name: "ERP Yayasan",
    tagline: "Manajemen Yayasan",
    description:
      "Kelola donasi, program sosial, relawan, unit usaha dan pelaporan yayasan.",
    route: "/yayasan",
    landingRoute: "/yayasan/landing",
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
    landing: {
      headline: "Kelola yayasan dengan transparan, terpercaya, dan berdampak.",
      intro: "Donasi, program sosial, relawan, unit usaha, dan pelaporan dalam satu sistem.",
      features: [
        {
          title: "Program sosial",
          description: "Kelola program bantuan, santunan, dan kriteria penerima.",
          icon: HeartHandshake,
        },
        {
          title: "Manajemen donasi",
          description: "Catat donatur, jumlah donasi masuk, dan kampanye.",
          icon: HandCoins,
        },
        {
          title: "Zakat & infaq",
          description: "Pemilihan khazanah, klasifikasi, dan distribusi zakat.",
          icon: Banknote,
        },
        {
          title: "Relawan",
          description: "Data relawan, keaktifan, dan penugasan.",
          icon: Users,
        },
        {
          title: "Unit usaha yayasan",
          description: "Operasi usaha yang mendukung program sosial.",
          icon: Building2,
        },
        {
          title: "Laporan & transparansi",
          description: "Laporan keuangan dan dampak program untuk stakeholders.",
          icon: PieChart,
        },
      ],
      requirements: [
        {
          title: "Visi & program",
          description: "Arah yayasan dan program unggulan yang sedang berjalan.",
          icon: Landmark,
        },
        {
          title: "Struktur pengurus",
          description: "Pembagian tugas di antara pengurus dan staf.",
          icon: UserCog,
        },
        {
          title: "Kebijakan donasi",
          description: "Jenis donasi, wajib/zakat, dan ketentuan penerimaan.",
          icon: Banknote,
        },
        {
          title: "Persyaratan laporan",
          description: "Laporan keuangan dan laporan dampak ke donor.",
          icon: FileText,
        },
      ],
      menuCards: [
        {
          title: "KPI Yayasan",
          description: "Monitor program, donasi, pengurus, dan keuangan.",
          icon: HeartHandshake,
          items: [
            { label: "Dashboard", icon: LayoutDashboard },
            { label: "Program Sosial", icon: HeartHandshake },
            { label: "Donasi Masuk", icon: HandCoins },
            { label: "Keuangan", icon: Wallet },
          ],
        },
        {
          title: "Program Sosial",
          description: "Kelola program bantuan, penerima manfaat, dan dokumen.",
          icon: HeartHandshake,
          items: [
            { label: "Program Sosial", icon: HeartHandshake },
            { label: "Penerima Manfaat", icon: UserRound },
            { label: "Unit Usaha", icon: Building2 },
            { label: "Dokumen", icon: FileText },
          ],
        },
        {
          title: "Manajemen Donasi",
          description: "Kelola donatur, donasi masuk, zakat, dan kampanye.",
          icon: HandCoins,
          items: [
            { label: "Donatur", icon: Handshake },
            { label: "Donasi Masuk", icon: HandCoins },
            { label: "Zakat & Infaq", icon: Banknote },
            { label: "Kampanye", icon: Megaphone },
          ],
        },
        {
          title: "SDM & Relawan",
          description: "Kelola pengurus, relawan, absensi, dan payroll.",
          icon: Users,
          items: [
            { label: "Pengurus", icon: UserCog },
            { label: "Relawan", icon: Users },
            { label: "Absensi", icon: ClipboardCheck },
            { label: "Payroll", icon: Banknote },
          ],
        },
      ],
    },
  },
  {
    id: "umroh",
    name: "ERP Umroh & Haji",
    tagline: "Travel & Jamaah",
    description:
      "Kelola paket umroh, jamaah, visa, penerbangan, hotel, agen dan komisi.",
    route: "/umroh",
    landingRoute: "/umroh/landing",
    icon: Plane,
    brandVar: "--brand-umroh",
    gradient: "from-emerald-500/15 to-lime-500/5",
    menu: [
      { label: "Ringkasan", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Jamaah",
        items: [
          { label: "Data Jamaah", icon: Users },
          { label: "Booking", icon: Ticket },
          { label: "Dokumen", icon: FileText },
          { label: "Visa", icon: Stamp },
          { label: "Manasik", icon: BookOpen },
        ],
      },
      {
        label: "Operasional",
        items: [
          { label: "Paket Umroh", icon: Package },
          { label: "Keberangkatan", icon: CalendarDays },
          { label: "Penerbangan", icon: Plane },
          { label: "Hotel", icon: BedDouble },
          { label: "Transportasi", icon: Car },
          { label: "Itinerari", icon: MapPinned },
          { label: "Tour Leader", icon: UserCog },
        ],
      },
      {
        label: "Kemitraan",
        items: [
          { label: "Agen", icon: Handshake },
          { label: "Komisi", icon: HandCoins },
          { label: "Referral", icon: Megaphone },
          { label: "Loyalitas", icon: Gift },
        ],
      },
      {
        label: "Keuangan",
        items: [
          { label: "Pembayaran", icon: Receipt },
          { label: "Keuangan", icon: Wallet },
          { label: "Laporan", icon: PieChart },
          { label: "Pengaturan", icon: Settings },
        ],
      },
    ],
    landing: {
      headline: "Kelola paket umroh dari pendaftaran hingga keberangkatan.",
      intro: "Jamaah, booking, visa, penerbangan, hotel, transportasi, dan komisi dalam satu sistem.",
      features: [
        {
          title: "Manajemen jamaah",
          description: "Data pribadi, dokumen, visa, dan riwayat travel.",
          icon: Users,
        },
        {
          title: "Booking & paket",
          description: "Kelola paket umroh, harga, kuota, dan konfirmasi.",
          icon: Ticket,
        },
        {
          title: "Itinerari lengkap",
          description: "Penerbangan, hotel, transportasi, dan jadwal kegiatan.",
          icon: MapPinned,
        },
        {
          title: "Manasik & dokumen",
          description: "Persiapan manasik, bimbingan, dan arsip dokumen.",
          icon: BookOpen,
        },
        {
          title: "Kemitraan & agen",
          description: "Manajemen agen, referral, dan program loyalitas.",
          icon: Handshake,
        },
        {
          title: "Komisi & pendapatan",
          description: "Hitung komisi per agen dan pantau pendapatan paket.",
          icon: HandCoins,
        },
      ],
      requirements: [
        {
          title: "Struktur paket",
          description: "Harga, hari, rute, dan fasilitas untuk setiap paket.",
          icon: Package,
        },
        {
          title: "Vendor perjalanan",
          description: "Data maskapai, hotel, dan penyedia transportasi.",
          icon: Car,
        },
        {
          title: "Kebijakan visa",
          description: "Aturan visa, masa berlaku, dan dokumentasi yang diperlukan.",
          icon: Stamp,
        },
        {
          title: "Peran & akses",
          description: "Beda hak akses untuk admin, agen, dan tour leader.",
          icon: UserCog,
        },
      ],
      menuCards: [
        {
          title: "KPI Umroh",
          description: "Monitor jamaah, booking, paket, dan keuangan.",
          icon: Users,
          items: [
            { label: "Dashboard", icon: LayoutDashboard },
            { label: "Data Jamaah", icon: Users },
            { label: "Booking", icon: Ticket },
            { label: "Keuangan", icon: Wallet },
          ],
        },
        {
          title: "Jamaah & Dokumen",
          description: "Kelola data jamaah, dokumen, visa, dan manasik.",
          icon: FileText,
          items: [
            { label: "Data Jamaah", icon: Users },
            { label: "Dokumen", icon: FileText },
            { label: "Visa", icon: Stamp },
            { label: "Manasik", icon: BookOpen },
          ],
        },
        {
          title: "Operasional Paket",
          description: "Kelola paket umroh, keberangkatan, dan transportasi.",
          icon: Package,
          items: [
            { label: "Paket Umroh", icon: Package },
            { label: "Keberangkatan", icon: CalendarDays },
            { label: "Penerbangan", icon: Plane },
            { label: "Hotel", icon: BedDouble },
          ],
        },
        {
          title: "Kemitraan & Komisi",
          description: "Kelola agen, komisi, referral, dan loyalitas.",
          icon: HandCoins,
          items: [
            { label: "Agen", icon: Handshake },
            { label: "Komisi", icon: HandCoins },
            { label: "Referral", icon: Megaphone },
            { label: "Loyalitas", icon: Gift },
          ],
        },
      ],
    },
  },
  {
    id: "apotek",
    name: "ERP Apotek",
    tagline: "Farmasi & POS",
    description:
      "POS apotek, stok obat, kadaluarsa, resep, supplier dan laporan penjualan.",
    route: "/apotek",
    landingRoute: "/apotek/landing",
    icon: PillIcon,
    brandVar: "--brand-apotek",
    gradient: "from-cyan-500/15 to-teal-500/5",
    menu: [
      { label: "Ringkasan", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Penjualan",
        items: [
          { label: "POS Kasir", icon: ShoppingCart },
          { label: "Penjualan", icon: Receipt },
          { label: "Resep Dokter", icon: ClipboardList },
          { label: "Pelanggan", icon: UserRound },
        ],
      },
      {
        label: "Persediaan",
        items: [
          { label: "Produk Obat", icon: PillIcon },
          { label: "Inventaris", icon: Boxes },
          { label: "Stok Opname", icon: ScanBarcode },
          { label: "Kadaluarsa", icon: CalendarX2 },
          { label: "Pembelian", icon: ShoppingCart },
          { label: "Supplier", icon: Truck },
        ],
      },
      {
        label: "Klinis",
        items: [
          { label: "Apoteker", icon: StethoscopeIcon },
          { label: "Karyawan", icon: Users },
          { label: "Absensi", icon: ClipboardCheck },
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
    landing: {
      headline: "POS apotek, stok obat, dan laporan dalam satu sistem.",
      intro: "Manajemen obat, kadaluarsa, resep, supplier, dan penjualan apotek dalam satu ruang kerja.",
      features: [
        {
          title: "POS kasir",
          description: "Transaksi cepat dengan cek stok otomatis dan diskon.",
          icon: ShoppingCart,
        },
        {
          title: "Manajemen obat",
          description: "Data produk obat, kategori, dan harga pokok.",
          icon: PillIcon,
        },
        {
          title: "Kontrol kadaluarsa",
          description: "Peringatan kadaluarsa obat dan pengelolaan stok opname.",
          icon: CalendarX2,
        },
        {
          title: "Resep dokter",
          description: "Terima, verifikasi, dan pencatatan resep dari dokter.",
          icon: ClipboardList,
        },
        {
          title: "Pembelian & supplier",
          description: "Purchase order, penerimaan stok, dan manajemen supplier.",
          icon: Truck,
        },
        {
          title: "Laporan penjualan",
          description: "Analitik penjualan, margin, dan pelanggan.",
          icon: PieChart,
        },
      ],
      requirements: [
        {
          title: "Data produk obat",
          description: "Nama, kategori, harga, satuan, dan batas kadaluarsa.",
          icon: PillIcon,
        },
        {
          title: "Stok awal & minimum",
          description: "Level stok awal dan titik pemesanan ulang per produk.",
          icon: Boxes,
        },
        {
          title: "Data supplier",
          description: "Vendor, daftar harga, dan waktu pengiriman.",
          icon: Truck,
        },
        {
          title: "Alur resep",
          description: "Verifikasi resep dokter dan pencatatan pelayanan.",
          icon: ClipboardList,
        },
      ],
      menuCards: [
        {
          title: "KPI Apotek",
          description: "Monitor penjualan, transaksi, resep, dan stok.",
          icon: Receipt,
          items: [
            { label: "Penjualan Bulan Ini", icon: Receipt },
            { label: "Transaksi Hari Ini", icon: ShoppingCart },
            { label: "Resep", icon: ClipboardList },
            { label: "Stok Kritis", icon: Boxes },
          ],
        },
        {
          title: "POS & Penjualan",
          description: "Kelola kasir, penjualan, resep dokter, dan pelanggan.",
          icon: ShoppingCart,
          items: [
            { label: "POS Kasir", icon: ShoppingCart },
            { label: "Penjualan", icon: Receipt },
            { label: "Resep Dokter", icon: ClipboardList },
            { label: "Pelanggan", icon: UserRound },
          ],
        },
        {
          title: "Persediaan Obat",
          description: "Kelola produk obat, inventaris, stok opname, dan kadaluarsa.",
          icon: PillIcon,
          items: [
            { label: "Produk Obat", icon: PillIcon },
            { label: "Inventaris", icon: Boxes },
            { label: "Stok Opname", icon: ScanBarcode },
            { label: "Kadaluarsa", icon: CalendarX2 },
          ],
        },
        {
          title: "Pembelian & Supplier",
          description: "Kelola pembelian, supplier, dan laporan.",
          icon: Truck,
          items: [
            { label: "Pembelian", icon: ShoppingCart },
            { label: "Supplier", icon: Truck },
            { label: "Keuangan", icon: Wallet },
            { label: "Laporan", icon: PieChart },
          ],
        },
      ],
    },
  },
  {
    id: "clinic",
    name: "ERP Klinik",
    tagline: "Layanan Pasien",
    description:
      "Manajemen pasien, apotek, inventaris dan keuangan untuk klinik.",
    route: "/clinic",
    landingRoute: "/clinic/landing",
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
    landing: {
      headline: "Operasional layanan kesehatan jadi sederhana.",
      intro: "Pasien, janji temu, apotek, dan penagihan bekerja dalam satu sistem.",
      features: [
        {
          title: "Rekam medis pasien",
          description: "Riwayat medis dan setiap kunjungan dalam satu profil.",
          icon: UserRound,
        },
        {
          title: "Janji temu",
          description: "Penjadwalan yang selaras dengan ketersediaan dokter.",
          icon: CalendarClock,
        },
        {
          title: "Apotek & inventaris",
          description: "Stok, resep, dan pemantauan kedaluwarsa.",
          icon: Pill,
        },
        {
          title: "Laboratorium",
          description: "Permintaan pemeriksaan dan pelacakan hasil.",
          icon: FlaskConical,
        },
        {
          title: "Penagihan",
          description: "Layanan, klaim asuransi, dan pembayaran.",
          icon: Receipt,
        },
        {
          title: "Laporan",
          description: "Wawasan pendapatan, pasien, dan inventaris.",
          icon: PieChart,
        },
      ],
      requirements: [
        {
          title: "Profil dokter & staf",
          description: "Nomor SIP, spesialisasi, dan jadwal.",
          icon: HeartPulse,
        },
        {
          title: "Daftar harga layanan",
          description: "Tarif konsultasi, tindakan, dan obat-obatan.",
          icon: Receipt,
        },
        {
          title: "Standar rekam medis",
          description: "Template dokumen dan alur pencatatan.",
          icon: FileText,
        },
        {
          title: "Stok apotek",
          description: "Stok awal dan titik pemesanan ulang.",
          icon: Boxes,
        },
      ],
      menuCards: [
        {
          title: "KPI Klinik",
          description: "Monitor pasien, janji temu, dokter, dan pendapatan.",
          icon: UserRound,
          items: [
            { label: "Pasien Hari Ini", icon: UserRound },
            { label: "Janji Temu", icon: CalendarClock },
            { label: "Dokter On Duty", icon: HeartPulse },
            { label: "Pendapatan", icon: Wallet },
          ],
        },
        {
          title: "Layanan Klinik",
          description: "Kelola pasien, dokter, janji temu, dan rekam medis.",
          icon: FileText,
          items: [
            { label: "Pasien", icon: UserRound },
            { label: "Dokter", icon: HeartPulse },
            { label: "Janji Temu", icon: CalendarClock },
            { label: "Rekam Medis", icon: FileText },
          ],
        },
        {
          title: "Fasilitas Klinik",
          description: "Kelola apotek, laboratorium, inventaris, dan tagihan.",
          icon: Pill,
          items: [
            { label: "Apotek", icon: Pill },
            { label: "Laboratorium", icon: FlaskConical },
            { label: "Inventaris", icon: Boxes },
            { label: "Tagihan", icon: Receipt },
          ],
        },
        {
          title: "Keuangan Klinik",
          description: "Pantau pendapatan, klaim asuransi, dan laporan.",
          icon: Wallet,
          items: [
            { label: "Pendapatan", icon: Wallet },
            { label: "Klaim Asuransi", icon: Receipt },
            { label: "Tagihan", icon: Receipt },
            { label: "Laporan", icon: PieChart },
          ],
        },
      ],
    },
  },
];

export const getIndustry = (id: IndustryId) =>
  industries.find((i) => i.id === id)!;