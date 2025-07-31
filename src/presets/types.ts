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
