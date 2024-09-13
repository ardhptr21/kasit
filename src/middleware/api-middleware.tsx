import { auth } from "@/lib/auth";
import { UserRole } from "@prisma/client";

interface WithAuthApiOpts {
  roles?: UserRole[];
}

export function withAuthApi(handler: Function, opts?: WithAuthApiOpts) {
  return async function handle(...args: any) {
    const session = await auth();

    if (!session) {
      return Response.json({
        meta: {
          status: 401,
          success: false,
          message: "Unauthorized, session invalid",
        },
      });
    }

    if (opts?.roles && !opts.roles.includes(session.user.role)) {
      return Response.json({
        meta: {
          status: 403,
          success: false,
          message: "Forbidden access",
        },
      });
    }

    return handler(...args, session.user);
  };
}
