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
  description: "Exploring my hobbies and interests through creative software",
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
  ],
};
