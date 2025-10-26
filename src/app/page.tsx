"use client";

import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Always scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder logic — implement backend with NestJS API
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <HeroSection />
      <WorkSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
