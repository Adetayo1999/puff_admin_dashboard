import React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableContainer,
  Button,
} from "@windmill/react-ui";
import SectionTitle from "../../../components/Typography/SectionTitle";

const Resources = () => {
  return (
    <div className="py-12 flex flex-col row-gap-20">
      <div className="">
        <div className="">
          <SectionTitle>Internal Resources</SectionTitle>
        </div>
        <div className=" grid">
          <TableContainer>
            <Table>
              <TableBody>
                {[...new Array(4).keys()].map((item) => (
                  <TableRow key={item}>
                    <TableCell className="">
                      <span className="text-sm">{item + 1}</span>
                    </TableCell>
                    <TableCell className="">
                      <span className="text-sm">Company Profile</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex col-gap-4">
                        <Button>PDF</Button>
                        <Button>Send</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="">
        <div className="">
          <SectionTitle>External Resources</SectionTitle>
        </div>
        <div className=" grid">
          <TableContainer>
            <Table>
              <TableBody>
                {[...new Array(4).keys()].map((item) => (
                  <TableRow key={item}>
                    <TableCell className="">
                      <span className="text-sm">{item + 1}</span>
                    </TableCell>
                    <TableCell className="">
                      <span className="text-sm">
                        Effective Leadership By Alvis Charles
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex col-gap-4">
                        <Button>PDF</Button>
                        <Button>Send</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Resources;
