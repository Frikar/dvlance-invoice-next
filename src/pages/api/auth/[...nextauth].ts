import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const prisma = new PrismaClient();

const clientId: string = (process.env.GITHUB_ID as string) || "";
const clientSecret: string = (process.env.GITHUB_SECRET as string) || "";

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.plan = <string>user.plan;
      return session;
    },
  },
});
