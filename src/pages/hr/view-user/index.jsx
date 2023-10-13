import React from "react";
import { Card, CardBody, Button } from "@windmill/react-ui";
import SectionTitle from "../../../components/Typography/SectionTitle";

const Employees = () => {
  return (
    <div className="py-12 flex flex-col row-gap-10">
      <div className="grid grid-cols-1 md:grid-cols-6 row-gap-10 md:row-gap-0 md:col-gap-8">
        <div className="flex flex-col row-gap-10 md:col-span-2">
          <Card>
            <CardBody className="p-5 flex flex-col items-center justify-center">
              <div className="w-32 h-32 rounded-md overflow-hidden mb-3">
                <img
                  src="https://images.pexels.com/photos/18618360/pexels-photo-18618360/free-photo-of-rosie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-gray-600 dark:text-gray-400 flex flex-col row-gap-2 items-center">
                <h4 className="font-semibold text-gray-700 dark:text-gray-200">
                  Tosin Ajasin
                </h4>
                <h3 className="text-sm font-medium">Department: IT</h3>
                <p className="text-sm">080111223344</p>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div className="">
                <div className="flex justify-center mb-6">
                  <SectionTitle>Personal Information</SectionTitle>
                </div>
                <div className="flex flex-col row-gap-4 text-gray-600 dark:text-gray-400 text-sm ">
                  {personalInformationData.map((item) => (
                    <div className="pb-2 border-b dark:border-gray-600 border-opacity-50 flex flex-col row-gap-1">
                      <h5>{item.title}</h5>
                      <p className="font-semibold text-gray-700 dark:text-gray-200">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="md:col-start-3 md:col-span-4 flex flex-col row-gap-10">
          <div className="">
            <Card>
              <CardBody className="p-5 flex flex-col justify-center">
                <div className="">
                  <div className="flex justify-center mb-6">
                    <SectionTitle>Positional Information</SectionTitle>
                  </div>
                  <div className="w-full flex flex-col row-gap-8 text-gray-600 dark:text-gray-400 text-sm ">
                    {positionalInformationData.map((item) => (
                      <div className="pb-2 border-b dark:border-gray-600 border-opacity-50 flex justify-between w-full">
                        <h5>{item.title}</h5>
                        <p className="font-semibold text-gray-700 dark:text-gray-200">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="">
            <Card>
              <CardBody className="p-5 flex flex-col justify-center">
                <div className="">
                  <div className="flex justify-center mb-6">
                    <SectionTitle>Benefits</SectionTitle>
                  </div>
                  <div className="w-full flex flex-col row-gap-8 text-gray-600 dark:text-gray-400 text-sm ">
                    {benefitsData.map((item) => (
                      <div className="pb-2 border-b dark:border-gray-600 border-opacity-50 flex justify-between w-full">
                        <h5>{item.title}</h5>
                        <p className="font-semibold text-gray-700 dark:text-gray-200">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button>Update</Button>
      </div>
    </div>
  );
};

const personalInformationData = [
  {
    id: 1,
    title: "Name",
    value: "Tosin Ajasin",
  },
  {
    id: 2,
    title: "Phone",
    value: "08011223344",
  },
  {
    id: 3,
    title: "Email",
    value: "Tosin.ajasin@gmail.com",
  },
  {
    id: 4,
    title: "Date Of Birth",
    value: "13th June 1993",
  },
  {
    id: 5,
    title: "Gender",
    value: "Male",
  },
  {
    id: 6,
    title: "Maritial Status",
    value: "Single",
  },
  {
    id: 7,
    title: "State Of Origin",
    value: "Ekiti",
  },
  {
    id: 8,
    title: "LGA",
    value: "Ekiti Northwest",
  },
  {
    id: 9,
    title: "Residential Address",
    value: "3, cobham street, ikole, ikotun, Lagos",
  },
  {
    id: 10,
    title: "Next Of Kin",
    value: "Kolawole Ajasin",
  },
  {
    id: 11,
    title: "Phone",
    value: "07053376562",
  },
  {
    id: 12,
    title: "Relationship",
    value: "Uncle",
  },
  {
    id: 13,
    title: "Address",
    value: "3, cobham street, ikole, ikotun, Lagos",
  },
];

const positionalInformationData = [
  {
    id: 1,
    title: "Division",
    value: "Tosin Ajasin",
  },
  {
    id: 2,
    title: "Position",
    value: "IT Officer 1",
  },
  {
    id: 3,
    title: "Employee Type",
    value: "Full Time",
  },
  {
    id: 4,
    title: "Employee Date",
    value: "13 -05 - 2010",
  },
  {
    id: 5,
    title: "Salary",
    value: "N 150,000",
  },
  {
    id: 6,
    title: "Supervison Name",
    value: "N 150,000",
  },
];

const benefitsData = [
  {
    id: 1,
    title: "Car",
    value: "No",
  },
  {
    id: 2,
    title: "Health Insurance",
    value: "Yes",
  },
];

export default Employees;
