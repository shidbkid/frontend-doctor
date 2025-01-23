"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Course A", completion: 75 },
  { name: "Course B", completion: 50 },
  { name: "Course C", completion: 90 },
  { name: "Course D", completion: 20 },
];

export default function CompletionGraph() {
  return (
    <div className=" p-6 shadow-lg rounded-lg text-black">
      <h2 className="text-2xl font-bold mb-4 text-center">Course Completion Progress</h2>
      <div style={{ width: "100%", height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#000" }} // White labels for X-axis
              interval={0}
              angle={-45}
              textAnchor="end"
            />
            <YAxis tick={{ fontSize: 12, fill: "#000" }} /> {/* White labels for Y-axis */}
            <Tooltip
              contentStyle={{ backgroundColor: "#ffffff", color: "#000000" }} // Tooltip background white
              cursor={{ fill: "#f1f5f9" }} // Light gray hover effect on bars
            />
            <Bar dataKey="completion" fill="#5AB1F3" radius={[4, 4, 0, 0]} /> {/* Hospital blue bars */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
