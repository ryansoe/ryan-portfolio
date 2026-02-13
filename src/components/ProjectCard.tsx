import { Project } from "@/presets/work";
import Image from "next/image";
import { AnimatedUnderline } from "@/components/ui/animated-underline";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ProjectCard({
  title,
  date,
  desc,
  tags,
  imageUrl,
  projectUrl,
  githubUrl,
}: Project) {
  const projectImage = (
    <div className="relative w-full h-44 sm:h-52 md:w-56 md:h-36 overflow-hidden bg-gray-50 shadow-sm group/image rounded-lg">
      <Image
        src={imageUrl}
        alt={title}
        width={224}
        height={144}
        className="w-full h-full object-cover transition-all duration-300 group-hover/image:brightness-75"
      />
      {projectUrl && (
        <div className="absolute top-2 right-2 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
          <span className="text-white text-xl font-bold">↗</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="group p-6 transition-all duration-300 bg-white border-2 border-black rounded-lg hover:transform hover:-translate-y-2 project-card-hover">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Left side - Image */}
        <div className="w-full md:w-auto">
          {projectUrl ? (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {projectImage}
            </a>
          ) : (
            projectImage
          )}
        </div>

        {/* Right side - Content */}
        <div className="flex-1 space-y-3">
          {/* Title and Date */}
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="text-2xl md:text-2xl font-semibold text-black">
              {title}
            </h3>
            <span className="text-sm text-gray-400 font-roboto-mono">
              {date}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-gray-200 text-black text-xs font-medium rounded-md font-roboto-mono uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => (
                <p className="text-gray-900 text-sm leading-relaxed font-roboto-mono">
                  {children}
                </p>
              ),
              em: ({ children }) => <em className="italic">{children}</em>,
              strong: ({ children }) => (
                <strong className="font-bold">{children}</strong>
              ),
            }}
          >
            {desc}
          </ReactMarkdown>

          {/* Links */}
          <div className="flex items-center gap-6 pt-3">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-1 no-underline"
              >
                <AnimatedUnderline className="text-sm font-medium text-black font-roboto-mono">
                  Explore{" "}
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </AnimatedUnderline>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-1 no-underline"
              >
                <AnimatedUnderline className="text-sm font-medium text-black font-roboto-mono">
                  GitHub{" "}
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </AnimatedUnderline>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
