import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

export default function GitHubStats({ onDataLoaded }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("/github-data.json")
      .then((res) => res.json())
      .then((data) => {
        const oneYearAgo = dayjs().subtract(1, "year");

        // Filter daily contributions to last 6 months
        const filtered = data.contributions
          .map((d) => ({
            date: dayjs(d.date),
            contributionCount: d.contributionCount,
          }))
          .filter((d) => d.date.isAfter(oneYearAgo));

        // Group by month
        const monthly = {};
        filtered.forEach(({ date, contributionCount }) => {
          const month = date.format("MMM YYYY");
          monthly[month] = (monthly[month] || 0) + contributionCount;
        });

        const formatted = Object.entries(monthly)
          .map(([month, total]) => ({ month, total }))
          .sort((a, b) =>
            dayjs(a.month, "MMM YYYY").isAfter(dayjs(b.month, "MMM YYYY"))
              ? 1
              : -1
          );

        setChartData(formatted);

        // Export values
        if (onDataLoaded) {
          onDataLoaded({
            totalRepos: data.totalRepos,
            streak: data.streak,
          });
        }
      })
      .catch((err) => console.error("Error fetching GitHub data:", err));
  }, []);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div className="pr-12 mx-auto">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          {/* light grid */}
          <XAxis
            dataKey="month"
            interval={0}
            angle={-35}
            textAnchor="end"
            tick={{ fontSize: 10 }}
          />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#602BF8"
            strokeWidth={2}
            dot={{ fill: "#602BF8", strokeWidth: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
