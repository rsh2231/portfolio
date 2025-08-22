export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
          My Skills
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold">JavaScript</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold">React</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold">Next.js</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold">Tailwind CSS</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold">HTML5</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold">CSS3</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold">Git</h3>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold">Node.js</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
