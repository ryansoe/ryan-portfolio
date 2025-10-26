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
    date: "2025 - Present",
    type: "Internship",
    imageUrl: "/work/tgg.jpeg",
  },
  {
    id: 2,
    company: "Data Science Alliance",
    date: "2025 - Present",
    type: "Internship",
    imageUrl: "/work/dsa.jpeg",
  },
];

export const projects: Project[] = [
  {
    id: 4,
    title: "BookWorm",
    date: "June 2025",
    desc: "A mobile app for sharing your book reviews with friends",
    tags: ["Mobile", "Social", "Personal"],
    imageUrl: "/projects/bookworm.png",
    githubUrl: "https://github.com/ryansoe/bookworm",
  },
  {
    id: 3,
    title: "Prompted - The Daily Journaling App",
    date: "June 2025",
    desc: "A daily journaling app to turn your everyday thoughts into aesthetic memory cards",
    tags: ["Web", "Mental Health", "Academic"],
    imageUrl: "/projects/prompted.png",
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
    githubUrl: "https://github.com/ryansoe/rice",
  },
  {
    id: 6,
    title: "In-N-Out Nutrition Calculator",
    date: "August 2025",
    desc: "Quickly explore In-N-Out menu nutrition. Add items to your tray to see live totals for calories, macros, sodium and more. Use the summary at the bottom to adjust quantities or reset.",
    tags: ["Web", "Health", "Personal"],
    imageUrl: "/projects/innout.png",
    projectUrl: "https://in-n-out-nutrition.vercel.app/",
    githubUrl: "https://github.com/ryansoe/innout-nutrition-calculator",
  },
  {
    id: 5,
    title: "Vibely",
    date: "July 2025",
    desc: "A sleek, modern social media web app",
    tags: ["Web", "Social", "Personal"],
    imageUrl: "/projects/vibely.png",
    projectUrl: "https://vibely-dusky.vercel.app/",
    githubUrl: "https://github.com/ryansoe/vibely",
  },
];
