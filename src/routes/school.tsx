import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { SchoolDashboard } from "@/components/erp/dashboards/School";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/school")({
  head: () => ({
    meta: [
      { title: "School ERP — HEXA" },
      { name: "description", content: "Manage students, teachers, Tahfidz, academics and finance with the HEXA School ERP dashboard." },
      { property: "og:title", content: "School ERP — HEXA" },
      { property: "og:description", content: "Academic operations for modern schools." },
    ],
  }),
  component: SchoolPage,
});

function SchoolPage() {
  const industry = getIndustry("school");
  return (
    <ErpLayout industry={industry} title="School Dashboard" subtitle="Overview of academics, students and operations">
      <SchoolDashboard />
    </ErpLayout>
  );
}