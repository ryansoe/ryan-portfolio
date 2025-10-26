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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the card is visible
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
