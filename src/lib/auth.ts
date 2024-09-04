import { findUserByID, findUserByNRP } from "@/repositories/user";
import { loginScheme } from "@/schemes/auth/login-scheme";
import { compareSync } from "bcrypt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        nrp: { label: "NRP", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const creds = loginScheme.safeParse(credentials);
          if (!creds.success) return null;

          const { nrp, password } = creds.data;
          const user = await findUserByNRP(nrp);
          if (!user) return null;

          const isValid = compareSync(password, user.password);
          if (!isValid) return null;
          return user;
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      const user = await findUserByID(token.sub as string);
      if (!user) return session;
      const { password: _, ...authed } = user;
      return {
        ...session,
        user: { ...authed, id: user.id },
      };
    },
  },
});
