"use client";  // <- Esta línea obliga a que sea un Client Component

import { useState, useEffect } from "react";

const sections = ["Sobre Mí", "Proyectos", "Skills", "Contactame"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutTop = document.getElementById("about")?.offsetTop || 0;
      setShowNavbar(scrollY >= aboutTop - 50);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!showNavbar) return null;

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-end p-4 space-x-6 text-white">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`hover:text-yellow-400 transition-colors ${
              activeSection === section ? "border-b-2 border-yellow-400" : ""
            }`}
          >
            {section.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  );
}