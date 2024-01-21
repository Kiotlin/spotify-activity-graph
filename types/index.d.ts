export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  og: {
    title: string;
    type: string;
    url: string;
    image: string;
  };
  media: {
    twitter: string;
    github: string;
  };
};
