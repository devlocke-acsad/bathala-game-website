
import React from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

interface MobileMenuProps {
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ activeSection, isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[#150E10]/95 backdrop-blur-md flex flex-col transition-all duration-300 md:hidden ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div className="noise-overlay" />
      <button onClick={onClose} aria-label="Close menu" className="absolute top-7 right-6 text-[#7C8D91] hover:text-[#A8B5B9] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
        {NAV_LINKS.map((link: NavLink) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`font-dungeon text-4xl uppercase tracking-[0.12em] transition-colors ${
              activeSection === link.href ? 'text-[#A8B5B9]' : 'text-[#6F8084] hover:text-[#96A5A9]'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
