
import React from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-[#150E10]/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <nav className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link: NavLink) => (
            <a key={link.href} href={link.href} className="font-dungeon text-lg text-[#77888C] hover:text-[#9CA3AF] transition-colors uppercase">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden absolute right-6">
          <button onClick={onMenuToggle} aria-label="Open menu" className="text-[#77888C] hover:text-[#9CA3AF]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
