import React from "react";
import { SalaryCard } from "../../../components/Cards/SalaryCard";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  doughnutOptions,
  barOptions,
  doughnutLegends,
  barLegends,
} from "../../../utils/demo/chartsData";
import ChartCard from "../../../components/Chart/ChartCard";
import ChartLegend from "../../../components/Chart/ChartLegend";

const Salary = () => {
  return (
    <div className="py-10 flex flex-col row-gap-10">
      <div className="grid row-gap-6 md:col-gap-5  md:grid-cols-4">
        <SalaryCard
          percentage={-1.3}
          stats="3 360 000"
          title="Total Salary (YTD)"
        />
        <SalaryCard
          percentage={-1.3}
          stats="3 360 000"
          title="Total Salary (YTD)"
        />
        <SalaryCard
          percentage={1.3}
          stats="3 360 000"
          title="Total Salary (YTD)"
        />
        <SalaryCard
          percentage={-1.3}
          stats="3 360 000"
          title="Total Salary (YTD)"
        />
        <SalaryCard
          percentage={5}
          stats="3 360 000"
          title="Total Salary (YTD)"
        />
        <SalaryCard
          percentage={-1.3}
          stats="3 360 000"
          title="Total Salary (YTD)"
        />
      </div>
      <div className="grid row-gap-6  md:col-gap-6 mb-8 md:grid-cols-2">
        <div className="">
          <ChartCard title="Employee">
            <Bar {...barOptions} />
            <ChartLegend legends={barLegends} />
          </ChartCard>
        </div>
        <div className="">
          <ChartCard title="Hired Vs Left">
            <Bar {...barOptions} />
            <ChartLegend legends={barLegends} />
          </ChartCard>
        </div>
        <div className="">
          <ChartCard title="Type of Employee Contract">
            <Doughnut {...doughnutOptions} />
            <ChartLegend legends={doughnutLegends} />
          </ChartCard>
        </div>
        <div className="">
          <ChartCard title="Type of Employee Contract">
            <Doughnut {...doughnutOptions} />
            <ChartLegend legends={doughnutLegends} />
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default Salary;
