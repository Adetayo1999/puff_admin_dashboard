import React from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Select,
  Pagination,
} from "@windmill/react-ui";

const StockReqForm = () => {
  return (
    <div className="py-12 flex flex-col row-gap-10">
      {/* Search and filter */}
      <div className="flex justify-between items-center">
        <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
          <input
            className="block w-full mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
            // placeholder="Jane Doe"
            type="date"
          />
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

export default StockReqForm;
