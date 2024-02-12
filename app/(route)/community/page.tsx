import Filters from "@/components/shared/Filters";
import LocalSearchBar from "@/components/shared/LocalSearchBar";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.action";
import Link from "next/link";
import React from "react";
import UserCard from "@/components/cards/UserCard";

const Page = async () => {
  const result = await getAllUsers({});
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>
      <div className="mt-11 flex max-lg:justify-between text-dark500_light700 justify-start max-lg:items-center max-sm:flex-col gap-5">
        <LocalSearchBar placeholder="Search questiions..." />
        <Filters filters={UserFilters} />
      </div>
      <section className="mt-11 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
            <p>No users yet</p>
            <Link className="mt-5 font-bold text-accent-blue" href="/sign-up">
              Join to be the first
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Page;
