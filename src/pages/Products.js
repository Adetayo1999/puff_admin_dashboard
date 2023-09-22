import React from "react";
import PageTitle from "../components/Typography/PageTitle";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
  Input,
} from "@windmill/react-ui";

import { MOCK_PRODUCTS } from "../utils/demo/tableData";
import { EditIcon, TrashIcon } from "../icons";

function Products() {
  return (
    <>
      <PageTitle>All Products</PageTitle>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-between items-center mb-10">
          <div className="flex-[0.7]">
            <Input className="mt-1 w-full" placeholder="Jane Doe" />
          </div>
          <div className="flex-[0.2]">
            <Button>Add Product</Button>
          </div>
        </div>

        {/* Product Table */}
        <div>
          <TableContainer>
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <div>
                      <Input type="checkbox" />
                    </div>
                  </TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Actions</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {MOCK_PRODUCTS.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <Input type="checkbox" />
                    </TableCell>
                    <TableCell>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {item.name}
                      </p>
                    </TableCell>
                    <TableCell>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                        {item.price}
                      </p>
                    </TableCell>
                    <TableCell>
                      <div className="h-12 w-12 cursor-pointer rounded overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {Math.round(item.quantity * Math.random() + 1)}
                      </p>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Button iconLeft={EditIcon}>
                          <span>Edit Item</span>
                        </Button>
                        <div className="px-3" />
                        <Button className="" iconLeft={TrashIcon}>
                          <span>Delete Item</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableFooter>
              <Pagination
                totalResults={4000}
                resultsPerPage={20}
                onChange={() => {}}
                label="Product navigation"
              />
            </TableFooter>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Products;
