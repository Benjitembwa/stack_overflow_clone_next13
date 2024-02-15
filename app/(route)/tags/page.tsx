import Filters from "@/components/shared/Filters";
import LocalSearchBar from "@/components/shared/LocalSearchBar";
import { TagFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";
import NoResult from "@/components/shared/NoResult";
import { getAllTags } from "@/lib/actions/tag.action";

const Page = async () => {
  const result = await getAllTags({});
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>
      <div className="mt-11 flex max-lg:justify-between text-dark500_light700 justify-start max-lg:items-center max-sm:flex-col gap-5">
        <LocalSearchBar placeholder="Search for tags" />
        <Filters filters={TagFilters} />
      </div>
      <section className="mt-11 flex flex-wrap gap-4">
        {result.tags.length > 0 ? (
          result.tags.map((tag) => (
            <Link
              key={tag.name}
              href={`tags/${tag._id}`}
              className="shadow-light100_darknone"
            >
              <article className="background-light900_dark200 light-border flex flex-col w-full rounded-2xl border px-8 py-10 sm:max-w-[260px] ">
                <div className="background-light800_dark400 w-fit rounded-sm px-5 py-1.5">
                  <p className="paragraph-semibold text-dark300_light900">
                    {tag.name}{" "}
                  </p>
                </div>
                <p className="small-medium text-dark400_light500 mt-3.5">
                  <span className="body-semibold primary-text-gradient mr-2.5">{tag.questions.length} </span> + Questions
                </p>
              </article>
            </Link>
          ))
        ) : (
          <NoResult
            title="No Tags found"
            description="It looks like there are no tags found"
            link="ask-question"
            linkTitle="Ask a question"
          />
        )}
      </section>
    </>
  );
};

export default Page;
