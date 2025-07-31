"use client";

import ProjectSection from "@/components/ProjectSection";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder logic — implement backend with NestJS API
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h1>Ryan Soe</h1>
      <p>Software Engineer</p>
      <ProjectSection />
    </div>
  );
}
