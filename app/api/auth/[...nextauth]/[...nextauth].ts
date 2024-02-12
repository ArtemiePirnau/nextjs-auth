import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Write your username",
        },
        password: {
          label: "Password:",
          type: "text",
          placeholder: "Write your password",
        },
      },
      async authorize(credentials) {
        const user = {
          id: "0",
          name: "Artemie",
          password: "123",
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        )
          return user;
        else return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
