import { GraduationCap, User, FileText, BookOpen, CalendarDays, UsersRound, ChartPie, ShieldCheck, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LandingContent } from "../industries";

export const schoolAcademic: LandingContent = {
  headline: "Sistem Informasi Akademik Modern untuk Sekolah & Madrasah",
  intro: "HEXA ERP Academic menghadirkan solusi terpadu untuk pengelolaan operasional akademik sekolah. Dari data siswa, manajemen kelas, penjadwalan pelajaran, ujian, penilaian, hingga generate rapor otomatis - semua tersedia dalam satu platform. Didukung fitur pembayaran SPP online dan arsip dokumen digital, HEXA ERP Academic menjadi mitra terpercaya untuk transformasi digital pendidikan Anda.",
  features: [
    {
      title: "Data siswa",
      description: "Profil, wali, kelas, dan riwayat akademik lengkap.",
      icon: User as LucideIcon,
    },
    {
      title: "Manajemen kelas",
      description: "Penugasan guru, jadwal pelajaran, dan ruangan.",
      icon: GraduationCap as LucideIcon,
    },
    {
      title: "Penjadwalan",
      description: "Jadwal otomatis yang menghindari tabrakan kelas.",
      icon: CalendarDays as LucideIcon,
    },
    {
      title: "Ujian & nilai",
      description: "Input nilai, rumus rata-rata, dan grade otomatis.",
      icon: FileText as LucideIcon,
    },
    {
      title: "Rapor digital",
      description: "Generate rapor semester sesuai format sekolah.",
      icon: BookOpen as LucideIcon,
    },
    {
      title: "Laporan akademik",
      description: "Statistik kehadiran, nilai, dan perkembangan siswa.",
      icon: ChartPie as LucideIcon,
    },
  ],
  requirements: [
    {
      title: "Kurikulum & mata pelajaran",
      description: "Daftar mapel, bobot nilai, dan standar kelulusan.",
      icon: BookOpen as LucideIcon,
    },
    {
      title: "Struktur kelas",
      description: "Jurusan, rombel, dan wali kelas masing-masing.",
      icon: GraduationCap as LucideIcon,
    },
    {
      title: "Template rapor",
      description: "Format rapor sesuai kurikulum yang berlaku.",
      icon: FileText as LucideIcon,
    },
    {
      title: "Peran akses",
      description: "Admin akademik, guru, wali kelas, dan orang tua.",
      icon: ShieldCheck as LucideIcon,
    },
  ],
  menuCards: [
    {
      title: "KPI Akademik",
      description: "Monitor siswa, kehadiran, nilai rata-rata, dan guru.",
      icon: GraduationCap as LucideIcon,
      items: [
        { label: "Total Siswa", icon: UsersRound as LucideIcon },
        { label: "Hadir Hari Ini", icon: CalendarDays as LucideIcon },
        { label: "Rata-Rata Nilai", icon: ChartPie as LucideIcon },
        { label: "Guru Aktif", icon: User as LucideIcon },
      ],
    },
    {
      title: "Data Siswa",
      description: "Kelola profil, wali, kelas, dan riwayat akademik.",
      icon: User as LucideIcon,
      items: [
        { label: "Daftar Siswa", icon: UsersRound as LucideIcon },
        { label: "Data Wali", icon: User as LucideIcon },
        { label: "Riwayat Akademik", icon: FileText as LucideIcon },
        { label: "Kelas", icon: GraduationCap as LucideIcon },
      ],
    },
    {
      title: "Akademik",
      description: "Jadwal, nilai, ujian, dan generate rapor.",
      icon: CalendarDays as LucideIcon,
      items: [
        { label: "Jadwal Pelajaran", icon: CalendarDays as LucideIcon },
        { label: "Input Nilai", icon: FileText as LucideIcon },
        { label: "Ujian", icon: BookOpen as LucideIcon },
        { label: "Rapor", icon: FileText as LucideIcon },
      ],
    },
    {
      title: "Administrasi",
      description: "Kurikulum, struktur, dan laporan akademik.",
      icon: BookOpen as LucideIcon,
      items: [
        { label: "Kurikulum", icon: BookOpen as LucideIcon },
        { label: "Mata Pelajaran", icon: GraduationCap as LucideIcon },
        { label: "Struktur Kelas", icon: Database as LucideIcon },
        { label: "Laporan", icon: ChartPie as LucideIcon },
      ],
    },
  ],
};