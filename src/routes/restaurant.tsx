import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { RestaurantDashboard } from "@/components/erp/dashboards/Restaurant";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/restaurant")({
  head: () => ({
    meta: [
      { title: "Restaurant ERP — HEXA" },
      { name: "description", content: "POS, kitchen, inventory and outlet management for F&B teams, powered by HEXA." },
      { property: "og:title", content: "Restaurant ERP — HEXA" },
      { property: "og:description", content: "Run every outlet from one HEXA workspace." },
    ],
  }),
  component: RestaurantPage,
});

function RestaurantPage() {
  const industry = getIndustry("restaurant");
  return (
    <ErpLayout industry={industry} title="Restaurant Dashboard" subtitle="Sales, kitchen, inventory and outlet performance">
      <RestaurantDashboard />
    </ErpLayout>
  );
}