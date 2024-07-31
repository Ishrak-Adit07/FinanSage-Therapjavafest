/* eslint-disable react/prop-types */

import { useState } from "react";
import { PROJECT_LAUNCH_YEAR } from "../../constants";

/* eslint-disable no-unused-vars */
const SimpleDateInput = ({ date, setDate }) => {
  const [error, setError] = useState(null);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - PROJECT_LAUNCH_YEAR + 1 },
    (_, i) => currentYear - i
  );

  return (
    <div className="flex flex-col mt-6">
      <div className="mb-4">
        <label className="block mb-2 text-lg font-medium text-gray-700">
          Select Date
        </label>
        <div className="flex space-x-2">
          <select
            value={date.day}
            onChange={(e) => setDate({ ...date, day: e.target.value })}
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="" disabled>
              Day
            </option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>

          <select
            value={date.month}
            onChange={(e) => setDate({ ...date, month: e.target.value })}
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="" disabled>
              Month
            </option>
            {months.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>

          <select
            value={date.year}
            onChange={(e) => setDate({ ...date, year: e.target.value })}
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="" disabled>
              Year
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SimpleDateInput;
