import { personalInfo } from "@/presets/personal";
import { useEffect, useRef, useState } from "react";
import { AnimatedUnderline } from "@/components/ui/animated-underline";

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
    <section className="px-4 pt-8 md:pt-12 pb-8 bg-white page-load-animate">
      <div className="max-w-full sm:max-w-[95%] lg:max-w-[66.67%] mx-auto text-left">
        <h1 className="font-medium mb-2 text-black">{personalInfo.name}</h1>

        <p className="text-lg sm:text-xl font-medium text-black mb-4 leading-relaxed">
          {personalInfo.description}
        </p>

        <div className="flex flex-row justify-start gap-3 sm:gap-6 font-roboto-mono">
          {personalInfo.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onTouchStart={() => handleTouchStart(index)}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              className={`no-underline ${
                activeLinkIndex === index ? "bg-gray-100" : ""
              }`}
            >
              <AnimatedUnderline className="font-medium text-xs sm:text-sm uppercase tracking-wide text-black leading-none">
                {link.name}
              </AnimatedUnderline>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
