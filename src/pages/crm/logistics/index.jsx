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

const Logisitics = () => {
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

      <div className=" grid">
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>S/N</TableCell>
                <TableCell>Date Order Received</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Number</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Delivery Type</TableCell>
                <TableCell>View Dispatch</TableCell>
                <TableCell>Send</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {[...new Array(30).keys()].map((item) => (
                <TableRow key={item}>
                  <TableCell>
                    <span className="text-sm">{item + 1}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">12/11/2021</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">PP039334</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Product 7</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Adetayo Gbenga</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">09001297534</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">23, Kilowo Estate, Ojodu</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Express</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Hassan Ajibola</span>
                  </TableCell>
                  <TableCell>
                    <Button>Send SMS</Button>
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

export default Logisitics;
