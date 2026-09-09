import {
  Building2,
  Package,
  FolderKanban,
  ListChecks,
  Zap,
  LayoutDashboard,
  Users,
  ClipboardCheck,
  Banknote,
  CalendarClock,
  PieChart,
  Receipt,
  Wallet,
  Car,
  Network,
  FileText,
  UserCog,
  Database,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LandingContent } from "../industries";

export const officeLanding: LandingContent = {
  headline: "Sistem ERP Terintegrasi untuk Kantor Modern",
  intro: "HEXA ERP Office hadir sebagai solusi all-in-one yang mengintegrasikan HR, payroll, absensi, inventori, dan administrasi dalam satu platform. Dirancang khusus untuk kebutuhan kantor modern, sistem ini membantu perusahaan mengelola seluruh aspek kepegawaian dan operasional secara efisien. Dengan fitur lengkap mulai dari rekrutmen hingga penggajian otomatis, HEXA ERP Office menjadi mitra terpercaya untuk mengembangkan bisnis Anda.",
  features: [
    {
      title: "Catatan HR",
      description: "Profil karyawan, kontrak, dan riwayat pekerjaan.",
      icon: Users as LucideIcon,
    },
    {
      title: "Absensi & cuti",
      description: "Absensi harian, saldo cuti, dan alur persetujuan.",
      icon: CalendarClock as LucideIcon,
    },
    {
      title: "Penggajian",
      description: "Komponen gaji, pajak, dan slip gaji otomatis.",
      icon: Banknote as LucideIcon,
    },
    {
      title: "Rekrutmen",
      description: "Alur dari lowongan hingga onboarding karyawan baru.",
      icon: ListChecks as LucideIcon,
    },
    {
      title: "Aset & inventaris",
      description: "Pantau peralatan kantor, aset, dan barang habis pakai.",
      icon: Package as LucideIcon,
    },
    {
      title: "Laporan & analitik",
      description: "Wawasan jumlah karyawan dan biaya HR per departemen.",
      icon: PieChart as LucideIcon,
    },
  ],
  requirements: [
    {
      title: "Struktur organisasi",
      description: "Departemen, jabatan, dan garis pelaporan.",
      icon: Network as LucideIcon,
    },
    {
      title: "Kebijakan kepegawaian",
      description: "Hak cuti, komponen gaji, serta pengaturan pajak/BPJS.",
      icon: FileText as LucideIcon,
    },
    {
      title: "Alur persetujuan",
      description: "Tentukan siapa yang menyetujui cuti, klaim, dan perubahan data.",
      icon: UserCog as LucideIcon,
    },
    {
      title: "Data master karyawan",
      description: "Data pribadi, kontrak, dan rekening bank setiap karyawan.",
      icon: Database as LucideIcon,
    },
  ],
  menuCards: [
    {
      title: "KPI Karyawan",
      description: "Monitor total karyawan, kehadiran, payroll, dan cuti secara real-time.",
      icon: Users as LucideIcon,
      items: [
        { label: "Total Karyawan", icon: Users as LucideIcon },
        { label: "Hadir Hari Ini", icon: ClipboardCheck as LucideIcon },
        { label: "Payroll Bulanan", icon: Banknote as LucideIcon },
        { label: "Cuti Pending", icon: CalendarClock as LucideIcon },
      ],
    },
    {
      title: "Ringkasan Payroll",
      description: "Tren gaji bulanan dengan grafik batang interaktif.",
      icon: Banknote as LucideIcon,
      items: [
        { label: "Grafik Tren", icon: PieChart as LucideIcon },
        { label: "Rekap Bulanan", icon: Receipt as LucideIcon },
        { label: "Per Departemen", icon: Wallet as LucideIcon },
      ],
    },
    {
      title: "Aset Kantor",
      description: "Pantau ketersediaan laptop, monitor, ruang rapat, dan kendaraan.",
      icon: Package as LucideIcon,
      items: [
        { label: "Laptop", icon: Package as LucideIcon },
        { label: "Monitor", icon: Package as LucideIcon },
        { label: "Ruang Rapat", icon: Building2 as LucideIcon },
        { label: "Kendaraan", icon: Car as LucideIcon },
      ],
    },
    {
      title: "Proyek & Tugas",
      description: "Aktivitas terbaru, daftar tugas, dan aksi cepat untuk tim.",
      icon: FolderKanban as LucideIcon,
      items: [
        { label: "Dashboard Proyek", icon: LayoutDashboard as LucideIcon },
        { label: "Tambah Tugas", icon: ListChecks as LucideIcon },
        { label: "Aksi Cepat", icon: Zap as LucideIcon },
      ],
    },
  ],
};