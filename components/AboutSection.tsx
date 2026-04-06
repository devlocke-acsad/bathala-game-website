
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
                <div className="w-full h-48 mb-5 rounded-sm border border-gold/30 bg-background/50 flex flex-col items-center justify-center shadow-inner overflow-hidden relative group-hover:border-gold/50 transition-colors">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,68,0.05),transparent_70%)]" />
                  <svg className="w-12 h-12 text-gold/30 mb-2 group-hover:text-gold/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span className="font-display text-[10px] tracking-widest text-gold/40 group-hover:text-gold/60 transition-colors">IMAGE PENDING</span>
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

