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

const Links = [
  { name: "Courses", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Community", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-navbar items-center shadow-xl border-b-muted text-2xl px-2">
      <Image src={"/myLogo.png"} alt="Logo" width={100} height={100} />
      <div className="md:flex hidden">
        {Links.map((link) => (
          <Button key={link.name} variant={"link"} asChild className="text-xl">
            <Link href={link.name}>{link.name}</Link>
          </Button>
        ))}
      </div>
      <div className="flex space-x-2">
        <SignedOut>
          <SignInButton mode="modal" forceRedirectUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL}>
            <Button variant={"link"} className="text-lg">
              Log In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal" forceRedirectUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL}>
            <Button variant={"link"} className="text-lg">
              Sign Up
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
