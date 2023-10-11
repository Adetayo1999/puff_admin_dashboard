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

const Logistics = () => {
  const [activeAction, setActiveAction] = useState(null);

  return (
    <div className="py-12 flex flex-col row-gap-10">
      {/* Search and filter */}
      <div className="flex justify-between items-center">
        <div className="">
          <div className="flex items-center col-gap-5">
            <Button>Filter</Button>
          </div>
        </div>
        <div className="flex col-gap-8">
          <div className="flex-1">
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
                <TableCell>Phone Number</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Assign Dispatch</TableCell>
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
                    <span className="text-sm">97657</span>
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
                    <span className="text-sm">
                      Road 5, Bada Street,VI-Lagos
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
                          <span>Hassan Ajibola</span>
                        </DropdownItem>
                        <DropdownItem className="border-none outline-none text-sm">
                          <span>Bassey Tony</span>
                        </DropdownItem>
                        <DropdownItem className="border-none outline-none text-sm">
                          <span>Koreded</span>
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

export default Logistics;
