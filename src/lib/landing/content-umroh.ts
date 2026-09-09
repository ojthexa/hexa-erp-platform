import { Plane, BedDouble, MapPinned, Stamp, Ticket, Gift, TrendingUp, AlertTriangle, ClipboardCheck, CalendarDays, BookOpen, Wallet, UsersRound, PieChart, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LandingContent } from "../industries";

export const umroh: LandingContent = {
  headline: "Sistem ERP Umroh Terintegrasi untuk Penyelenggara Perjalanan Ibadah",
  intro: "HEXA ERP Umroh hadir sebagai solusi all-in-one untuk pengelolaan perjalanan ibadah umroh dan haji khusus. Sistem ini mengintegrasikan registrasi jamaah, pengelolaan paket perjalanan, reservasi hotel dan penerbangan, manasik, hingga pelaporan keuangan dan keberangkatan. Dengan sistem yang terpusat, penyelenggara ibadah dapat mengelola operasional secara efisien dan meningkatkan kepuasan jamaah.",
  features: [
    {
      title: "Registrasi jamaah",
      description: "Pendaftaran online, verifikasi dokumen, dan status pembayaran.",
      icon: ClipboardCheck as LucideIcon,
    },
    {
      title: "Paket perjalanan",
      description: "Kelola paket umroh, harga, dan fasilitas yang ditawarkan.",
      icon: Ticket as LucideIcon,
    },
    {
      title: "Reservasi hotel & pesawat",
      description: "Booking hotel di Mekkah/Medina dan tiket pesawat PP.",
      icon: BedDouble as LucideIcon,
    },
    {
      title: "Manasik & briefing",
      description: "Jadwal manasik, materi, dan absensi peserta pelatihan.",
      icon: BookOpen as LucideIcon,
    },
    {
      title: "Keberangkatan & visa",
      description: "Tracking visa, daftar nominal, dan manifes penumpang.",
      icon: Stamp as LucideIcon,
    },
    {
      title: "Laporan keuangan",
      description: "Arus kas per group, laporan laba rugi, dan settlement.",
      icon: TrendingUp as LucideIcon,
    },
  ],
  requirements: [
    {
      title: "Master paket perjalanan",
      description: "Detail layanan, hotel, transportasi, dan F&B per paket.",
      icon: Ticket as LucideIcon,
    },
    {
      title: "Data supplier",
      description: "Daftar hotel partner, maskapai, dan travel ground handler.",
      icon: Plane as LucideIcon,
    },
    {
      title: "Alur pembayaran",
      description: "SKDP, cicilan, termin, dan settlement akhir.",
      icon: Wallet as LucideIcon,
    },
    {
      title: "Kelompok keberangkatan",
      description: "Pembagian group, tanggal berangkat, dan jumlah jamaah.",
      icon: CalendarDays as LucideIcon,
    },
  ],
  menuCards: [
    {
      title: "KPI Umroh",
      description: "Monitor jamaah aktif, revenue, dan on-time departure.",
      icon: TrendingUp as LucideIcon,
      items: [
        { label: "Jamaah Aktif", icon: UsersRound as LucideIcon },
        { label: "Revenue Bulan Ini", icon: Wallet as LucideIcon },
        { label: "Group Berangkat", icon: Plane as LucideIcon },
        { label: "Tunggakan", icon: AlertTriangle as LucideIcon },
      ],
    },
    {
      title: "Jamaah & Paket",
      description: "Registrasi, status pembayaran, dan pemilihan paket.",
      icon: ClipboardCheck as LucideIcon,
      items: [
        { label: "Daftar Jamaah", icon: UsersRound as LucideIcon },
        { label: "Paket Perjalanan", icon: Ticket as LucideIcon },
        { label: "Status Pembayaran", icon: Wallet as LucideIcon },
        { label: "Dokumen & Visa", icon: Stamp as LucideIcon },
      ],
    },
    {
      title: "Reservasi & Group",
      description: "Hotel, pesawat, dan pembagian group keberangkatan.",
      icon: Plane as LucideIcon,
      items: [
        { label: "Reservasi Hotel", icon: BedDouble as LucideIcon },
        { label: "Tiket Pesawat", icon: Plane as LucideIcon },
        { label: "Group Keberangkatan", icon: CalendarDays as LucideIcon },
        { label: "Ground Handler", icon: MapPinned as LucideIcon },
      ],
    },
    {
      title: "Keuangan & Laporan",
      description: "Arus kas, settlement, dan laporan keuntungan per group.",
      icon: Wallet as LucideIcon,
      items: [
        { label: "Arus Kas", icon: TrendingUp as LucideIcon },
        { label: "Settlement", icon: ClipboardCheck as LucideIcon },
        { label: "Profit per Group", icon: PieChart as LucideIcon },
        { label: "Laporan Keuangan", icon: FileText as LucideIcon },
      ],
    },
  ],
};