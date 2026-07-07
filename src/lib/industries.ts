import {
  GraduationCap,
  Building2,
  UtensilsCrossed,
  Mountain,
  Stethoscope,
  Warehouse,
  LayoutDashboard,
  Users,
  UserCog,
  ClipboardCheck,
  BookOpen,
  Mic2,
  School,
  CalendarDays,
  FileCheck2,
  Award,
  Wallet,
  Banknote,
  Boxes,
  FileText,
  Settings,
  BriefcaseBusiness,
  UserPlus,
  CalendarClock,
  Package,
  FolderKanban,
  Mail,
  PieChart,
  ShoppingCart,
  ChefHat,
  Table2,
  BookMarked,
  Truck,
  BadgePercent,
  Factory,
  Car,
  Wrench,
  Fuel,
  IdCard,
  ShieldCheck,
  Route as RouteIcon,
  HeartPulse,
  UserRound,
  Pill,
  FlaskConical,
  Receipt,
  Move3d,
  ArrowDownToLine,
  ArrowUpFromLine,
  Handshake,
  type LucideIcon,
} from "lucide-react";

export type MenuItem = { label: string; icon: LucideIcon };
export type MenuGroup = { label: string; items: MenuItem[] };

export type IndustryId =
  | "school"
  | "office"
  | "restaurant"
  | "mining"
  | "clinic"
  | "warehouse";

export type IndustryConfig = {
  id: IndustryId;
  name: string;
  tagline: string;
  description: string;
  route: "/school" | "/office" | "/restaurant" | "/mining" | "/clinic" | "/warehouse";
  icon: LucideIcon;
  brandVar: string; // css var name
  gradient: string; // tailwind gradient classes for card accent
  menu: MenuGroup[];
};

