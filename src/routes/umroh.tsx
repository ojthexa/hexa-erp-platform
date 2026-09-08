import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { UmrohDashboard } from "@/components/erp/dashboards/Umroh";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/umroh")({
  head: () => ({
    meta: [
      { title: "Umroh & Haji ERP — HEXA" },
      { name: "description", content: "Kelola paket umroh, jamaah, visa, penerbangan, hotel, agen dan komisi dalam satu platform HEXA." },
      { property: "og:title", content: "Umroh & Haji ERP — HEXA" },
      { property: "og:description", content: "Jamaah, paket, visa, keberangkatan dan komisi agen travel umroh." },
    ],
  }),
  component: UmrohPage,
});

function UmrohPage() {
  const industry = getIndustry("umroh");
  return (
    <ErpLayout industry={industry} title="Umroh & Haji" subtitle="Jamaah, paket, visa dan keberangkatan">
      <UmrohDashboard />
    </ErpLayout>
  );
}
