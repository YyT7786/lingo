import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protect all app pages except _next, static files, or public pages
    "/((?!.*\\..*|_next|api/webhooks/stripe).*)",
    // You can also add other protected API routes here
    "/(api|trpc)(.*)",
  ],
};
