import { personalInfo } from "@/presets/personal";

const HeroSection = () => (
  <section className="my-16 px-4">
    <div className="max-w-[66.67%] mx-auto text-left">
      <h1 className="text-5xl font-medium mb-6 text-black">
        {personalInfo.name}
      </h1>

      <p className="text-xl font-light text-black mb-6 leading-relaxed">
        {personalInfo.description}
      </p>

      {/* Social Links - Improved button design */}
      <div className="flex justify-start gap-6">
        {personalInfo.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-1 no-underline font-medium text-sm uppercase tracking-wide text-black leading-none after:absolute after:left-0 after:-bottom-[1px] after:h-[1px] after:w-0 after:bg-black after:transition-[width] after:duration-200 hover:after:w-full focus-visible:after:w-full"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
