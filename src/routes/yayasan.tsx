import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { YayasanDashboard } from "@/components/erp/dashboards/Yayasan";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/yayasan")({
  head: () => ({
    meta: [
      { title: "Yayasan ERP — HEXA" },
      { name: "description", content: "Kelola donasi, program sosial, unit usaha dan laporan yayasan dalam satu platform HEXA." },
      { property: "og:title", content: "Yayasan ERP — HEXA" },
      { property: "og:description", content: "Donasi, program, kampanye, dan unit usaha yayasan." },
    ],
  }),
  component: YayasanPage,
});

function YayasanPage() {
  const industry = getIndustry("yayasan");
  return (
    <ErpLayout industry={industry} title="Yayasan" subtitle="Donasi, program, kampanye dan unit usaha">
      <YayasanDashboard />
    </ErpLayout>
  );
}