import React from "react";
import {
  Button,
  Card,
  CardBody,
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Pagination,
} from "@windmill/react-ui";
import { WalletCard } from "../../../components/Cards/WalletCard";
import SectionTitle from "../../../components/Typography/SectionTitle";

function Wallet() {
  return (
    <div className="py-10 flex flex-col row-gap-10 w-full">
      <div className="flex justify-end col-gap-5 items-center">
        <Button>Add New Card</Button>
        <Button>Make Payment</Button>
      </div>
      <div className="grid row-gap-6 md:row-gap-0 md:col-gap-5  md:grid-cols-3">
        <WalletCard
          amount="₦34,200,000"
          bankName="Zenith Bank"
          cvv="239"
          exp="10/27"
          ownerName="ABC Ventures Ltd"
          style={{
            background: "rgba(206, 108, 35, 0.82)",
          }}
        />
        <WalletCard
          amount="₦34,200,000"
          bankName="Zenith Bank"
          cvv="239"
          exp="10/27"
          ownerName="ABC Ventures Ltd"
          style={{
            background:
              "radial-gradient(130.93% 130.93% at 50% -10.24%, #486FCC 0%, rgba(72, 111, 204, 0.00) 100%)",
          }}
        />
        <WalletCard
          amount="₦34,200,000"
          bankName="Zenith Bank"
          cvv="239"
          exp="10/27"
          ownerName="ABC Ventures Ltd"
          style={{ background: "#AA4848" }}
        />
      </div>
      <div className="">
        <Card>
          <CardBody className="pb-10">
            <h3 className="dark:text-gray-200  mb-2 text-gray-700 ">
              Wallet Balance
            </h3>
            <h1 className="dark:text-gray-100 text-gray-800 font-bold text-4xl mb-10">
              ₦39,650,500
            </h1>
            <div
              className="w-full rounded-full h-5  mb-4"
              style={{
                borderRadius: "11.272px",
                background: "#F4F4F4",
                boxShadow:
                  "-2.818px -2.818px 140.90019px 0px rgba(255, 255, 255, 0.02) inset",
                backdropFilter: "blur(11.835616111755371px)",
              }}
            >
              <div
                className="h-full bg-blue-900"
                style={{
                  width: "50%",
                  borderRadius: "11.272px",
                  border: "1px solid #BEBEBE",
                  background: "#154082",
                }}
              />
            </div>
            <div className="flex items-end flex-col">
              <h4 className="dark:text-gray-100 text-gray-800 font-bold ">
                ₦12,000,000,000
              </h4>
              <p className="text-sm dark:text-gray-200   text-gray-700">
                Target
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="">
        <SectionTitle>Cards List</SectionTitle>
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell></TableCell>
                <TableCell>Card Type</TableCell>
                <TableCell>Bank</TableCell>
                <TableCell>Card Number</TableCell>
                <TableCell>Name In Card</TableCell>
                <TableCell>Bank Account Officer</TableCell>
                <TableCell>Account Number</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {[...new Array(50).keys()].map((i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="w-16 h-12 rounded-sm bg-blue-600" />
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Primary</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Zenith Bank</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">***************4531</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">ABC Ventures Ltd</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">Debo Bowale</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">09012323189</span>
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
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      </div>
    </div>
  );
}

export default Wallet;
