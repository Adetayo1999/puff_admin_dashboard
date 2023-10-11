import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Button,
  Input,
  Dropdown,
  DropdownItem,
  Pagination,
} from "@windmill/react-ui";
import { MenuVertialIcon, SearchIcon } from "../../../icons";
import SectionTitle from "../../../components/Typography/SectionTitle";
import InfoCard from "../../../components/Cards/InfoCard";
import RoundIcon from "../../../components/RoundIcon";
import { MoneyIcon, PeopleIcon } from "../../../icons";

const Activities = () => {
  const [activeAction, setActiveAction] = useState(null);

  return (
    <div className="py-12 flex flex-col row-gap-10">
      {/* Search and filter */}
      <div className="flex justify-end col-gap-5 items-center">
        <div className="flex flex-grow">
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
        </div>
        <div className="flex items-center col-gap-5">
          <Button>Filter</Button>
        </div>
      </div>
      <div className="">
        <div className="">
          <SectionTitle>All Warehouse Activity (in Quantity)</SectionTitle>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard title="Confirmed" value="29">
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="To Be Shipped" value="36">
            <RoundIcon
              icon={MoneyIcon}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="To Be Delivered" value="18">
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="To Be Invoiced" value="24">
            <RoundIcon
              icon={MoneyIcon}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-4"
            />
          </InfoCard>
          <InfoCard title="Quantity In Hand" value="524">
            <RoundIcon
              icon={MoneyIcon}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-4"
            />
          </InfoCard>
          <InfoCard title="Pending Quantity" value="184">
            <RoundIcon
              icon={MoneyIcon}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-4"
            />
          </InfoCard>
        </div>
      </div>
      <div className=" grid">
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>S/N</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Unit Ordered</TableCell>
                <TableCell>Type Of Delivery</TableCell>
                <TableCell>Warehouse</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {[...new Array(30).keys()].map((item) => (
                <TableRow key={item}>
                  <TableCell>
                    <span className="text-sm">{item + 1}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Asele Gbadamosi</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      13, Ire-Akari Estate, Ogudu, Lagos
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">PP6785577</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Lighters</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">10</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Regular</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Lekki</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-semibold text-green-500">
                      To be delivered
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="relative">
                      <button
                        className="dark:text-gray-100 text-gray-800 border-transparent outline-none"
                        onClick={() => setActiveAction(item)}
                      >
                        <MenuVertialIcon />
                      </button>
                      <Dropdown
                        align="right"
                        isOpen={item === activeAction}
                        className="z-50"
                        onClose={() => setActiveAction(null)}
                      >
                        <DropdownItem className="border-none outline-none text-sm">
                          <span>Escalate</span>
                        </DropdownItem>
                      </Dropdown>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={500}
              resultsPerPage={10}
              onChange={() => {}}
              label="Escalations Navigations"
            />
          </TableFooter>
        </TableContainer>
      </div>
    </div>
  );
};

export default Activities;
