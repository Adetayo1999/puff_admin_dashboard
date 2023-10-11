import React from "react";
import PageTitle from "../../../components/Typography/PageTitle";
import { Input, Label, Textarea, Button } from "@windmill/react-ui";

const Escalate = () => {
  return (
    <div className="py-12 md:w-3/4">
      <PageTitle>Escalation Form</PageTitle>
      <div className="px-4 py-6 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <form className="flex row-gap-6 flex-col">
          <div className="grid grid-cols-1 row-gap-6 md:col-gap-10 md:row-gap-0 md:grid-cols-2">
            <div className="">
              <Label>
                <span>Name</span>
                <Input className="mt-1" placeholder="Jane Doe" />
              </Label>
            </div>
            <div className="">
              <Label>
                <span>Dept</span>
                <Input className="mt-1" placeholder="Dept" />
              </Label>
            </div>
          </div>
          <div className="">
            <Label>
              <span>Supervisor</span>
              <Input className="mt-1" placeholder="Mr Magoo" />
            </Label>
          </div>
          <div className="">
            <Label>
              <span>Situation</span>
              <Textarea className="mt-1" rows="5" />
            </Label>
          </div>
          <div className="">
            <Label className="" check>
              <Input type="checkbox" />
              <span className="ml-2">Stay Anonymous</span>
            </Label>
          </div>
          <div className="flex justify-end">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Escalate;
