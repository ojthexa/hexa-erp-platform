import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bell, ChevronsUpDown, Hexagon, Building2, Sparkles } from "lucide-react";
import { industries } from "@/lib/industries";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b bg-card/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Hexagon className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight">HEXA ERP</div>
              <div className="text-[11px] text-muted-foreground">Business Platform</div>
            </div>
          </div>
          <nav className="ml-6 hidden items-center gap-5 text-sm md:flex">
            <a className="text-muted-foreground hover:text-foreground transition-colors" href="#industries">Industries</a>
            <a className="text-muted-foreground hover:text-foreground transition-colors" href="#platform">Platform</a>
            <a className="text-muted-foreground hover:text-foreground transition-colors" href="#support">Support</a>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden gap-2 rounded-full lg:flex">
              <Building2 className="h-4 w-4" />
              HEXA Group
              <ChevronsUpDown className="h-3.5 w-3.5 text-muted-foreground" />
            </Button>
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full px-1 text-[10px]">3</Badge>
            </Button>
            <div className="flex items-center gap-2 rounded-full border bg-card px-1 py-1 pr-3">
              <Avatar className="h-7 w-7">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">HA</AvatarFallback>
              </Avatar>
              <div className="hidden text-left text-xs leading-tight sm:block">
                <div className="font-semibold">Hana Aditya</div>
                <div className="text-muted-foreground">Administrator</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="mx-auto max-w-3xl text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            One platform for every industry
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Choose Your Business
          </h1>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Select an industry to access its ERP modules. Every workspace shares the same
            clean HEXA design and connects to your company data.
          </p>
        </section>

        <section id="industries" className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-2">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.id}
                to={ind.route}
                className="group card-elevated card-hover relative overflow-hidden p-6 animate-fade-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${ind.gradient} blur-2xl`}
                />
                <div className="relative flex items-start gap-4">
                  <div
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white shadow-sm"
                    style={{ backgroundColor: `var(${ind.brandVar})` }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {ind.tagline}
                    </div>
                    <h3 className="mt-0.5 text-xl font-bold tracking-tight">{ind.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{ind.description}</p>
                  </div>
                </div>
                <div className="relative mt-6 flex items-center justify-between">
                  <div className="flex -space-x-1.5">
                    {[0, 1, 2].map((j) => (
                      <div
                        key={j}
                        className="h-6 w-6 rounded-full border-2 border-card"
                        style={{
                          backgroundColor: `color-mix(in oklab, var(${ind.brandVar}) ${60 - j * 15}%, white)`,
                        }}
                      />
                    ))}
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all group-hover:gap-2.5"
                    style={{
                      backgroundColor: `color-mix(in oklab, var(${ind.brandVar}) 12%, transparent)`,
                      color: `var(${ind.brandVar})`,
                    }}
                  >
                    Open Dashboard <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </section>

        <section id="platform" className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { title: "Modular", body: "Turn on only the modules you need per industry." },
            { title: "Unified data", body: "One employee, finance and asset model across every workspace." },
            { title: "Enterprise-ready", body: "Roles, audit, and multi-company controls out of the box." },
          ].map((f) => (
            <div key={f.title} className="card-elevated p-5">
              <div className="text-sm font-semibold">{f.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </section>

        <footer id="support" className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} HEXA ERP · All rights reserved</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Docs</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
