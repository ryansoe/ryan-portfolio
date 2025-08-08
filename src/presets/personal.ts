export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  links: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Ryan Soe",
  title: "Full Stack Developer",
  description:
    "Exploring my hobbies and interests through software development",
  links: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ryan-soe-2596b6309/",
    },
    { name: "GitHub", url: "https://github.com/ryansoe" },
    { name: "X", url: "https://x.com/ryansoee" },
    {
      name: "Goodreads",
      url: "https://www.goodreads.com/user/show/185799909-ryan-soe",
    },
    {
      name: "Letterboxd",
      url: "https://letterboxd.com/ryansoe/",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/user/moonsetter03?si=e275e39520024c21",
    },
  ],
};
