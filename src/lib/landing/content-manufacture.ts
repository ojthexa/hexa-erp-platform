import { Cpu, CheckCircle2, ListTree, ClipboardList, AlertTriangle, TrendingUp, Boxes, Truck, Settings, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LandingContent } from "../industries";

export const manufacture: LandingContent = {
  headline: "Sistem ERP Manufaktur Canggih untuk Produksi & Pabrik",
  intro: "HEXA ERP Manufacture dirancang khusus untuk kebutuhan manufaktur dan industri pabrik. Sistem ini mengintegrasikan perencanaan produksi, Bill of Materials (BOM), work order, monitoring mesin, quality control, maintenance, hingga manajemen bahan baku dan logistik. Dengan fitur predictive maintenance dan real-time production tracking, HEXA ERP Manufacture membantu pabrik Anda meningkatkan efisiensi produksi dan mengurangi downtime.",
  features: [
    {
      title: "Work order",
      description: "Instruksi produksi dari perencanaan hingga eksekusi.",
      icon: ClipboardList as LucideIcon,
    },
    {
      title: "Bill of Materials (BOM)",
      description: "Daftar bahan baku dan komponen setiap produk jadi.",
      icon: ListTree as LucideIcon,
    },
    {
      title: "Quality control",
      description: "Inspeksi kualitas produk sebelum packaging.",
      icon: CheckCircle2 as LucideIcon,
    },
    {
      title: "Perawatan mesin",
      description: "Jadwal preventive maintenance dan tracking downtime.",
      icon: Settings as LucideIcon,
    },
    {
      title: "Stok bahan baku",
      description: "Kelola persediaan dan peringatan stok minimum.",
      icon: Boxes as LucideIcon,
    },
    {
      title: "Laporan produksi",
      description: "Analitik output, yield rate, dan efisiensi lini.",
      icon: BarChart3 as LucideIcon,
    },
  ],
  requirements: [
    {
      title: "Struktur BOM",
      description: "Komposisi bahan baku per produk produksi.",
      icon: ListTree as LucideIcon,
    },
    {
      title: "Jalur produksi",
      description: "Rute manufacturing, stasiun kerja, dan durasi.",
      icon: Cpu as LucideIcon,
    },
    {
      title: "Standar kualitas",
      description: "Spesifikasi produk dan toleransi defect.",
      icon: CheckCircle2 as LucideIcon,
    },
    {
      title: "Data mesin & alat",
      description: "Master mesin, kapasitas, dan jadwal maintenance.",
      icon: Settings as LucideIcon,
    },
  ],
  menuCards: [
    {
      title: "KPI Produksi",
      description: "Monitor output, defect, OEE, dan downtime mesin.",
      icon: TrendingUp as LucideIcon,
      items: [
        { label: "Output Hari Ini", icon: TrendingUp as LucideIcon },
        { label: "Defect Rate", icon: AlertTriangle as LucideIcon },
        { label: "OEE Mesin", icon: Cpu as LucideIcon },
        { label: "Downtime", icon: AlertTriangle as LucideIcon },
      ],
    },
    {
      title: "Work Order",
      description: "Kelola perintah produksi dari planning hingga selesai.",
      icon: ClipboardList as LucideIcon,
      items: [
        { label: "Work Order Baru", icon: ClipboardList as LucideIcon },
        { label: "Proses Produksi", icon: Cpu as LucideIcon },
        { label: "Selesai", icon: CheckCircle2 as LucideIcon },
        { label: "Riwayat", icon: ListTree as LucideIcon },
      ],
    },
    {
      title: "BOM & Material",
      description: "Kelola struktur produk dan stok bahan baku.",
      icon: ListTree as LucideIcon,
      items: [
        { label: "BOM Produk", icon: ListTree as LucideIcon },
        { label: "Stok Bahan Baku", icon: Boxes as LucideIcon },
        { label: "Pemesanan", icon: Truck as LucideIcon },
        { label: "Peringatan Stok", icon: AlertTriangle as LucideIcon },
      ],
    },
    {
      title: "Quality & Maintenance",
      description: "Inspeksi kualitas dan perawatan mesin berkala.",
      icon: CheckCircle2 as LucideIcon,
      items: [
        { label: "Quality Control", icon: CheckCircle2 as LucideIcon },
        { label: "Inspeksi Produk", icon: BarChart3 as LucideIcon },
        { label: "Maintenance Mesin", icon: Settings as LucideIcon },
        { label: "Downtime Report", icon: AlertTriangle as LucideIcon },
      ],
    },
  ],
};