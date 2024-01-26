"use client";

import { HomePageFilters } from "@/constants/filters";
import React from "react";
import { Button } from "../ui/button";

const HomeFilters = () => {
    const isActive = "newest";
  return (
    <div className="mt-10 flex-wrap gap-3 hidden md:flex">
      {HomePageFilters.map((item) => (
        <Button key={item.value} className={`body-midium text-light400_light500 capitalize px-6 py-3 rounded  ${isActive === item.value ? 'bg-primary-100 text-primary-500 font-bold': 'btn-secondary hover:scale-105 transition-all duration-100'} `} >
         {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
