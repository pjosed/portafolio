export default function ProjectCard({ title, description, tech, link, image }) {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden max-w-sm transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">

      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          {title}
        </h3>

        <p className="text-gray-400 mb-4">
          {description}
        </p>

        <p className="text-sm text-gray-500 mb-4">
          {tech}
        </p>

        <a
          href={link}
          target="_blank"
          className="text-white font-semibold hover:underline"
        >
          Ver proyecto →
        </a>
      </div>
    </div>
  );
}