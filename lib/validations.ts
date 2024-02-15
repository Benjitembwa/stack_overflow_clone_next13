import { z } from "zod";

export const QuestionSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(130, {
      message: "Title can't go above 130 characters",
    }),
  explanation: z.string().min(0, {
    message: "Title must be at least 100 characters.",
  }),
  tags: z
    .array(
      z
        .string()
        .min(1, {
          message: "Title must be at least 2 characters.",
        })
        .max(15, {
          message: "can't go above 15 characters",
        })
    )
    .min(2, {
      message: "At least 3 tags.",
    })
    .max(3, {
      message: "can't go above 3 Tags",
    }),
});

export const AnswerSchema = z.object({ 
  answer: z.string().min(100) 
});
