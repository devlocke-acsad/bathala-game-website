
import { motion } from "framer-motion";
import { useState } from "react";
import { Scroll, ChartBar, Microscope } from "@phosphor-icons/react";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const PILLARS = [
  {
    num: "01",
    title: "CULTURAL PRESERVATION",
    subtitle: "Interactive Mythology Museum",
    icon: Scroll,
    goal: "To design a game as a medium for cultural preservation and education, revitalizing indigenous narratives for a modern audience.",
    impl: "Extensive research, cultural expert consultation, and careful translation of mythological themes into design, art, and narrative.",
    highlights: ["Filipino Mythology", "Cultural Education", "Heritage Revival"],
    color: "border-l-amber-500/60",
  },
  {
    num: "02",
    title: "DYNAMIC DIFFICULTY",
    subtitle: "Rule-Based Adaptive System",
    icon: ChartBar,
    goal: "How can a rule-based adaptive difficulty system maintain a state of 'flow' for players of varying skill levels?",
    impl: "A transparent, rule-based approach driven by a Player Performance Score (PPS) from eight weighted performance factors mapping to difficulty tiers.",
    highlights: ["Player Flow", "8 Performance Factors", "Adaptive Tiers"],
    color: "border-l-cyan-500/60",
  },
  {
    num: "03",
    title: "PROCEDURAL GENERATION",
    subtitle: "Delaunay-Inspired Framework",
    icon: Microscope,
    goal: "To ensure high replayability through novel PCG for overworld maps using graph-based corridor generation.",
    impl: "A seven-stage pipeline using Delaunay triangulation and A* pathfinding, validated against connectivity, dead-end ratio, and generation time.",
    highlights: ["7-Stage Pipeline", "Delaunay + A*", "Infinite Replayability"],
    color: "border-l-emerald-500/60",
  },
];

const ThesisSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = PILLARS[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <SectionWrapper id="thesis" className="gradient-section">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle
          title="CORE RESEARCH"
          subtitle="Three pillars addressing game design, engagement, and cultural heritage"
        />

        {/* Tab-style pillar selector */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          {PILLARS.map((p, i) => {
            const PillarIcon = p.icon;
            return (
            <button
              key={p.num}
              onClick={() => setActiveIndex(i)}
              className={`flex-1 text-left p-5 border transition-all duration-300 pixel-border ${
                activeIndex === i
                  ? "border-gold/40 bg-gold/5"
                  : "border-gold/10 bg-card/30 hover:border-gold/20"
              }`}
            >
              <div className="flex items-center gap-3">
                <PillarIcon size={20} className="text-gold" />
                <div>
                  <span className="font-display text-[11px] tracking-wider text-gold/50 block">
                    PILLAR {p.num}
                  </span>
                  <span
                    className={`font-display text-[13px] tracking-wider transition-colors ${
                      activeIndex === i ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {p.title}
                  </span>
                </div>
              </div>
            </button>
            );
          })}
        </div>

        {/* Active pillar detail */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`bg-card/50 border border-gold/15 p-8 md:p-10 pixel-border border-l-4 ${active.color}`}
        >
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left — main content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <ActiveIcon size={24} className="text-gold" />
                <div>
                  <h3 className="font-display text-[15px] md:text-sm text-foreground tracking-wider leading-loose">
                    {active.title}
                  </h3>
                  <p className="font-display text-[12px] text-gold/50 tracking-wider">
                    {active.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-5 mt-6 font-body">
                <div>
                  <span className="font-display text-[12px] tracking-[0.2em] text-gold block mb-2">
                    ◆ RESEARCH GOAL
                  </span>
                  <p className="text-foreground leading-relaxed text-base">
                    {active.goal}
                  </p>
                </div>
                <div>
                  <span className="font-display text-[12px] tracking-[0.2em] text-gold block mb-2">
                    ◆ METHODOLOGY
                  </span>
                  <p className="text-muted-foreground leading-relaxed">
                    {active.impl}
                  </p>
                </div>
              </div>
            </div>

            {/* Right — key terms */}
            <div className="md:w-48 flex flex-wrap md:flex-col gap-2">
              <span className="font-display text-[11px] tracking-[0.3em] text-gold/40 mb-1 hidden md:block">
                KEY AREAS
              </span>
              {active.highlights.map((h) => (
                <div
                  key={h}
                  className="px-3 py-2 bg-gold/5 border border-gold/15 text-center flex-1 min-w-0 md:flex-none"
                >
                  <span className="font-display text-[10px] md:text-[11px] tracking-wider text-gold/70 break-words whitespace-normal">
                    {h.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ThesisSection;

