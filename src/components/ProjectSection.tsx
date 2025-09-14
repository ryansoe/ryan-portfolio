// components/ProjectSection.tsx
import { projects } from "@/presets/work";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const ProjectSection = () => (
  <section className="my-16 px-4">
    <div className="max-w-full sm:max-w-[95%] lg:max-w-[66.67%] mx-auto">
      <div className="flex items-center justify-center gap-2 mb-5">
        <Image
          src="/icons/projects.svg"
          alt="Projects icon"
          width={24}
          height={24}
          className="w-10 h-10"
        />
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>
      <div className="space-y-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectSection;
