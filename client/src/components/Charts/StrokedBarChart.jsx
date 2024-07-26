/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sunday",
    Expense: 4000,
    Income: 2400,
    amt: 2400,
  },
  {
    name: "Monday",
    Expense: 3000,
    Income: 1398,
    amt: 2210,
  },
  {
    name: "Tuesday",
    Expense: 2000,
    Income: 9800,
    amt: 2290,
  },
  {
    name: "Wednesday",
    Expense: 2780,
    Income: 3908,
    amt: 2000,
  },
  {
    name: "Thursday",
    Expense: 1890,
    Income: 4800,
    amt: 2181,
  },
  {
    name: "Friday",
    Expense: 2390,
    Income: 3800,
    amt: 2500,
  },
  {
    name: "Saturday",
    Expense: 3490,
    Income: 4300,
    amt: 2100,
  },
];

function StrokedBarChart({ headerText }) {
  return (
    <div
      style={{ width: "100%", height: 500 }}
      className="flex flex-wrap justify-center items-center my-20"
    >
      <h1 className="text-2xl mb-20 text-slate-500">{headerText}</h1>
      <ResponsiveContainer width="60%" height="100%">
        <BarChart
          width={50}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Income" stackId="a" fill="#08a6a3" />
          <Bar dataKey="Expense" stackId="a" fill="#f02b11" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StrokedBarChart;
