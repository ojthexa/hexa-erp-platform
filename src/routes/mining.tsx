import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { MiningDashboard } from "@/components/erp/dashboards/Mining";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/mining")({
  head: () => ({
    meta: [
      { title: "Mining ERP — HEXA" },
      { name: "description", content: "Fleet, production, maintenance and logistics for mining operations, powered by HEXA." },
      { property: "og:title", content: "Mining ERP — HEXA" },
      { property: "og:description", content: "Every haul, every liter, every hour — one dashboard." },
    ],
  }),
  component: MiningPage,
});

function MiningPage() {
  const industry = getIndustry("mining");
  return (
    <ErpLayout industry={industry} title="Mining Dashboard" subtitle="Production, fleet, fuel and equipment health">
      <MiningDashboard />
    </ErpLayout>
  );
}