import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';

import tikbalang from '@/assets/images/creature-tikbalang.png';
import kapre from '@/assets/images/creature-kapre.png';
import nuno from '@/assets/images/creature-nuno.png';
import bakunawa from '@/assets/images/creature-bakunawa.png';
import sirena from '@/assets/images/creature-sirena.png';
import kataw from '@/assets/images/creature-kataw.png';
import falseBathala from '@/assets/images/creature-false-bathala.png';
import diwata from '@/assets/images/creature-diwata.png';
import engkanto from '@/assets/images/creature-engkanto.png';

interface Creature {
  name: string;
  role: string;
  element: string;
  desc: string;
  image: string;
}

interface Chapter {
  num: string;
  title: string;
  color: string;
  accentBorder: string;
  creatures: Creature[];
}

const CHAPTERS: Chapter[] = [
  {
    num: 'I',
    title: 'The Corrupted Ancestral Forests',
    color: 'from-emerald-500/20 to-emerald-900/5',
    accentBorder: 'border-emerald-500/30',
    creatures: [
      {
        name: 'Tikbalang',
        role: 'Trickster Guardian',
        element: 'LUPA',
        desc: 'A towering horse-headed spirit that leads travelers astray in the enchanted forests. Once a noble protector, now corrupted by the engkanto\'s deceit.',
        image: tikbalang,
      },
      {
        name: 'Kapre',
        role: 'Flame Warden',
        element: 'APOY',
        desc: 'A giant tree-dweller wreathed in smoke and embers. His burning cigar sets ablaze the very forests he once swore to protect.',
        image: kapre,
      },
      {
        name: 'Nuno sa Punso',
        role: 'Curse Weaver',
        element: 'LUPA',
        desc: 'A diminutive earth spirit of terrible wrath. Disturb his mound and suffer curses that wither body and soul alike.',
        image: nuno,
      },
    ],
  },
  {
    num: 'II',
    title: 'The Submerged Barangays',
    color: 'from-cyan-500/20 to-cyan-900/5',
    accentBorder: 'border-cyan-500/30',
    creatures: [
      {
        name: 'Bakunawa',
        role: 'Moon Devourer',
        element: 'TUBIG',
        desc: 'A colossal sea serpent that rises from the abyss to swallow the moon. Its hunger threatens to plunge the world into eternal darkness.',
        image: bakunawa,
      },
      {
        name: 'Sirena',
        role: 'Tide Enchantress',
        element: 'TUBIG',
        desc: 'A mesmerizing mermaid whose haunting song lures sailors to the depths. Beautiful and deadly, she guards sunken Visayan treasures.',
        image: sirena,
      },
      {
        name: 'Kataw',
        role: 'Abyssal Warrior',
        element: 'TUBIG',
        desc: 'A fierce merman warrior of the deep coral kingdoms. Armed with a living trident of bone and coral, he commands the ocean currents.',
        image: kataw,
      },
    ],
  },
  {
    num: 'III',
    title: 'The Skyward Citadel',
    color: 'from-amber-500/20 to-amber-900/5',
    accentBorder: 'border-amber-500/30',
    creatures: [
      {
        name: 'False Bathala',
        role: 'Usurper God',
        element: 'HANGIN',
        desc: 'An impostor deity wearing a cracked golden mask. Born from mythic betrayal, it sits upon a stolen celestial throne radiating corrupted divinity.',
        image: falseBathala,
      },
      {
        name: 'Diwata',
        role: 'Nature Spirit',
        element: 'LUPA',
        desc: 'An ethereal nature goddess torn between worlds. Her butterfly wings shimmer with fading magic as the celestial corruption spreads.',
        image: diwata,
      },
      {
        name: 'Celestial Engkanto',
        role: 'Archdeceiver',
        element: 'HANGIN',
        desc: 'The most dangerous of trickster fae — a being of pure illusion dwelling in the heavens. Its radiant beauty conceals an ancient malice.',
        image: engkanto,
      },
    ],
  },
];

const ELEMENT_COLORS: Record<string, string> = {
  LUPA: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  APOY: 'bg-red-500/20 text-red-400 border-red-500/30',
  TUBIG: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  HANGIN: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
};

const CreaturesSection = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [selectedCreature, setSelectedCreature] = useState<Creature | null>(null);

  const chapter = CHAPTERS[activeChapter];

  return (
    <SectionWrapper id="creatures" className="gradient-section">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle
          title="CREATURES OF THE REALM"
          subtitle="Spirits, Gods & Monsters Across the Shattered Isles"
        />

        {/* Chapter tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {CHAPTERS.map((ch, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveChapter(i);
                setSelectedCreature(null);
              }}
              className={`font-display text-[8px] tracking-[0.2em] px-5 py-3 border transition-all duration-300 ${
                activeChapter === i
                  ? 'border-gold/60 bg-gold/10 text-gold'
                  : 'border-gold/10 bg-background/50 text-muted-foreground hover:border-gold/30 hover:text-foreground'
              }`}
            >
              CHAPTER {ch.num} — {ch.title.toUpperCase()}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Creature grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {chapter.creatures.map((creature, i) => (
                <motion.div
                  key={creature.name}
                  className={`group relative cursor-pointer pixel-border overflow-hidden transition-all duration-300 ${
                    selectedCreature?.name === creature.name
                      ? `ring-2 ring-gold/50 ${chapter.accentBorder}`
                      : 'hover:border-gold/30'
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  onClick={() =>
                    setSelectedCreature(
                      selectedCreature?.name === creature.name ? null : creature
                    )
                  }
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={creature.image}
                      alt={creature.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${chapter.color} via-transparent to-transparent opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                    <div className="absolute top-3 right-3">
                      <span className={`font-display text-[6px] tracking-[0.2em] px-2 py-1 border ${ELEMENT_COLORS[creature.element]}`}>
                        {creature.element}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="font-display text-[6px] tracking-[0.25em] text-gold/50 mb-1">
                        {creature.role.toUpperCase()}
                      </p>
                      <h3 className="font-display text-[11px] tracking-wider text-foreground group-hover:text-gold transition-colors">
                        {creature.name.toUpperCase()}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected creature detail panel */}
            <AnimatePresence>
              {selectedCreature && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`pixel-border p-6 md:p-8 bg-background/80 backdrop-blur-sm border ${chapter.accentBorder}`}>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <img
                        src={selectedCreature.image}
                        alt={selectedCreature.name}
                        className="w-24 h-24 md:w-32 md:h-32 object-cover pixel-border flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h4 className="font-display text-[12px] tracking-wider text-gold">
                            {selectedCreature.name.toUpperCase()}
                          </h4>
                          <span className={`font-display text-[6px] tracking-[0.2em] px-2 py-1 border ${ELEMENT_COLORS[selectedCreature.element]}`}>
                            {selectedCreature.element}
                          </span>
                        </div>
                        <p className="font-display text-[7px] tracking-[0.2em] text-muted-foreground mb-3">
                          {selectedCreature.role.toUpperCase()}
                        </p>
                        <p className="text-foreground/80 text-sm leading-relaxed font-body">
                          {selectedCreature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default CreaturesSection;
