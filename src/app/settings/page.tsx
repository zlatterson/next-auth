import { Metadata } from "next";
import { redirect } from "next/navigation";
import getSession from "../../lib/getSession";
import SettingsPage from "./settings-page";

export const metadata: Metadata = {
    title: "Settings",
};

export default async function Page() {
    const session = await getSession();
    const user = session?.user;

    // restricted page
    if (!user) {
        redirect("/api/auth/signin?callbackUrl=/settings");
    }

    return (
        <div className="py-10">
            <SettingsPage user={user}/>
            <div className="text-white text-[32px] font-semibold leading-[42px] text-center mt-10 mb-5 md:mb-10">Profile Settings</div>
        </div>
    );
}
