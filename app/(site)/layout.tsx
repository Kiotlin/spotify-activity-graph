"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { signOut } from "next-auth/react"
import { usePathname } from "next/navigation"

interface IndexLayoutProps {
  children: React.ReactNode
}

export default function IndexLayout({ children }: IndexLayoutProps) {
  const pathname = usePathname()
  const isGraphPage = pathname === "/graph"

  return (
    <div className="relative flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl justify-end items-center gap-2">
          {isGraphPage && (
            <Button
              variant="destructive"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Logout
            </Button>
          )}
          <ModeToggle />
        </div>
      </header>
      {children}
    </div>
  )
}
