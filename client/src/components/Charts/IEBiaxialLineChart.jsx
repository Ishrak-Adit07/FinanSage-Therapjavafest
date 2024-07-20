/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    income: 4000,
    expense: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    income: 3000,
    expense: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    income: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    income: 2780,
    expense: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    income: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    income: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    income: 3490,
    expense: 4300,
    amt: 2100,
  },
];

function IEBiaxialLineChart({ headerText }) {
  return (
    <div
      style={{ width: "100%", height: 400 }}
      className="flex flex-wrap justify-center items-center my-10"
    >
      <h1 className="text-2xl mb-10 text-slate-500">{headerText}</h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="expense"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line yAxisId="right" type="monotone" dataKey="income" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IEBiaxialLineChart;