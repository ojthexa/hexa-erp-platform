import { createFileRoute } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/restaurant/landing")({
  head: () => ({
    meta: [
      { title: "ERP Restoran — Fitur & Persyaratan | HEXA" },
      {
        name: "description",
        content:
          "Jelajahi fitur ERP Restoran: POS, dapur, inventaris, pembelian dan manajemen outlet — plus apa yang Anda butuhkan.",
      },
      { property: "og:title", content: "ERP Restoran — HEXA" },
      { property: "og:description", content: "Dari pesanan hingga keuntungan, dalam satu sistem." },
    ],
  }),
  component: RestaurantLandingPage,
});

function RestaurantLandingPage() {
  return <IndustryLanding industry={getIndustry("restaurant")} />;
}
