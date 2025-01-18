"use client";

import { Area, AreaChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface RealTimeChartProps {
  data: { date: string; value: number }[];
  gradientId: string;
  strokeColor: string;
}

const RealTimeChart: React.FC<RealTimeChartProps> = ({ data, gradientId, strokeColor }) => {
  return (
    <div className="h-[200px] w-full ">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={strokeColor} stopOpacity={0.8} />
              <stop offset="95%" stopColor={strokeColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            domain={[2, 'auto']}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            domain={[0, 'auto']} // Starts from 0 for Y-axis
            ticks={[0, 2000, 4000, 6000, 8000]} // Ticks as numbers
            tickFormatter={(value) => `${value === 0 ? '0' : value / 1000 + 'k'}`}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={strokeColor}
            fill={`url(#${gradientId})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RealTimeChart;
