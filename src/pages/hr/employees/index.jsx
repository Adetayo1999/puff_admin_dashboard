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
import { Link } from "react-router-dom";
import { OutlinePersonIcon, SearchIcon } from "../../../icons";

const Employees = () => {
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
                <TableCell>Photo</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Employee ID</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Branch</TableCell>
                <TableCell>Supervisor</TableCell>
                <TableCell>Action</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {[...new Array(30).keys()].map((item) => (
                <TableRow key={item}>
                  <TableCell className="">
                    <span className="text-sm">{item + 1}</span>
                  </TableCell>
                  <TableCell className="min-w-32">
                    <img
                      src="https://images.pexels.com/photos/18618360/pexels-photo-18618360/free-photo-of-rosie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="whitespace-no-wrap w-20 h-20 object-cover rounded"
                    />
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Tosin</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Ajasin</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">0001</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col row-gap-1">
                      <span className="text-sm">07053376566</span>
                      <span className="text-sm">07053374466</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col row-gap-1">
                      <span className="text-sm">janedoe@test.com</span>
                      <span className="text-sm">johndoe@test.com</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Lekki</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Bidemi</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex col-gap-10">
                      <div>
                        <span className="text-sm text-green-500">Active</span>
                      </div>
                      <div className="flex col-gap-4 items-center">
                        <Link to={`/hr/edit-user/${item + 1}`}>
                          <Button>+</Button>
                        </Link>
                        <Link to={`/hr/view-user/${item + 1}`}>
                          <Button
                            icon={OutlinePersonIcon}
                            aria-label="person"
                          />
                        </Link>
                      </div>
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

export default Employees;
