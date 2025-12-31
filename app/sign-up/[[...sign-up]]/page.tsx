import { SignUp } from "@clerk/nextjs";
import { GraduationCap, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="dark min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.04] grid-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md space-y-8">
        {/* Back to home button */}
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Logo and title */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 flex items-center justify-center animate-pulse">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-3xl font-bold text-white">Get Started</h1>
              <Sparkles className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-muted-foreground">
              Create your free account and start learning today
            </p>
          </div>

          {/* Benefits badges */}
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              100% Free
            </div>
            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
              No Credit Card
            </div>
            <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium">
              Instant Access
            </div>
          </div>
        </div>

        {/* Clerk Sign Up Component */}
        <div className="flex justify-center">
          <SignUp
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-zinc-900/50 backdrop-blur-xl border-zinc-800 shadow-2xl",
                headerTitle: "text-white",
                headerSubtitle: "text-zinc-400",
                socialButtonsBlockButton:
                  "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white",
                formButtonPrimary:
                  "bg-primary hover:bg-primary/90 text-primary-foreground",
                formFieldInput:
                  "bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500",
                formFieldLabel: "text-zinc-300",
                footerActionLink: "text-primary hover:text-primary/90",
                identityPreviewText: "text-white",
                identityPreviewEditButton: "text-primary hover:text-primary/90",
                dividerLine: "bg-zinc-700",
                dividerText: "text-zinc-500",
              },
            }}
          />
        </div>

        {/* Additional info */}
        <div className="text-center text-sm text-zinc-400 space-y-2">
          <p>
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary hover:text-primary/90 font-medium">
              Sign in
            </Link>
          </p>
        
        </div>
      </div>
    </div>
  );
}