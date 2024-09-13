import { UserRole } from "@prisma/client";
import { redirect } from "next/navigation";
import { auth } from "../lib/auth";

interface WithAuthOpts {
  roles?: UserRole[];
}

export function withAuth<P extends object>(
  Component: React.ComponentType<P>,
  opts?: WithAuthOpts
) {
  return async function AuthComponent(props: P) {
    const session = await auth();

    if (!session) return redirect("/");
    if (opts?.roles && !opts.roles.includes(session.user.role)) {
      return redirect("/");
    }

    return <Component {...props} session={session} />;
  };
}
