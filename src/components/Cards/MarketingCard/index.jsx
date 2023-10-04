import React from "react";
import { Card, CardBody } from "@windmill/react-ui";

export const MarketingCard = ({
  className = "text-green-500 border-green-500",
  totalBudget = "",
  amount,
  title,
}) => {
  return (
    <Card>
      <CardBody className="flex justify-center items-center">
        <div
          className={` flex justify-center flex-col items-center  h-56   w-56 md:w-full rounded-full ${className}`}
          style={{ borderWidth: "18px", borderRightColor: "#D3D0D0" }}
        >
          <h6 className="font-bold">{amount}</h6>
          <h1 className=" mb-2">{title}</h1>
          <p className="text-xs">VS Total Budget</p>
          <h6 className="font-bold">{totalBudget}</h6>
        </div>
      </CardBody>
    </Card>
  );
};

MarketingCard.propTypes = {
  className: "text-green-500 border-green-500",
  totalBudget: "",
};
