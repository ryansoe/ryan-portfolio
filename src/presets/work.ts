export interface Project {
  id: number;
  title: string;
  date: string;
  desc: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Vibely",
    date: "July 2025",
    desc: "A sleek, modern social media web app",
    tags: ["Web", "Social", "Personal"],
    imageUrl: "/projects/vibely.png",
    projectUrl: "https://vibely-dusky.vercel.app/",
    githubUrl: "https://github.com/ryansoe/vibely",
  },
  {
    id: 2,
    title: "BookWorm",
    date: "June 2025",
    desc: "A mobile app for sharing your book reviews with friends",
    tags: ["Mobile", "Social", "Personal"],
    imageUrl: "/projects/bookworm.png",
    githubUrl: "https://github.com/ryansoe/bookworm",
  },
];
