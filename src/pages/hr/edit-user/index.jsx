import React from "react";
import { Card, CardBody, Label, Input, Button } from "@windmill/react-ui";
import SectionTitle from "../../../components/Typography/SectionTitle";

const Employees = () => {
  return (
    <div className="py-12 flex flex-col row-gap-10">
      <Card>
        <CardBody className="py-5">
          <form>
            <fieldset className="flex flex-col row-gap-6">
              <legend>
                <SectionTitle>Basic Information</SectionTitle>
              </legend>
              <div className="grid grid-cols-1  row-gap-6 md:row-gap-0 md:col-gap-6 md:grid-cols-4 ">
                <Label>
                  <span>First Name</span>
                  <Input className="mt-1" placeholder="First Name" />
                </Label>
                <Label>
                  <span>Last Name</span>
                  <Input className="mt-1" placeholder="Last Name" />
                </Label>
                <Label>
                  <span>Middle Name</span>
                  <Input className="mt-1" placeholder="Middle Name" />
                </Label>
                <Label>
                  <span>Phone Number</span>
                  <Input className="mt-1" placeholder="Phone Number" />
                </Label>
              </div>
              <div className="">
                <Label>
                  <span>Email Address</span>
                  <Input className="mt-1" placeholder="Email Address" />
                </Label>
              </div>
            </fieldset>
          </form>
        </CardBody>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 row-gap-10 md:row-gap-0 md:col-gap-10">
        <div className="">
          <Card>
            <CardBody className="py-5">
              <form>
                <fieldset className="flex flex-col row-gap-6">
                  <legend>
                    <SectionTitle>Positional Information</SectionTitle>
                  </legend>
                  <div className="grid grid-cols-1  row-gap-6 md:row-gap-0 md:col-gap-6 md:grid-cols-2 ">
                    <Label>
                      <span>Previous Position</span>
                      <Input className="mt-1" placeholder="" />
                    </Label>
                    <Label>
                      <span>Previous Dprt/Org.</span>
                      <Input className="mt-1" placeholder="" type="password" />
                    </Label>
                  </div>
                  <div className="grid grid-cols-1  row-gap-6 md:row-gap-0 md:col-gap-6 md:grid-cols-2 ">
                    <Label>
                      <span>New Position</span>
                      <Input className="mt-1" placeholder="" />
                    </Label>
                    <Label>
                      <span>Previous Dprt/Org.</span>
                      <Input className="mt-1" placeholder="" type="password" />
                    </Label>
                  </div>
                  <div className="grid grid-cols-1  row-gap-6 md:row-gap-0 md:col-gap-6 md:grid-cols-2 ">
                    <Label>
                      <span>Emplyment Date</span>
                      <Input className="mt-1" placeholder="" />
                    </Label>
                    <Label>
                      <span>Salary</span>
                      <Input className="mt-1" placeholder="" type="password" />
                    </Label>
                  </div>
                  <div className="">
                    <Label>
                      <span>Benefits</span>
                      <div className="grid grid-cols-1  row-gap-6  md:col-gap-6 md:grid-cols-2 mt-1 ">
                        <Input className="" placeholder="1." />
                        <Input className="" placeholder="2." />
                        <Input className="" placeholder="3." />
                        <Input className="" placeholder="4." />
                      </div>
                    </Label>
                  </div>
                  <div className="grid grid-cols-1  row-gap-6 md:row-gap-0 md:col-gap-6 md:grid-cols-2 ">
                    <Label>
                      <span>Supervisor Name</span>
                      <Input className="mt-1" placeholder="" />
                    </Label>
                    <Label>
                      <span>Supervisor Position</span>
                      <Input className="mt-1" placeholder="" type="password" />
                    </Label>
                  </div>
                </fieldset>
              </form>
            </CardBody>
          </Card>
        </div>
        <div className="">
          <Card>
            <CardBody className="py-5">
              <form>
                <fieldset className="flex flex-col row-gap-6">
                  <legend>
                    <SectionTitle>Biographical Information</SectionTitle>
                  </legend>
                  <div className="grid grid-cols-1  row-gap-6 md:row-gap-0 md:col-gap-6 md:grid-cols-2 ">
                    <Label>
                      <span>Date Of Birth</span>
                      <Input className="mt-1" placeholder="" />
                    </Label>
                    <Label>
                      <span>Gender</span>
                      <Input
                        className="mt-1"
                        placeholder="Password"
                        type="password"
                      />
                    </Label>
                  </div>
                  <div className="grid grid-cols-1  row-gap-6 md:row-gap-0 md:col-gap-6 md:grid-cols-2 ">
                    <Label>
                      <span>Marital Status</span>
                      <Input className="mt-1" placeholder="" />
                    </Label>
                    <Label>
                      <span>Previous Dprt/Org.</span>
                      <Input
                        className="mt-1"
                        placeholder="Password"
                        type="password"
                      />
                    </Label>
                  </div>
                  <div className="grid grid-cols-1  row-gap-6 md:row-gap-0 md:col-gap-6 md:grid-cols-2 ">
                    <Label>
                      <span>State Of Origin</span>
                      <Input className="mt-1" placeholder="" />
                    </Label>
                    <Label>
                      <span>LGA</span>
                      <Input
                        className="mt-1"
                        placeholder="Password"
                        type="password"
                      />
                    </Label>
                  </div>
                  <div className="grid grid-cols-1  row-gap-6 md:row-gap-0 md:col-gap-6 md:grid-cols-2 ">
                    <Label>
                      <span>Photograph</span>
                      <Input className="mt-1" placeholder="" type="file" />
                    </Label>
                    <div className="">
                      <img
                        src="https://images.pexels.com/photos/18618360/pexels-photo-18618360/free-photo-of-rosie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="h-40 w-full object-cover rounded-md"
                      />
                    </div>
                  </div>
                </fieldset>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Emergency Contact */}
      <Card>
        <CardBody className="py-5">
          <form>
            <fieldset className="flex flex-col row-gap-6">
              <legend>
                <SectionTitle>Emergency Contact</SectionTitle>
              </legend>
              <div className="grid grid-cols-1  row-gap-6 md:row-gap-0 md:col-gap-6 md:grid-cols-4 ">
                <Label>
                  <span>First Name</span>
                  <Input className="mt-1" placeholder="First Name" />
                </Label>
                <Label>
                  <span>Last Name</span>
                  <Input className="mt-1" placeholder="Last Name" />
                </Label>
                <Label>
                  <span>Relationship</span>
                  <Input className="mt-1" placeholder="Relationship" />
                </Label>
                <Label>
                  <span>Phone Number</span>
                  <Input className="mt-1" placeholder="Phone Number" />
                </Label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 row-gap-6 md:row-gap-0 md:col-gap-6">
                <Label>
                  <span>Address</span>
                  <Input className="mt-1" placeholder="Address" />
                </Label>
                <Label>
                  <span>Email Address</span>
                  <Input className="mt-1" placeholder="Email Address" />
                </Label>
              </div>
            </fieldset>
          </form>
        </CardBody>
      </Card>

      {/* Login Details */}
      <Card>
        <CardBody className="py-5">
          <form>
            <fieldset className="flex flex-col row-gap-6">
              <legend>
                <SectionTitle>Login Info</SectionTitle>
              </legend>
              <div className="grid grid-cols-1  row-gap-6 md:row-gap-0 md:col-gap-6 md:grid-cols-2 ">
                <Label>
                  <span>User Email</span>
                  <Input className="mt-1" placeholder="Email" />
                </Label>
                <Label>
                  <span>Password</span>
                  <Input
                    className="mt-1"
                    placeholder="Password"
                    type="password"
                  />
                </Label>
              </div>
            </fieldset>
          </form>
        </CardBody>
      </Card>
      <div className="flex justify-end">
        <Button>Update</Button>
      </div>
    </div>
  );
};

export default Employees;
