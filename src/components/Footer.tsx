import { personalInfo } from "@/presets/personal";
import FadeInOnScroll from "./FadeInOnScroll";

const Footer = () => {
  const credit = `DESIGNED AND BUILT BY ${personalInfo.name.toUpperCase()}`;

  return (
    <footer className="w-full bg-white pt-8 pb-8 px-4">
      <div className="max-w-full sm:max-w-[95%] lg:max-w-[66.67%] mx-auto">
        <FadeInOnScroll>
          <div className="border-t border-gray-300" />
        </FadeInOnScroll>
        <FadeInOnScroll delay={100}>
          <div className="pt-8 flex flex-col gap-4 md:gap-0 text-xs font-roboto-mono uppercase tracking-wide text-black">
            {/* Top row on mobile - Center text */}
            <div className="text-center md:hidden">
              <span>{credit}</span>
            </div>

            {/* Bottom row on mobile / Single row on desktop */}
            <div className="flex justify-between md:justify-between items-center px-20 md:px-0">
              {/* Left - Contact */}
              <div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:underline transition-all duration-200"
                >
                  CONTACT ME{" "}
                  <span className="text-lg emoji-text">✉</span>
                </a>
              </div>

              {/* Center - Designed and Built (desktop only) */}
              <div className="hidden md:block">
                <span>{credit}</span>
              </div>

              {/* Right - Version */}
              <div>
                <a
                  href={personalInfo.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-all duration-200"
                >
                  {`VERSION ${personalInfo.version}`}{" "}
                  <span className="text-base emoji-text">↗</span>
                </a>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </footer>
  );
};

export default Footer;
