import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const grid = "oklch(0.92 0.012 250)";
const axis = "oklch(0.5 0.03 256)";

export function AreaTrend({
  data,
  dataKey,
  xKey = "name",
}: {
  data: Record<string, string | number>[];
  dataKey: string;
  xKey?: string;
}) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="brandFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--brand, var(--primary))" stopOpacity={0.35} />
              <stop offset="100%" stopColor="var(--brand, var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={grid} strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey={xKey} stroke={axis} fontSize={11} tickLine={false} axisLine={false} />
          <YAxis stroke={axis} fontSize={11} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: "1px solid var(--color-border)",
              fontSize: 12,
            }}
          />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke="var(--brand, var(--primary))"
            strokeWidth={2.5}
            fill="url(#brandFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function BarSeries({
  data,
  dataKey,
  xKey = "name",
}: {
  data: Record<string, string | number>[];
  dataKey: string;
  xKey?: string;
}) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid stroke={grid} strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey={xKey} stroke={axis} fontSize={11} tickLine={false} axisLine={false} />
          <YAxis stroke={axis} fontSize={11} tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ fill: "oklch(0.96 0.02 258)" }}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid var(--color-border)",
              fontSize: 12,
            }}
          />
          <Bar dataKey={dataKey} fill="var(--brand, var(--primary))" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const donutColors = [
  "var(--brand, var(--primary))",
  "oklch(0.7 0.14 200)",
  "oklch(0.72 0.14 155)",
  "oklch(0.78 0.15 75)",
  "oklch(0.65 0.2 20)",
  "oklch(0.6 0.16 285)",
];

export function Donut({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={55}
            outerRadius={85}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {data.map((_, i) => (
              <Cell key={i} fill={donutColors[i % donutColors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: "1px solid var(--color-border)",
              fontSize: 12,
            }}
          />
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{ fontSize: 11 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}