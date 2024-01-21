"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { FaSpotify, FaApple } from "react-icons/fa"
import Spinner from "@/components/ui/spinner"
import { signIn } from "next-auth/react"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export default function UserAuthForm() {
  const [isSpotifyLoading, setIsSpotifyLoading] = React.useState(false)
  const [isAppleMusicLoading, setIsAppleMusicLoading] = React.useState(false)
  const { toast } = useToast()

  return (
    <>
      <div className="grid gap-6">
        <Button
          variant="outline"
          onClick={() => {
            setIsSpotifyLoading(true)
            signIn("spotify", { callbackUrl: "/graph" })
          }}
          disabled={isAppleMusicLoading || isSpotifyLoading}
        >
          {isSpotifyLoading ? (
            <Spinner className="mr-2 h-4 w-4" />
          ) : (
            <FaSpotify className="mr-2 h-4 w-4" />
          )}
          Spotify
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button
          onClick={() => {
            setIsAppleMusicLoading(true)
            setTimeout(() => {
              setIsAppleMusicLoading(false)
            }, 5000)
            toast({
              title: "Oops, sorry!",
              description: "Apple Music support is coming soon!",
              action: (
                <ToastAction
                  altText="Got it"
                  onClick={() => setIsAppleMusicLoading(false)}
                >
                  Got it
                </ToastAction>
              ),
            })
          }}
          disabled={isAppleMusicLoading || isSpotifyLoading}
        >
          {isAppleMusicLoading ? (
            <Spinner className="mr-2 h-4 w-4" />
          ) : (
            <FaApple className="mr-2 h-4 w-4" />
          )}
          Apple Music
        </Button>
      </div>
    </>
  )
}
