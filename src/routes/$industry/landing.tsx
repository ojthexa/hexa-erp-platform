import { createFileRoute, useParams } from "@tanstack/react-router";
import { notFound } from "@tanstack/react-router";
import { IndustryLanding } from "@/components/erp/IndustryLanding";
import { getIndustry, type IndustryId } from "@/lib/industries";

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
    throw notFound();
  }

  const industry = getIndustry(industryId as IndustryId);
  if (!industry) {
    throw notFound();
  }

  return <IndustryLanding industry={industry} />;
}
