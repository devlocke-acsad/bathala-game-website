import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';

import amomongo from '@/assets/images/chapter1/amomongo_battle.png';
import balete from '@/assets/images/chapter1/balete_battle.png';
import bungisngis from '@/assets/images/chapter1/bungisngis_battle.png';
import duwende from '@/assets/images/chapter1/duwende_battle.png';
import kapre from '@/assets/images/chapter1/kapre_battle.png';
import mangangaway from '@/assets/images/chapter1/mangangaway_battle.png';
import sigbin from '@/assets/images/chapter1/sigbin_battle.png';
import tawongLipod from '@/assets/images/chapter1/tawonglipod_battle.png';
import tikbalang from '@/assets/images/chapter1/tikbalang_battle.png';
import tiyanak from '@/assets/images/chapter1/tiyanak_battle.png';

import apoyTubig from '@/assets/images/chapter2/apoy_tubig_battle.png';
import bakunawa from '@/assets/images/chapter2/bakunawa_battle.png';
import bangkilan from '@/assets/images/chapter2/bangkilan_battle.png';
import berbalang from '@/assets/images/chapter2/berbalang_battle.png';
import berberoka from '@/assets/images/chapter2/berberoka_battle.png';
import kataw from '@/assets/images/chapter2/kataw_battle.png';
import magindara from '@/assets/images/chapter2/magindara_battle.png';
import santelmo from '@/assets/images/chapter2/santelmo_battle.png';
import sirena from '@/assets/images/chapter2/sirena_battle.png';
import siyokoy from '@/assets/images/chapter2/siyokoy_battle.png';

import alan from '@/assets/images/chapter3/alan_battle.png';
import apolaki from '@/assets/images/chapter3/apolaki_battle.png';
import bulalakaw from '@/assets/images/chapter3/bulalakaw_battle.png';
import diwata from '@/assets/images/chapter3/diwata_battle.png';
import ekek from '@/assets/images/chapter3/ekek_battle.png';
import falseBathala from '@/assets/images/chapter3/false_bathala_battle.png';
import minokawa from '@/assets/images/chapter3/minokawa_battle.png';
import ribungLinti from '@/assets/images/chapter3/ribung_linti_battle.png';
import sarimanok from '@/assets/images/chapter3/sarimanok_battle.png';
import tigmanukan from '@/assets/images/chapter3/tigmanukan_battle.png';

interface Creature {
  name: string;
  role: string;
  element: string;
  desc: string;
  image: string;
  isBoss?: boolean;
}

interface Chapter {
  num: string;
  title: string;
  realm: string;
  threat: string;
  imageOverlay: string;
  detailOverlay: string;
  accentBorder: string;
  creatures: Creature[];
}

