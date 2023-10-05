import React from "react";
import { Card, CardBody } from "@windmill/react-ui";

export const SalaryCard = ({ title, stats, percentage }) => {
  return (
    <Card>
      <CardBody className="px-0 py-3 pb-6">
        <div className="py-3 border-b dark:border-gray-700 border-opacity-50">
          <h5 className="text-center font-semibold text-gray-600 dark:text-gray-400 text-sm">
            {title}
          </h5>
        </div>
        <div className="py-4 row-gap-2 flex flex-col justify-center items-center">
          <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {stats}
          </h1>
          <p
            className={` font-medium ${
              Number(percentage) < 0 ? "text-red-500" : "text-blue-600"
            }`}
          >
            {percentage}%
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            VS Previous Month
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
