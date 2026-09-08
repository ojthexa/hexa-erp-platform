import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Hexagon,
  Layers,
  ListChecks,
  Sparkles,
  LayoutDashboard,
} from "lucide-react";
import type { IndustryConfig } from "@/lib/industries";
import { Button } from "@/components/ui/button";

export function IndustryLanding({ industry }: { industry: IndustryConfig }) {
  const Icon = industry.icon;
  const brand = `var(${industry.brandVar})`;

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
              <div className="text-[11px] text-muted-foreground">Platform Bisnis</div>
            </div>
          </Link>
          <nav className="ml-6 hidden items-center gap-5 text-sm md:flex">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Industri
            </Link>
            <span className="font-medium text-foreground">{industry.name}</span>
          </nav>
          <div className="ml-auto">
            <Button
              asChild
              size="sm"
              className="rounded-full text-white"
              style={{ backgroundColor: brand }}
            >
              <Link to={`/login/${industry.id}`}>
                Lihat Detail Aplikasi <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className={`pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br ${industry.gradient} blur-3xl`}
          />
          <div
            className={`pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tr ${industry.gradient} blur-3xl`}
          />
          <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" style={{ color: brand }} />
              {industry.tagline}
            </div>
            <div
              className="mx-auto mt-6 grid h-16 w-16 place-items-center rounded-2xl text-white shadow-sm"
              style={{ backgroundColor: brand }}
            >
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{industry.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              {industry.landing.headline}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              {industry.landing.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full text-white hover:brightness-110"
                style={{ backgroundColor: brand }}
              >
                <Link to={`/login/${industry.id}`}>
                  Lihat Detail Aplikasi <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" /> Semua industri
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="grid h-10 w-10 place-items-center rounded-xl"
              style={{
                backgroundColor: `color-mix(in oklab, ${brand} 12%, transparent)`,
                color: brand,
              }}
            >
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Fitur</h2>
              <p className="text-sm text-muted-foreground">
                Apa saja yang dicakup {industry.name} secara bawaan
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industry.landing.features.map((f, i) => (
              <div
                key={f.title}
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
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="grid h-10 w-10 place-items-center rounded-xl"
              style={{
                backgroundColor: `color-mix(in oklab, ${brand} 12%, transparent)`,
                color: brand,
              }}
            >
              <ListChecks className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Persyaratan</h2>
              <p className="text-sm text-muted-foreground">
                Yang Anda butuhkan untuk memulai {industry.name}
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {industry.landing.requirements.map((r, i) => (
              <div
                key={r.title}
                className="card-elevated flex items-start gap-4 p-5 animate-fade-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                  style={{
                    backgroundColor: `color-mix(in oklab, ${brand} 12%, transparent)`,
                    color: brand,
                  }}
                >
                  <r.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Cards */}
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
              <h2 className="text-xl font-bold tracking-tight">Menu Utama ERP</h2>
              <p className="text-sm text-muted-foreground">
                Ikhtiar dashboard dan modul yang tersedia di {industry.name}
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industry.landing.menuCards.map((card, i) => (
              <div
                key={card.title}
                className="card-elevated card-hover p-5 animate-fade-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div
                  className="flex items-center gap-3"
                >
                  <div
                    className="grid h-10 w-10 place-items-center rounded-xl"
                    style={{
                      backgroundColor: `color-mix(in oklab, ${brand} 12%, transparent)`,
                      color: brand,
                    }}
                  >
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{card.title}</h3>
                    <p className="text-xs text-muted-foreground">{card.description}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <item.icon className="h-4 w-4 shrink-0" style={{ color: brand }} />
                      <Link to={`/login/${industry.id}`} className="hover:text-foreground transition-colors">
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="card-elevated relative overflow-hidden p-8 text-center sm:p-12">
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-60`}
            />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight">
                Siap menjalankan {industry.name.toLowerCase()} Anda?
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
                Buka dashboard dan jelajahi setiap modul bersama tim Anda.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full text-white hover:brightness-110"
                  style={{ backgroundColor: brand }}
                >
                  <Link to={`/login/${industry.id}`}>
                    Lihat Detail Aplikasi <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4" /> Semua industri
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
          <a href="#" className="hover:text-foreground">
            Dokumentasi
          </a>
        </div>
      </footer>
    </div>
  );
}
