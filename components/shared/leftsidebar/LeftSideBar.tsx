"use client";
import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
// import { SignedOut } from "@clerk/nextjs";


const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <section className=" pt-36 px-5 border-r light-border background-light900_dark200 sticky left-0 top-0 h-screen flex flex-col max-sm:hidden justify-between">
      <div className="lg:min-w-[14rem] flex flex-col gap-4 max-lg:items-center">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            item.route === pathname;
          return (
            <div key={item.label}>
              <Link
                href={item.route}
                className={`flex items-center gap-4 bg-transparent p-4 ${
                  isActive
                    ? "primary-gradient rounded-lg text-light-900 "
                    : "text-dark300_light900 hover:scale-110 transition-all duration-200"
                } `}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActive ? "" : "invert-colors"}`}
                />
                <p
                  className={`${
                    isActive ? "base-bold" : "base-medium"
                  } max-lg:hidden`}
                >
                  {item.label}
                </p>
              </Link>
            </div>
          );
        })}
        
      </div>
      <div>
          <div className="flex flex-col gap-3 pb-2">
            <div>
              <Link href="/sign-in">
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none hover:scale-110 transition-all duration-200  ">
                  <span className="primary-text-gradient max-lg:hidden ">Log in</span>
                  <Image
                    src="assets/icons/account.svg"
                    alt="log in"
                    width={20}
                    height={20}
                    className= "invert-colors lg:hidden"
                  />
                </Button>
              </Link>
            </div>
            <div >
              <Link href="/sign-up">
                <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark400_light900 hover:scale-110 transition-all duration-200 ">
                  <span className="max-lg:hidden">
                     Sign Up
                  </span>
                  <Image
                    src="assets/icons/sign-up.svg"
                    alt="log in"
                    width={20}
                    height={20}
                    className= "invert-colors lg:hidden" 
                  />
                </Button>
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
};

export default LeftSideBar;
