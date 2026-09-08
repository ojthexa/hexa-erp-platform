import { createFileRoute, Link, useNavigate, useParams, notFound } from "@tanstack/react-router";
import { ArrowRight, Hexagon, Home, Lock, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { industries, getIndustry, type IndustryId } from "@/lib/industries";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login/$industryId")({
  head: ({ params }) => {
    const ind = industries.find((i) => i.id === params.industryId);
    const name = ind?.name ?? "HEXA ERP";
    return {
      meta: [
        { title: `Masuk — ${name} · HEXA ERP` },
        { name: "description", content: `Halaman login ${name}. Masuk untuk mengakses dashboard.` },
      ],
    };
  },
  component: LoginPage,
});

function LoginPage() {
  const { industryId } = useParams({ from: "/login/$industryId" });
  const navigate = useNavigate();
  const ind = industries.find((i) => i.id === industryId);
  if (!ind) throw notFound();
  const industry = getIndustry(ind.id as IndustryId);
  const [email, setEmail] = useState("admin@hexa.id");
  const [password, setPassword] = useState("hexa1234");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: industry.route });
  };

  const Icon = industry.icon;

  return (
    <div
      className="min-h-screen w-full bg-background"
      style={{ ["--brand" as string]: `var(${industry.brandVar})` }}
    >
      <div className="absolute right-4 top-4 z-10">
        <Link to="/">
          <Button variant="outline" size="sm" className="gap-2 rounded-full">
            <Home className="h-4 w-4" />
            Beranda
          </Button>
        </Link>
      </div>

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <aside
          className="relative hidden overflow-hidden p-10 text-white lg:flex lg:flex-col lg:justify-between"
          style={{ backgroundColor: `var(${industry.brandVar})` }}
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"
          />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 backdrop-blur">
              <Hexagon className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight">HEXA ERP</div>
              <div className="text-[11px] opacity-80">Platform Bisnis</div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur">
              <Icon className="h-3.5 w-3.5" /> {industry.tagline}
            </div>
            <h1 className="text-4xl font-bold leading-tight">{industry.name}</h1>
            <p className="mt-3 max-w-md text-sm text-white/85">{industry.description}</p>
          </div>
          <div className="relative text-xs text-white/70">
            © {new Date().getFullYear()} HEXA ERP · Semua hak dilindungi
          </div>
        </aside>

        <main className="flex items-center justify-center px-4 py-10 sm:px-10">
          <div className="w-full max-w-md animate-fade-in">
            <div className="mb-6 flex items-center gap-3 lg:hidden">
              <div
                className="grid h-11 w-11 place-items-center rounded-xl text-white"
                style={{ backgroundColor: `var(${industry.brandVar})` }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {industry.tagline}
                </div>
                <div className="text-base font-bold">{industry.name}</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Selamat Datang Kembali
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Masuk ke workspace {industry.name} untuk melanjutkan.
            </p>

            <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@perusahaan.id"
                    className="h-11 rounded-xl pl-9"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Kata Sandi</Label>
                  <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
                    Lupa kata sandi?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="h-11 rounded-xl pl-9"
                    required
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <input type="checkbox" className="h-3.5 w-3.5 accent-[var(--brand,var(--primary))]" defaultChecked />
                Ingat saya di perangkat ini
              </label>

              <Button
                type="submit"
                className="h-11 gap-2 rounded-xl text-white hover:opacity-95"
                style={{ backgroundColor: `var(${industry.brandVar})` }}
              >
                Masuk ke Dashboard
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Link to="/" className="text-center text-xs text-muted-foreground hover:text-foreground">
                ← Kembali ke pemilihan industri
              </Link>
            </form>

            <div className="mt-8 rounded-xl border bg-secondary/50 p-3 text-xs text-muted-foreground">
              <div className="font-medium text-foreground">Demo Access</div>
              Gunakan kredensial apa pun — ini akun demo untuk menjelajah dashboard.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}