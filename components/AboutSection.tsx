
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

const TEAM = [
  { name: "Adizon, Exequel", role: "Developer" },
  { name: "Cabus, Clement Harold Miguel", role: "Developer" },
  { name: "Magtajas, Chester", role: "Developer" },
  { name: "Olimberio, David Christian", role: "Developer" },
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
                <div className="w-12 h-12 mb-5 border border-gold/35 bg-background/40 text-gold flex items-center justify-center font-display text-sm tracking-[0.2em]">
                  {initialsFromName(member.name)}
                </div>

                <p className="font-display text-[12px] md:text-[13px] tracking-[0.12em] text-foreground leading-loose min-h-[64px]">
                  {member.name}
                </p>

                <div className="mt-4 pt-3 border-t border-gold/15 flex items-center justify-between">
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

