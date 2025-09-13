import { personalInfo } from "@/presets/personal";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const linkClassName = [
    "group relative inline-flex items-center gap-1",
    "no-underline font-medium text-xs sm:text-sm uppercase tracking-wide text-black leading-none",
    "after:absolute after:left-0 after:-bottom-[1px] after:h-[1px] after:w-0 after:bg-black",
    "after:transition-[width] after:duration-200",
    "hover:after:w-full focus-visible:after:w-full",
  ].join(" ");

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
    <section className="!pt-12 !md:pt-16 px-4">
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
              className={`${linkClassName} ${
                activeLinkIndex === index ? "bg-gray-100" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
