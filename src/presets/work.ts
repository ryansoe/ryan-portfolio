export interface Project {
  id: number;
  title: string;
  date: string;
  desc: string;
  tags: string[];
  imageUrl: string;
  videoUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
}

export interface Work {
  id: number;
  company: string;
  date: string;
  type: string;
  imageUrl: string;
}

export const work: Work[] = [
  {
    id: 1,
    company: "The Great Game",
    date: "2025",
    type: "Software",
    imageUrl: "/work/tgg.jpeg",
  },
  {
    id: 2,
    company: "Data Science Alliance",
    date: "2025",
    type: "Software",
    imageUrl: "/work/dsa.jpeg",
  },
  {
    id: 3,
    company: "Algoverse",
    date: "2026 - Present",
    type: "Research",
    imageUrl: "/work/algoverse.jpeg",
  },
];

export const projects: Project[] = [
  {
    id: 3,
    title: "Prompted",
    date: "June 2025",
    desc: "A daily journaling app to turn your everyday thoughts into aesthetic memory cards",
    tags: ["Web", "Mental Health", "Academic"],
    imageUrl: "/projects/prompted.png",
    videoUrl: "/projects/prompted.mp4",
    projectUrl:
      "https://cse110-sp25-group18.github.io/project-card-journaling/index.html",
    githubUrl: "https://github.com/cse110-sp25-group18/project-card-journaling",
  },
  {
    id: 2,
    title: "Eventory",
    date: "April 2025",
    desc: "Track your favorite events announced on Discord servers through a dashboard on the web",
    tags: ["Web", "Social", "Hackathon"],
    imageUrl: "/projects/eventory.png",
    videoUrl: "/projects/eventory.mp4",
    projectUrl: "https://devpost.com/software/eventory-pnfrq1",
    githubUrl: "https://github.com/ryansoe/diamond-hacks-education",
  },
  {
    id: 1,
    title: "RICE (Ryan's Insane Chess Engine)",
    date: "May 2024",
    desc: "An insane chess engine",
    tags: ["AI", "Chess", "Personal"],
    imageUrl: "/projects/rice.png",
    videoUrl: "/projects/rice.mp4",
    githubUrl: "https://github.com/ryansoe/rice",
  },
  {
    id: 6,
    title: "In-N-Out Nutrition Calculator",
    date: "August 2025",
    desc: '*"Let me get a double-double animal style with chopped chilis and medium-well fries with a diet coke please"*',
    tags: ["Web", "Health", "Personal"],
    imageUrl: "/projects/innout.png",
    videoUrl: "/projects/innout.mp4",
    projectUrl: "https://in-n-out-nutrition.vercel.app/",
    githubUrl: "https://github.com/ryansoe/innout-nutrition-calculator",
  },
  {
    id: 8,
    title: "TritonSpend",
    date: "Oct. 2025 - Present",
    desc: "Budget tracking app designed to help UCSD students manage their personal finances effectively",
    tags: ["Mobile", "FinTech", "Open Source"],
    imageUrl: "/projects/tritonspend.png",
    videoUrl: "/projects/tritonspend.mp4",
    githubUrl: "https://github.com/CSES-Open-Source/TritonSpend",
  },
  {
    id: 7,
    title: "Data Quest: The Secrets of Soltryss",
    date: "...",
    desc: "A magical world of wizards, kings, and enchanting creatures, where players are introduced to data science **[CLOSED SOURCE - Details available upon request]**",
    tags: ["Game", "Education", "Nonprofit"],
    imageUrl: "/projects/dataquest.png",
    videoUrl: "/projects/dataquest.mp4",
  },
  {
    id: 9,
    title: "Hexsmith",
    date: "",
    desc: "A browser-based IDE with an AI coding assistant, in-browser execution with live preview, and GitHub import/export",
    tags: ["Web", "AI", "Personal"],
    imageUrl: "/projects/hexsmith.png",
    projectUrl: "https://hexsmith.vercel.app/",
    githubUrl: "https://github.com/ryansoe/hexsmith",
  },
];
