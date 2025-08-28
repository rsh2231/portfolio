import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skills = [

  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-gray-800 rounded-lg p-6 text-center flex flex-col items-center justify-center"
              >
                <div className="mb-2">
                  <Icon size={48} style={{ color: skill.color }} />
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
