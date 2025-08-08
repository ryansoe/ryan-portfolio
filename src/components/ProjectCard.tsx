import { Project } from "@/presets/work";
import Image from "next/image";

export default function ProjectCard({
  title,
  date,
  desc,
  tags,
  imageUrl,
  projectUrl,
  githubUrl,
}: Project) {
  return (
    <div className="group p-6 transition-all duration-200 bg-white hover:bg-gray-50 hover:shadow-sm">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Left side - Image (clickable if projectUrl exists) */}
        <div className="w-full md:w-auto">
          {projectUrl ? (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative w-full h-44 sm:h-52 md:w-56 md:h-36 overflow-hidden bg-gray-50 shadow-sm group/image">
                <Image
                  src={imageUrl}
                  alt={title}
                  width={224}
                  height={144}
                  className="w-full h-full object-cover transition-all duration-300 group-hover/image:brightness-75"
                />
                {/* Arrow icon for projects with links */}
                <div className="absolute top-2 right-2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-bold">↗</span>
                </div>
              </div>
            </a>
          ) : (
            <div className="relative w-full h-44 sm:h-52 md:w-56 md:h-36 overflow-hidden bg-gray-50 shadow-sm group/image">
              <Image
                src={imageUrl}
                alt={title}
                width={224}
                height={144}
                className="w-full h-full object-cover transition-all duration-300 group-hover/image:brightness-75"
              />
            </div>
          )}
        </div>

        {/* Right side - Content */}
        <div className="flex-1 space-y-3">
          {/* Title and Date */}
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="text-lg font-semibold text-black">{title}</h3>
            <span className="text-sm text-gray-400">{date}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {Array.isArray(tags) ? (
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-0.5 bg-gray-200 text-black text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="px-2.5 py-0.5 bg-gray-200 text-black text-xs font-semibold rounded-full">
                {tags}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">{desc}</p>

          {/* Links */}
          <div className="flex items-center gap-6 pt-3">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-1 text-sm font-medium text-black after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-black after:transition-[width] after:duration-200 hover:after:w-full focus-visible:after:w-full"
              >
                Explore{" "}
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-1 text-sm font-medium text-black after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-black after:transition-[width] after:duration-200 hover:after:w-full focus-visible:after:w-full"
              >
                GitHub{" "}
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
