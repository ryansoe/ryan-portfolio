import { personalInfo } from "@/presets/personal";

const HeroSection = () => (
  <section className="my-16 px-4">
    <div className="max-w-[66.67%] mx-auto text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-black">
        {personalInfo.name}
      </h1>

      {/* Description - Lighter weight and muted color */}
      <p className="text-xl font-light text-gray-500 mb-12 leading-relaxed">
        {personalInfo.description}
      </p>

      {/* Social Links - Improved button design */}
      <div className="flex justify-center gap-6">
        {personalInfo.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white transition-all duration-200 rounded-md font-medium text-sm uppercase tracking-wider"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
