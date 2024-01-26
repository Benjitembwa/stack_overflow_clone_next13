import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const LocalSearchBar = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="flex-1 relative w-full ">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder={placeholder}
          className="no-focus placeholder paragraph-regular background-light800_darkgradient border-none shadow-none outline-none dark:text-white"
        />
      </div>
    </div>
  );
};

export default LocalSearchBar;
