import { Pill as PillIcon, ShoppingCart, TrendingUp, AlertTriangle, ClipboardCheck, CalendarDays } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LandingContent } from "../industries";

export const apotek: LandingContent = {
  headline: "Sistem ERP Apotek Modern untuk Pengelolaan Obat & Apotek",
  intro: "HEXA ERP Apotek hadir sebagai solusi pengelolaan apotek yang terintegrasi dengan sistem farmasi modern. Sistem ini mengelola stok obat, pemesanan ulang otomatis, monitoring expiry date, transaksi penjualan, hingga laporan keuangan dan analitik penjualan. Dilengkapi fitur barcode scanning dan integrasi dengan supplier, HEXA ERP Apotek membantu apoteker mengoptimalkan operasional dan meningkatkan akurasi inventory.",
  features: [
    {
      title: "Stok obat",
      description: "Kelola persediaan obat, batch, dan alert kedaluwarsa.",
      icon: ShoppingCart as LucideIcon,
    },
    {
      title: "Pemesanan ulang",
      description: "Auto-generate PO ke supplier saat stok minimum tercapai.",
      icon: ClipboardCheck as LucideIcon,
    },
    {
      title: "Transaksi kasir",
      description: "Point of sale cepat dengan scan barcode obat.",
      icon: CalendarDays as LucideIcon,
    },
    {
      title: "Monitoring expiry",
      description: "Alert otomatis untuk obat mendekati masa kedaluwarsa.",
      icon: AlertTriangle as LucideIcon,
    },
    {
      title: "Laporan penjualan",
      description: "Analisis penjualan per kategori, obat, dan periode.",
      icon: TrendingUp as LucideIcon,
    },
    {
      title: "Manajemen supplier",
      description: "Data pemasok, harga pembelian, dan riwayat transaksi.",
      icon: ClipboardCheck as LucideIcon,
    },
  ],
  requirements: [
    {
      title: "Master obat",
      description: "Nama obat, SKU, barcode, satuan, dan harga jual/beli.",
      icon: PillIcon as LucideIcon,
    },
    {
      title: "Kategori obat",
      description: "Penggolongan: obat keras, OTC, herbal, dan alat kesehatan.",
      icon: ShoppingCart as LucideIcon,
    },
    {
      title: "Level stok",
      description: "Stok minimum, maksimum, dan titik pemesanan ulang.",
      icon: AlertTriangle as LucideIcon,
    },
    {
      title: "Regulasi farmasi",
      description: "Kepatuhan terhadap peraturan Kementerian Kesehatan.",
      icon: ClipboardCheck as LucideIcon,
    },
  ],
  menuCards: [
    {
      title: "KPI Apotek",
      description: "Monitor total SKU, nilai inventori, dan sales per hari.",
      icon: TrendingUp as LucideIcon,
      items: [
        { label: "Total SKU", icon: PillIcon as LucideIcon },
        { label: "Nilai Inventori", icon: ShoppingCart as LucideIcon },
        { label: "Penjualan Hari Ini", icon: TrendingUp as LucideIcon },
        { label: "Obat Kedaluwarsa", icon: AlertTriangle as LucideIcon },
      ],
    },
    {
      title: "Stok & Obat",
      description: "Kelola master obat, stok, dan pergerakan barang.",
      icon: ShoppingCart as LucideIcon,
      items: [
        { label: "Master Obat", icon: PillIcon as LucideIcon },
        { label: "Stok Obat", icon: ShoppingCart as LucideIcon },
        { label: "Pergerakan Stok", icon: ClipboardCheck as LucideIcon },
        { label: "Expiry Watch", icon: AlertTriangle as LucideIcon },
      ],
    },
    {
      title: "Pemesanan & Supplier",
      description: "Kelola PO, supplier, dan harga pembelian.",
      icon: ClipboardCheck as LucideIcon,
      items: [
        { label: "Purchase Order", icon: ClipboardCheck as LucideIcon },
        { label: "Daftar Supplier", icon: CalendarDays as LucideIcon },
        { label: "Harga Beli", icon: TrendingUp as LucideIcon },
        { label: "Reorder Point", icon: AlertTriangle as LucideIcon },
      ],
    },
    {
      title: "Keuangan & Laporan",
      description: "Transaksi kasir, laporan penjualan, dan laba rugi.",
      icon: TrendingUp as LucideIcon,
      items: [
        { label: "Kasir / POS", icon: CalendarDays as LucideIcon },
        { label: "Laporan Penjualan", icon: TrendingUp as LucideIcon },
        { label: "Laba Rugi", icon: ClipboardCheck as LucideIcon },
        { label: "Arus Kas", icon: TrendingUp as LucideIcon },
      ],
    },
  ],
};