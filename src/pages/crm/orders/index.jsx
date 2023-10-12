import React from "react";
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
  Pagination,
  Select,
} from "@windmill/react-ui";
import { SearchIcon } from "../../../icons";
import InfoCard from "../../../components/Cards/InfoCard";
import RoundIcon from "../../../components/RoundIcon";
import { MoneyIcon, PeopleIcon } from "../../../icons";

const Orders = () => {
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
          <Button>Export</Button>
        </div>
      </div>
      <div className="">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard title="All Orders" value="29">
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="Confirmation Pending" value="36">
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
                <TableCell>SKU</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Unit Ordered</TableCell>
                <TableCell>Customer Details</TableCell>
                <TableCell>Number</TableCell>
                <TableCell>Warehouse</TableCell>
                <TableCell>Invoice No</TableCell>
                <TableCell>Warehouse Order</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {[...new Array(30).keys()].map((item) => (
                <TableRow key={item}>
                  <TableCell>
                    <span className="text-sm">{item + 1}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">PP039334</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Product 1 (Description)</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">x 2</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">SLYVESTER OKOH</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">08036783535</span>
                  </TableCell>
                  <TableCell>
                    <Select className="text-sm min-w-32 ">
                      <option>Ikeja</option>
                      <option>Alimosho</option>
                      <option>Ikorodu</option>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button>Confirm Payment</Button>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center col-gap-6">
                      <Button>Send Request</Button>
                      <Button>Item Ready</Button>
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

export default Orders;
