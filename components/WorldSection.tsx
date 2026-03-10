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
    enemies: ['Tikbalang', 'Kapre', 'Nuno sa Punso'],
  },
  {
    num: 'II',
    title: 'The Submerged Barangays',
    desc: 'Explore drowned coastal settlements inspired by Visayan epics. The healing waters of Tubig clash with destructive Apoy, and the Bakunawa threatens to devour the moon.',
    image: chapterOcean,
    color: 'from-cyan-900/80',
    enemies: ['Bakunawa', 'Sirena', 'Kataw'],
  },
  {
    num: 'III',
    title: 'The Skyward Citadel',
    desc: 'Ascend to the celestial realm, a dreamlike court of gods and omens. Confront a false deity born of mythic betrayal and restore order to the heavens.',
    image: chapterSky,
    color: 'from-amber-900/80',
    enemies: ['False Bathala', 'Diwata', 'Celestial Engkanto'],
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
              className="relative group overflow-hidden pixel-border cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={ch.image}
                  alt={ch.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${ch.color} via-background/60 to-background/90`} />

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div>
                    <span className="font-display text-[28px] text-gold/20 leading-none">
                      {ch.num}
                    </span>
                  </div>

                  <div>
                    <span className="font-display text-[7px] tracking-[0.3em] text-gold/60 block mb-2">
                      CHAPTER {ch.num}
                    </span>
                    <h3 className="font-display text-[9px] text-foreground tracking-wider leading-loose mb-3 group-hover:text-gold transition-colors">
                      {ch.title.toUpperCase()}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-body mb-4">
                      {ch.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {ch.enemies.map((enemy) => (
                        <span
                          key={enemy}
                          className="font-display text-[5px] tracking-wider px-2 py-1 bg-background/50 border border-gold/15 text-gold/60"
                        >
                          {enemy.toUpperCase()}
                        </span>
                      ))}
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

