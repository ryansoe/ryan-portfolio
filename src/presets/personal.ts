export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  repoUrl: string;
  version: string;
  links: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
}

export const personalInfo: PersonalInfo = {
  name: "Ryan Soe",
  title: "Full Stack Developer",
  description: "Full-stack developer on the ML track",
  email: "ryansoe26@gmail.com",
  repoUrl: "https://github.com/ryansoe/ryan-portfolio",
  version: "3.0",
  links: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ryan-soe-2596b6309/",
    },
    { name: "GitHub", url: "https://github.com/ryansoe" },
    // {
    //   name: "Goodreads",
    //   url: "https://www.goodreads.com/user/show/185799909-ryan-soe",
    // },
    // {
    //   name: "Spotify",
    //   url: "https://open.spotify.com/user/moonsetter03?si=e275e39520024c21",
    // },
    { name: "Substack", url: "https://substack.com/@ryansoe" },
    { name: "@ryansoee", url: "https://x.com/ryansoee" },
  ],
};
