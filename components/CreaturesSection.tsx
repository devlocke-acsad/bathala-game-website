import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';

import amomongo from '@/assets/images/discover/chapter1/amomongo_almanac.png';
import balete from '@/assets/images/discover/chapter1/balete_almanac.png';
import bungisngis from '@/assets/images/discover/chapter1/bungisngis_almanac.png';
import duwende from '@/assets/images/discover/chapter1/duwindi_almanac.png';
import kapre from '@/assets/images/discover/chapter1/kapre_almanac.png';
import mangangaway from '@/assets/images/discover/chapter1/mangangaway_almanac.png';
import sigbin from '@/assets/images/discover/chapter1/sigbin_almanac bg.png';
import tawongLipod from '@/assets/images/discover/chapter1/tawonglipod_almanac.png';
import tikbalang from '@/assets/images/discover/chapter1/tikbalang_almanac.png';
import tiyanak from '@/assets/images/discover/chapter1/tiyanak_almanac.png';

import apoyTubig from '@/assets/images/discover/chapter2/apoy_tubig_splash.png';
import bakunawa from '@/assets/images/discover/chapter2/bakunawa_splash.png';
import bangkilan from '@/assets/images/discover/chapter2/sunken_bangkilan_splash.png';
import berbalang from '@/assets/images/discover/chapter2/berbalang_splash.png';
import berberoka from '@/assets/images/discover/chapter2/berberoka_splash.png';
import kataw from '@/assets/images/discover/chapter2/kataw_splash.png';
import magindara from '@/assets/images/discover/chapter2/maginda_swarm_splash.png';
import santelmo from '@/assets/images/discover/chapter2/santelmo_splash.png';
import sirena from '@/assets/images/discover/chapter2/sirena_splash.png';
import siyokoy from '@/assets/images/discover/chapter2/siyokoy_splash.png';

