
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';

const WorldSection: React.FC = () => {
  return (
    <Section id="world" className="bg-[#1a1315]">
      <SectionTitle>THE WORLD OF BATHALA</SectionTitle>
      <div className="space-y-6 text-lg leading-relaxed">
        <h3 className="font-dungeon text-3xl mb-4 uppercase">A Realm of Myth and Corruption</h3>
        <p>
          In the beginning, the divine union of Bathala and Amihan created the islands—a paradise where elemental spirits, the <em>anito</em>, lived in perfect balance. But this harmony was shattered. The <em>engkanto</em>, spirits of lies and illusion, have twisted the world, corrupting the noble guardians of nature and plunging the realm into chaos.
        </p>
        <p>
          A prophecy foretells of a hero who can master the sacred elemental deck and mend the fractured world. That hero is you.
        </p>
        <p>
          Your journey will take you across three distinct chapters:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong className="text-[#77888C]">Chapter 1: The Corrupted Ancestral Forests:</strong> Navigate once-sacred balete groves where trickster spirits like the Tikbalang now lead travelers astray and the mighty Kapre, once a guardian, burns the forest it used to protect.</li>
            <li><strong className="text-[#77888C]">Chapter 2: The Submerged Barangays:</strong> Explore drowned coastal settlements inspired by Visayan epics. Here, the healing waters of Tubig clash with the destructive force of Apoy, and the great Bakunawa threatens to devour the moon itself.</li>
            <li><strong className="text-[#77888C]">Chapter 3: The Skyward Citadel:</strong> Ascend to the celestial realm, a dreamlike court of gods and omens. Here, you must confront a false deity born of mythic betrayal and restore order to the heavens.</li>
        </ul>
      </div>
    </Section>
  );
};

export default WorldSection;
