"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

interface props {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
}

const Filters = ({ filters, otherClasses }: props) => {
  return (
    <div className={`${otherClasses} max-sm:w-full`}>
      <Select>
        <SelectTrigger className="body-regular light-border border min-w-[170px] min-h-[56px] !background-light800_dark300 outline-none focus:outline-dark shadow-none ">
          <SelectValue placeholder="Select a Filter" />
        </SelectTrigger>
        <SelectContent className="min-w-[170px] background-light800_dark400">
          <SelectGroup>
            {filters.map((item) => (
              <SelectItem key={item.name} value={item.value} className="text-dark300_light900">
                {item.name}{" "}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
