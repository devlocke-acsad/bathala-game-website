
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#150E10] border-t border-[#77888C]/20 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-6 mb-6">
          <a href="#" className="font-pixel text-lg text-[#77888C] hover:text-white">Itch.io</a>
          <a href="#" className="font-pixel text-lg text-[#77888C] hover:text-white">GitHub</a>
          <a href="#" className="font-pixel text-lg text-[#77888C] hover:text-white">Thesis PDF</a>
        </div>
        <p className="mb-2">Contact: team.bathala@email.com</p>
        <p className="text-sm">&copy; 2025 Bathala Team</p>
      </div>
    </footer>
  );
};

export default Footer;
