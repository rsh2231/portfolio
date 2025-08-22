import Image from "next/image";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          My Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
          <div className="bg-gray-800 rounded-lg p-6 text-center flex flex-col items-center justify-center">
            <Image
              src="/images/skills/javascript.png"
              alt="JavaScript"
              width={48}
              height={48}
              className="mb-2"
            />
            <h3 className="text-xl font-bold">JavaScript</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center flex flex-col items-center justify-center">
            <Image
              src="/images/skills/react.png"
              alt="React"
              width={48}
              height={48}
              className="mb-2"
            />
            <h3 className="text-xl font-bold">React</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center flex flex-col items-center justify-center">
            <Image
              src="/images/skills/nextjs.png"
              alt="Next.js"
              width={48}
              height={48}
              className="mb-2"
            />
            <h3 className="text-xl font-bold">Next.js</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center flex flex-col items-center justify-center">
            <Image
              src="/images/skills/tailwindcss.png"
              alt="Tailwind CSS"
              width={48}
              height={48}
              className="mb-2"
            />
            <h3 className="text-xl font-bold">Tailwind CSS</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center flex flex-col items-center justify-center">
            <Image
              src="/images/skills/html5.png"
              alt="HTML5"
              width={48}
              height={48}
              className="mb-2"
            />
            <h3 className="text-xl font-bold">HTML5</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center flex flex-col items-center justify-center">
            <Image
              src="/images/skills/css3.png"
              alt="CSS3"
              width={48}
              height={48}
              className="mb-2"
            />
            <h3 className="text-xl font-bold">CSS3</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center flex flex-col items-center justify-center">
            <Image
              src="/images/skills/git.png"
              alt="Git"
              width={48}
              height={48}
              className="mb-2"
            />
            <h3 className="text-xl font-bold">Git</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center flex flex-col items-center justify-center">
            <Image
              src="/images/skills/nodejs.png"
              alt="Node.js"
              width={48}
              height={48}
              className="mb-2"
            />
            <h3 className="text-xl font-bold">Node.js</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
