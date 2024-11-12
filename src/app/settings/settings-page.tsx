import { User } from "next-auth";
import { useSession } from "next-auth/react";

interface SettingsPageProps {
  user: User;
}

export default function SettingsPage({ user }: SettingsPageProps) {


  return (
    <main className="px-3 py-10">
      
    </main>
  );
}
