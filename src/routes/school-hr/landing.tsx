import { createFileRoute } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/school-hr/landing")({
  head: () => ({
    meta: [
      { title: "Manajemen Karyawan Sekolah — Fitur & Persyaratan | HEXA" },
      {
        name: "description",
        content:
          "Jelajahi fitur Manajemen Karyawan Sekolah: guru, staf, absensi, cuti, payroll dan rekrutmen — plus apa yang Anda butuhkan untuk memulai.",
      },
      { property: "og:title", content: "Manajemen Karyawan Sekolah — HEXA" },
      { property: "og:description", content: "Kelola karyawan sekolah tanpa ribet administrasi." },
    ],
  }),
  component: SchoolHrLandingPage,
});

function SchoolHrLandingPage() {
  return <IndustryLanding industry={getIndustry("school-hr")} />;
}
