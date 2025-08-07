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
  description: "Passionate developer building modern web applications",
  links: [
    { name: "GitHub", url: "https://github.com/ryansoe" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ryan-soe-2596b6309/",
    },
    { name: "X", url: "https://x.com/ryansoee" },
  ],
};
