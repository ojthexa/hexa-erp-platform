import type { ReactNode } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";
import type { IndustryConfig } from "@/lib/industries";

export function ErpLayout({
  industry,
  title,
  subtitle,
  children,
}: {
  industry: IndustryConfig;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <SidebarProvider>
      <div
        className="flex min-h-screen w-full bg-background"
        style={{ ["--brand" as string]: `var(${industry.brandVar})` }}
      >
        <AppSidebar industry={industry} />
        <SidebarInset className="min-w-0">
          <AppHeader industry={industry} />
          <main className="mx-auto w-full max-w-[1600px] flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4 animate-fade-in">
              <div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
                {subtitle && (
                  <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex h-2 w-2 rounded-full bg-success" />
                Live · Updated just now
              </div>
            </div>
            <div className="animate-fade-in">{children}</div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}