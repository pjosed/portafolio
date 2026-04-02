"use client";
import { useState } from "react";

export default function Hero() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } =
      currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      id = "hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-white text-center px-6 overflow-hidden bg-black"
    >
      {/* Fondo dinámico tipo "agua" */}
      <div
        className="absolute inset-0 transition-all duration-200"
        style={{
          background: `
            radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,0.08), transparent 40%),
            linear-gradient(to bottom, #000000, #0f172a, #000000)
          `,
        }}
      />

      {/* Glow blur */}
      <div
        className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none transition-all duration-200"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Imagen */}
        <img
          src="/images/yo.png"
          alt="Jose"
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-6 border-4 border-white/20 shadow-lg hover:scale-105 transition"
        />

        {/* Nombre */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Jose David Peña
        </h1>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-6">
          Ingeniero de sistemas en formación con experiencia en desarrollo de software.
          Construyendo soluciones reales con código.
        </p>

        {/* Botones */}
        <div className="flex gap-4">

          <a
            href="https://www.linkedin.com/in/jose-pe%C3%B1a-b584042b0/"
            target="_blank"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
          >

            Ver Linkedin
          </a>
          <a
            href="https://github.com/pjosed" 
            target="_blank"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            Ver GitHub
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Contáctame
          </a>

        </div>
      </div>
    </section>
  );
}