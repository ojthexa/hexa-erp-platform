import type { LucideIcon } from "lucide-react";
import {
  HeartPulse,
  UserRound,
  Pill,
  FlaskConical,
  Boxes,
  Receipt,
  Wallet,
  PieChart,
  Settings,
  ClipboardCheck,
  Banknote,
  Users,
  CalendarClock,
  FileText,
} from "lucide-react";

export const clinic = {
  headline: "Sistem ERP Klinik Modern untuk Layanan Kesehatan Terpadu",
  intro: "HEXA ERP Clinic menghadirkan solusi komprehensif untuk pengelolaan klinik modern. Sistem ini mengintegrasikan manajemen pasien, rekam medis elektronik, penjadwalan janji temu, apotek, laboratorium, hingga penagihan dan klaim asuransi dalam satu platform terintegrasi. Dengan antarmuka yang intuitif dan fitur lengkap, HEXA ERP Clinic membantu klinik Anda memberikan pelayanan kesehatan yang lebih baik, efisien, dan profesional.",
  features: [
    {
      title: "Rekam medis pasien",
      description: "Riwayat medis dan setiap kunjungan dalam satu profil.",
      icon: UserRound as LucideIcon,
    },
    {
      title: "Janji temu",
      description: "Penjadwalan yang selaras dengan ketersediaan dokter.",
      icon: CalendarClock as LucideIcon,
    },
    {
      title: "Apotek & inventaris",
      description: "Stok, resep, dan pemantauan kedaluwarsa.",
      icon: Pill as LucideIcon,
    },
    {
      title: "Laboratorium",
      description: "Permintaan pemeriksaan dan pelacakan hasil.",
      icon: FlaskConical as LucideIcon,
    },
    {
      title: "Penagihan",
      description: "Layanan, klaim asuransi, dan pembayaran.",
      icon: Receipt as LucideIcon,
    },
    {
      title: "Laporan",
      description: "Wawasan pendapatan, pasien, dan inventaris.",
      icon: PieChart as LucideIcon,
    },
  ],
  requirements: [
    {
      title: "Profil dokter & staf",
      description: "Nomor SIP, spesialisasi, dan jadwal.",
      icon: HeartPulse as LucideIcon,
    },
    {
      title: "Daftar harga layanan",
      description: "Tarif konsultasi, tindakan, dan obat-obatan.",
      icon: Receipt as LucideIcon,
    },
    {
      title: "Standar rekam medis",
      description: "Template dokumen dan alur pencatatan.",
      icon: FileText as LucideIcon,
    },
    {
      title: "Stok apotek",
      description: "Stok awal dan titik pemesanan ulang.",
      icon: Boxes as LucideIcon,
    },
  ],
  menuCards: [
    {
      title: "KPI Klinik",
      description: "Monitor pasien, janji temu, dokter, dan pendapatan.",
      icon: UserRound as LucideIcon,
      items: [
        { label: "Pasien Hari Ini", icon: UserRound as LucideIcon },
        { label: "Janji Temu", icon: CalendarClock as LucideIcon },
        { label: "Dokter On Duty", icon: HeartPulse as LucideIcon },
        { label: "Pendapatan", icon: Wallet as LucideIcon },
      ],
    },
    {
      title: "Layanan Klinik",
      description: "Kelola pasien, dokter, janji temu, dan rekam medis.",
      icon: FileText as LucideIcon,
      items: [
        { label: "Pasien", icon: UserRound as LucideIcon },
        { label: "Dokter", icon: HeartPulse as LucideIcon },
        { label: "Janji Temu", icon: CalendarClock as LucideIcon },
        { label: "Rekam Medis", icon: FileText as LucideIcon },
      ],
    },
    {
      title: "Fasilitas Klinik",
      description: "Kelola apotek, laboratorium, inventaris, dan tagihan.",
      icon: Pill as LucideIcon,
      items: [
        { label: "Apotek", icon: Pill as LucideIcon },
        { label: "Laboratorium", icon: FlaskConical as LucideIcon },
        { label: "Inventaris", icon: Boxes as LucideIcon },
        { label: "Tagihan", icon: Receipt as LucideIcon },
      ],
    },
    {
      title: "Keuangan Klinik",
      description: "Pantau pendapatan, klaim asuransi, dan laporan.",
      icon: Wallet as LucideIcon,
      items: [
        { label: "Pendapatan", icon: Wallet as LucideIcon },
        { label: "Klaim Asuransi", icon: Receipt as LucideIcon },
        { label: "Tagihan", icon: Receipt as LucideIcon },
        { label: "Laporan", icon: PieChart as LucideIcon },
      ],
    },
  ],
};