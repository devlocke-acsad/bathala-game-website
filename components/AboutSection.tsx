
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="bg-[#1a1315]">
      <SectionTitle>ABOUT THE TEAM</SectionTitle>
      <div className="text-center text-lg leading-relaxed max-w-3xl mx-auto">
        <p className="mb-6">
          *Bathala* was developed as a Bachelor of Science in Computer Science thesis project at the University of Makati by:
        </p>
        <ul className="font-pixel text-2xl space-y-2 mb-8 text-white">
          <li>Adizon, Exequel</li>
          <li>Cabus, Clement Harold Miguel</li>
          <li>Magtajas, Chester</li>
          <li>Olimberio, David Christian</li>
        </ul>
        <p>
          We were advised and inspired by mythology experts <strong className="text-white">Mr. Nitten Nair (CEO of Mythlok)</strong> and <strong className="text-white">Sir Alymer of Y Realm Studios</strong>, whose guidance was invaluable in ensuring the respectful and authentic representation of Filipino culture.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
