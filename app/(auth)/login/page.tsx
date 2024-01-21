import { Metadata } from "next"
import Link from "next/link"
import { HandIcon, ChevronLeftIcon } from "@radix-ui/react-icons"
import UserAuthForm from "@/components/user-auth-form"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your music platform account",
}

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className={"absolute left-4 top-4 md:left-8 md:top-8"}>
        <div className="flex items-center gap-2 text-sm md:text-base">
          <ChevronLeftIcon className="h-4 w-4" />
          Back
        </div>
      </Link>
      <div className="mx-auto flex flex-col justify-center space-y-6 w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <HandIcon className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Sign in with your music platform account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="dark:hover:text-slate-50/90 hover:text-slate-900/90 underline underline-offset-4"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="dark:hover:text-slate-50/90 hover:text-slate-900/90 underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
