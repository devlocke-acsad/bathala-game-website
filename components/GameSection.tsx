
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';

const GameSection: React.FC = () => {
  return (
    <Section id="game">
      <SectionTitle>THE GAME</SectionTitle>
      <div className="space-y-12 text-lg leading-relaxed">
        <div>
          <h3 className="font-pixel text-3xl mb-4">What is Bathala?</h3>
          <p className="mb-4">
            *Bathala* is a single-player, deck-building roguelike set in a world steeped in Filipino mythology. The core of the game revolves around a unique **poker-based combat system**. You are the Babaylan, a spiritual leader tasked with a divine quest: to journey through corrupted lands and restore cosmic harmony.
          </p>
          <p className="mb-4">
            Each run challenges you to survive a procedurally generated world, where every encounter and every choice matters. You will:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong className="text-white">BUILD YOUR HAND:</strong> Draw from a 52-card deck and form powerful poker hands to attack, defend, and unleash special abilities.</li>
            <li><strong className="text-white">SCULPT YOUR DECK:</strong> At campfires and shops, you can **Purify** (remove), **Attune** (upgrade), and **Infuse** (add) cards, strategically shaping your deck to suit your playstyle.</li>
            <li><strong className="text-white">SURVIVE THE CYCLE:</strong> Journey through a world that shifts between day and night. Actions advance the clock, with the day offering safer passage and the night bringing more aggressive and dangerous foes. Survive five full cycles to confront the chapter's final boss.</li>
          </ul>
          <p className="mt-4 italic">
            *Bathala* is a game of strategy, adaptation, and cultural discovery, designed to be endlessly replayable.
          </p>
        </div>
        <div>
          <h3 className="font-pixel text-3xl mb-4">A Mission of Cultural Revival</h3>
          <p className="mb-4">
            Beyond its complex mechanics, *Bathala* was created to address the underrepresentation of Filipino mythology in the global gaming landscape. While many games draw from Western and Japanese folklore, the rich pantheon of deities, spirits, and creatures from the Philippines remains largely untapped.
          </p>
          <p>
            Our mission is to revitalize these indigenous narratives through interactive media, transforming passive learning into participatory cultural appreciation. By embedding Filipino lore, values, and aesthetics into its core, *Bathala* serves as an "interactive mythology museum"—an engaging way for a new generation to connect with their heritage.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default GameSection;
