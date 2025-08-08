// components/ProjectSection.tsx
import { projects } from "@/presets/work";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => (
  <section className="my-16 px-4">
    <div className="max-w-full sm:max-w-[95%] lg:max-w-[66.67%] mx-auto">
      <h2 className="text-2xl font-bold uppercase underline mb-5 text-center">
        Projects
      </h2>
      <div className="space-y-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectSection;
