import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import chapterForest from '@/assets/images/chapter-forest.jpg';
import chapterOcean from '@/assets/images/chapter-ocean.jpg';
import chapterSky from '@/assets/images/chapter-sky.jpg';

const CHAPTERS = [
  {
    num: 'I',
    title: 'The Corrupted Ancestral Forests',
    desc: 'Navigate once-sacred balete groves where trickster spirits like the Tikbalang now lead travelers astray and the mighty Kapre burns the forest it used to protect.',
    image: chapterForest,
    color: 'from-emerald-900/80',
    boss: 'Kapre',
    enemies: ['Amomongo', 'Balete Wraith', 'Bungisngis', 'Duwende', 'Kapre', 'Mangangaway', 'Sigbin', 'Tawong Lipod', 'Tikbalang', 'Tiyanak'],
  },
  {
    num: 'II',
    title: 'The Submerged Barangays',
    desc: 'Explore drowned coastal settlements inspired by Visayan epics. The healing waters of Tubig clash with destructive Apoy, and the Bakunawa threatens to devour the moon.',
    image: chapterOcean,
    color: 'from-cyan-900/80',
    boss: 'Bakunawa',
    enemies: ['Apoy-Tubig', 'Bakunawa', 'Bangkilan', 'Berbalang', 'Berberoka', 'Kataw', 'Magindara', 'Santelmo', 'Sirena', 'Siyokoy'],
  },
  {
    num: 'III',
    title: 'The Skyward Citadel',
    desc: 'Ascend to the celestial realm, a dreamlike court of gods and omens. Confront a false deity born of mythic betrayal and restore order to the heavens.',
    image: chapterSky,
    color: 'from-amber-900/80',
    boss: 'False Bathala',
    enemies: ['Alan', 'Apolaki', 'Bulalakaw', 'Diwata', 'Ekek', 'False Bathala', 'Minokawa', 'Ribung Linti', 'Sarimanok', 'Tigmanukan'],
  },
];

const WorldSection = () => {
  return (
    <SectionWrapper id="world" className="gradient-section">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle
          title="THE WORLD"
          subtitle="A Realm of Myth and Corruption"
        />

        <p className="text-center text-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-16 font-body">
          In the beginning, the divine union of Bathala and Amihan created the islands—a paradise
          where elemental spirits, the <em>anito</em>, lived in perfect balance. But this harmony
          was shattered. The <em>engkanto</em>, spirits of lies and illusion, have twisted the world.
          A prophecy foretells of a hero who can master the sacred elemental deck. That hero is you.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {CHAPTERS.map((ch, i) => (
            <motion.div
              key={i}
              className={`relative group overflow-hidden cursor-default h-full shadow-[0_15px_50px_rgba(0,0,0,0.4)] rounded-sm border border-white/10 ${
                i === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.2, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative h-[680px] overflow-hidden bg-background/40 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-shadow duration-500 rounded-sm pixel-border-none">
                  <img
                    src={ch.image}
                    alt={ch.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter saturate-[0.85] contrast-[1.1] group-hover:saturate-100 group-hover:contrast-125 mix-blend-overlay pointer-events-none opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-background/40 transition-opacity duration-700 group-hover:opacity-10 pointer-events-none" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${ch.color} via-background/80 to-background/95 opacity-90 pointer-events-none mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-transparent opacity-50 pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,hsl(var(--gold)/0.15),transparent_70%)] pointer-events-none mix-blend-screen opacity-70" />

                <div className="absolute inset-0 flex flex-col p-6 relative z-10 pointer-events-none">
                  <div className="flex justify-between items-start mb-auto">
                    <span className="font-display text-[64px] text-gold/30 leading-none font-bold drop-shadow-lg group-hover:text-gold/50 transition-colors duration-500">
                      {ch.num}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-gold/30 bg-background/50 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_hsl(var(--gold)/0.2)]">
                      <div className="w-8 h-8 rounded-full border border-gold/50 bg-gold/10" />
                    </div>
                  </div>

                  <div className="bg-background/90 backdrop-blur-xl border border-gold/40 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.8)] transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 rounded-sm pointer-events-auto mt-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-display text-[12px] tracking-[0.4em] text-gold font-bold">
                        CHAPTER {ch.num}
                      </span>
                      <div className="h-px bg-gold/30 flex-1" />
                    </div>
                    <h3 className="font-display text-[20px] text-foreground tracking-widest leading-tight mb-4 group-hover:text-gold transition-colors drop-shadow-md">
                      {ch.title.toUpperCase()}
                    </h3>
                    <p className="text-foreground/90 text-sm leading-relaxed font-body mb-6 min-h-[8rem] border-l-2 border-gold/40 pl-4" style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {ch.desc}
                    </p>

                    <div className="bg-background/80 border border-gold/30 p-4 mb-5 rounded-sm pointer-events-auto">
                      <p className="font-display text-[10px] tracking-[0.3em] text-gold/80 mb-2 font-bold">FINAL BOSS</p>
                      <span className="inline-block font-display text-[14px] tracking-[0.25em] px-4 py-2 bg-gold/20 border border-gold/50 text-gold-light shadow-[0_0_15px_hsl(var(--gold)/0.4)] rounded-sm">
                        {ch.boss.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-5 pointer-events-auto">
                      {ch.enemies
                        .filter((enemy) => enemy !== ch.boss)
                        .slice(0, 3)
                        .map((enemy) => (
                        <span
                          key={enemy}
                          className="font-display text-[10px] tracking-widest px-2.5 py-1 bg-background/60 border border-white/10 text-foreground/80 hover:border-gold/30 transition-colors"
                        >
                          {enemy.toUpperCase()}
                        </span>
                      ))}
                      {ch.enemies.length > 4 && (
                        <span className="font-display text-[10px] tracking-widest px-2.5 py-1 bg-gold/10 border border-gold/30 text-gold shadow-sm">
                          +{Math.max(ch.enemies.length - 4, 0)} MORE
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-colors duration-500 z-20 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WorldSection;

