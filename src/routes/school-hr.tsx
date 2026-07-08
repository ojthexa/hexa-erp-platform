import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { SchoolHRDashboard } from "@/components/erp/dashboards/SchoolHR";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/school-hr")({
  head: () => ({
    meta: [
      { title: "School Management Karyawan — HEXA" },
      { name: "description", content: "Kelola karyawan sekolah — guru, staf, absensi, cuti dan payroll dengan HEXA." },
      { property: "og:title", content: "School Management Karyawan — HEXA" },
      { property: "og:description", content: "HR sekolah dalam satu dashboard bersih." },
    ],
  }),
  component: SchoolHRPage,
});

function SchoolHRPage() {
  const industry = getIndustry("school-hr");
  return (
    <ErpLayout industry={industry} title="School Karyawan" subtitle="HR, absensi, cuti dan payroll untuk staf sekolah">
      <SchoolHRDashboard />
    </ErpLayout>
  );
}