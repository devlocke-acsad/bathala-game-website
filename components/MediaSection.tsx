
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import bathalaTitle from '../assets/images/bathala_title.png';
import combat from '../assets/images/combat.png';
import overworld_map from '../assets/images/overworld_map.png';
import bathala_shop from '../assets/images/bathala_shop.png';
import combat_2 from '../assets/images/combat_2.png';

const MediaImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="aspect-video bg-[#000] border-2 border-[#77888C]/30">
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

const MediaSection: React.FC = () => {
  return (
    <Section id="media">
      <SectionTitle>MEDIA GALLERY</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MediaImage src={combat} alt="Combat scene showing a Full House" />
        <MediaImage src={overworld_map} alt="The overworld map at night" />
        <MediaImage src={bathala_shop} alt="The Mysterious Merchant's shop interface" />
        <MediaImage src={combat_2} alt="The final boss, the False Bathala" />
    <div className="sm:col-span-2">
      <MediaImage src={bathalaTitle} alt="The prologue storyboard" />
    </div>
      </div>
    </Section>
  );
};

export default MediaSection;
