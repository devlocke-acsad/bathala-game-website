import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="bg-[linear-gradient(180deg,rgba(26,19,21,0.92),rgba(22,16,18,0.9))]">
      <SectionTitle>About The Team</SectionTitle>
      <div className="text-center text-lg leading-relaxed max-w-3xl mx-auto surface-panel-soft rounded-2xl p-6 md:p-8 text-[#7C8C91]">
        <p className="mb-6">
          <em>Bathala</em> was developed as a Bachelor of Science in Computer Science thesis project at the University of Makati by:
        </p>
        <ul className="font-dungeon text-2xl space-y-2 mb-8 text-[#92A3A8] uppercase tracking-[0.08em]">
          <li>Adizon, Exequel</li>
          <li>Cabus, Clement Harold Miguel</li>
          <li>Magtajas, Chester</li>
          <li>Olimberio, David Christian</li>
        </ul>
        <p>
          We were advised and inspired by mythology experts <strong className="text-[#95A6AB]">Mr. Nitten Nair (CEO of Mythlok)</strong> and{' '}
          <strong className="text-[#95A6AB]">Sir A of Y Realm Studios</strong>, whose guidance was invaluable in ensuring the respectful and
          authentic representation of Filipino culture.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
