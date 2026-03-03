"use client";

import { useRef, useState } from "react";
import { Project } from "@/presets/work";
import Image from "next/image";
import { AnimatedUnderline } from "@/components/ui/animated-underline";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ProjectCard({
  title,
  desc,
  tags,
  imageUrl,
  videoUrl,
  projectUrl,
  githubUrl,
}: Project) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoUrl && videoRef.current) {
      setHovered(true);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoUrl && videoRef.current) {
      setHovered(false);
      videoRef.current.pause();
    }
  };

  const projectImage = (
    <div className="relative w-full h-56 overflow-hidden bg-gray-50 shadow-sm rounded-lg">
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 672px"
        className={`object-cover transition-opacity duration-300 ${
          hovered && videoUrl ? "opacity-0" : "opacity-100"
        }`}
      />
      {videoUrl && (
        <video
          ref={videoRef}
          src={videoUrl}
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );

  return (
    <div
      className="group p-6 transition-all duration-300 bg-white border-2 border-black rounded-lg hover:transform hover:-translate-y-2 project-card-hover h-full flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

    >
      <div className="flex flex-col items-start gap-4 flex-1">
        {/* Left side - Image */}
        <div className="w-full">
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
        <div className="flex-1 flex flex-col space-y-3">
          {/* Title and Date */}
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="text-2xl md:text-2xl font-semibold text-black">
              {title}
            </h3>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-gray-200 group-hover:bg-black/8 group-hover:backdrop-blur-sm active:bg-black/8 active:backdrop-blur-sm text-black text-xs font-medium rounded-md font-roboto-mono uppercase transition-all duration-300"
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
          <div className="flex items-center gap-6 pt-3 mt-auto">
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
