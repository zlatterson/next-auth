import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import Discord from "next-auth/providers/discord";
import prisma from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    trustHost: true,
    theme: {
        logo: "/vercel.svg",
    },
    adapter: PrismaAdapter(prisma) as Adapter,
    callbacks: {
        session({ session, user }) {
            session.user.role = user.role;
            return session;
        },
    },
    providers: [
        Google,
        GitHub,
        Resend({
            from: "no-reply@secure.yourwebsite.com",
        }),
        Discord,
    ],
    pages: {
        signIn: '/login',
    },
});
