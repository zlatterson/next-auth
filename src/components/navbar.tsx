import Link from "next/link";
import { SignOut } from "./sign-out";
import getSession from "@/lib/getSession";

export default async function NavBar() {
    // getting our cached session for static component
    // (if you want navbar to be a client component, useSession)
    const session = await getSession();
    
    return (
        <header className="sticky top-0 z-40 bg-black text-white py-3 px-3 flex justify-between">
            <div>
                <h3 className="text-xl font-bold">
                    <Link href={"/"}>
                        Logo
                    </Link>
                </h3>
            </div>

            {session?.user?.id ?
                <div>
                    {/* sign out of static component */}
                    <SignOut />
                </div>
                :
                <div>
                    <Link href={"/login"}>
                        Login
                    </Link>
                </div>
            }
        </header>
    );
}