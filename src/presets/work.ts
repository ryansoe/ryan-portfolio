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
  {
    id: 3,
    title: "Prompted",
    date: "June 2025",
    desc: "A daily journaling app to turn your everyday thoughts into aesthetic memory cards",
    tags: ["Web", "Mental Health", "Academic"],
    imageUrl: "/projects/prompted.png",
    projectUrl:
      "https://cse110-sp25-group18.github.io/project-card-journaling/index.html",
    githubUrl: "https://github.com/cse110-sp25-group18/project-card-journaling",
  },
  {
    id: 4,
    title: "Eventory",
    date: "April 2025",
    desc: "Track your favorite events announced on Discord servers through a dashboard on the web",
    tags: ["Web", "Social", "Hackathon"],
    imageUrl: "/projects/eventory.png",
    projectUrl: "https://devpost.com/software/eventory-pnfrq1",
    githubUrl: "https://github.com/ryansoe/diamond-hacks-education",
  },
  {
    id: 5,
    title: "RICE (Ryan's Insane Chess Engine)",
    date: "May 2024",
    desc: "A not-so insane chess engine",
    tags: ["Application", "Chess", "Personal"],
    imageUrl: "/projects/rice.png",
    githubUrl: "https://github.com/ryansoe/rice",
  },
];
