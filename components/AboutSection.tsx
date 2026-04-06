
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

import chesterImage from "../assets/images/about/chester.png";
import clementImage from "../assets/images/about/clement.png";
import davidImage from "../assets/images/about/david.png";
import exequelImage from "../assets/images/about/exequel.png";

const TEAM = [
  { name: "Adizon, Exequel", role: "Developer", image: exequelImage },
  { name: "Cabus, Clement Harold Miguel", role: "Developer", image: clementImage },
  { name: "Magtajas, Chester", role: "Developer", image: chesterImage },
  { name: "Olimberio, David Christian", role: "Developer", image: davidImage },
];

const initialsFromName = (name: string) =>
  name
    .split(",")[0]
    .trim()
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <div className="container mx-auto max-w-4xl text-center">
        <SectionTitle
          title="THE TEAM"
          subtitle="BS Computer Science thesis project at the University of Makati"
        />

        <p className="text-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-body">
          <em>Bathala</em> was developed by <strong className="text-gold">Devlocke Studios</strong>,
          a passionate team of CS students dedicated to preserving Filipino cultural heritage
          through interactive media.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="relative overflow-hidden bg-gradient-to-b from-secondary/55 to-secondary/20 border border-gold/15 p-6 md:p-7 pixel-border transition-all duration-300 hover:border-gold/35 hover:-translate-y-1 group"
            >
              <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-gold/10 blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="w-28 h-28 mx-auto mb-6 rounded-full border-2 border-gold/40 flex flex-col items-center justify-center shadow-[0_0_20px_hsl(var(--gold)/0.15)] overflow-hidden relative group-hover:border-gold/80 transition-all duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gold/5 blur-xl group-hover:bg-gold/10 transition-colors" />
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105" />
                </div>

                <p className="font-display text-[12px] md:text-[13px] tracking-[0.12em] text-foreground leading-loose min-h-[40px]">
                  {member.name}
                </p>

                <div className="mt-2 pt-3 border-t border-gold/15 flex items-center justify-between">
                  <span className="font-display text-[10px] tracking-[0.2em] text-gold/70">
                    {member.role}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-gold/60 shadow-[0_0_10px_rgba(212,168,68,0.55)]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

