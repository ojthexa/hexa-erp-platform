import { Kanban, Timer, Milestone, GitBranch, Target, FolderKanban, Users, CalendarDays, FileText, ChartPie, AlertTriangle, TrendingUp, Settings, ClipboardCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LandingContent } from "../industries";

export const manajemenProyek: LandingContent = {
  headline: "Sistem ERP Manajemen Proyek Terintegrasi untuk Kontraktor & Developer",
  intro: "HEXA ERP Manajemen Proyek hadir sebagai solusi all-in-one untuk pengelolaan proyek konstruksi dan pengembangan properti. Dari perencanaan proyek, procurement material, hingga monitoring progress secara real-time. Sistem ini membantu kontraktor dan developer mengawasi setiap tahapan proyek, mengontrol biaya, dan memastikan penyelesaian tepat waktu dengan kualitas terjamin.",
  features: [
    {
      title: "Perencanaan proyek",
      description: "RAB, timeline, milestone, dan alokasi sumber daya.",
      icon: FolderKanban as LucideIcon,
    },
    {
      title: "Procurement material",
      description: "Purchase order, pengiriman, dan kontrol stok material.",
      icon: ClipboardCheck as LucideIcon,
    },
    {
      title: "Monitoring progress",
      description: "Update progres harian per task dan visualisasi Gantt chart.",
      icon: ChartPie as LucideIcon,
    },
    {
      title: "Manajemen vendor",
      description: "Daftar supplier, harga material, dan riwayat transaksi.",
      icon: Users as LucideIcon,
    },
    {
      title: "Pengawasan lapangan",
      description: "Dokumentasi foto, laporan harian, dan issue tracking.",
      icon: AlertTriangle as LucideIcon,
    },
    {
      title: "Laporan & analisis",
      description: "Analisis RAB vs actual cost dan forecast penyelesaian.",
      icon: TrendingUp as LucideIcon,
    },
  ],
  requirements: [
    {
      title: "Struktur WBS proyek",
      description: "Breakdown work structure per fase dan sub-proyek.",
      icon: GitBranch as LucideIcon,
    },
    {
      title: "Daftar harga material",
      description: "Harga satuan dan supplier untuk setiap material.",
      icon: Settings as LucideIcon,
    },
    {
      title: "Timeline & milestone",
      description: "Durasi pekerjaan dan tanggal target penyelesaian.",
      icon: CalendarDays as LucideIcon,
    },
    {
      title: "Alur approval",
      description: "Proses persetujuan PO, claim, dan perubahan desain.",
      icon: FileText as LucideIcon,
    },
  ],
  menuCards: [
    {
      title: "KPI Proyek",
      description: "Monitor RAB, progress, cost variance, dan milestone.",
      icon: ChartPie as LucideIcon,
      items: [
        { label: "Total Proyek", icon: FolderKanban as LucideIcon },
        { label: "Progress Keseluruhan", icon: TrendingUp as LucideIcon },
        { label: "RAB vs Actual", icon: AlertTriangle as LucideIcon },
        { label: "Milestone Aktif", icon: Milestone as LucideIcon },
      ],
    },
    {
      title: "Rencana Proyek",
      description: "Atur RAB, timeline, dan alokasi sumber daya.",
      icon: FolderKanban as LucideIcon,
      items: [
        { label: "Daftar Proyek", icon: FolderKanban as LucideIcon },
        { label: "WBS / Breakdown", icon: GitBranch as LucideIcon },
        { label: "Timeline & Gantt", icon: Timer as LucideIcon },
        { label: "Alokasi Tim", icon: Users as LucideIcon },
      ],
    },
    {
      title: "Procurement",
      description: "Kelola pembelian material, PO, dan stok gudang.",
      icon: ClipboardCheck as LucideIcon,
      items: [
        { label: "Purchase Order", icon: ClipboardCheck as LucideIcon },
        { label: "Material & Harga", icon: Settings as LucideIcon },
        { label: "Supplier", icon: Users as LucideIcon },
        { label: "Stok Gudang", icon: FolderKanban as LucideIcon },
      ],
    },
    {
      title: "Lapangan & Laporan",
      description: "Dokumentasi, laporan harian, dan issue tracking.",
      icon: FileText as LucideIcon,
      items: [
        { label: "Laporan Harian", icon: FileText as LucideIcon },
        { label: "Foto Dokumentasi", icon: ChartPie as LucideIcon },
        { label: "Issue Tracking", icon: AlertTriangle as LucideIcon },
        { label: "Milestone", icon: Milestone as LucideIcon },
      ],
    },
  ],
};