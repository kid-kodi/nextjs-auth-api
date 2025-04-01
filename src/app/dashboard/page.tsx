import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { PowerIcon } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div>
      {session?.user?.id}
      {session?.user?.email}
      {session?.user?.name}
      {session?.user?.accessToken}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  );
}
