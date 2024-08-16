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
    name: "Sunday",
    Balance: 3900,
    amt: 2400,
  },
  {
    name: "Monday",
    Balance: 3000,
    amt: 2210,
  },
  {
    name: "Tuesday",
    Balance: 0,
    amt: 2290,
  },
  {
    name: "Wednesday",
    Balance: 0,
    amt: 2000,
  },
  {
    name: "Thursday",
    Balance: 0,
    amt: 2181,
  },
  {
    name: "Friday",
    Balance: 0,
    amt: 2500,
  },
  {
    name: "Saturday",
    Balance: 0,
    amt: 2100,
  },
];

function SimpleLineChart({ headerText, subHeaderText }) {
  return (
    <div
      style={{ width: "100%", height: 500 }}
      className="flex flex-col justify-center items-center my-20"
    >
      <h1 className="text-2xl mb-20 text-slate-500 text-center">{headerText}</h1>
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
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Balance"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SimpleLineChart;
