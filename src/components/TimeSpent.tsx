"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Introduction to Robotics", timeSpent: 10 },
  { name: "Advanced Cardiothoracic Techniques", timeSpent: 15 },
  { name: "Basics of Neurosurgery", timeSpent: 8 },
];

export default function TimeSpent() {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Time Spent on Each Course</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} width={150} />
          <Tooltip />
          <Bar dataKey="timeSpent" fill="#5AB1F3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
