import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { WarehouseDashboard } from "@/components/erp/dashboards/Warehouse";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/warehouse")({
  head: () => ({
    meta: [
      { title: "Warehouse ERP — HEXA" },
      { name: "description", content: "Inventory, purchasing, stock movement and supplier management at scale, powered by HEXA." },
      { property: "og:title", content: "Warehouse ERP — HEXA" },
      { property: "og:description", content: "One view across every warehouse." },
    ],
  }),
  component: WarehousePage,
});

function WarehousePage() {
  const industry = getIndustry("warehouse");
  return (
    <ErpLayout industry={industry} title="Warehouse Dashboard" subtitle="Stock, movement, capacity and suppliers">
      <WarehouseDashboard />
    </ErpLayout>
  );
}