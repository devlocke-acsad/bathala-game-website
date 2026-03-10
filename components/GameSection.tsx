import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';

const GameSection = () => {
  return (
    <SectionWrapper id="game">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle
          title="THE GAME"
          subtitle="A roguelike deck-builder steeped in Filipino mythology"
        />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-display text-[15px] text-gold tracking-wider mb-4 leading-loose">
              WHAT IS BATHALA?
            </h3>
            <p className="text-foreground text-lg leading-relaxed mb-4 font-body">
              <em>Bathala</em> is a single-player, deck-building roguelike set in a world steeped in
              Filipino mythology. The core of the game revolves around a unique{' '}
              <strong className="text-gold">poker-based combat system</strong>. You are the
              Babaylan, a spiritual leader tasked with a divine quest: to journey through corrupted
              lands and restore cosmic harmony.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              Each run challenges you to survive a procedurally generated world, where every
              encounter and every choice matters.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'BUILD YOUR HAND',
                desc: 'Draw from a 52-card deck and form powerful poker hands to attack, defend, and unleash special abilities.',
                icon: '♠',
              },
              {
                title: 'SCULPT YOUR DECK',
                desc: 'Purify (remove), Attune (upgrade), and Infuse (add) cards, strategically shaping your deck to suit your playstyle.',
                icon: '♦',
              },
              {
                title: 'SURVIVE THE CYCLE',
                desc: 'Journey through a world that shifts between day and night. Survive five full cycles to confront the chapter\'s final boss.',
                icon: '♣',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-gold/30 pl-6">
                <h4 className="font-display text-[13px] tracking-wider text-gold mb-2 leading-loose">
                  <span className="mr-2">{item.icon}</span>{item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary/50 border border-gold/10 p-8 md:p-12 pixel-border">
          <h3 className="font-display text-[15px] text-gold tracking-wider mb-4 leading-loose">
            A MISSION OF CULTURAL REVIVAL
          </h3>
          <p className="text-foreground text-lg leading-relaxed font-body">
            Beyond its complex mechanics, <em>Bathala</em> was created to address the
            underrepresentation of Filipino mythology in the global gaming landscape. Our mission is
            to revitalize indigenous narratives through interactive media, transforming passive
            learning into participatory cultural appreciation.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GameSection;

