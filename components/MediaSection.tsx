
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';

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
        <MediaImage src="https://picsum.photos/seed/bathala1/800/450" alt="Combat scene showing a Full House" />
        <MediaImage src="https://picsum.photos/seed/bathala2/800/450" alt="The overworld map at night" />
        <MediaImage src="https://picsum.photos/seed/bathala3/800/450" alt="The Mysterious Merchant's shop interface" />
        <MediaImage src="https://picsum.photos/seed/bathala4/800/450" alt="The final boss, the False Bathala" />
        <div className="sm:col-span-2">
            <MediaImage src="https://picsum.photos/seed/bathala5/1600/900" alt="The prologue storyboard" />
        </div>
      </div>
    </Section>
  );
};

export default MediaSection;
