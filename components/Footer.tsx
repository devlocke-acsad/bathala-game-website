import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#150E10] border-t border-[#77888C]/20 py-12 px-6 relative">
      <div className="noise-overlay" />
      <div className="max-w-4xl mx-auto text-center relative z-10 text-[#74858A]">
        <div className="flex justify-center items-center space-x-6 mb-6">
          <a href="https://devlockestudios.itch.io/" className="font-dungeon text-lg text-[#7E8E93] hover:text-[#A0AFB3] transition-colors uppercase">
            Itch.io
          </a>
          <a href="https://github.com/devlocke-acsad" className="font-dungeon text-lg text-[#7E8E93] hover:text-[#A0AFB3] transition-colors uppercase">
            GitHub
          </a>
        </div>
        <p className="mb-2">Contact: devlockestudios@proton.me</p>
        <p className="text-sm">&copy; 2025 Devlocke Studios</p>
      </div>
    </footer>
  );
};

export default Footer;
