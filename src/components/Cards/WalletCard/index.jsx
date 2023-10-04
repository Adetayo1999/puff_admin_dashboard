import React from "react";

export const WalletCard = ({
  bankName,
  amount,
  ownerName,
  exp,
  cvv,
  className,
  style,
}) => {
  return (
    <div
      className={`${className} text-white flex flex-col justify-between p-6 rounded-lg h-56`}
      style={{
        backdropFilter: "blur(11.835616111755371px)",
        boxShadow:
          "-2.818px -2.818px 140.90019px 0px rgba(255, 255, 255, 0.02) inset",
        ...style,
      }}
    >
      <p className="text-sm">{bankName}</p>
      <h1 className="font-bold text-3xl">{amount}</h1>
      <div className="flex justify-between">
        <div className="">
          <p className="text-xs">Owner Name</p>
          <h6 className="text-sm font-semibold">{ownerName}</h6>
        </div>
        <div className="flex items-center col-gap-3">
          <div className="">
            <p className="text-xs">Expiry</p>
            <h6 className="text-sm font-semibold">{exp}</h6>
          </div>
          <div className="">
            <p className="text-xs">CVV</p>
            <h6 className="text-sm font-semibold">{cvv}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