import alan from '@/assets/images/discover/chapter3/alan_splash.png';
import apolaki from '@/assets/images/discover/chapter3/apolaki_splash.png';
import bulalakaw from '@/assets/images/discover/chapter3/bulalakaw_flamekeeper_splash.png';
import diwata from '@/assets/images/discover/chapter3/diwata_sentinel_splash.png';
import ekek from '@/assets/images/discover/chapter3/ekek_splash.png';
import falseBathala from '@/assets/images/discover/chapter3/false_bathala_splash.png';
import minokawa from '@/assets/images/discover/chapter3/minokawa_harbinger_splash.png';
import ribungLinti from '@/assets/images/discover/chapter3/ribung_linti_splash.png';
import sarimanok from '@/assets/images/discover/chapter3/sarimanok_watcher_splash.png';
import tigmanukan from '@/assets/images/discover/chapter3/tigamamanukan_watcher_splash.png';

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

        <div className="grid gap-4 mb-16 sm:grid-cols-3 relative">
          {CHAPTERS.map((ch, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveChapter(i);
                setSelectedCreature(null);
              }}
              className={`group relative overflow-hidden text-left px-6 py-6 border-2 transition-all duration-500 min-h-[140px] ${
                activeChapter === i
                  ? 'border-gold/80 bg-background/90 text-gold shadow-[0_0_40px_hsl(var(--gold)/0.25)] scale-105 z-10'
                  : 'border-gold/20 bg-background/60 text-muted-foreground hover:border-gold/50 hover:text-foreground hover:bg-background/80 hover:shadow-[0_0_20px_hsl(var(--gold)/0.15)]'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${CHAPTER_ACCENTS[i]} ${activeChapter === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`} />
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${CHAPTER_ACCENTS[i]} opacity-50 blur-2xl transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700`} />
              
              <div className="relative z-[1] flex flex-col h-full justify-between">
                <div>
                  <p className="font-display text-[12px] tracking-[0.4em] mb-2 text-gold/80 font-bold drop-shadow-sm">CHAPTER {ch.num}</p>
                  <h3 className="font-display text-[16px] sm:text-[14px] lg:text-[18px] tracking-[0.2em] leading-tight mb-3 drop-shadow-md">
                    {ch.realm.toUpperCase()}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${activeChapter === i ? 'bg-gold' : 'bg-gold/40'}`} />
                  <p className="font-body text-sm text-foreground/80 font-medium">{ch.threat}</p>
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent transform ${activeChapter === i ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} transition-all duration-500 origin-left`} />
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {chapter.creatures
                .filter((creature) => !creature.isBoss)
                .map((creature, i) => (
                <motion.div
                  key={creature.name}
                  className={`group relative cursor-pointer overflow-hidden rounded-sm border transition-all duration-500 hover:-translate-y-2 ${
                    selectedCreature?.name === creature.name
                      ? `ring-2 ring-gold/70 ${chapter.accentBorder} shadow-[0_0_40px_hsl(var(--gold)/0.2)]`
                      : 'border-white/10 hover:border-gold/50 shadow-lg hover:shadow-[0_0_20px_hsl(var(--gold)/0.15)]'
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() =>
                    setSelectedCreature(
                      selectedCreature?.name === creature.name ? null : creature
                    )
                  }
                >
                  <div className="relative h-[480px] overflow-hidden bg-background">
                    <div className={`absolute inset-0 bg-gradient-to-br ${chapter.detailOverlay} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />
                    <img
                      src={creature.image}
                      alt={creature.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${chapter.imageOverlay} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--gold)/0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-3 right-3 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <span className={`font-display text-[11px] tracking-[0.2em] px-2 py-1 border ${ELEMENT_COLORS[creature.element]} bg-background/50 backdrop-blur-sm`}>
                        {creature.element}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 min-h-[110px] flex flex-col justify-end z-10">
                      <p className="font-display text-[10px] tracking-[0.25em] text-gold/80 mb-1 drop-shadow-md">
                        {creature.role.toUpperCase()}
                      </p>
                      <h3 className="font-display text-[18px] leading-tight tracking-widest text-foreground group-hover:text-gold transition-colors drop-shadow-lg" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {creature.name.toUpperCase()}
                      </h3>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(120deg,transparent_20%,hsl(var(--gold)/0.1)_48%,transparent_75%)] pointer-events-none z-20" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className={`mb-10 rounded-sm border-2 ${chapter.accentBorder} bg-background/80 backdrop-blur-md overflow-hidden shadow-[0_0_30px_hsl(var(--gold)/0.1)]`}
            >
              <div className="grid md:grid-cols-[300px,1fr] lg:grid-cols-[400px,1fr] gap-0 h-full">
                <div className={`relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-gradient-to-br ${chapter.detailOverlay} flex items-center justify-center p-8 border-r border-gold/10 overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10" />
                  <img
                    src={chapterBoss.image}
                    alt={chapterBoss.name}
                    className="absolute inset-0 w-full h-full object-cover border border-white/5 opacity-100 transition-transform duration-1000 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 font-display text-[12px] tracking-[0.3em] px-3 py-1.5 border border-gold/60 bg-gold/20 backdrop-blur-sm text-gold-light shadow-[0_0_20px_hsl(var(--gold)/0.4)] z-20">
                    CHAPTER BOSS
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col justify-center relative bg-background/50">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <p className="font-display text-[12px] tracking-[0.4em] text-gold/80 font-bold">BOSS ENCOUNTER</p>
                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full" />
                    <span className="font-display text-[11px] tracking-[0.3em] px-3 py-1 border border-gold/30 bg-background/50 text-foreground/90">
                      {chapter.title.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-display text-[32px] md:text-[40px] tracking-widest text-gold mb-3 drop-shadow-lg">{chapterBoss.name.toUpperCase()}</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <p className="font-display text-[14px] tracking-[0.3em] text-muted-foreground bg-background/40 px-3 py-1 border border-white/5">{chapterBoss.role.toUpperCase()}</p>
                    <span className={`font-display text-[12px] tracking-[0.2em] px-3 py-1 border ${ELEMENT_COLORS[chapterBoss.element]} bg-background/40`}>
                      {chapterBoss.element}
                    </span>
                  </div>
                  <p className="font-body text-foreground/90 text-base md:text-lg leading-relaxed max-w-3xl drop-shadow-md">{chapterBoss.desc}</p>
                </div>
              </div>
            </motion.div>

            <AnimatePresence>
              {selectedCreature && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    onClick={() => setSelectedCreature(null)}
                  />
                  
                  <motion.div
                    key={selectedCreature.name}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-sm z-10 custom-scrollbar"
                  >
                    <div className={`relative border p-8 md:p-12 bg-background/95 backdrop-blur-xl border-2 ${chapter.accentBorder} shadow-[0_0_50px_hsl(var(--gold)/0.15)]`}>
                      <button 
                        onClick={() => setSelectedCreature(null)}
                        className="absolute top-4 right-4 text-gold/60 hover:text-gold p-2 bg-background/50 border border-gold/20 rounded-sm transition-colors z-30 shadow-md hover:bg-background/80 cursor-pointer"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>

                      <div className={`absolute inset-0 bg-gradient-to-br ${chapter.detailOverlay} opacity-50 pointer-events-none`} />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.1),transparent_50%)] pointer-events-none" />
                      
                      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
                        <div className="relative group perspective-1000 w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-sm blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
                          <img
                            src={selectedCreature.image}
                            alt={selectedCreature.name}
                            className="relative z-[1] w-full h-full object-cover rounded-sm bg-background/40 backdrop-blur-sm p-4 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:rotate-2 hover:scale-105 border border-gold/20"
                          />
                        </div>
                        <div className="flex-1 w-full">
                          <div className="flex items-center gap-4 mb-4 flex-wrap pr-12">
                            <h4 className="font-display text-[32px] md:text-[40px] tracking-widest text-gold drop-shadow-md">
                              {selectedCreature.name.toUpperCase()}
                            </h4>
                            <span className={`font-display text-[12px] tracking-[0.3em] px-3 py-1.5 border ${ELEMENT_COLORS[selectedCreature.element]} bg-background/50 shadow-sm`}>
                              {selectedCreature.element}
                            </span>
                          </div>
                          <p className="font-display text-[14px] tracking-[0.3em] text-muted-foreground mb-6 bg-background/30 inline-block px-4 py-1.5 border border-white/5">
                            {selectedCreature.role.toUpperCase()}
                          </p>
                          <p className="text-foreground/90 text-base md:text-lg leading-relaxed font-body mb-8 max-w-4xl drop-shadow-sm">
                            {selectedCreature.desc}
                          </p>


                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default CreaturesSection;
