import { Link, useRouterState } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ArrowLeft, Hexagon } from "lucide-react";
import type { IndustryConfig } from "@/lib/industries";

export function AppSidebar({ industry }: { industry: IndustryConfig }) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const Icon = industry.icon;

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b">
        <Link to="/" className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-sidebar-accent transition-colors">
          <div
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white"
            style={{ backgroundColor: `var(${industry.brandVar})` }}
          >
            <Hexagon className="h-5 w-5" />
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <div className="text-sm font-bold tracking-tight truncate">HEXA ERP</div>
              <div className="text-[11px] text-muted-foreground truncate">{industry.name}</div>
            </div>
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {industry.menu.map((group) => (
          <SidebarGroup key={group.label}>
            {!collapsed && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const active = item.label === "Dashboard" && pathname === industry.route;
                  const ItemIcon = item.icon;
                  return (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        asChild
                        isActive={active}
                        tooltip={item.label}
                      >
                        <Link
                          to={industry.route}
                          className="flex items-center gap-2"
                        >
                          <ItemIcon className="h-4 w-4 shrink-0" />
                          {!collapsed && <span className="truncate">{item.label}</span>}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Back to industries">
                  <Link to="/" className="flex items-center gap-2 text-muted-foreground">
                    <ArrowLeft className="h-4 w-4 shrink-0" />
                    {!collapsed && <span>Switch industry</span>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}