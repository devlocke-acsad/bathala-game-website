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

        <div className="grid md:grid-cols-3 gap-6">
          {CHAPTERS.map((ch, i) => (
            <motion.div
              key={i}
              className="relative group overflow-hidden pixel-border cursor-default h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="relative h-[560px] overflow-hidden">
                <img
                  src={ch.image}
                  alt={ch.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/45" />
                <div className={`absolute inset-0 bg-gradient-to-t ${ch.color} via-background/70 to-background/95`} />
                <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,hsl(var(--gold)/0.12),transparent_65%)]" />

                <div className="absolute inset-0 flex flex-col p-6">
                  <div>
                    <span className="font-display text-[32px] text-gold/20 leading-none">
                      {ch.num}
                    </span>
                  </div>

                  <div className="mt-auto bg-background/75 backdrop-blur-md border border-gold/20 p-4 shadow-[0_8px_30px_hsl(0_0%_0%/0.35)]">
                    <span className="font-display text-[12px] tracking-[0.3em] text-gold/60 block mb-2">
                      CHAPTER {ch.num}
                    </span>
                    <h3 className="font-display text-[14px] text-foreground tracking-wider leading-loose mb-3 group-hover:text-gold transition-colors">
                      {ch.title.toUpperCase()}
                    </h3>
                    <p className="text-foreground/85 text-sm leading-relaxed font-body mb-4 min-h-[7.75rem]" style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {ch.desc}
                    </p>

                    <div className="mb-3">
                      <p className="font-display text-[10px] tracking-[0.25em] text-gold/60 mb-1">FINAL BOSS</p>
                      <span className="inline-block font-display text-[11px] tracking-[0.2em] px-2 py-1 bg-gold/15 border border-gold/40 text-gold-light">
                        {ch.boss.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {ch.enemies
                        .filter((enemy) => enemy !== ch.boss)
                        .slice(0, 2)
                        .map((enemy) => (
                        <span
                          key={enemy}
                          className="font-display text-[10px] tracking-wider px-2 py-1 bg-background/50 border border-gold/15 text-gold/60"
                        >
                          {enemy.toUpperCase()}
                        </span>
                      ))}
                      {ch.enemies.length > 4 && (
                        <span className="font-display text-[10px] tracking-wider px-2 py-1 bg-background/50 border border-gold/15 text-gold/60">
                          +{Math.max(ch.enemies.length - 4, 0)} MORE
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WorldSection;

