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
import { Links } from "./links";
import HomeSheet from "./HomeSheet";


export default function Navbar() {
  return (
    <nav className="flex justify-between bg-navbar items-center shadow-xl border-b-muted text-2xl px-2">
      <Image src={"/myLogo.png"} alt="Logo" width={100} height={100} className="w-25 h-25 cursor-pointer" />
      <div className="lg:flex hidden">
        {Links.map((link) => (
          <Button key={link.name} variant={"link"} asChild className="text-xl">
            <Link href={link.name}>{link.name}</Link>
          </Button>
        ))}
      </div>
      <div className="flex space-x-4 mr-2">
        <SignedOut>
          <SignInButton mode="modal" >
            <Button variant={"link"} className="text-lg">
              Log In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
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
