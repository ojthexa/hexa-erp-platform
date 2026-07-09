import { createFileRoute } from "@tanstack/react-router";
import { ErpLayout } from "@/components/erp/ErpLayout";
import { TahfidzDashboard } from "@/components/erp/dashboards/Tahfidz";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/tahfidz")({
  head: () => ({
    meta: [
      { title: "Manajemen Tahfidz — HEXA" },
      { name: "description", content: "Manajemen hafalan Al-Qur'an — santri, halaqoh, murojaah, ujian dan sertifikasi." },
      { property: "og:title", content: "Tahfidz Management — HEXA" },
      { property: "og:description", content: "Sistem hafalan Al-Qur'an dalam satu dashboard." },
    ],
  }),
  component: TahfidzPage,
});

function TahfidzPage() {
  const industry = getIndustry("tahfidz");
  return (
    <ErpLayout industry={industry} title="Tahfidz Dashboard" subtitle="Setoran, murojaah, halaqoh dan ujian hafalan">
      <TahfidzDashboard />
    </ErpLayout>
  );
}
