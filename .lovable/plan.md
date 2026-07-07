# HEXA ERP — Multi-Industry ERP Platform

A clean, enterprise-grade SaaS ERP shell with an industry selector and 6 industry dashboards (School, Office, Restaurant, Mining, Clinic, Warehouse), all sharing a reusable layout. Light theme only. Mock data. Architecture ready for adding new industries.

## Design system

- Light theme, elegant blue (primary), white surfaces, gray neutrals.
- Semantic tokens defined in `src/styles.css` (`@theme inline` + `:root`) — no hardcoded colors in components.
- Font pair: Inter (body) + a slightly tighter display for headings — loaded via `<link>` in `__root.tsx`.
- Rounded cards (rounded-2xl), soft elevation shadow token, generous spacing.
- Smooth micro-interactions: `animate-fade-in`, `hover-scale`, subtle card lift on hover.
- Reusable primitives: KPI card, section card, chart card, activity list, quick action tile.
- Charts via `recharts` (area / bar / donut) — already common in the stack; add if missing.
- Fully responsive: sidebar collapses to icon rail on tablet, offcanvas on mobile.

## Routes

File-based routes under `src/routes/`:

- `index.tsx` → `/` industry selector (home)
- `school.tsx` → `/school`
- `office.tsx` → `/office`
- `restaurant.tsx` → `/restaurant`
- `mining.tsx` → `/mining`
- `clinic.tsx` → `/clinic`
- `warehouse.tsx` → `/warehouse`

Each route sets its own `head()` with unique title + description + og tags.

`__root.tsx` head updated: title "HEXA ERP — Multi-Industry Business Platform", real description, og/twitter meta. Fonts loaded here.

## Home page (`/`)

- Top nav: HEXA ERP logo (left) · notifications bell · company switcher · user avatar (right).
- Hero: "Choose Your Business" + subtitle "Select an industry to access its ERP modules."
- 2-column responsive grid (1 col mobile, 2 desktop) of 6 industry cards.
- Each card: colored icon tile (lucide icon), industry title, description, "Open Dashboard" button, subtle illustration accent.
- Click → navigates to industry route.

## Shared industry dashboard shell

Reusable `ErpLayout` component composed of:

- `AppSidebar` — collapsible (shadcn sidebar), receives `menu` config per industry, highlights active industry brand color.
- `AppHeader` — breadcrumb, global search box, notifications popover, user menu, back-to-industries link.
- Main content area renders industry-specific dashboard.

Sidebar and header are shared; only the menu config and dashboard widgets differ per industry.

## Per-industry dashboards

Each industry gets its own dashboard composition using shared widget primitives, with the exact sidebar menus and widgets specified by the user:

- **School**: Students, Teachers, Attendance, Tahfidz progress, Recent activities, Monthly finance (area chart), Class distribution (donut), Upcoming exams.
- **Office**: Employee count, Attendance today, Payroll summary, Pending leave, Projects, Assets, Tasks, Company news.
- **Restaurant**: Today's sales, Orders, Kitchen queue, Best-selling menu, Inventory alerts, Cash flow (area), Outlet performance (bar).
- **Mining**: Production today, Fleet status, Fuel usage, Maintenance schedule, Inventory level, Employee attendance, Equipment health.
- **Clinic**: Patients today, Appointments, Doctors on duty, Medicine stock, Revenue, Pending payments.
- **Warehouse**: Stock overview, Incoming/outgoing goods, Low stock, Warehouse capacity, Supplier performance.

Every dashboard also gets the common blocks: Quick Actions, Recent Activities, Calendar snippet, Announcements, Task list.

Sidebar items beyond Dashboard render placeholder "Coming soon" content sections (link to the same route with a state) so nav is navigable but scope stays focused on dashboards.

## Data

All mock data lives in `src/lib/mock/<industry>.ts` returning typed objects. No backend, no Cloud.

## Extensibility

- `src/lib/industries.ts` exports an array of `IndustryConfig { id, name, description, icon, route, brandAccent, menu, dashboard }`.
- Home cards and route menus derive from this registry.
- Adding a new industry = add one config entry + one route file + one dashboard component.

## Technical notes

- Stack: TanStack Start + React 19 + Tailwind v4 + shadcn. No dark mode toggle.
- Install `recharts` if not present.
- Use `<Link to="/school">` etc. — never `<a href>`.
- Sidebar uses `SidebarProvider` in each industry route (per shadcn sidebar guidance); trigger in header.
- Keep all colors as semantic tokens; add tokens like `--brand-school`, `--brand-office` etc. for per-industry accent stripes.

## Deliverables checklist

- Updated `src/styles.css` tokens + font link in `__root.tsx` + real meta.
- `src/lib/industries.ts` registry + mock data files.
- `src/components/erp/` — `ErpLayout`, `AppSidebar`, `AppHeader`, `KpiCard`, `SectionCard`, `ActivityList`, `QuickActions`, `ChartCard`.
- Home route + 6 industry route files with unique head() and dashboards.
- Fully responsive, animated, no dark mode.
