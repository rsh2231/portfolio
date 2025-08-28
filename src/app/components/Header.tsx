"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900">
      <div className="px-4 md:px-6 lg:px-6 w-10/12 h-14 flex items-center justify-between mx-auto cursor-pointer">
        <a
          className="text-lg font-medium transition-colors hover:text-gray-400"
          href="#"
        >
          S.H.RYU
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-6 sm:gap-8 text-lg font-medium">
          <a className="transition-colors hover:text-gray-400" href="#">About</a>
          <a className="transition-colors hover:text-gray-400" href="#skills">Skills</a>
          <a className="transition-colors hover:text-gray-400" href="#projects">Projects</a>
          <a className="transition-colors hover:text-gray-400" href="#contact">Contact</a>
        </nav>

        {/* Mobile Nav Button */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-900">
          <nav className="flex flex-col items-center gap-4 py-4 text-lg font-medium">
            <a href="#" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}