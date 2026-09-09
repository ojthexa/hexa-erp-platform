import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Hexagon, LayoutDashboard, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { industries, getIndustry, getMenuDetail } from "@/lib/industries";
import type { IndustryId } from "@/lib/industries";

export const Route = createFileRoute("/$industry/menu/$menu")({
  component: MenuDetailPage,
});

function MenuDetailPage() {
  const { industry: industryIdRaw, menu: menuTitle } = Route.useParams() as { industry: string; menu: string };
  const industryId = industryIdRaw as IndustryId;
  
  const industry = getIndustry(industryId);
  const menuDetail = getMenuDetail(industryId, menuTitle);

  if (!industry || !menuDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Menu tidak ditemukan</h1>
          <Link to="/" className="text-primary mt-4 inline-block">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;
  const brand = `var(${industry.brandVar})`;
  const MenuIcon = menuDetail.icon;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b bg-card/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="grid h-9 w-9 place-items-center rounded-xl text-white"
              style={{ backgroundColor: brand }}
            >
              <Hexagon className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight">HEXA ERP</div>
              <div className="text-[11px] text-muted-foreground">{industry.name}</div>
            </div>
          </Link>
          <nav className="ml-6 hidden items-center gap-4 text-sm md:flex">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Semua industri
            </Link>
            <Link
              to="/$industry/landing"
              params={{ industry: industryId }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Landing Page
            </Link>
            <span className="font-medium text-foreground">{menuDetail.title}</span>
          </nav>
          <div className="ml-auto">
            <Button
              asChild
              size="sm"
              className="rounded-full text-white"
              style={{ backgroundColor: brand }}
            >
              <Link to={"/login/" + industryId as any}>
                Mulai Gunakan <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className={`pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br ${industry.gradient} blur-3xl`}
          />
          <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
              <LayoutDashboard className="h-3.5 w-3.5" style={{ color: brand }} />
              {industry.name}
            </div>
            <div className="mx-auto mt-6 grid h-20 w-20 place-items-center rounded-2xl text-white shadow-lg">
              <MenuIcon className="h-10 w-10" />
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              {menuDetail.title}
            </h1>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg max-w-2xl mx-auto">
              {menuDetail.description}
            </p>
            {menuDetail.explanation && (
              <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
                {menuDetail.explanation}
              </p>
            )}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full text-white hover:brightness-110"
                style={{ backgroundColor: brand }}
              >
                <Link to={"/login/" + industryId as any}>
                  Mulai Gunakan <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <Link to="/$industry/landing" params={{ industry: industryId }}>
                  <ArrowLeft className="h-4 w-4" /> Kembali
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        {menuDetail.features && menuDetail.features.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <div className="flex items-center gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-xl"
                style={{
                  backgroundColor: `color-mix(in oklab, ${brand} 12%, transparent)`,
                  color: brand,
                }}
              >
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">Fitur Utama</h2>
                <p className="text-sm text-muted-foreground">
                  Detail fitur dari {menuDetail.title}
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {menuDetail.features.map((feature, i) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="card-elevated card-hover p-5 animate-fade-in"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div
                      className="grid h-10 w-10 place-items-center rounded-xl"
                      style={{
                        backgroundColor: `color-mix(in oklab, ${brand} 12%, transparent)`,
                        color: brand,
                      }}
                    >
                      <FeatureIcon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Sub-items Section */}
        {menuDetail.items && menuDetail.items.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <div className="flex items-center gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-xl"
                style={{
                  backgroundColor: `color-mix(in oklab, ${brand} 12%, transparent)`,
                  color: brand,
                }}
              >
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">Item Menu</h2>
                <p className="text-sm text-muted-foreground">
                  Sub-menu yang tersedia dalam {menuDetail.title}
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {menuDetail.items.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="card-elevated flex items-center gap-4 p-4 animate-fade-in"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                      style={{
                        backgroundColor: `color-mix(in oklab, ${brand} 12%, transparent)`,
                        color: brand,
                      }}
                    >
                      <ItemIcon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold truncate">
                        {item.label}
                      </h3>
                      {item.description && (
                        <p className="mt-0.5 text-xs text-muted-foreground truncate">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <Link
                      to={"/login/" + industryId as any}
                      className="shrink-0 text-xs font-medium text-primary hover:underline"
                    >
                      Akses
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="card-elevated relative overflow-hidden p-8 text-center sm:p-12">
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-60`}
            />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight">
                Siap menggunakan {menuDetail.title}?
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
                {menuDetail.explanation || "Mulai kelola bisnis Anda dengan lebih efisien."}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full text-white hover:brightness-110"
                  style={{ backgroundColor: brand }}
                >
                  <Link to={"/login/" + industryId as any}>
                    Mulai Gunakan <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                >
                  <Link to="/" params={{ industry: industryId }}>
                    <ArrowLeft className="h-4 w-4" /> Lihat semua modul
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t px-4 py-6 text-xs text-muted-foreground sm:px-6">
        <div>© {new Date().getFullYear()} HEXA ERP · Hak cipta dilindungi</div>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-foreground">
            Semua industri
          </Link>
          <Link
            to="/$industry/landing"
            params={{ industry: industryId }}
            className="hover:text-foreground"
          >
            Kembali ke landing page
          </Link>
        </div>
      </footer>
    </div>
  );
}