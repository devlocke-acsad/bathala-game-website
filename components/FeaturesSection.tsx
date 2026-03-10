import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';

const FEATURES = [
  {
    title: 'POKER COMBAT',
    desc: 'Combat is intuitive yet deep. Form poker hands — a Pair might be a simple jab, but a Full House or Straight Flush can unleash devastating power. Strategy is key.',
    icon: '🃏',
    detail: '5-card poker hands determine attack strength. Higher hands = more damage + special effects.',
    stat: '52',
    statLabel: 'CARDS IN DECK',
  },
  {
    title: 'ELEMENTAL SUITS',
    desc: 'Apoy (Fire), Tubig (Water), Lupa (Earth), and Hangin (Air), each with unique tactical advantages in combat.',
    icon: '🔥',
    detail: 'Each element has strengths and weaknesses. Build your deck around elemental synergies.',
    stat: '4',
    statLabel: 'ELEMENTS',
  },
  {
    title: 'DYNAMIC DIFFICULTY',
    desc: 'A system that learns how you play, subtly adjusting enemy strength and resources to keep you in a state of flow.',
    icon: '⚖️',
    detail: 'Player Performance Score (PPS) tracks 8 factors in real-time to calibrate the challenge.',
    stat: '8',
    statLabel: 'TRACKED FACTORS',
  },
  {
    title: 'PROCEDURAL GEN',
    desc: 'No two journeys are the same. A sophisticated system creates a unique overworld map for every run.',
    icon: '🗺️',
    detail: 'Delaunay triangulation + A* pathfinding create coherent, explorable maps every time.',
    stat: '∞',
    statLabel: 'UNIQUE MAPS',
  },
  {
    title: 'THE LANDAS SYSTEM',
    desc: 'Slay or Spare after each battle. Your alignment shapes your narrative journey and endings.',
    icon: '⚔️',
    detail: 'Three paths: Conquest, Balance, or Mercy — each unlocking unique story outcomes.',
    stat: '3',
    statLabel: 'PATHS',
  },
  {
    title: 'RELICS & POTIONS',
    desc: 'Equip up to six Agimat (Relics) — powerful passive items that fundamentally change your run.',
    icon: '💎',
    detail: 'Discover rare relics at shops and after bosses. Single-use potions for clutch moments.',
    stat: '6',
    statLabel: 'RELIC SLOTS',
  },
];

const FeaturesSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <SectionWrapper id="features">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle title="KEY FEATURES" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              className="relative bg-secondary/20 border border-gold/10 overflow-hidden pixel-border hover:border-gold/30 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="h-[2px] w-full gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">{feat.icon}</span>
                  <div className="text-right">
                    <span className="font-display text-lg text-gold/30 leading-none block">
                      {feat.stat}
                    </span>
                    <span className="font-display text-[5px] tracking-wider text-gold/40">
                      {feat.statLabel}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-[8px] tracking-wider text-foreground mb-3 group-hover:text-gold transition-colors leading-loose">
                  {feat.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {feat.desc}
                </p>

                <motion.div
                  initial={false}
                  animate={{
                    height: expanded === i ? 'auto' : 0,
                    opacity: expanded === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-gold/10">
                    <p className="font-display text-[6px] tracking-wider text-gold/50 mb-1">
                      ▸ HOW IT WORKS
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed font-body">
                      {feat.detail}
                    </p>
                  </div>
                </motion.div>

                <div className="mt-3 font-display text-[5px] tracking-wider text-gold/30 group-hover:text-gold/60 transition-colors">
                  {expanded === i ? '▲ COLLAPSE' : '▼ TAP FOR DETAILS'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeaturesSection;

