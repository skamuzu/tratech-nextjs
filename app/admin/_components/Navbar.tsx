import { Bell } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default async function Navbar() {
  const user = await currentUser();

  return (
    <div className="w-full flex border-b items-center justify-between p-4">
      <h1 className="text-2xl font-bold">Tratech Management</h1>
      <div className="flex items-center space-x-8">
        <Bell />

        {user && (
          <div className="flex items-center space-x-2">
            <div>
              <h2 className="font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-muted-foreground">{user.primaryEmailAddress?.emailAddress}</p>
            </div>
            <Image
              src={user.imageUrl}
              alt="user-image"
              width={140}
              height={140}
              className="w-12 h-12 rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
