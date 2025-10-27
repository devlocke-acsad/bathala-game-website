
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#150E10] border-t border-[#77888C]/20 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-6 mb-6">
          <a href="https://devlockestudios.itch.io/" className="font-dungeon text-lg text-[#77888C] hover:text-[#9CA3AF] uppercase">Itch.io</a>
          <a href="https://github.com/devlocke-acsad" className="font-dungeon text-lg text-[#77888C] hover:text-[#9CA3AF] uppercase">GitHub</a>
        </div>
        <p className="mb-2">Contact: devlockestudios@proton.me</p>
        <p className="text-sm">&copy; 2025 Devlocke Studios</p>
      </div>
    </footer>
  );
};

export default Footer;
