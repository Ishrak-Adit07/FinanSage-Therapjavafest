/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function SimpleBarGraph({ headerText, totalIncome, totalExpense }) {

    const data = [
        {
          name: "",
          Income: totalIncome,
          Expense: totalExpense,
          amt: 2400,
        },
      ];

  return (
    <div
      style={{ width: "100%", height: 400 }}
      className="flex flex-wrap justify-center items-center my-10"
    >
      <h1 className="text-2xl mb-10 text-slate-500">{headerText}</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <Bar dataKey="Income" fill="#08a6a3" />
          <Bar dataKey="Expense" fill="#f02b11" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SimpleBarGraph;
