import { SiMysql, SiHtml5, SiCss } from "react-icons/si";
import { FaJava, FaPython, FaGitAlt } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "SQL", icon: <SiMysql /> },
  ];

  return (
    <section className="py-20 px-6 bg-linear-to-b from-gray-950 to-black  text-white">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-sm hover:scale-105 hover:bg-white hover:text-black transition"
            >
              <span className="text-lg">{skill.icon}</span>
              {skill.name}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}