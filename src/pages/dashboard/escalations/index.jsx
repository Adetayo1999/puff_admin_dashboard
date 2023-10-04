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

const Escalations = () => {
  return (
    <div className="py-10 flex flex-col row-gap-10">
      <div className="flex justify-between items-center">
        <div className="flex  flex-1">
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
          <Button>Add User</Button>
          <Button>Filter</Button>
        </div>
      </div>
      <div className="">
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>S/N</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Actions</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {[...new Array(30).keys()].map((i) => (
                <TableRow key={i}>
                  <TableCell>
                    <span className="text-sm">{i + 1}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Avis Charles</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Warehouse</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Vendor Delay</span>
                  </TableCell>
                  <TableCell>
                    <Button>Read</Button>
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

export default Escalations;
