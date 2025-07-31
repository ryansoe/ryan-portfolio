// components/ProjectSection.tsx
import { projects } from "@/presets/work";
import ProjectCard from "./ProjectCard";
import { Project } from "@/presets/types";

const ProjectSection = () => (
  <section className="my-10 px-4">
    <div className="max-w-[66.67%] mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
      <div className="space-y-6">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectSection;
