import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { OfficeDashboard } from "@/components/erp/dashboards/Office";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/office")({
  head: () => ({
    meta: [
      { title: "Office ERP — HEXA" },
      { name: "description", content: "HR, payroll, attendance and administration for modern offices, powered by HEXA." },
      { property: "og:title", content: "Office ERP — HEXA" },
      { property: "og:description", content: "Run HR, payroll and operations from one clean workspace." },
    ],
  }),
  component: OfficePage,
});

function OfficePage() {
  const industry = getIndustry("office");
  return (
    <ErpLayout industry={industry} title="Office Dashboard" subtitle="People, payroll, projects and assets at a glance">
      <OfficeDashboard />
    </ErpLayout>
  );
}