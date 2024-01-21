import { SiteConfig } from "../types";

export const siteDomain = "https://spotify-activity-graph.vercel.app";

export const siteConfig: SiteConfig = {
  name: "spotify-activity-graph",
  description: "Visualize your Spotify activity",
  url: siteDomain,
  og: {
    title: "spotify-activity-graph",
    type: "website",
    url: siteDomain,
    image: `${siteDomain}/og.png`
  },
  media: {
    twitter: "https://twitter.com/spotify-activity-graph",
    github: "https://github.com/Kiotlin/spotify-activity-graph"
  }
};
