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
    date: "2025 - 2025",
    type: "Internship",
    imageUrl: "/work/tgg.jpeg",
  },
  {
    id: 2,
    company: "Data Science Alliance",
    date: "2025 - 2025",
    type: "Internship",
    imageUrl: "/work/dsa.jpeg",
  },
];

export const projects: Project[] = [
  {
    id: 3,
    title: "Prompted - The Daily Journaling App",
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
    title: "Eventory - Discord Event Tracker",
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
    desc: "A not-so insane chess engine",
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
    projectUrl: "https://in-n-out-nutrition.vercel.app/",
    githubUrl: "https://github.com/ryansoe/innout-nutrition-calculator",
  },
  {
    id: 7,
    title: "TritonSpend",
    date: "Oct. 2025 - Present",
    desc: "Budget tracking app designed to help UCSD students manage their personal finances effectively",
    tags: ["Mobile", "Finance", "Open Source"],
    imageUrl: "/projects/tritonspend.png",
    videoUrl: "/projects/tritonspend.mp4",
    githubUrl: "https://github.com/CSES-Open-Source/TritonSpend",
  },
];
