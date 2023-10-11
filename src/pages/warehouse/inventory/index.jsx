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
  Select,
  Pagination,
} from "@windmill/react-ui";
import { SearchIcon } from "../../../icons";
import InfoCard from "../../../components/Cards/InfoCard";
import RoundIcon from "../../../components/RoundIcon";
import { MoneyIcon, PeopleIcon } from "../../../icons";

const Inventory = () => {
  return (
    <div className="py-12 flex flex-col row-gap-10">
      {/* Search and filter */}
      <div className="flex justify-between items-center">
        <div className="">
          <div className="flex items-center col-gap-5">
            <Button>Add Project</Button>
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
            <Button>Print</Button>
          </div>
        </div>
      </div>

      <div className="">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard title="Total SKU" value="15">
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="Total Value of Item" value="₦50,854,951.87">
            <RoundIcon
              icon={MoneyIcon}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="Item Re-Ordered" value="40,454">
            <RoundIcon
              icon={PeopleIcon}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="Out of Stocked" value="6">
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
                <TableCell>Description</TableCell>
                <TableCell>Product ID</TableCell>
                <TableCell>Vendor ID</TableCell>
                <TableCell>Quantity Ordered</TableCell>
                <TableCell>Location In Warehouse</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>VAT</TableCell>
                <TableCell>Stock</TableCell>
                <TableCell>RE ORDER</TableCell>
                <TableCell>DATE RE ORDER</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {[...new Array(30).keys()].map((item) => (
                <TableRow key={item}>
                  <TableCell>
                    <span className="text-sm">{item + 1}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">00003256</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Product 1</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Day & Night Lamp</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">33412</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">15346</span>
                  </TableCell>
                  <TableCell>
                    <div
                      className={`w-16 rounded-sm ${
                        item % 2 === 0 ? "bg-yellow-100" : "bg-red-400"
                      } `}
                    >
                      <div
                        className={` py-2 w-2/3 ${
                          item % 2 === 0 ? "w-1/2" : "w-1/6"
                        } bg-green-500`}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Row 1, Level 3</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-semibold">₦15,024.40</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-semibold">5%</span>
                  </TableCell>
                  <TableCell>
                    <div
                      className={`w-16 rounded-sm ${
                        item % 2 === 0 ? "bg-yellow-100" : "bg-red-400"
                      } `}
                    >
                      <div
                        className={` py-2 w-2/3 ${
                          item % 2 === 0 ? "w-1/2" : "w-1/6"
                        } bg-green-500`}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select className="text-sm min-w-32 ">
                      <option>Yes</option>
                      <option>No</option>
                      <option>On Hold</option>
                      <option>Discontinue</option>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-semibold">
                      10th June, 2021
                    </span>
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

export default Inventory;
