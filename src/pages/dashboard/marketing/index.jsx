import React from "react";
import { MarketingCard } from "../../../components/Cards/MarketingCard";
import InfoCard from "../../../components/Cards/InfoCard";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../../../icons";
import RoundIcon from "../../../components/RoundIcon";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import {
  doughnutOptions,
  lineOptions,
  barOptions,
  doughnutLegends,
  lineLegends,
  barLegends,
} from "../../../utils/demo/chartsData";
import ChartCard from "../../../components/Chart/ChartCard";
import ChartLegend from "../../../components/Chart/ChartLegend";

const Marketing = () => {
  return (
    <div className="py-10 flex flex-col row-gap-10">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Impressions" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Aquisitions" value="4500">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Clicks" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Cost Per Aquisitions" value="$ 46,760.89">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Cost Per Click" value="₦ 400,000">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Click Through Rate" value="35">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
      <div className="grid row-gap-6 md:row-gap-0 md:col-gap-5  md:grid-cols-4">
        <MarketingCard
          amount={"₦ 1,000,000"}
          title="Total Spent"
          totalBudget="₦ 2,000"
          className="text-blue-600 border-blue-500 "
        />
        <MarketingCard
          amount={"₦ 1,000,000"}
          title="Total Spent"
          totalBudget="₦ 2,000"
          className="text-green-600 border-green-500 "
        />
        <MarketingCard
          amount={"₦ 1,000,000"}
          title="Total Spent"
          className="text-purple-600 border-purple-500 "
        />
        <MarketingCard
          amount={"₦ 1,000,000"}
          title="Total Spent"
          totalBudget="₦ 2,000"
          className="text-yellow-600 border-yellow-500 "
        />
      </div>
      <div className="grid row-gap-6 md:row-gap-0 md:col-gap-6 mb-8 md:grid-cols-2">
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
      <div className="grid row-gap-6 md:row-gap-0 md:col-gap-6 mb-8 md:grid-cols-2">
        <div className="">
          <ChartCard title="CTR by Campaign">
            <Line {...lineOptions} />
            <ChartLegend legends={lineLegends} />
          </ChartCard>
        </div>
        <div className="">
          <ChartCard title="Actual Sales vs Target">
            <Bar {...barOptions} />
            <ChartLegend legends={barLegends} />
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
