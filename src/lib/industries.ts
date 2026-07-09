import {
  GraduationCap,
  Building2,
  UtensilsCrossed,
  Factory as FactoryIcon,
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
  Repeat,
  Landmark,
  HandCoins,
  HeartHandshake,
  Kanban,
  ListChecks,
  Timer,
  Milestone,
  GitBranch,
  Target,
  type LucideIcon,
} from "lucide-react";

export type MenuItem = { label: string; icon: LucideIcon };
export type MenuGroup = { label: string; items: MenuItem[] };

export type IndustryId =
  | "school-hr"
  | "school-academic"
  | "tahfidz"
  | "office"
  | "restaurant"
  | "manufacture"
  | "clinic"
  | "warehouse"
  | "project"
  | "yayasan";

export type IndustryConfig = {
  id: IndustryId;
  name: string;
  tagline: string;
  description: string;
  route: string;
  icon: LucideIcon;
  brandVar: string; // css var name
  gradient: string; // tailwind gradient classes for card accent
  menu: MenuGroup[];
};

export const industries: IndustryConfig[] = [
  {
    id: "school-hr",
    name: "School Management Karyawan",
    tagline: "School HR & Staff",
    description:
      "Kelola karyawan sekolah — guru, staf, absensi, cuti, payroll dan rekrutmen.",
    route: "/school-hr",
    icon: BriefcaseBusiness,
    brandVar: "--brand-school-hr",
    gradient: "from-violet-500/15 to-indigo-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "People",
        items: [
          { label: "Teachers", icon: UserCog },
          { label: "Staff", icon: Users },
          { label: "Employees", icon: BriefcaseBusiness },
          { label: "Recruitment", icon: UserPlus },
        ],
      },
      {
        label: "Time & Pay",
        items: [
          { label: "Attendance", icon: ClipboardCheck },
          { label: "Leave", icon: CalendarClock },
          { label: "Payroll", icon: Banknote },
          { label: "Contracts", icon: FileText },
        ],
      },
      {
        label: "Admin",
        items: [
          { label: "Assets", icon: Package },
          { label: "Letters", icon: Mail },
          { label: "Finance", icon: Wallet },
          { label: "Reports", icon: PieChart },
          { label: "Settings", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "school-academic",
    name: "School Academic Information",
    tagline: "Academic Operations",
    description:
      "Sistem akademik — siswa, kelas, jadwal, ujian, nilai dan rapor.",
    route: "/school-academic",
    icon: GraduationCap,
    brandVar: "--brand-school-academic",
    gradient: "from-indigo-500/15 to-blue-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Students",
        items: [
          { label: "Students", icon: Users },
          { label: "Admissions", icon: UserPlus },
          { label: "Attendance", icon: ClipboardCheck },
        ],
      },
      {
        label: "Academic",
        items: [
          { label: "Class", icon: School },
          { label: "Schedule", icon: CalendarDays },
          { label: "Subjects", icon: BookMarked },
          { label: "Examination", icon: FileCheck2 },
          { label: "Report Card", icon: Award },
        ],
      },
      {
        label: "Operations",
        items: [
          { label: "Finance", icon: Wallet },
          { label: "Documents", icon: FileText },
          { label: "Reports", icon: PieChart },
          { label: "Settings", icon: Settings },
        ],
      },
    ],
  },
  {
    id: "tahfidz",
    name: "Tahfidz Management",
    tagline: "Islamic Studies",
    description:
      "Manajemen hafalan Al-Qur'an — santri, halaqoh, murojaah, tilawah dan ustadz.",
    route: "/tahfidz",
    icon: BookOpen,
    brandVar: "--brand-tahfidz",
    gradient: "from-emerald-500/15 to-teal-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Santri",
        items: [
          { label: "Santri", icon: Users },
          { label: "Halaqoh", icon: School },
          { label: "Attendance", icon: ClipboardCheck },
        ],
      },
      {
        label: "Hafalan",
        items: [
          { label: "Tahfidz", icon: BookOpen },
          { label: "Murojaah", icon: BookMarked },
          { label: "Tilawah", icon: Mic2 },
          { label: "Ujian Hafalan", icon: FileCheck2 },
          { label: "Sertifikat", icon: Award },
        ],
      },
      {
        label: "Ustadz",
        items: [
          { label: "Ustadz", icon: UserCog },
          { label: "Schedule", icon: CalendarDays },
          { label: "Laporan", icon: FileText },
        ],
      },
      {
        label: "Admin",
        items: [
          { label: "Reports", icon: PieChart },
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
    id: "manufacture",
    name: "Manufacture ERP",
    tagline: "Production & Plant",
    description:
      "Manajemen produksi, mesin, quality control, maintenance dan logistik pabrik.",
    route: "/manufacture",
    icon: FactoryIcon,
    brandVar: "--brand-manufacture",
    gradient: "from-amber-500/15 to-yellow-500/5",
    menu: [
      { label: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
      {
        label: "Production",
        items: [
          { label: "Production", icon: Factory },
          { label: "Work Orders", icon: FolderKanban },
          { label: "BOM", icon: BookMarked },
          { label: "Machines", icon: Wrench },
          { label: "Quality Control", icon: ShieldCheck },
          { label: "Maintenance", icon: Wrench },
        ],
      },
      {
        label: "People",
        items: [
          { label: "Employees", icon: Users },
          { label: "Operators", icon: IdCard },
          { label: "Attendance", icon: ClipboardCheck },
          { label: "Payroll", icon: Banknote },
        ],
      },
      {
        label: "Supply",
        items: [
          { label: "Warehouse", icon: Warehouse },
          { label: "Inventory", icon: Boxes },
          { label: "Raw Materials", icon: Package },
          { label: "Purchasing", icon: ShoppingCart },
          { label: "Logistics", icon: RouteIcon },
          { label: "Energy & Fuel", icon: Fuel },
          { label: "Fleet", icon: Car },
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