export const industries: IndustryConfig[] = [
  {
    id: "school",
    name: "School ERP",
    tagline: "Academic Operations",
    description:
      "Academic management, Tahfidz, teachers, students and finance in one place.",
    route: "/school",
    icon: GraduationCap,
    brandVar: "--brand-school",
    gradient: "from-indigo-500/15 to-blue-500/5",
    menu: [
      {
        label: "Overview",
        items: [{ label: "Dashboard", icon: LayoutDashboard }],
      },
      {
        label: "People",
        items: [
          { label: "Students", icon: Users },
          { label: "Teachers", icon: UserCog },
          { label: "Employees", icon: BriefcaseBusiness },
          { label: "Attendance", icon: ClipboardCheck },
        ],
      },
      {
        label: "Islamic Studies",
        items: [
          { label: "Tahfidz", icon: BookOpen },
          { label: "Tilawah", icon: Mic2 },
        ],
      },
      {
        label: "Academic",
        items: [
          { label: "Class", icon: School },
          { label: "Schedule", icon: CalendarDays },
          { label: "Examination", icon: FileCheck2 },
          { label: "Report Card", icon: Award },
        ],
      },
      {
        label: "Operations",
        items: [
          { label: "Finance", icon: Wallet },
          { label: "Payroll", icon: Banknote },
          { label: "Inventory", icon: Boxes },
          { label: "Documents", icon: FileText },
          { label: "Settings", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "office",
    name: "Office ERP",
    tagline: "HR & Administration",
    description:
      "HR, payroll, attendance, inventory and administration for modern offices.",
    route: "/office",
    icon: Building2,
    brandVar: "--brand-office",
    gradient: "from-sky-500/15 to-cyan-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "People",
        items: [
          { label: "Employees", icon: Users },
          { label: "HR", icon: UserCog },
          { label: "Recruitment", icon: UserPlus },
          { label: "Attendance", icon: ClipboardCheck },
          { label: "Leave", icon: CalendarClock },
          { label: "Payroll", icon: Banknote },
        ],
      },
      {
        label: "Operations",
        items: [
          { label: "Inventory", icon: Boxes },
          { label: "Assets", icon: Package },
          { label: "Projects", icon: FolderKanban },
          { label: "Letters", icon: Mail },
        ],
      },
      {
        label: "Finance",
        items: [
          { label: "Finance", icon: Wallet },
          { label: "Reports", icon: PieChart },
          { label: "Settings", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "restaurant",
    name: "Restaurant ERP",
    tagline: "POS & Kitchen",
    description:
      "POS, kitchen, inventory, purchasing and outlet management for F&B teams.",
    route: "/restaurant",
    icon: UtensilsCrossed,
    brandVar: "--brand-restaurant",
    gradient: "from-orange-500/15 to-rose-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Sales",
        items: [
          { label: "POS", icon: ShoppingCart },
          { label: "Orders", icon: Receipt },
          { label: "Kitchen", icon: ChefHat },
          { label: "Tables", icon: Table2 },
          { label: "Menu", icon: BookMarked },
        ],
      },
      {
        label: "Supply",
        items: [
          { label: "Inventory", icon: Boxes },
          { label: "Recipes", icon: BookOpen },
          { label: "Suppliers", icon: Truck },
          { label: "Purchasing", icon: ShoppingCart },
        ],
      },
      {
        label: "People",
        items: [
          { label: "Employees", icon: Users },
          { label: "Attendance", icon: ClipboardCheck },
          { label: "Payroll", icon: Banknote },
        ],
      },
      {
        label: "Growth",
        items: [
          { label: "Customers", icon: UserRound },
          { label: "Promotions", icon: BadgePercent },
          { label: "Finance", icon: Wallet },
          { label: "Reports", icon: PieChart },
          { label: "Settings", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "mining",
    name: "Mining ERP",
    tagline: "Fleet & Production",
    description:
      "Fleet management, production, maintenance and logistics for mining ops.",
    route: "/mining",
    icon: Mountain,
    brandVar: "--brand-mining",
    gradient: "from-amber-500/15 to-yellow-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Operations",
        items: [
          { label: "Production", icon: Factory },
          { label: "Fleet", icon: Car },
          { label: "Equipment", icon: Wrench },
          { label: "Maintenance", icon: Wrench },
          { label: "Fuel", icon: Fuel },
          { label: "Drivers", icon: IdCard },
        ],
      },
      {
        label: "People",
        items: [
          { label: "Employees", icon: Users },
          { label: "Attendance", icon: ClipboardCheck },
          { label: "Payroll", icon: Banknote },
        ],
      },
      {
        label: "Supply",
        items: [
          { label: "Warehouse", icon: Warehouse },
          { label: "Inventory", icon: Boxes },
          { label: "Purchasing", icon: ShoppingCart },
          { label: "Logistics", icon: RouteIcon },
          { label: "Safety", icon: ShieldCheck },
        ],
      },
      {
        label: "Finance",
        items: [
          { label: "Finance", icon: Wallet },
          { label: "Reports", icon: PieChart },
          { label: "Settings", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "clinic",
    name: "Clinic ERP",
    tagline: "Patient Care",
    description:
      "Patient management, pharmacy, inventory and finance for clinics.",
    route: "/clinic",
    icon: Stethoscope,
    brandVar: "--brand-clinic",
    gradient: "from-teal-500/15 to-emerald-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Care",
        items: [
          { label: "Patients", icon: UserRound },
          { label: "Doctors", icon: HeartPulse },
          { label: "Appointments", icon: CalendarClock },
          { label: "Medical Records", icon: FileText },
        ],
      },
      {
        label: "Services",
        items: [
          { label: "Pharmacy", icon: Pill },
          { label: "Laboratory", icon: FlaskConical },
          { label: "Inventory", icon: Boxes },
          { label: "Billing", icon: Receipt },
        ],
      },
      {
        label: "People",
        items: [
          { label: "Employees", icon: Users },
          { label: "Attendance", icon: ClipboardCheck },
          { label: "Payroll", icon: Banknote },
        ],
      },
      {
        label: "Finance",
        items: [
          { label: "Finance", icon: Wallet },
          { label: "Reports", icon: PieChart },
          { label: "Settings", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "warehouse",
    name: "Warehouse ERP",
    tagline: "Stock & Logistics",
    description:
      "Inventory, purchasing, stock movement and supplier management at scale.",
    route: "/warehouse",
    icon: Warehouse,
    brandVar: "--brand-warehouse",
    gradient: "from-violet-500/15 to-purple-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Stock",
        items: [
          { label: "Inventory", icon: Boxes },
          { label: "Products", icon: Package },
          { label: "Stock Movement", icon: Move3d },
          { label: "Warehouse", icon: Warehouse },
        ],
      },
      {
        label: "Trade",
        items: [
          { label: "Suppliers", icon: Handshake },
          { label: "Purchase Orders", icon: ShoppingCart },
          { label: "Sales Orders", icon: Receipt },
          { label: "Receiving", icon: ArrowDownToLine },
          { label: "Shipping", icon: ArrowUpFromLine },
        ],
      },
      {
        label: "People",
        items: [
          { label: "Employees", icon: Users },
          { label: "Attendance", icon: ClipboardCheck },
          { label: "Payroll", icon: Banknote },
        ],
      },
      {
        label: "Finance",
        items: [
          { label: "Reports", icon: PieChart },
          { label: "Finance", icon: Wallet },
          { label: "Settings", icon: Settings },
        ],
      },
    ],
  },
];

export const getIndustry = (id: IndustryId) =>
  industries.find((i) => i.id === id)!;