const CHAPTERS: Chapter[] = [
  {
    num: 'I',
    title: 'The Corrupted Ancestral Forests',
    realm: 'Verdant Domain',
    threat: 'Primal Corruption',
    imageOverlay: 'from-emerald-900/80 via-background/60 to-background/95',
    detailOverlay: 'from-emerald-500/20 to-emerald-900/10',
    accentBorder: 'border-emerald-500/30',
    creatures: [
      {
        name: 'Amomongo',
        role: 'Ape Stalker',
        element: 'LUPA',
        desc: 'A savage forest predator that lurks in the roots of cursed groves, striking isolated travelers before vanishing into the brush.',
        image: amomongo,
      },
      {
        name: 'Balete Wraith',
        role: 'Tree-Bound Haunt',
        element: 'HANGIN',
        desc: 'A ghostly spirit fused to ancient balete bark, draining warmth and will from those who step beneath its hanging branches.',
        image: balete,
      },
      {
        name: 'Bungisngis',
        role: 'Laughing Brute',
        element: 'LUPA',
        desc: 'A one-eyed giant with a booming cackle that echoes through the woodlands, smashing through trees in blind fury.',
        image: bungisngis,
      },
      {
        name: 'Duwende',
        role: 'Mound Caster',
        element: 'LUPA',
        desc: 'A spiteful earth spirit that curses trespassers with rot and misfortune from hidden mounds beneath tangled roots.',
        image: duwende,
      },
      {
        name: 'Kapre',
        role: 'Flame Warden',
        element: 'APOY',
        desc: 'A towering tree guardian wreathed in smoke and embers, now burning the very forest he once protected.',
        image: kapre,
        isBoss: true,
      },
      {
        name: 'Mangangaway',
        role: 'Night Hexer',
        element: 'HANGIN',
        desc: 'A drifting witch-like specter that whispers curses through fog, unraveling concentration with hallucinatory dread.',
        image: mangangaway,
      },
      {
        name: 'Sigbin',
        role: 'Dusk Prowler',
        element: 'LUPA',
        desc: 'A twisted nocturnal beast that hunts by scent, darting through undergrowth with unnerving, loping bursts of speed.',
        image: sigbin,
      },
      {
        name: 'Tawong Lipod',
        role: 'Veiled Guardian',
        element: 'HANGIN',
        desc: 'A pale, elusive protector of hidden routes in the forest that turns hostile when sacred places are defiled.',
        image: tawongLipod,
      },
      {
        name: 'Tikbalang',
        role: 'Path Corrupter',
        element: 'HANGIN',
        desc: 'A horse-headed trickster that twists roads and perception, luring intruders deeper into corrupted woodland territory.',
        image: tikbalang,
      },
      {
        name: 'Tiyanak',
        role: 'Lure Spawn',
        element: 'APOY',
        desc: 'A childlike fiend that feigns helplessness before unleashing feral violence under the cover of night.',
        image: tiyanak,
      },
    ],
  },
  {
    num: 'II',
    title: 'The Submerged Barangays',
    realm: 'Drowned Domain',
    threat: 'Abyssal Surge',
    imageOverlay: 'from-cyan-900/80 via-background/60 to-background/95',
    detailOverlay: 'from-cyan-500/20 to-cyan-900/10',
    accentBorder: 'border-cyan-500/30',
    creatures: [
      {
        name: 'Apoy-Tubig',
        role: 'Elemental Rift',
        element: 'APOY',
        desc: 'A volatile spirit born where flame and tide collide, surging between scorching bursts and crashing water strikes.',
        image: apoyTubig,
      },
      {
        name: 'Bakunawa',
        role: 'Moon Devourer',
        element: 'TUBIG',
        desc: 'A colossal sea serpent that rises from abyssal trenches to swallow moonlight and drown coasts in shadow.',
        image: bakunawa,
        isBoss: true,
      },
      {
        name: 'Bangkilan',
        role: 'Reef Skirmisher',
        element: 'TUBIG',
        desc: 'A swift reef-born raider that ambushes from kelp shadows, striking in packs before slipping back into the deep.',
        image: bangkilan,
      },
      {
        name: 'Berbalang',
        role: 'Flesh Seer',
        element: 'HANGIN',
        desc: 'A corpse-feeding horror with prophetic malice, lingering over battlefields and feeding on fear and ruin.',
        image: berbalang,
      },
      {
        name: 'Berberoka',
        role: 'Current Trapper',
        element: 'TUBIG',
        desc: 'A cunning marsh predator that manipulates flood and ebb to strand victims before dragging them below.',
        image: berberoka,
      },
      {
        name: 'Kataw',
        role: 'Abyssal Warrior',
        element: 'TUBIG',
        desc: 'A hardened deep-sea soldier wielding coral-forged weapons and commanding crushing pressure waves.',
        image: kataw,
      },
      {
        name: 'Magindara',
        role: 'Shoal Siren',
        element: 'TUBIG',
        desc: 'A guardian of hidden shoals whose songs can calm storms or drag entire crews toward jagged reefs.',
        image: magindara,
      },
      {
        name: 'Santelmo',
        role: 'Wandering Ember',
        element: 'APOY',
        desc: 'A drifting will-o\'wisp that dances over black water, igniting panic and leading ships into deadly waters.',
        image: santelmo,
      },
      {
        name: 'Sirena',
        role: 'Tide Enchantress',
        element: 'TUBIG',
        desc: 'A mesmerizing mermaid with a haunting song that lures sailors off course toward submerged ruins.',
        image: sirena,
      },
      {
        name: 'Siyokoy',
        role: 'Deep Marauder',
        element: 'TUBIG',
        desc: 'A heavily armored sea fiend that patrols drowned barangays and assaults anyone trespassing in its hunting grounds.',
        image: siyokoy,
      },
    ],
  },
  {
    num: 'III',
    title: 'The Skyward Citadel',
    realm: 'Celestial Domain',
    threat: 'Divine Fracture',
    imageOverlay: 'from-amber-900/80 via-background/60 to-background/95',
    detailOverlay: 'from-amber-500/20 to-amber-900/10',
    accentBorder: 'border-amber-500/30',
    creatures: [
      {
        name: 'Alan',
        role: 'Sky Weaver',
        element: 'HANGIN',
        desc: 'A cloud-haunting spirit that mends itself with stolen flesh and rides storm currents above the citadel.',
        image: alan,
      },
      {
        name: 'Apolaki',
        role: 'Sun Champion',
        element: 'APOY',
        desc: 'A radiant warrior of solar fire whose fallen oath now fuels relentless judgment on all challengers.',
        image: apolaki,
      },
      {
        name: 'Bulalakaw',
        role: 'Comet Reaper',
        element: 'HANGIN',
        desc: 'A celestial drake that streaks through the upper sky like a living meteor, scattering starlit debris.',
        image: bulalakaw,
      },
      {
        name: 'Diwata',
        role: 'Nature Spirit',
        element: 'LUPA',
        desc: 'An ethereal guardian spirit caught between the mortal wilds and the failing heavens.',
        image: diwata,
      },
      {
        name: 'Ekek',
        role: 'Carrion Herald',
        element: 'HANGIN',
        desc: 'A ravenous sky scavenger whose extended tongue and shrill cries signal omens of ruin.',
        image: ekek,
      },
      {
        name: 'False Bathala',
        role: 'Usurper God',
        element: 'HANGIN',
        desc: 'An impostor deity enthroned in stolen radiance, weaponizing corrupted divinity against the living world.',
        image: falseBathala,
        isBoss: true,
      },
      {
        name: 'Minokawa',
        role: 'Sun Eater',
        element: 'HANGIN',
        desc: 'A colossal cosmic bird whose wings eclipse the heavens, plunging the sky into apocalyptic twilight.',
        image: minokawa,
      },
      {
        name: 'Ribung Linti',
        role: 'Storm Ascendant',
        element: 'APOY',
        desc: 'A lightning-forged entity that channels violent thunder into concentrated strikes across floating ruins.',
        image: ribungLinti,
      },
      {
        name: 'Sarimanok',
        role: 'Omen Sovereign',
        element: 'HANGIN',
        desc: 'A regal bird of prophecy perched between fate and war, its cry heralding pivotal battles.',
        image: sarimanok,
      },
      {
        name: 'Tigmanukan',
        role: 'Fate Messenger',
        element: 'HANGIN',
        desc: 'A mythic skybird whose flight patterns foretell fortune or disaster to those daring the upper realm.',
        image: tigmanukan,
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

const CHAPTER_ACCENTS = [
  'from-emerald-500/20 via-emerald-500/5 to-transparent',
  'from-cyan-500/20 via-cyan-500/5 to-transparent',
  'from-amber-500/20 via-amber-500/5 to-transparent',
];

const CreaturesSection = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [selectedCreature, setSelectedCreature] = useState<Creature | null>(null);

  const chapter = CHAPTERS[activeChapter];
  const chapterBoss = chapter.creatures.find((creature) => creature.isBoss) ?? chapter.creatures[0];

  return (
    <SectionWrapper id="creatures" className="gradient-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute top-1/4 -left-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-20 -right-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--gold)/0.06),transparent_45%),radial-gradient(circle_at_85%_65%,hsl(var(--gold)/0.05),transparent_40%)]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-[1]">
        <SectionTitle
          title="CREATURES OF THE REALM"
          subtitle="Spirits, Gods & Monsters Across the Shattered Isles"
        />

        <div className="grid gap-3 mb-12 sm:grid-cols-3">
          {CHAPTERS.map((ch, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveChapter(i);
                setSelectedCreature(null);
              }}
              className={`group relative overflow-hidden text-left px-4 py-4 border transition-all duration-300 min-h-[108px] ${
                activeChapter === i
                  ? 'border-gold/60 bg-background/80 text-gold shadow-[0_0_30px_hsl(var(--gold)/0.18)]'
                  : 'border-gold/10 bg-background/50 text-muted-foreground hover:border-gold/30 hover:text-foreground'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${CHAPTER_ACCENTS[i]} ${activeChapter === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`} />
              <div className="relative z-[1]">
                <p className="font-display text-[10px] tracking-[0.26em] mb-1 text-gold/70">CHAPTER {ch.num}</p>
                <h3 className="font-display text-[13px] sm:text-[12px] lg:text-[13px] tracking-[0.16em] leading-tight mb-2">
                  {ch.realm.toUpperCase()}
                </h3>
                <p className="font-body text-xs sm:text-[11px] lg:text-xs text-foreground/70">{ch.threat}</p>
              </div>
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
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className={`mb-8 pixel-border border ${chapter.accentBorder} bg-background/70 backdrop-blur-sm overflow-hidden`}
            >
              <div className="grid md:grid-cols-[220px,1fr] gap-0">
                <div className={`relative min-h-[220px] bg-gradient-to-br ${chapter.detailOverlay}`}>
                  <img
                    src={chapterBoss.image}
                    alt={chapterBoss.name}
                    className="w-full h-full object-contain p-5"
                  />
                  <div className="absolute top-3 left-3 font-display text-[11px] tracking-[0.25em] px-2 py-1 border border-gold/50 bg-gold/20 text-gold-light">
                    CHAPTER BOSS
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <p className="font-display text-[11px] tracking-[0.3em] text-gold/60">BOSS ENCOUNTER</p>
                    <span className="font-display text-[10px] tracking-[0.22em] px-2 py-1 border border-gold/20 text-foreground/80">
                      {chapter.title.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-display text-[22px] tracking-wider text-gold mb-2">{chapterBoss.name.toUpperCase()}</h3>
                  <p className="font-display text-[12px] tracking-[0.2em] text-muted-foreground mb-3">{chapterBoss.role.toUpperCase()}</p>
                  <p className="font-body text-foreground/85 text-sm leading-relaxed max-w-2xl">{chapterBoss.desc}</p>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {chapter.creatures.map((creature, i) => (
                <motion.div
                  key={creature.name}
                  className={`group relative cursor-pointer pixel-border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
                    selectedCreature?.name === creature.name
                      ? `ring-2 ring-gold/50 ${chapter.accentBorder}`
                      : 'hover:border-gold/30'
                  } ${
                    creature.isBoss ? 'ring-1 ring-gold/35 shadow-[0_0_24px_hsl(var(--gold)/0.18)]' : ''
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  onClick={() =>
                    setSelectedCreature(
                      selectedCreature?.name === creature.name ? null : creature
                    )
                  }
                >
                  <div className="relative h-[370px] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${chapter.detailOverlay}`} />
                    <img
                      src={creature.image}
                      alt={creature.name}
                      className="relative z-[1] w-full h-full object-contain px-6 pt-6 pb-24 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${chapter.imageOverlay}`} />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/85 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--gold)/0.18),transparent_60%)]" />

                    <div className="absolute top-3 right-3">
                      <span className={`font-display text-[11px] tracking-[0.2em] px-2 py-1 border ${ELEMENT_COLORS[creature.element]}`}>
                        {creature.element}
                      </span>
                    </div>

                    {creature.isBoss && (
                      <div className="absolute top-3 left-3 font-display text-[10px] tracking-[0.22em] px-2 py-1 border border-gold/50 bg-gold/20 text-gold-light">
                        BOSS
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/75 backdrop-blur-md border-t border-gold/15 min-h-[96px] flex flex-col justify-end">
                      <p className="font-display text-[10px] tracking-[0.25em] text-gold/60 mb-1">
                        {creature.role.toUpperCase()}
                      </p>
                      <h3 className="font-display text-[15px] leading-tight tracking-wider text-foreground group-hover:text-gold transition-colors" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {creature.name.toUpperCase()}
                      </h3>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(120deg,transparent_20%,hsl(var(--gold)/0.14)_48%,transparent_75%)]" />
                  </div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {selectedCreature && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className={`relative pixel-border p-6 md:p-8 bg-background/80 backdrop-blur-sm border ${chapter.accentBorder} overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${chapter.detailOverlay} opacity-35`} />
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <img
                        src={selectedCreature.image}
                        alt={selectedCreature.name}
                        className="relative z-[1] w-24 h-24 md:w-32 md:h-32 object-contain pixel-border flex-shrink-0 bg-background/30"
                      />
                      <div className="relative z-[1] flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h4 className="font-display text-[18px] tracking-wider text-gold">
                            {selectedCreature.name.toUpperCase()}
                          </h4>
                          <span className={`font-display text-[11px] tracking-[0.2em] px-2 py-1 border ${ELEMENT_COLORS[selectedCreature.element]}`}>
                            {selectedCreature.element}
                          </span>
                        </div>
                        <p className="font-display text-[12px] tracking-[0.2em] text-muted-foreground mb-3">
                          {selectedCreature.role.toUpperCase()}
                        </p>
                        <p className="text-foreground/80 text-sm leading-relaxed font-body">
                          {selectedCreature.desc}
                        </p>

                        <div className="mt-4 pt-4 border-t border-gold/15 grid sm:grid-cols-3 gap-2">
                          <div className="bg-background/35 border border-gold/15 px-3 py-2">
                            <p className="font-display text-[10px] tracking-[0.22em] text-gold/65">DOMAIN</p>
                            <p className="font-body text-xs text-foreground/80 mt-1">{chapter.realm}</p>
                          </div>
                          <div className="bg-background/35 border border-gold/15 px-3 py-2">
                            <p className="font-display text-[10px] tracking-[0.22em] text-gold/65">THREAT</p>
                            <p className="font-body text-xs text-foreground/80 mt-1">{chapter.threat}</p>
                          </div>
                          <div className="bg-background/35 border border-gold/15 px-3 py-2">
                            <p className="font-display text-[10px] tracking-[0.22em] text-gold/65">ENCOUNTER TYPE</p>
                            <p className="font-body text-xs text-foreground/80 mt-1">
                              {selectedCreature.isBoss ? 'Boss Encounter' : 'Field Encounter'}
                            </p>
                          </div>
                        </div>
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
