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
        <div className="flex flex-col gap-12 mb-20">
          {CHAPTERS.map((ch, i) => (
            <motion.div
              key={i}
              className="relative group overflow-hidden cursor-default shadow-[0_15px_50px_rgba(0,0,0,0.4)] rounded-sm border border-white/10 w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.2, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} min-h-[450px] bg-background/40 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-shadow duration-500`}>
                
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative min-h-[300px] overflow-hidden">
                  <img
                    src={ch.image}
                    alt={ch.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter saturate-[0.85] contrast-[1.1] group-hover:saturate-100 group-hover:contrast-125 opacity-80 group-hover:opacity-100"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${ch.color} mix-blend-multiply opacity-60 pointer-events-none`} />
                  {/* Fade into the content side */}
                  <div className={`absolute inset-0 bg-gradient-to-${i % 2 !== 0 ? 'l' : 'r'} from-background via-background/20 to-transparent opacity-90 md:block hidden pointer-events-none`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 md:hidden pointer-events-none" />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col relative bg-background md:bg-transparent justify-center">

                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <span className="font-display text-[12px] tracking-[0.4em] text-gold font-bold">
                      CHAPTER {ch.num}
                    </span>
                    <div className="h-px bg-gold/30 flex-1 max-w-[100px]" />
                  </div>
                  
                  <h3 className="font-display text-[28px] md:text-[32px] text-foreground tracking-widest leading-tight mb-6 group-hover:text-gold transition-colors drop-shadow-md relative z-10">
                    {ch.title.toUpperCase()}
                  </h3>
                  
                  <p className="text-foreground/90 text-base leading-relaxed font-body mb-8 border-l-2 border-gold/40 pl-5 relative z-10">
                    {ch.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pointer-events-auto relative z-10">
                    <div className="bg-background/80 border border-gold/30 p-4 rounded-sm shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                      <p className="font-display text-[10px] tracking-[0.3em] text-gold/80 mb-2 font-bold">FINAL BOSS</p>
                      <span className="inline-block font-display text-[14px] tracking-[0.25em] px-4 py-2 bg-gold/20 border border-gold/50 text-gold-light shadow-[0_0_15px_hsl(var(--gold)/0.4)] rounded-sm">
                        {ch.boss.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 flex-1">
                      {ch.enemies
                        .filter((enemy) => enemy !== ch.boss)
                        .slice(0, 4)
                        .map((enemy) => (
                        <span
                          key={enemy}
                          className="font-display text-[10px] tracking-widest px-2.5 py-1 bg-background/60 border border-white/10 text-foreground/80 hover:border-gold/30 transition-colors rounded-sm"
                        >
                          {enemy.toUpperCase()}
                        </span>
                      ))}
                      {ch.enemies.length > 5 && (
                        <span className="font-display text-[10px] tracking-widest px-2.5 py-1 bg-gold/10 border border-gold/30 text-gold shadow-sm rounded-sm">
                          +{Math.max(ch.enemies.length - 5, 0)} MORE
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/40 transition-colors duration-500 z-20 pointer-events-none rounded-sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WorldSection;

