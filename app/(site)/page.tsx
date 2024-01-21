import { siteConfig } from "@/config/site"
import LoginButton from "@/components/ui/login"
import React from "react"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function IndexPage() {
  return (
    <>
      <main className="flex-1">
        <section className="container space-y-6 py-8 md:py-12 lg:py-32">
          <div className="flex flex-col gap-4 items-center justify-between">
            <a
              href={siteConfig.media.twitter}
              className="rounded-2xl bg-muted py-1.5 px-4"
              target="_blank"
            >
              Follow us on Twitter
            </a>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg-text-7xl text-center">
              Building your own Spotify activity graph
            </h1>
            <p className="max-w-[42rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Explore the nuances of your music habits in rich, detailed graphs
              that tell the story of your auditory adventures like never before.
            </p>
            <div className="space-x-4">
              <LoginButton displayText="Get Started" />
              <Button variant="outline" asChild>
                <Link href={siteConfig.media.github} target="_blank">
                  <GitHubLogoIcon className="mr-2" /> Github
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section
          id="feature"
          className="container space-y-6 py-8 md:py-12 lg:py-24 bg-slate-50 dark:bg-transparent"
        >
          <div className="flex flex-col gap-4 items-center justify-between">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg-text-7xl text-center">
              Features
            </h1>
            <p className="max-w-[42rem] text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Embark on a Visual Journey through Your Musical Odyssey! Our
              Spotify Activity Graph Generator transforms the beats of your
              playlist into a vibrant, living tapestry.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
