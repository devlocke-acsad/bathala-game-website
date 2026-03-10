
import React from 'react';
import bathalaHero from '../assets/images/bathala_hero.png';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bathalaHero})` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(170deg,rgba(17,12,13,0.84),rgba(20,15,16,0.72))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(119,136,140,0.2),transparent_45%)]" />
      <div className="noise-overlay" />

      <div className="relative z-10 text-center text-[#77888C] p-4">
        <h1 className="font-pixel text-7xl md:text-[12rem] lg:text-[14rem] xl:text-[16rem] text-[#B8C4C8] tracking-tight mb-4 leading-[0.9]">
          bathala
        </h1>
        <p className="font-dungeon text-xl md:text-2xl mb-2 uppercase text-[#9AA9AD]">
          Mend the Shattered Balance.
        </p>
        <p className="font-satoshi max-w-2xl mx-auto text-base md:text-lg text-[#87969A] mb-8">
          Wield divine power in a Filipino mythology-inspired roguelike where poker meets ancient spirits. Can you restore what was broken?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://play.bathala.quest" className="button-primary text-xl rounded-full px-8 py-3 w-full sm:w-auto">
            Play Now
          </a>
          <a href="#game" className="button-secondary text-xl rounded-full px-8 py-3 w-full sm:w-auto">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
