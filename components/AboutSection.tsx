
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import avatarAdizon from "@/assets/images/avatar-adizon.png";
import avatarCabus from "@/assets/images/avatar-cabus.png";
import avatarMagtajas from "@/assets/images/avatar-magtajas.png";
import avatarOlimberio from "@/assets/images/avatar-olimberio.png";

const TEAM = [
  { name: "Adizon, Exequel", role: "Developer", avatar: avatarAdizon },
  { name: "Cabus, Clement Harold Miguel", role: "Developer", avatar: avatarCabus },
  { name: "Magtajas, Chester", role: "Developer", avatar: avatarMagtajas },
  { name: "Olimberio, David Christian", role: "Developer", avatar: avatarOlimberio },
];

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-secondary/30 border border-gold/10 p-6 pixel-border hover:border-gold/25 transition-colors group"
            >
              <div className="w-20 h-20 mx-auto mb-4 border-2 border-gold/20 overflow-hidden bg-secondary/50 group-hover:border-gold/40 transition-colors">
                <img
                  src={member.avatar}
                  alt={`Pixel art portrait of ${member.name}`}
                  className="w-full h-full object-cover"
                  style={{ imageRendering: "auto" }}
                />
              </div>
              <p className="font-display text-[12px] tracking-wider text-foreground leading-loose">
                {member.name}
              </p>
              <p className="font-display text-[11px] tracking-wider text-gold/50 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;

