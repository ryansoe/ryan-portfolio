// components/ProjectSection.tsx
import { projects } from "@/presets/work";
import AnimatedProjectCard from "./AnimatedProjectCard";
import NoisyIcon from "./NoisyIcon";
import FadeInOnLoad from "./FadeInOnLoad";

const ProjectSection = () => {
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  return (
    <section className="mb-0 px-4 pb-16 bg-white">
      <div className="max-w-full sm:max-w-[95%] lg:max-w-[66.67%] mx-auto">
        <FadeInOnLoad delay={750}>
          <div className="flex items-center justify-center gap-2 mb-5">
            <NoisyIcon
              src="/icons/projects.svg"
              alt="Projects icon"
              size={24}
              className="w-10 h-10"
            />
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
        </FadeInOnLoad>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {sortedProjects.map((project, index) => (
            <AnimatedProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
