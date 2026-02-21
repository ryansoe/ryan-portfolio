import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <HeroSection />
      <WorkSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
