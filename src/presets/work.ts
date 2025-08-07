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
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nibh at leo semper eleifend. Mauris blandit tristique nulla, sit amet rhoncus eros feugiat sit amet. Mauris tempor suscipit lacus, non lacinia erat ullamcorper blandit. Suspendisse bibendum venenatis sem, ut scelerisque enim ornare et. Aliquam fringilla eu erat sed euismod. Proin sed tortor lectus. In in lacinia neque.",
    tags: ["Web", "Personal"],
    imageUrl: "/projects/vibely.png",
    projectUrl: "https://vibely-dusky.vercel.app/",
    githubUrl: "https://github.com/ryansoe/vibely",
  },
  {
    id: 2,
    title: "BookWorm",
    date: "June 2025",
    desc: "A mobile app for sharing your book reviews with friends",
    tags: ["Mobile", "Personal"],
    imageUrl: "/projects/bookworm.png",
    githubUrl: "https://github.com/ryansoe/bookworm",
  },
];
