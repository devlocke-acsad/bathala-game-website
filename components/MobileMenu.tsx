
import React from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 bg-[#150E10] flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <button onClick={onClose} aria-label="Close menu" className="absolute top-7 right-6 text-[#77888C] hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <nav className="flex flex-col items-center space-y-8">
        {NAV_LINKS.map((link: NavLink) => (
          <a key={link.href} href={link.href} onClick={onClose} className="font-pixel text-4xl text-[#77888C] hover:text-white transition-colors">
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
