import React from "react";
import { Card, CardBody } from "@windmill/react-ui";

function StatsCard({ title, metric, targetAchieved, change }) {
  return (
    <Card>
      <CardBody className=" px-0">
        <div className="text-center border-b dark:border-gray-600 border-gray-400  pb-3 border-opacity-50">
          <p className="font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
        </div>
        <div className="p-5">
          <h1 className="text-center mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
            {metric}
          </h1>
          <div className="flex flex-col items-center   gap-4">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Target Achieved{" "}
              <span className="ml-4 text-red-600">{targetAchieved}</span>
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Change Over Last Year{" "}
              <span className="ml-4 text-red-600">{change}</span>
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default StatsCard;
