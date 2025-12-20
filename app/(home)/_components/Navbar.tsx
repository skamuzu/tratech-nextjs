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
import Logo from "@/components/Logo";


export default function Navbar() {
  return (
    <nav className="flex justify-between bg-navbar items-center shadow-xl border-b-muted text-2xl px-2">
      <Logo/>
      <div className="lg:flex hidden">
        {Links.map((link) => (
          <Button key={link.name} variant={"link"} asChild className="text-xl">
            <Link href={link.href}>{link.name}</Link>
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
