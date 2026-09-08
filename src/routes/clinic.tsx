import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { ClinicDashboard } from "@/components/erp/dashboards/Clinic";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/clinic")({
  head: () => ({
    meta: [
      { title: "Clinic ERP — HEXA" },
      { name: "description", content: "Patients, appointments, pharmacy, billing and finance for clinics, powered by HEXA." },
      { property: "og:title", content: "Clinic ERP — HEXA" },
      { property: "og:description", content: "Care operations made simple." },
    ],
  }),
  component: ClinicPage,
});

function ClinicPage() {
  const industry = getIndustry("clinic");
  return (
    <ErpLayout industry={industry} title="Clinic Dashboard" subtitle="Patients, appointments, pharmacy and revenue">
      <ClinicDashboard />
    </ErpLayout>
  );
}