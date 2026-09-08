import { createFileRoute } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/warehouse/landing")({
  head: () => ({
    meta: [
      { title: "ERP Warehouse — Fitur & Persyaratan | HEXA" },
      {
        name: "description",
        content:
          "Jelajahi fitur ERP Warehouse: inventaris, pembelian, pergerakan stok dan manajemen supplier — plus apa yang Anda butuhkan.",
      },
      { property: "og:title", content: "ERP Warehouse — HEXA" },
      { property: "og:description", content: "Setiap barang, setiap pergerakan, sepenuhnya terlihat." },
    ],
  }),
  component: WarehouseLandingPage,
});

function WarehouseLandingPage() {
  return <IndustryLanding industry={getIndustry("warehouse")} />;
}
