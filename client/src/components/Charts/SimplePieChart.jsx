/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Salary", value: 400 },
  { name: "Gift", value: 300 },
  { name: "Tution", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Health", value: 2400 },
  { name: "Groceries", value: 4567 },
  { name: "Market", value: 1398 },
  { name: "Transport", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

function SimplePieChart({ headerText, pieColor, data }) {
  return (
    <div
      style={{ width: "100%", height: 400 }}
      className="flex flex-wrap justify-center items-center my-10"
    >
      <h1 className="text-2xl mb-10 text-slate-500">{headerText}</h1>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill={pieColor}
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
export default SimplePieChart;
