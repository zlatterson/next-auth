import { Metadata } from "next";
import { redirect } from "next/navigation";
import getSession from "../../lib/getSession";
import LoginPage from "./login-page";

export const metadata: Metadata = {
  title: "Login to Your Account",
};

interface PageProps {
  searchParams: {
    callback?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const session = await getSession();
  const user = session?.user;

  if (user) {
    const callbackUrl = searchParams.callback || "/";
    redirect(callbackUrl);
  }

  return <LoginPage />;
}
