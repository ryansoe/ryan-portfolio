"use client";

import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const heroRef = useRef<HTMLDivElement>(null);

  // Always scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Change background color based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetHeight;
        const scrollPosition = window.scrollY;

        // Change to white when scrolled past hero section
        if (scrollPosition > heroBottom - 100) {
          document.body.style.backgroundColor = "#ffffff";
        } else {
          document.body.style.backgroundColor = "#80c0e1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Set initial background color
    document.body.style.backgroundColor = "#80c0e1";

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder logic — implement backend with NestJS API
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <div
        ref={heroRef}
        className="pt-10 md:pt-16 pb-16"
        style={{
          background: "linear-gradient(to bottom, #80c0e1 0%, #ffffff 100%)",
        }}
      >
        <HeroSection />
      </div>
      <div style={{ backgroundColor: "#ffffff" }} className="pt-0 pb-16">
        <WorkSection />
        <ProjectSection />
      </div>
      <div
        className="pt-10"
        style={{
          background: "linear-gradient(to bottom, #ffffff 0%, #fbb4d4 100%)",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
