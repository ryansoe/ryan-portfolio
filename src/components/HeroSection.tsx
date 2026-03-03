"use client";

import { personalInfo } from "@/presets/personal";
import { useEffect, useRef, useState } from "react";
import { AnimatedUnderline } from "@/components/ui/animated-underline";
import FadeInOnLoad from "@/components/FadeInOnLoad";

const HeroSection = () => {
  const [activeLinkIndex, setActiveLinkIndex] = useState<number | null>(null);
  const activeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouchStart = (index: number) => {
    if (activeTimeoutRef.current) {
      clearTimeout(activeTimeoutRef.current);
    }
    setActiveLinkIndex(index);
    activeTimeoutRef.current = setTimeout(() => {
      setActiveLinkIndex(null);
      activeTimeoutRef.current = null;
    }, 150);
  };

  const handleTouchEnd = () => {
    if (activeTimeoutRef.current) {
      clearTimeout(activeTimeoutRef.current);
      activeTimeoutRef.current = null;
    }
    setActiveLinkIndex(null);
  };

  useEffect(() => {
    return () => {
      if (activeTimeoutRef.current) {
        clearTimeout(activeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="px-4 pt-8 md:pt-12 bg-white">
      <div className="max-w-full sm:max-w-[95%] lg:max-w-[66.67%] mx-auto text-left">
        <FadeInOnLoad delay={0}>
          <h1 className="font-medium mb-2 text-black">{personalInfo.name}</h1>
        </FadeInOnLoad>

        <FadeInOnLoad delay={150}>
          <p className="text-lg sm:text-xl font-medium italic font-dm-serif text-black mb-2 leading-relaxed">
            {personalInfo.description}
          </p>
        </FadeInOnLoad>

        <FadeInOnLoad delay={300}>
          <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-start sm:gap-6 font-roboto-mono mt-8 mb-8 sm:mt-0 sm:mb-0 gap-5">
            {personalInfo.links.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.name}`}
                onTouchStart={() => handleTouchStart(index)}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd}
                className={`no-underline ${
                  activeLinkIndex === index ? "bg-gray-100" : ""
                }`}
              >
                <AnimatedUnderline className="font-medium text-sm sm:text-sm uppercase tracking-widest text-black leading-none">
                  {link.name}
                </AnimatedUnderline>
              </a>
            ))}
          </div>
        </FadeInOnLoad>
      </div>
    </section>
  );
};

export default HeroSection;
