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

  // Set background color to white
  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder logic — implement backend with NestJS API
    console.log("Form submitted:", formData);
  };

  return (
    <div ref={heroRef}>
      <HeroSection />
      <WorkSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
