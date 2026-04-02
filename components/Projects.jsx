import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="min-h-screen bg-linear-to-b from-gray-900 to-gray-950 text-white px-6 py-20">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Proyectos
      </h2>

      <div className="flex flex-wrap justify-center gap-8">

        <ProjectCard
          title="Juego de Ciberseguridad"
          description="Proyecto colaborativo desarrollado en Java, con contribuciones al front-end y parte del backend.
          Incluye mecánicas educativas sobre phishing, spoofing y ciberadicción. Artículo publicado en la revista OnBoard Knowledge Journal, 2025"
          tech="Java"
          link="https://github.com/pjosed/ProyectoFinalPoo"
          image="/images/Proyecto1.png"
        />

        <ProjectCard
          title="Sistema de Grafos Uninorte"
          description="Visualización de la ruta más corta entre dos puntos dentro del campus universitario utilizando algoritmos de grafos"
          tech="Python, NetworkX, Matplotlib"
          link="https://github.com/pjosed/ProyectoAplicacionesGrafos"
          image="/images/Proyecto2.png"

        />

        <ProjectCard
          title="Supermercado La Estrella — Inventory Management System"
          description="Proyecto colaborativo de sistema completo de gestión de inventario y proveedores con contribuciones al front-end y parte del backend.
           Diseñado para el flujo real de un supermercado: productos, proveedores, entregas, reposiciones y control total desde una GUI."
          link="https://github.com/pjosed/LabEDD"
          image="/images/Proyecto3.png"

        />

        <ProjectCard
          title="Rappi List"
          description="Proyecto colaborativo de desarrollo de una aplicación de un restaurante para usuarios y administradores con contribuciones al front-end  backend.
          Permite a los usuarios ver el menú de los restaurantes y realizar pedidos, mientras que los administradores pueden gestionar el inventario"
          link="https://github.com/pjosed/EDD2"
          image="/images/Proyecto4.png"

        />

        <ProjectCard
          title="Unitravesia"
          description="Juego divertido creado de manera colaborativa inspirado en la travesía diaria de los estudiantes de la Universidad del Norte, con contribuciones al front-end y backend."
          link="https://github.com/pjosed/Unitravesia"
          image="/images/Proyecto5.png"

        />

        <ProjectCard
          title="Portafolio Web Profesional"
          description="Portafolio web profesional creado con React, Tailwind y Node.js. 
          Incluye integración de proyectos personales y colaborativos, estructuración de componentes y estilizado visual moderno, 
          mostrando capacidad para organizar y presentar proyectos de manera profesional."
          link="https://github.com/pjosed/Portafolio"
          image="/images/Proyecto6.png"

        />

      </div>

    </section>
  );
}