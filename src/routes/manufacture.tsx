import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { ManufactureDashboard } from "@/components/erp/dashboards/Manufacture";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/manufacture")({
  head: () => ({
    meta: [
      { title: "Manufacture ERP — HEXA" },
      { name: "description", content: "Produksi, mesin, quality control, maintenance dan logistik pabrik dalam satu dashboard." },
      { property: "og:title", content: "Manufacture ERP — HEXA" },
      { property: "og:description", content: "Setiap batch, setiap mesin, satu dashboard." },
    ],
  }),
  component: ManufacturePage,
});

function ManufacturePage() {
  const industry = getIndustry("manufacture");
  return (
    <ErpLayout industry={industry} title="Manufacture Dashboard" subtitle="Produksi, mesin, quality dan maintenance">
      <ManufactureDashboard />
    </ErpLayout>
  );
}