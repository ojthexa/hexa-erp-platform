import { Landmark, HeartHandshake, UsersRound, FileText, TrendingUp, AlertTriangle, ClipboardCheck, PieChart, Wallet, CalendarDays, BookOpen, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LandingContent } from "../industries";

export const yayasan: LandingContent = {
  headline: "Sistem ERP Yayasan untuk Pengelolaan Lembaga Sosial & Pendidikan",
  intro: "HEXA ERP Yayasan hadir sebagai solusi pengelolaan terpadu untuk yayasan pendidikan, sosial, dan keagamaan. Sistem ini mengintegrasikan manajemen unit usaha, donor management, program kegiatan, pelaporan keuangan, hingga keanggotaan dalam satu platform. Dengan transparansi data yang tinggi, HEXA ERP Yayasan membantu pengelola yayasan membangun kepercayaan publik dan meningkatkan efisiensi operasional.",
  features: [
    {
      title: "Unit usaha yayasan",
      description: "Kelola semua anak usaha: sekolah, rental, kios, dan properti.",
      icon: Landmark as LucideIcon,
    },
    {
      title: "Donor & donasi",
      description: "Manajemen donor, tracking donasi, dan issuance receipt.",
      icon: HeartHandshake as LucideIcon,
    },
    {
      title: "Program & kegiatan",
      description: "Rencana program tahunan, anggaran, dan monitoring realisasi.",
      icon: ClipboardCheck as LucideIcon,
    },
    {
      title: "Pelaporan keuangan",
      description: "Laporan dana masuk-keluar, audit trail, dan laporan resmi.",
      icon: FileText as LucideIcon,
    },
    {
      title: "Keanggotaan",
      description: "Data anggota, jenjang keanggotaan, dan hak anggota.",
      icon: UsersRound as LucideIcon,
    },
    {
      title: "Dashboard yayasan",
      description: "Overview keuangan, program aktif, dan metrik kinerja.",
      icon: TrendingUp as LucideIcon,
    },
  ],
  requirements: [
    {
      title: "Unit usaha",
      description: "Daftar unit usaha, struktur, dan profit center masing-masing.",
      icon: Landmark as LucideIcon,
    },
    {
      title: "Ketua & pengurus",
      description: "Struktur kepengurusan, jabatan, dan periode masa bakti.",
      icon: UsersRound as LucideIcon,
    },
    {
      title: "Program tahunan",
      description: "Rencana kegiatan, estimasi anggaran, dan target capaian.",
      icon: ClipboardCheck as LucideIcon,
    },
    {
      title: "Sistem pelaporan",
      description: "Format laporan keuangan sesuai regulasi yayasan.",
      icon: FileText as LucideIcon,
    },
  ],
  menuCards: [
    {
      title: "KPI Yayasan",
      description: "Monitor total aset, program berjalan, dan kepatuhan laporan.",
      icon: TrendingUp as LucideIcon,
      items: [
        { label: "Total Aset", icon: Wallet as LucideIcon },
        { label: "Program Aktif", icon: ClipboardCheck as LucideIcon },
        { label: "Anggota Aktif", icon: UsersRound as LucideIcon },
        { label: "Laporan Bulan Ini", icon: FileText as LucideIcon },
      ],
    },
    {
      title: "Unit Usaha",
      description: "Kelola semua anak usaha dan kontribusi keuangan.",
      icon: Landmark as LucideIcon,
      items: [
        { label: "Daftar Unit", icon: Landmark as LucideIcon },
        { label: "Laporan Keuangan", icon: FileText as LucideIcon },
        { label: "Kontribusi", icon: Wallet as LucideIcon },
        { label: "Audit", icon: AlertTriangle as LucideIcon },
      ],
    },
    {
      title: "Donor & Donasi",
      description: "Kelola donor terdaftar, tracking donasi, dan receipt.",
      icon: HeartHandshake as LucideIcon,
      items: [
        { label: "Daftar Donor", icon: UsersRound as LucideIcon },
        { label: "Transaksi Donasi", icon: Wallet as LucideIcon },
        { label: "Bukti Penerimaan", icon: FileText as LucideIcon },
        { label: "Analisis Donasi", icon: PieChart as LucideIcon },
      ],
    },
    {
      title: "Program & Keanggotaan",
      description: "Rencana program, anggaran, dan data anggota yayasan.",
      icon: ClipboardCheck as LucideIcon,
      items: [
        { label: "Program Tahunan", icon: CalendarDays as LucideIcon },
        { label: "Realisasi Anggaran", icon: TrendingUp as LucideIcon },
        { label: "Data Anggota", icon: UsersRound as LucideIcon },
        { label: "Hak & Kewajiban", icon: ShieldCheck as LucideIcon },
      ],
    },
  ],
};