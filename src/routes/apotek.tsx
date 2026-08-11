import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { ApotekDashboard } from "@/components/erp/dashboards/Apotek";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/apotek")({
  head: () => ({
    meta: [
      { title: "Apotek ERP — HEXA" },
      { name: "description", content: "POS apotek, stok obat, kadaluarsa, resep dokter, supplier dan laporan penjualan dalam platform HEXA." },
      { property: "og:title", content: "Apotek ERP — HEXA" },
      { property: "og:description", content: "Kasir, persediaan obat, resep dan keuangan apotek." },
    ],
  }),
  component: ApotekPage,
});

function ApotekPage() {
  const industry = getIndustry("apotek");
  return (
    <ErpLayout industry={industry} title="Apotek" subtitle="Kasir, persediaan obat dan resep">
      <ApotekDashboard />
    </ErpLayout>
  );
}
