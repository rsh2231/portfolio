import Link from "next/link";

export function Header() {
  return (
    <header className="px-4 md:px-6 lg:px-6 h-14 flex items-center w-full justify-center">
      <nav className="flex gap-6 sm:gap-8 text-lg font-medium">
        <Link
          className=" transition-colors hover:text-gray-400"
          href="#about"
        >
          About
        </Link>
        <Link
          className="transition-colors hover:text-gray-400"
          href="#skills"
        >
          Skills
        </Link>
        <Link
          className="transition-colors hover:text-gray-400"
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className="transition-colors hover:text-gray-400"
          href="#contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
