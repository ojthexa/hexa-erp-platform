import { BookOpen, Target, TrendingUp, ClipboardCheck, UsersRound, GraduationCap, FileText, ShieldCheck, CalendarDays } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LandingContent } from "../industries";

export const tahfidz: LandingContent = {
  headline: "Sistem ERP Tahfidz untuk Manajemen Hafalan Al-Qur'an",
  intro: "HEXA ERP Tahfidz hadir sebagai solusi digital untuk pesantren, madrasah, dan lembaga tahfidz modern. Sistem ini mengelola data santri, halaqoh, setoran hafalan, murojaah, tilawah, hingga sertifikasi khatam dalam satu platform terintegrasi. Dengan dashboard progress real-time dan laporan berkala, HEXA ERP Tahfidz membantu ustadz dan administrator memantau perkembangan hafalan santri secara efektif.",
  features: [
    {
      title: "Data santri",
      description: "Profil lengkap, asrama, dan riwayat hafalan.",
      icon: UsersRound as LucideIcon,
    },
    {
      title: "Target hafalan",
      description: "Penetapan target juz, halaman, dan potongan ayat.",
      icon: Target as LucideIcon,
    },
    {
      title: "Setoran & murojaah",
      description: "Catatan setoran harian dan jadwal murojaah.",
      icon: ClipboardCheck as LucideIcon,
    },
    {
      title: "Halaqoh",
      description: "Kelola kelompok belajar dan jadwal mengaji.",
      icon: GraduationCap as LucideIcon,
    },
    {
      title: "Evaluasi ustadz",
      description: "Rating hafalan, tilawah, dan tajwid per santri.",
      icon: FileText as LucideIcon,
    },
    {
      title: "Dashboard progress",
      description: "Visualisasi progress hafalan per santri dan kelas.",
      icon: TrendingUp as LucideIcon,
    },
  ],
  requirements: [
    {
      title: "Data santri dasar",
      description: "Nama, asal, asrama, dan jurusan setiap santri.",
      icon: UsersRound as LucideIcon,
    },
    {
      title: "Struktur halaqoh",
      description: "Pembagian kelompok, ustadz pengampu, dan jadwal.",
      icon: GraduationCap as LucideIcon,
    },
    {
      title: "Target hafalan",
      description: "Target per juz, halaman, atau potongan ayat.",
      icon: Target as LucideIcon,
    },
    {
      title: "Peran akses",
      description: "Admin, ustadz, dan wali santri dengan hak berbeda.",
      icon: ShieldCheck as LucideIcon,
    },
  ],
  menuCards: [
    {
      title: "KPI Tahfidz",
      description: "Monitor santri, target hafalan, dan ustadz aktif.",
      icon: GraduationCap as LucideIcon,
      items: [
        { label: "Total Santri", icon: UsersRound as LucideIcon },
        { label: "Target Hafalan", icon: Target as LucideIcon },
        { label: "Ustadz Aktif", icon: GraduationCap as LucideIcon },
        { label: "Progress Rata-rata", icon: TrendingUp as LucideIcon },
      ],
    },
    {
      title: "Santri & Hafalan",
      description: "Kelola data santri, setoran, dan murojaah.",
      icon: UsersRound as LucideIcon,
      items: [
        { label: "Daftar Santri", icon: UsersRound as LucideIcon },
        { label: "Setoran Harian", icon: ClipboardCheck as LucideIcon },
        { label: "Murojaah", icon: CalendarDays as LucideIcon },
        { label: "Target Hafalan", icon: Target as LucideIcon },
      ],
    },
    {
      title: "Halaqoh & Ustadz",
      description: "Kelola halaqoh, jadwal, dan evaluasi ustadz.",
      icon: GraduationCap as LucideIcon,
      items: [
        { label: "Halaqoh", icon: GraduationCap as LucideIcon },
        { label: "Ustadz", icon: UsersRound as LucideIcon },
        { label: "Jadwal", icon: CalendarDays as LucideIcon },
        { label: "Evaluasi", icon: FileText as LucideIcon },
      ],
    },
    {
      title: "Laporan & Sertifikasi",
      description: "Generate laporan progress dan sertifikasi khatam.",
      icon: FileText as LucideIcon,
      items: [
        { label: "Progress Santri", icon: TrendingUp as LucideIcon },
        { label: "Laporan Halaqoh", icon: FileText as LucideIcon },
        { label: "Sertifikasi Khatam", icon: GraduationCap as LucideIcon },
        { label: "Rekap Setoran", icon: ClipboardCheck as LucideIcon },
      ],
    },
  ],
};