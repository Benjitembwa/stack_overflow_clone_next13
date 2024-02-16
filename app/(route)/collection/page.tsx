import QuestionCard from "@/components/cards/QuestionCard";
import Filters from "@/components/shared/Filters";
import LocalSearchBar from "@/components/shared/LocalSearchBar";
import NoResult from "@/components/shared/NoResult";
import { QuestionFilters } from "@/constants/filters";
import { getSavedQuestion } from "@/lib/actions/user.action";
// import { auth } from "@clerk/nextjs";

export default async function Home() {
  // TODO: replace the fake user by the real one
  //const { userId } = auth();
  // if(!userId) return null;

  const userId = "abc123xyz";

  const result = await getSavedQuestion({
    clerkId: userId,
  });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>
      <div className="mt-11 flex max-lg:justify-between text-dark500_light700 justify-start max-lg:items-center max-sm:flex-col gap-5 md:flex-col">
        <LocalSearchBar placeholder="Search questiions..." />
        <Filters otherClasses="md:hidden" filters={QuestionFilters} />
      </div>
      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
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
            title="There's no question saved  to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
