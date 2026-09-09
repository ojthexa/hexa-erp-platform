import { Warehouse, Boxes, Truck, ScanBarcode, MapPin, ShoppingCart, TrendingUp, AlertTriangle, ClipboardCheck, PackageSearch } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { LandingContent } from "../industries";

export const warehouse: LandingContent = {
  headline: "Sistem ERP Gudang Modern dengan Manajemen Inventori Terintegrasi",
  intro: "HEXA ERP Warehouse menghadirkan solusi manajemen gudang berbasis location-system yang terintegrasi penuh dengan stok, pengiriman, dan penerimaan barang. Dari inbound hingga outbound, dari put-away hingga picking, semua berjalan dalam satu ekosistem digital yang real-time. Dilengkapi barcode scanning, cycle counting, dan stock opname otomatis untuk akurasi inventori maksimal.",
  features: [
    {
      title: "Manajemen lokasi",
      description: "Sistem koordinat rak, shelf, dan bin di dalam gudang.",
      icon: MapPin as LucideIcon,
    },
    {
      title: "Inbound & put-away",
      description: "Terima barang, scan barcode, dan letakkan di lokasi optimal.",
      icon: ClipboardCheck as LucideIcon,
    },
    {
      title: "Picking & packing",
      description: "Workflow penerimaan pesanan dengan panduan picking efisien.",
      icon: PackageSearch as LucideIcon,
    },
    {
      title: "Stok opname",
      description: "Hitung fisik, bandingkan sistem, dan adjust secara akurat.",
      icon: ScanBarcode as LucideIcon,
    },
    {
      title: "Pengiriman & logistik",
      description: "Integrasi kurir, tracking pengiriman, dan manifest.",
      icon: Truck as LucideIcon,
    },
    {
      title: "Analitik gudang",
      description: "Visualisasi pergerakan stok, turn over, dan kapasitas.",
      icon: TrendingUp as LucideIcon,
    },
  ],
  requirements: [
    {
      title: "Layout gudang",
      description: "Denah zona, rak, shelf, dan penomoran bin yang jelas.",
      icon: Warehouse as LucideIcon,
    },
    {
      title: "Master produk",
      description: "SKU, barcode, dimensi, berat, dan satuan barang.",
      icon: Boxes as LucideIcon,
    },
    {
      title: "Alur gudang",
      description: "Protokol inbound, outbound, dan stock adjustment.",
      icon: ClipboardCheck as LucideIcon,
    },
    {
      title: "Integrasi sistem",
      description: "Konektivitas dengan platform ERP, marketplace, dan courier.",
      icon: PackageSearch as LucideIcon,
    },
  ],
  menuCards: [
    {
      title: "KPI Gudang",
      description: "Monitor throughput, accuracy rate, fill rate, dan space utilization.",
      icon: TrendingUp as LucideIcon,
      items: [
        { label: "Throughput Harian", icon: TrendingUp as LucideIcon },
        { label: "Akurasi Stok", icon: ScanBarcode as LucideIcon },
        { label: "Order Fill Rate", icon: TrendingUp as LucideIcon },
        { label: "Space Utilization", icon: Warehouse as LucideIcon },
      ],
    },
    {
      title: "Inbound",
      description: "Terima barang, PO, put-away, dan quality check.",
      icon: ClipboardCheck as LucideIcon,
      items: [
        { label: "Penerimaan Barang", icon: ClipboardCheck as LucideIcon },
        { label: "Purchase Order", icon: PackageSearch as LucideIcon },
        { label: "Put-Away", icon: MapPin as LucideIcon },
        { label: "Quality Check", icon: ScanBarcode as LucideIcon },
      ],
    },
    {
      title: "Outbound",
      description: "Picking, packing, shipping, dan manifest pengiriman.",
      icon: ShoppingCart as LucideIcon,
      items: [
        { label: "Picking Task", icon: PackageSearch as LucideIcon },
        { label: "Packing", icon: Boxes as LucideIcon },
        { label: "Shipping", icon: Truck as LucideIcon },
        { label: "Manifest", icon: ClipboardCheck as LucideIcon },
      ],
    },
    {
      title: "Inventory",
      description: "Stock opname, transfer, dan laporan pergerakan stok.",
      icon: Boxes as LucideIcon,
      items: [
        { label: "Stok Opname", icon: ScanBarcode as LucideIcon },
        { label: "Transfer Stock", icon: Truck as LucideIcon },
        { label: "Peringatan Stok", icon: AlertTriangle as LucideIcon },
        { label: "Laporan Stok", icon: TrendingUp as LucideIcon },
      ],
    },
  ],
};