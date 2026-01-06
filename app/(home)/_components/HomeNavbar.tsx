import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { NAVIGATION_LINKS } from "@/lib/constants/navigation";
import HomeSheet from "./HomeSheet";
import Logo from "@/components/Logo";
import { checkRole } from "@/lib/roles";


export default async function Navbar() {
  const isAdmin = await checkRole("admin");
  
  return (
    <nav className="flex justify-between bg-navbar items-center shadow-xl border-b-muted text-2xl p-2">
      <Logo/>
      <div className="lg:flex hidden">
        {NAVIGATION_LINKS.map((link) => (
          <Button key={link.name} variant={"link"} asChild className="text-xl">
            <Link href={link.href}>{link.name}</Link>
          </Button>
        ))}
        {isAdmin && (
          <Button variant={"link"} asChild className="text-xl">
            <Link href="/admin">Admin</Link>
          </Button>
        )}
      </div>
      <div className="flex space-x-4 mr-2 items-center">
        <SignedOut>
          <SignInButton>
            <Button variant={"link"} className="text-lg">
              Log In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button variant={"link"} className="text-lg">
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn >
          <UserButton />
        </SignedIn>
        <HomeSheet />
      </div>
    </nav>
  );
}
