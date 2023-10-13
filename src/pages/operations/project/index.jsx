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

const Project = () => {
  return (
    <div className="py-12 flex flex-col row-gap-10">
      {/* Search and filter */}
      <div className="flex justify-between col-gap-5 items-center">
        <div className="flex flex-grow col-gap-5">
          <Button>+ Add</Button>
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
                <TableCell>Task</TableCell>
                <TableCell>Manager</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Timeline</TableCell>
                <TableCell>Dependent On</TableCell>
                <TableCell>Completetion Date</TableCell>
                <TableCell>Completetion Status</TableCell>
                <TableCell>Action</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {[...new Array(30).keys()].map((item) => (
                <TableRow key={item}>
                  <TableCell>
                    <span className="text-sm">{item + 1}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Task 1</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Adebimpe Sola</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">HR</span>
                  </TableCell>
                  <TableCell>
                    <div className="w-24 rounded-sm py-3 bg-green-200 flex justify-center items-center relative overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 ${
                          item % 2 === 0 ? "w-1/3" : "w-2/3"
                        } h-full bg-green-500 `}
                      />
                      {/* <span className="text-sm relative">Done</span> */}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      Jan 10, &apos;21 - Jan 15, &apos;21
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Task 1</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Jan 15, &apos;21</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Done On Time</span>
                  </TableCell>

                  <TableCell>
                    <Button>+</Button>
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

export default Project;
