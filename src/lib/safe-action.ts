import { createSafeActionClient } from "next-safe-action";
import { auth } from "./auth";
import { UserRole } from "@prisma/client";

export const actionClient = createSafeActionClient({
  handleServerError: (e) => {
    return { message: e.message || "An error occurred" };
  },
});

export const authActionClient = (roles?: UserRole[]) =>
  actionClient.use(async ({ next }) => {
    const session = await auth();
    if (!session) throw new Error("Unauthorized, session invalid");
    if (roles && !roles.includes(session.user.role)) {
      throw new Error("Forbidden access");
    }
    return next({ ctx: { user: session.user } });
  });
