/* eslint-disable react/prop-types */
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

function StraightAnglePieChart({headerText}) {
  return (
    <div
      style={{ width: "100%", height: 300 }}
      className="flex flex-wrap justify-center items-center my-10"
    >
      <h1 className="text-2xl text-slate-500 mb-10">{headerText}</h1>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StraightAnglePieChart;