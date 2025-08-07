import { personalInfo } from "@/presets/personal";

const HeroSection = () => (
  <section className="my-10 px-4">
    <div className="max-w-[66.67%] mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
      <p className="text-xl text-gray-600 mb-4">{personalInfo.description}</p>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        {personalInfo.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-200 rounded"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
