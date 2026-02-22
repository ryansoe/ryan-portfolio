"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/presets/work";

interface AnimatedProjectCardProps extends Project {
  index: number;
}

export default function AnimatedProjectCard({
  index,
  ...projectProps
}: AnimatedProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Delay starting the observer so cards already in the viewport on load
    // wait for the page-load cascade to finish (Projects header fades in at 750ms)
    const startDelay = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "0px",
        }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, 900);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`project-card-animate ${
        isVisible ? "project-card-visible" : ""
      }`}
      style={{
        transitionDelay: `${index * 50}ms`, // Stagger animation by 50ms per card
      }}
    >
      <ProjectCard {...projectProps} />
    </div>
  );
}
