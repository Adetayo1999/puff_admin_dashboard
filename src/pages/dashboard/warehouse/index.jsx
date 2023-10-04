import React from "react";
import { Input, Select, Label, Button } from "@windmill/react-ui";
import {
  CartIcon,
  ChatIcon,
  MoneyIcon,
  PeopleIcon,
  SearchIcon,
} from "../../../icons";
import InfoCard from "../../../components/Cards/InfoCard";
import RoundIcon from "../../../components/RoundIcon";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  doughnutOptions,
  barOptions,
  doughnutLegends,
  barLegends,
} from "../../../utils/demo/chartsData";
import ChartCard from "../../../components/Chart/ChartCard";
import ChartLegend from "../../../components/Chart/ChartLegend";

const WareHouse = () => {
  return (
    <div className="py-10 flex flex-col row-gap-10">
      <div className="flex justify-between items-center">
        <div
          className=""
          style={{
            flexGrow: 0.2,
          }}
        >
          <Label className="">
            <Select className="">
              <option>All Warehouse</option>
            </Select>
          </Label>
        </div>
        <div
          className="flex "
          style={{
            flexGrow: 0.5,
          }}
        >
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon
                className="w-4 h-4 text-purple-500"
                aria-hidden="true"
              />
            </div>
            <Input
              className="pl-8 text-gray-700"
              placeholder="Search..."
              aria-label="Search"
            />
          </div>
          <Button>Filter</Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Inventories" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Received" value="4500">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="On Hold" value="6389">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Shipped" value="468">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
      <div className="grid row-gap-6 md:row-gap-0 md:col-gap-6 mb-8 md:grid-cols-2">
        <div className="">
          <ChartCard title="Shipment Status">
            <Doughnut {...doughnutOptions} />
            <ChartLegend legends={doughnutLegends} />
          </ChartCard>
        </div>
        <div className="">
          <ChartCard title="Inventory Status">
            <Bar {...barOptions} />
            <ChartLegend legends={barLegends} />
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

export default WareHouse;
