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
} from "@windmill/react-ui";
import { SearchIcon } from "../../../icons";

const Payroll = () => {
  return (
    <div className="py-12 flex flex-col row-gap-10">
      {/* Search and filter */}
      <div className="flex justify-between col-gap-5 items-center">
        <div className="flex flex-grow col-gap-5">
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
          <Button>Export</Button>
        </div>
      </div>

      <div className=" grid">
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>S/N</TableCell>
                <TableCell>Employee Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Division</TableCell>
                <TableCell>Basic</TableCell>
                <TableCell>Gross Salary</TableCell>
                <TableCell>Working Days</TableCell>
                <TableCell>Date Paid</TableCell>
                <TableCell>Paid By</TableCell>
                <TableCell>Actions</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {[...new Array(30).keys()].map((item) => (
                <TableRow key={item}>
                  <TableCell className="">
                    <span className="text-sm">{item + 1}</span>
                  </TableCell>
                  <TableCell className="">
                    <span className="text-sm">Akin Adepoju</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Manager</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Sales</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Product Manager</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">₦150,000</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">₦150,000,000</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">5</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">12 - 06 - 2021</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Rabiu Taofeek</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex col-gap-4">
                      <Button>Pay Now</Button>
                      <Button>Salary History</Button>
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

export default Payroll;
