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
    <div className="group p-6 rounded-lg transition-all duration-200 bg-white">
      <div className="flex gap-6">
        {/* Left side - Image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-24 border-2 border-black overflow-hidden bg-gray-50 flex items-center justify-center">
            <Image
              src={imageUrl}
              alt={title}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 space-y-3">
          {/* Title and Date */}
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-semibold text-black">{title}</h3>
            <span className="text-gray-600 text-sm">{date}</span>
          </div>

          {/* Tags */}
          <div className="flex gap-2">
            {Array.isArray(tags) ? (
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-black text-white text-xs rounded-full border border-black"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="px-3 py-1 bg-black text-white text-xs rounded-full border border-black">
                {tags}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>

          {/* Links */}
          <div className="flex gap-4 pt-2">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-medium text-sm hover:underline flex items-center gap-1"
              >
                Explore →
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-medium text-sm hover:underline flex items-center gap-1"
              >
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
