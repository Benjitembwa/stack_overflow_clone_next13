import QuestionCard from "@/components/cards/QuestionCard";
import Filters from "@/components/shared/Filters";
import LocalSearchBar from "@/components/shared/LocalSearchBar";
import NoResult from "@/components/shared/NoResult";
import { IQuestion } from "@/database/question.modal";
import { getQuestionsByTagId } from "@/lib/actions/tag.action";
import { URLProps } from "@/types";
import React from "react";

const Page = async ({ params, searchParams }: URLProps) => {
  const result = await getQuestionsByTagId({
    tagId: params.id,
    page: 1,
    searchQuery: searchParams.q,
  });
  console.log(result);
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">{result.tagTitle} </h1>
      <div className="mt-11 flex max-lg:justify-between text-dark500_light700 justify-start max-lg:items-center max-sm:flex-col gap-5 md:flex-col">
        <LocalSearchBar placeholder="Search tag questiions..." />
      </div>
      <div className="mt-10 w-full">
        {result.questions.length > 0 ? (
          result.questions.map((question: IQuestion) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              answers={question.answers}
              upvotes={question.upvotes.length}
              views={question.views}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no tag question saved  to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Page;
