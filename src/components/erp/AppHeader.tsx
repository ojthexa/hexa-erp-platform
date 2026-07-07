import { Link } from "@tanstack/react-router";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Search,
  ChevronRight,
  Building2,
  ChevronsUpDown,
} from "lucide-react";
import type { IndustryConfig } from "@/lib/industries";

export function AppHeader({ industry }: { industry: IndustryConfig }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b bg-card/80 px-3 backdrop-blur sm:px-6">
      <SidebarTrigger />
      <nav className="hidden items-center gap-1.5 text-sm md:flex">
        <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
          Industries
        </Link>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="font-medium text-foreground">{industry.name}</span>
        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-muted-foreground">Dashboard</span>
      </nav>
      <div className="relative ml-auto hidden max-w-sm flex-1 md:block">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder={`Search in ${industry.name}...`}
          className="h-10 rounded-full bg-secondary/60 pl-9 border-transparent focus-visible:bg-card"
        />
      </div>
      <Button variant="ghost" size="sm" className="hidden gap-2 rounded-full lg:flex">
        <Building2 className="h-4 w-4" />
        <span>HEXA Group</span>
        <ChevronsUpDown className="h-3.5 w-3.5 text-muted-foreground" />
      </Button>
      <Button variant="ghost" size="icon" className="relative rounded-full">
        <Bell className="h-4 w-4" />
        <Badge className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full px-1 text-[10px]">
          6
        </Badge>
      </Button>
      <div className="flex items-center gap-2 rounded-full border bg-card px-1 py-1 pr-3">
        <Avatar className="h-7 w-7">
          <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
            HA
          </AvatarFallback>
        </Avatar>
        <div className="hidden text-left text-xs leading-tight sm:block">
          <div className="font-semibold">Hana Aditya</div>
          <div className="text-muted-foreground">Administrator</div>
        </div>
      </div>
    </header>
  );
}