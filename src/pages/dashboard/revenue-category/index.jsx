import React from "react";
import { RevenueCard } from "../../../components/Cards/RevenueCard";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  doughnutOptions,
  barOptions,
  doughnutLegends,
  barLegends,
} from "../../../utils/demo/chartsData";
import ChartCard from "../../../components/Chart/ChartCard";
import ChartLegend from "../../../components/Chart/ChartLegend";

const RevenueCategory = () => {
  return (
    <div className="py-10 flex flex-col row-gap-10 w-full">
      <div className="grid row-gap-6 md:row-gap-0 md:col-gap-5  md:grid-cols-3">
        <RevenueCard
          amount="₦79,572,512.76"
          previousAmount="₦52M"
          percentageChange="+21.34%"
          className="text-white"
          style={{
            backgroundColor: "#486443",
          }}
          innerStyle={{
            color: "#B0EBA5",
          }}
        />
        <RevenueCard
          amount="₦79,572,512.76"
          previousAmount="₦52M"
          percentageChange="+21.34%"
          className="text-white"
          style={{
            backgroundColor: "#5388BE",
          }}
          innerStyle={{
            color: "#B0EBA5",
          }}
        />
        <RevenueCard
          amount="₦79,572,512.76"
          previousAmount="₦52M"
          percentageChange="+21.34%"
          className=""
          style={{
            backgroundColor: "#FCCE58",
            color: "#3E3939",
          }}
          innerStyle={{
            color: "#6F661A",
          }}
        />
      </div>
      <div className="grid row-gap-6  md:col-gap-6 mb-8 md:grid-cols-2">
        <div className="">
          <ChartCard title="CPA by Campaign">
            <Bar {...barOptions} />
            <ChartLegend legends={barLegends} />
          </ChartCard>
        </div>
        <div className="">
          <ChartCard title="Acquisitions by Campaign">
            <Doughnut {...doughnutOptions} />
            <ChartLegend legends={doughnutLegends} />
          </ChartCard>
        </div>
        <div className="">
          <ChartCard title="CPA by Campaign">
            <Bar {...barOptions} />
            <ChartLegend legends={barLegends} />
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default RevenueCategory;
