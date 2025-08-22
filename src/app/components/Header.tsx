export function Header() {
  return (
    <header className="px-4 md:px-6 lg:px-6 h-14 flex items-center w-full justify-center">
      <nav className="flex gap-6 sm:gap-8 text-lg font-medium">
        <a
          className=" transition-colors hover:text-gray-400"
          href="#about"
        >
          About
        </a>
        <a
          className="transition-colors hover:text-gray-400"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="transition-colors hover:text-gray-400"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="transition-colors hover:text-gray-400"
          href="#contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}