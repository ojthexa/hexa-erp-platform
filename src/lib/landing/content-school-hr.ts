import { BriefcaseBusiness, UserCog, Repeat, CalendarClock, Banknote, FileText, ShieldCheck, Database, Package, Mail, Wallet, PieChart, UserPlus, Users, ClipboardCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LandingContent } from "../industries";

export const schoolHR: LandingContent = {
  headline: "Sistem ERP Manajemen Karyawan Sekolah Terintegrasi",
  intro: "HEXA ERP School HR dirancang khusus untuk manajemen sumber daya manusia di lingkungan pendidikan. Sistem ini mengintegrasikan data guru, staf, absensi, cuti, penggajian, guru pengganti, hingga rekrutmen dalam satu platform. Dengan fitur lengkap dan user-friendly, HEXA ERP School HR membantu sekolah Anda mengelola karyawan dengan lebih efisien, transparan, dan profesional.",
  features: [
    {
      title: "Data guru & staf",
      description: "Profil lengkap, riwayat kerja, dan dokumen yang tertata.",
      icon: UserCog as LucideIcon,
    },
    {
      title: "Absensi harian",
      description: "Catat kehadiran guru setiap hari dengan verifikasi cepat.",
      icon: ClipboardCheck as LucideIcon,
    },
    {
      title: "Guru pengganti",
      description: "Atur dan lacak guru pengganti untuk setiap pelajaran kosong.",
      icon: Repeat as LucideIcon,
    },
    {
      title: "Manajemen cuti",
      description: "Ajukan, menyetujui, dan pantau saldo cuti karyawan.",
      icon: CalendarClock as LucideIcon,
    },
    {
      title: "Payroll terintegrasi",
      description: "Hitung gaji otomatis dengan pemotongan yang telah dikonfigurasi.",
      icon: Banknote as LucideIcon,
    },
    {
      title: "Administrasi & laporan",
      description: "Aset, surat, keuangan, dan laporan HR kapan saja.",
      icon: PieChart as LucideIcon,
    },
  ],
  requirements: [
    {
      title: "Data karyawan terpusat",
      description: "Nama, jabatan, golongan, dan data keluarga setiap karyawan.",
      icon: Database as LucideIcon,
    },
    {
      title: "Kebijakan gaji & hak cuti",
      description: "Besaran gaji, tingkat penyesuaian, dan aturan cuti.",
      icon: FileText as LucideIcon,
    },
    {
      title: "Jadwal mengajar",
      description: "Penugasan guru per jam pelajaran untuk pelacakan absensi.",
      icon: CalendarClock as LucideIcon,
    },
    {
      title: "Peran & izin akses",
      description: "Pembedaan hak akses admin HR, kepala sekolah, dan staf.",
      icon: ShieldCheck as LucideIcon,
    },
  ],
  menuCards: [
    {
      title: "KPI Guru & Staf",
      description: "Monitor total guru, kehadiran, payroll, dan guru pengganti.",
      icon: UserCog as LucideIcon,
      items: [
        { label: "Total Guru", icon: UserCog as LucideIcon },
        { label: "Hadir Hari Ini", icon: ClipboardCheck as LucideIcon },
        { label: "Guru Pengganti", icon: Repeat as LucideIcon },
        { label: "Payroll Bulanan", icon: Banknote as LucideIcon },
      ],
    },
    {
      title: "Absensi & Cuti",
      description: "Catat kehadiran harian dan kelola permintaan cuti.",
      icon: CalendarClock as LucideIcon,
      items: [
        { label: "Absensi Harian", icon: ClipboardCheck as LucideIcon },
        { label: "Guru Pengganti", icon: Repeat as LucideIcon },
        { label: "Permintaan Cuti", icon: CalendarClock as LucideIcon },
        { label: "Saldo Cuti", icon: Banknote as LucideIcon },
      ],
    },
    {
      title: "Administrasi",
      description: "Aset, surat, keuangan, dan laporan HR.",
      icon: Package as LucideIcon,
      items: [
        { label: "Aset Sekolah", icon: Package as LucideIcon },
        { label: "Surat Edaran", icon: Mail as LucideIcon },
        { label: "Keuangan", icon: Wallet as LucideIcon },
        { label: "Laporan HR", icon: PieChart as LucideIcon },
      ],
    },
    {
      title: "Rekrutmen",
      description: "Proses perekrutan guru dan staf baru.",
      icon: UserPlus as LucideIcon,
      items: [
        { label: "Lowongan", icon: UserPlus as LucideIcon },
        { label: "Calon Kandidat", icon: Users as LucideIcon },
        { label: "Wawancara", icon: BriefcaseBusiness as LucideIcon },
        { label: "Onboarding", icon: UserCog as LucideIcon },
      ],
    },
  ],
};