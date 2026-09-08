import { createFileRoute, useParams } from "@tanstack/react-router";
import { notFound } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry, type IndustryId } from "@/lib/industries";
import { Hexagon } from "lucide-react";

export const Route = createFileRoute("/$industry/landing")({
  head: ({ params }) => {
    const industry = getIndustry(params.industryId as IndustryId);
    if (!industry) throw notFound();
    return {
      meta: [
        { title: `${industry.name} — Fitur & Persyaratan | HEXA` },
        {
          name: "description",
          content: `Jelajahi fitur ${industry.name}: ${industry.description}`,
        },
        { property: "og:title", content: `${industry.name} — HEXA` },
        {
          property: "og:description",
          content: industry.description,
        },
      ],
    };
  },
  component: IndustryLandingPage,
});

function IndustryLandingPage() {
  const { industryId } = useParams();

  if (!industryId || typeof industryId !== "string") {
    return IndustryNotFound();
  }

  const industry = getIndustry(industryId as IndustryId);
  if (!industry) {
    return IndustryNotFound();
  }

  return <IndustryLanding industry={industry} />;
}

function IndustryNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <Hexagon className="h-10 w-10 text-muted-foreground" />
      <h1 className="mt-4 text-xl font-semibold">Industri tidak ditemukan</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Halaman ini hanya tersedia untuk industri yang terdaftar di HEXA ERP.
      </p>
      <a href="/" className="mt-6 inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
        Kembali ke beranda
      </a>
    </div>
  );
}
