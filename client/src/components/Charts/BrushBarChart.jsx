/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", Income: 300, Expense: -456 },
  { name: "2", Income: 145, Expense: -230 },
  { name: "3", Income: 100, Expense: -345 },
  { name: "4", Income: 8, Expense: -450 },
  { name: "5", Income: 100, Expense: -321 },
  { name: "6", Income: 9, Expense: -235 },
  { name: "7", Income: 53, Expense: -267 },
  { name: "8", Income: 252, Expense: -378 },
  { name: "9", Income: 79, Expense: -210 },
  { name: "10", Income: 294, Expense: -23 },
  { name: "12", Income: 43, Expense: -45 },
  { name: "13", Income: 74, Expense: -90 },
  { name: "14", Income: 71, Expense: -130 },
  { name: "15", Income: 117, Expense: -11 },
  { name: "16", Income: 186, Expense: -107 },
  { name: "17", Income: 16, Expense: -926 },
  { name: "18", Income: 125, Expense: -653 },
  { name: "19", Income: 222, Expense: -366 },
  { name: "20", Income: 372, Expense: -486 },
  { name: "21", Income: 182, Expense: -512 },
  { name: "22", Income: 164, Expense: -302 },
  { name: "23", Income: 316, Expense: -425 },
  { name: "24", Income: 131, Expense: -467 },
  { name: "25", Income: 291, Expense: -190 },
  { name: "26", Income: 47, Expense: -194 },
  { name: "27", Income: 415, Expense: -371 },
  { name: "28", Income: 182, Expense: -376 },
  { name: "29", Income: 93, Expense: -295 },
  { name: "30", Income: 99, Expense: -322 },
  { name: "31", Income: 52, Expense: -246 },
];

function BrushBarChart({ headerText }) {
  return (
    <div
      style={{ width: "100%", height: 500 }}
      className="flex flex-wrap justify-center items-center my-20"
    >
      <h1 className="text-2xl mb-20 text-slate-500">{headerText}</h1>
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
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
          <Bar dataKey="Income" fill="#08a6a3" />
          <Bar dataKey="Expense" fill="#f02b11" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BrushBarChart;
