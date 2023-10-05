import React from "react";
import { Card, CardBody } from "@windmill/react-ui";

export const RevenueCard = ({
  amount,
  previousAmount,
  percentageChange,
  className,
  style,
  innerStyle,
}) => {
  return (
    <Card>
      <CardBody
        className={`${className} flex flex-col row-gap-5 px-4 `}
        style={style}
      >
        <div className="">
          <p className="mb-3">Revenue</p>
          <h1 className="text-3xl font-bold">{amount}</h1>
        </div>
        <div style={innerStyle}>
          <p className="text-sm">Previous</p>
          <h3 className="font-semibold">{previousAmount}</h3>
        </div>
        <div className="flex justify-between items-center">
          <div style={innerStyle}>
            <p className="text-sm">% Change</p>
            <h3 className="font-semibold">{percentageChange}</h3>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm">Trend</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
              >
                <path
                  d="M7.92968 0.905151L15.4262 10.8048H0.433154L7.92968 0.905151Z"
                  fill="#61F2AB"
                />
              </svg>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
