import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const clientId: string = (process.env.GITHUB_ID as string) || "";
const clientSecret: string = (process.env.GITHUB_SECRET as string) || "";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
    // ...add more providers here
  ],
});
