import { createFileRoute } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry } from "@/lib/industries";

export const Route = createFileRoute("/school-academic/landing")({
  head: () => ({
    meta: [
      { title: "Sistem Informasi Akademik Sekolah — Fitur & Persyaratan | HEXA" },
      {
        name: "description",
        content:
          "Jelajahi fitur Sistem Informasi Akademik Sekolah: siswa, kelas, jadwal, ujian, nilai dan rapor — plus apa yang Anda butuhkan.",
      },
      { property: "og:title", content: "Sistem Informasi Akademik Sekolah — HEXA" },
      { property: "og:description", content: "Jalankan seluruh operasional akademik dari satu ruang kerja." },
    ],
  }),
  component: SchoolAcademicLandingPage,
});

function SchoolAcademicLandingPage() {
  return <IndustryLanding industry={getIndustry("school-academic")} />;
}
