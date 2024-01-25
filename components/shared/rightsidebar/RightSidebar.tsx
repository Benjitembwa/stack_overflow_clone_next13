import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSidebar = () => {
  const topQuestion = [
    {
      _id: 0,
      title:
        "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    },
    {
      _id: 1,
      title: "Is it only me or the font is bolder than necessary?",
    },
    {
      _id: 2,
      title: "Can I get the course for free?",
    },
    {
      _id: 3,
      title: "Redux Toolkit Not Updating State as Expected",
    },
    {
      _id: 4,
      title: "Async/Await Function Not Handling Errors Properly",
    },
  ];

  const popularTags = [
    { _id: 0, name: "next js", totalQuestiions: 5 },
    { _id: 1, name: "react", totalQuestiions: 5 },
    { _id: 2, name: "css", totalQuestiions: 5 },
    { _id: 3, name: "httml", totalQuestiions: 5 },
    { _id: 4, name: "tailwind", totalQuestiions: 5 },
  ];

  return (
    <section className="flex flex-col  pt-36 border-l light-border background-light900_dark200 sticky right-0 top-0 h-screen max-xl:hidden min-w-[22rem] gap-20">
      <div className="flex flex-col gap-7 px-6">
        <h2 className="h3-semibold text-dark300_light900">Top Questions</h2>
        <div className="flex flex-col gap-7">
          {topQuestion.map((item) => {
            return (
              <Link
                key={item._id}
                href="#"
                className="flex gap-3 justify-between text-dark400_light700 items-center"
              >
                <p className="max-w-[15rem] body-regular">{item.title} </p>
                <Image
                  src="assets/icons/chevron-right.svg"
                  alt="arrow-left"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="px-6 gap-7 flex flex-col ">
        <h2 className="h3-semibold text-dark300_light900">Popular Tags</h2>
        <div className="flex flex-col gap-2">
          {popularTags.map((item) => {
            return (
              <Link
                href="#"
                className="flex justify-between items-center subtle-regular  "
                key={item._id}
              >
                <Button className=" text-light400_light500 btn-secondary uppercase scale-y-[.8] ">
                  {item.name}{" "}
                </Button>
                <p className="text-dark400_light800 body-regular ">
                  {item.totalQuestiions}{" "}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
