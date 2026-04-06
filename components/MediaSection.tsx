
import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Play } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import combatImg from "@/assets/images/combat.png";
import overworldImg from "@/assets/images/overworld_map.png";
import overworldGif from "@/assets/videos/overworld.gif";
import combatGif from "@/assets/videos/combat.gif";
import titleGif from "@/assets/videos/title.gif";
import combatShowcase from "@/assets/images/showcase/COMBAT.gif";
import overworldShowcase from "@/assets/images/showcase/OVERWORLD.gif";
import bossBattleShowcase from "@/assets/images/showcase/BOSS BATTLE.gif";
import storyShowcase from "@/assets/images/showcase/STORY.gif";

const GALLERY = [
  {
    src: combatShowcase,
    alt: "Combat encounter against Sigbin Charger",
    caption: "Poker-based combat encounters where every card play can turn the tide",
    tag: "COMBAT",
  },
  {
    src: overworldShowcase,
    alt: "Chapter 1 overworld in the Enchanted Forest",
    caption: "Explore Chapter 1 and route through hazards before the boss cycle completes",
    tag: "OVERWORLD",
  },
  {
    src: bossBattleShowcase,
    alt: "Bakunawa boss battle sequence",
    caption: "Boss fight sequences with dramatic transitions and escalating pressure",
    tag: "BOSS FIGHT",
  },
  {
    src: storyShowcase,
    alt: "Chapter 2 scene in the Submerged Barangays",
    caption: "Story-driven chapter progression across distinct biomes and atmospheres",
    tag: "STORY",
  },
  {
    src: combatImg,
    alt: "Combat scene showing a Full House",
    caption: "Poker-based combat - play a Full House for devastating damage",
    tag: "COMBAT",
  },
  {
    src: overworldImg,
    alt: "The overworld map at night",
    caption: "Procedurally generated overworld map under the night sky",
    tag: "OVERWORLD",
  },
  {
    src: overworldGif,
    alt: "The Mysterious Merchant's shop interface",
    caption: "Visit the Mysterious Merchant to upgrade your deck",
    tag: "GAMEPLAY",
  },
  {
    src: combatGif,
    alt: "The final boss, the False Bathala",
    caption: "Face the False Bathala in an epic final confrontation",
    tag: "BOSS FIGHT",
  },
  {
    src: titleGif,
    alt: "The prologue storyboard",
    caption: "The origin story told through hand-crafted storyboards",
    tag: "STORY",
  },
];

const MediaSection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const filteredGallery = filter
    ? GALLERY.filter((g) => g.tag === filter)
    : GALLERY;

  const allTags = [...new Set(GALLERY.map((g) => g.tag))];

  const navigate = useCallback((dir: -1 | 1) => {
    setLightbox((prev) => {
      if (prev === null) return null;
      const next = prev + dir;
      if (next < 0) return GALLERY.length - 1;
      if (next >= GALLERY.length) return 0;
      return next;
    });
  }, []);

  useEffect(() => {
    if (lightbox !== null && lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [lightbox]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "Escape") setLightbox(null);
    },
    [navigate]
  );

  return (
    <SectionWrapper id="media">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle
          title="MEDIA GALLERY"
          subtitle="Screenshots, gameplay footage, and more from the world of Bathala"
        />

        {/* Featured playable embed */}
        <div className="mb-12">
          <div className="relative group">
            <div className="absolute -inset-[1px] gradient-gold opacity-20 group-hover:opacity-30 transition-opacity blur-sm" />
            <div className="relative w-full aspect-video border-2 border-gold/30 overflow-hidden bg-background pixel-border">
              <iframe
                src="https://play.bathala.quest/"
                className="w-full h-full"
                title="Play Bathala"
                allowFullScreen
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-4">
            <Play className="w-3 h-3 text-gold/60" />
            <p className="font-display text-[12px] tracking-[0.2em] text-gold/60">
              PLAY BATHALA ON WEB
            </p>
          </div>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter(null)}
            className={`font-display text-[12px] tracking-wider px-3 py-1.5 border transition-all duration-200 ${
              filter === null
                ? "border-gold/50 text-gold bg-gold/10"
                : "border-gold/15 text-muted-foreground hover:text-foreground hover:border-gold/30"
            }`}
          >
            ALL
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(filter === tag ? null : tag)}
              className={`font-display text-[12px] tracking-wider px-3 py-1.5 border transition-all duration-200 ${
                filter === tag
                  ? "border-gold/50 text-gold bg-gold/10"
                  : "border-gold/15 text-muted-foreground hover:text-foreground hover:border-gold/30"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((img) => {
              const globalIndex = GALLERY.indexOf(img);
              const isGif =
                typeof img.src === "string" && img.src.endsWith(".gif");
              return (
                <motion.div
                  key={img.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`relative overflow-hidden border border-gold/10 cursor-pointer group pixel-border ${
                    !filter && globalIndex === 0
                      ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                      : ""
                  }`}
                  onClick={() => setLightbox(globalIndex)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover min-h-[200px] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Tag badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-display text-[11px] tracking-[0.2em] px-2 py-1 bg-background/80 border border-gold/20 text-gold">
                      {img.tag}
                    </span>
                  </div>

                  {isGif && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="font-display text-[11px] tracking-wider px-2 py-1 bg-gold/90 text-primary-foreground">
                        GIF
                      </span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <p className="font-display text-[12px] tracking-wider text-gold leading-loose mb-2">
                      {img.caption}
                    </p>
                    <div className="flex items-center gap-1 text-gold/60">
                      <Maximize2 className="w-3 h-3" />
                      <span className="font-display text-[11px] tracking-wider">
                        CLICK TO EXPAND
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            ref={lightboxRef}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
          >
            <button
              className="absolute top-6 right-6 p-2 bg-secondary/80 border border-gold/20 text-foreground hover:text-gold transition-colors pixel-border z-10"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-secondary/80 border border-gold/20 text-foreground hover:text-gold hover:border-gold/40 transition-colors pixel-border z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-secondary/80 border border-gold/20 text-foreground hover:text-gold hover:border-gold/40 transition-colors pixel-border z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            >
              <img
                src={GALLERY[lightbox].src}
                alt={GALLERY[lightbox].alt}
                className="max-w-full max-h-[70vh] object-contain"
              />
              <div className="text-center mt-6 space-y-2">
                <span className="font-display text-[11px] tracking-[0.3em] px-3 py-1 border border-gold/20 text-gold/60">
                  {GALLERY[lightbox].tag}
                </span>
                <p className="font-display text-[13px] tracking-wider text-gold leading-loose">
                  {GALLERY[lightbox].caption}
                </p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  {GALLERY.map((g, i) => (
                    <button
                      key={i}
                      onClick={() => setLightbox(i)}
                      className={`w-12 h-8 overflow-hidden border transition-all ${
                        i === lightbox
                          ? "border-gold opacity-100 scale-110"
                          : "border-gold/20 opacity-40 hover:opacity-70"
                      }`}
                    >
                      <img
                        src={g.src}
                        alt={g.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default MediaSection;

