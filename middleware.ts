import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/ask-question",
    "/community",
    "/tags",
    "/question/:id",
    "/collection",
    "/tags/:id",
    "/tags",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
