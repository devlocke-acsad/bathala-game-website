
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/bathala-game/1920/1080')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center text-[#77888C] p-4">
        <h1 className="font-pixel text-7xl md:text-9xl tracking-widest mb-4">
          BATHALA
        </h1>
        <p className="font-pixel text-xl md:text-2xl mb-2">
          Mend the Shattered Balance.
        </p>
        <p className="max-w-2xl mx-auto text-base md:text-lg mb-8">
          Wield divine power in a Filipino mythology-inspired roguelike where poker meets ancient spirits. Can you restore what was broken?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="font-pixel text-xl border-2 border-[#77888C] px-8 py-3 hover:bg-[#77888C] hover:text-[#150E10] transition-colors duration-300">
            Play Now
          </a>
          <a href="#game" className="font-pixel text-xl border-2 border-[#77888C] px-8 py-3 hover:bg-[#77888C] hover:text-[#150E10] transition-colors duration-300">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
