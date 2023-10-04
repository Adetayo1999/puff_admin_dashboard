import React from "react";
import { Button, Label, Select } from "@windmill/react-ui";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import StatsCard from "../../../components/Cards/StatsCard";
import { ExportIcon } from "../../../icons";
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

const Revenue = () => {
  return (
    <div className="py-6 flex flex-col row-gap-8 ">
      <div className="flex justify-between items-center">
        <div className="">
          <Button iconLeft={ExportIcon}>
            <span>Export</span>
          </Button>
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm mr-4">
            Select Month
          </span>
          <Label className="">
            <Select className="">
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
            </Select>
          </Label>
        </div>
      </div>
      <div className="grid row-gap-6 md:row-gap-0  md:col-gap-5 grid-cols-1 md:grid-cols-4">
        <StatsCard
          change={"-1%"}
          targetAchieved={"94%"}
          metric="8,916"
          title="Sales"
        />
        <StatsCard
          change={"-1%"}
          targetAchieved={"94%"}
          metric="8,916"
          title="Gross Profit"
        />
        <StatsCard
          change={"-1%"}
          targetAchieved={"94%"}
          metric="8,916"
          title="Operating Profit"
        />
        <StatsCard
          change={"-1%"}
          targetAchieved={"94%"}
          metric="8,916"
          title="Net Profit"
        />
      </div>
      <div className="grid row-gap-6 md:row-gap-0 md:col-gap-6 mb-8 md:grid-cols-2">
        <div className="">
          <ChartCard title="Sales (Amount) by Product Category">
            <Doughnut {...doughnutOptions} />
            <ChartLegend legends={doughnutLegends} />
          </ChartCard>
        </div>
        <div className="">
          <ChartCard title="Actual Sales vs Target">
            <Bar {...barOptions} />
            <ChartLegend legends={barLegends} />
          </ChartCard>
        </div>
      </div>
      <div className="grid row-gap-6 md:row-gap-0 md:col-gap-6 mb-8 md:grid-cols-2">
        <div className="">
          <ChartCard title="Income Statement">
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
      <div className="grid row-gap-6 md:row-gap-0 md:col-gap-3 mb-8 md:grid-cols-4">
        <div className="">
          <ChartCard title="Employee Cost vs Sales">
            <Line {...lineOptions} />
            <ChartLegend legends={lineLegends} />
          </ChartCard>
        </div>
        <div className="">
          <ChartCard title="Head Counts">
            <Doughnut {...doughnutOptions} />
            <ChartLegend legends={doughnutLegends} />
          </ChartCard>
        </div>
        <div className="">
          <ChartCard title="Employees By Departments">
            <Line {...lineOptions} />
            <ChartLegend legends={lineLegends} />
          </ChartCard>
        </div>
        <div className="">
          <ChartCard title="Salary By Departments">
            <Bar {...barOptions} />
            <ChartLegend legends={barLegends} />
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
