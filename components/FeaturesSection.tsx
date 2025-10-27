import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';

const FeatureCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="border border-[#77888C]/30 p-6">
    <h4 className="font-dungeon text-2xl mb-3 text-[#77888C] uppercase">{title}</h4>
    <p className="leading-relaxed">{children}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  return (
    <Section id="features">
      <SectionTitle>KEY FEATURES</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FIX: Wrapped content inside FeatureCard to pass it as children prop. */}
        <FeatureCard title="Strategic Poker-Based Combat">
          Combat in <em>Bathala</em> is intuitive yet deep. You don't just play cards; you form poker hands. A <strong>Pair</strong> might be a simple jab, but a <strong>Full House</strong> or a <strong>Straight Flush</strong> can unleash devastating power. Strategy is key as you decide whether to play a safe hand now or hold out for a game-changing combination.
        </FeatureCard>
        {/* FIX: Wrapped content inside FeatureCard to pass it as children prop. */}
        <FeatureCard title="The Four Elemental Suits">
          The standard card suits are replaced with four elemental forces from Filipino folklore:
          <strong>Apoy (Fire)</strong>, <strong>Tubig (Water)</strong>, <strong>Lupa (Earth)</strong>, and <strong>Hangin (Air)</strong>, each with unique tactical advantages.
        </FeatureCard>
        {/* FIX: Wrapped content inside FeatureCard to pass it as children prop. */}
        <FeatureCard title="A Challenge That Adapts to You (DDA)">
          <em>Bathala</em> features a Dynamic Difficulty Adjustment system that learns from how you play. It subtly adjusts enemy strength and resource availability to ensure the challenge is always fair and engaging, keeping you in a state of "flow".
        </FeatureCard>
        {/* FIX: Wrapped content inside FeatureCard to pass it as children prop. */}
        <FeatureCard title="Endless Worlds with Procedural Generation (PCG)">
          No two journeys are the same. <em>Bathala</em> uses a sophisticated procedural generation system to create a unique overworld map for every run, ensuring infinite replayability and strategic variety.
        </FeatureCard>
        {/* FIX: Wrapped content inside FeatureCard to pass it as children prop. */}
        <FeatureCard title="The Landás System: A Narrative Choice">
          After each battle, choose to <strong>Slay</strong> for material gain or <strong>Spare</strong> for mercy. Your alignment—Conquest, Balance, or Mercy—is independent of difficulty and purely shapes your narrative journey, influencing story outcomes and your ultimate ending.
        </FeatureCard>
        {/* FIX: Wrapped content inside FeatureCard to pass it as children prop. */}
        <FeatureCard title="Powerful Relics & Potions">
          Discover and equip up to six <strong>Agimat (Relics)</strong>—powerful passive items that fundamentally change your run. Use single-use potions for a timely heal, a defensive boost, or to inflict elemental damage.
        </FeatureCard>
      </div>
    </Section>
  );
};

export default FeaturesSection;
