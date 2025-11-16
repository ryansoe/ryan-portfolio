// components/ProjectSection.tsx
import { projects } from "@/presets/work";
import AnimatedProjectCard from "./AnimatedProjectCard";
import Image from "next/image";

const ProjectSection = () => {
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  return (
    <section
      className="mb-0 px-4 page-load-animate"
      style={{ animationDelay: "300ms" }}
    >
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
          {sortedProjects.map((project, index) => (
            <AnimatedProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
