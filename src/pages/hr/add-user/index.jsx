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

const AddUser = () => {
  const [activeAction, setActiveAction] = useState(null);

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
          <Button>+ Add New</Button>
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
                <TableCell>USername</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Division</TableCell>
                <TableCell>Warehouse Location</TableCell>
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
                    <span className="text-sm">Ezekings</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Tosin</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Ajasin</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Warehouse Manager</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Inbound & Outbound</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Lekki</span>
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
                          <span>Edit User</span>
                        </DropdownItem>
                        <DropdownItem className="text-red-500 border-none outline-none text-sm">
                          <span>Delete User</span>
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

export default AddUser;
