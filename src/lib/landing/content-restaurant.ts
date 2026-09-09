import { Coffee, ChefHat, LayoutGrid, Receipt, ShoppingCart, TrendingUp, PieChart, CalendarDays, Users, Boxes, UtensilsCrossed, Settings, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LandingContent } from "../industries";

export const restaurant: LandingContent = {
  headline: "Sistem ERP Restoran All-in-One untuk Bisnis F&B Modern",
  intro: "HEXA ERP Restaurant hadir sebagai solusi komprehensif untuk pengelolaan restoran modern. Sistem ini mengintegrasikan POS kasir, manajemen meja, kitchen display system (KDS), reservasi online, inventori bahan baku, hingga laporan keuangan dan analisis penjualan. Dengan antarmuka yang intuitif dan fitur lengkap, HEXA ERP Restaurant membantu pemilik restoran mengoptimalkan operasional dan meningkatkan kepuasan pelanggan.",
  features: [
    {
      title: "POS Kasir",
      description: "Transaksi cepat dengan split bill dan berbagai metode pembayaran.",
      icon: ShoppingCart as LucideIcon,
    },
    {
      title: "Kitchen Display System",
      description: "Layar dapur menerima order secara real-time tanpa kertas.",
      icon: ChefHat as LucideIcon,
    },
    {
      title: "Manajemen meja",
      description: "Peta kursi interaktif, reservasi, dan waiting list.",
      icon: LayoutGrid as LucideIcon,
    },
    {
      title: "Menu & harga",
      description: "Kelola menu, kategori, harga, dan ketersediaan stok.",
      icon: Receipt as LucideIcon,
    },
    {
      title: "Inventori bahan",
      description: "Stok bahan baku, recipe mapping, dan auto-cek kadar.",
      icon: Boxes as LucideIcon,
    },
    {
      title: "Laporan & analitik",
      description: "Dashboard penjualan, menu best seller, dan profit margin.",
      icon: PieChart as LucideIcon,
    },
  ],
  requirements: [
    {
      title: "Layout restoran",
      description: "Denah meja, zona, dan kapasitas setiap area.",
      icon: LayoutGrid as LucideIcon,
    },
    {
      title: "Daftar menu",
      description: "Kategori, harga, gambar, dan deskripsi setiap hidangan.",
      icon: Receipt as LucideIcon,
    },
    {
      title: "Stok bahan baku",
      description: "Master bahan, satuan, dan level pemesanan ulang.",
      icon: Boxes as LucideIcon,
    },
    {
      title: "Alur pelayanan",
      description: "Proses dari taking order hingga payment settlement.",
      icon: Settings as LucideIcon,
    },
  ],
  menuCards: [
    {
      title: "KPI Restoran",
      description: "Monitor Penjualan, Transaksi, dan Metrik Operasional.",
      icon: TrendingUp as LucideIcon,
      items: [
        { label: "Penjualan Hari Ini", icon: TrendingUp as LucideIcon },
        { label: "Total Transaksi", icon: ShoppingCart as LucideIcon },
        { label: "Rata-rata Order", icon: PieChart as LucideIcon },
        { label: "Table Turnover", icon: Users as LucideIcon },
      ],
    },
    {
      title: "POS & Meja",
      description: "Kelola kasir, meja, reservasi, dan waiting list.",
      icon: ShoppingCart as LucideIcon,
      items: [
        { label: "POS Kasir", icon: ShoppingCart as LucideIcon },
        { label: "Peta Meja", icon: LayoutGrid as LucideIcon },
        { label: "Reservasi", icon: CalendarDays as LucideIcon },
        { label: "Waiting List", icon: Users as LucideIcon },
      ],
    },
    {
      title: "Dapur & Menu",
      description: "Kitchen display, menu management, dan recipe.",
      icon: ChefHat as LucideIcon,
      items: [
        { label: "Kitchen Display", icon: ChefHat as LucideIcon },
        { label: "Daftar Menu", icon: Receipt as LucideIcon },
        { label: "Resep & Bahan", icon: Boxes as LucideIcon },
        { label: "Ketersediaan", icon: TrendingUp as LucideIcon },
      ],
    },
    {
      title: "Laporan & Keuangan",
      description: "Analitik penjualan, menu best seller, dan profit.",
      icon: PieChart as LucideIcon,
      items: [
        { label: "Dashboard Penjualan", icon: BarChart3 as LucideIcon },
        { label: "Menu Best Seller", icon: TrendingUp as LucideIcon },
        { label: "Laba Rugi", icon: PieChart as LucideIcon },
        { label: "Pengaturan", icon: Settings as LucideIcon },
      ],
    },
  ],
};