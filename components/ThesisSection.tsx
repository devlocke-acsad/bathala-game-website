
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';

const ThesisSection: React.FC = () => {
  return (
    <Section id="thesis" className="bg-[#1a1315]">
      <SectionTitle>CORE RESEARCH</SectionTitle>
      <div className="space-y-10 text-lg leading-relaxed">
        <p>The development of *Bathala* is grounded in three core research pillars that collectively address challenges in game design, player engagement, and cultural heritage.</p>
        
        <div>
          <h3 className="font-dungeon text-3xl mb-4 uppercase">1. Cultural Preservation through Interactive Media</h3>
          <p className="mb-4">A primary objective is to demonstrate the viability of digital games as "interactive mythology museums." The project addresses the underrepresentation of Filipino folklore in gaming by developing a system to authentically integrate cultural narratives into game mechanics.</p>
          <ul className="list-disc list-inside space-y-2 pl-4 text-base">
            <li><strong className="text-white">Research Goal:</strong> To design a game as a medium for cultural preservation and education, revitalizing indigenous narratives for a modern audience.</li>
            <li><strong className="text-white">Implementation:</strong> Achieved through extensive research, consultation with cultural experts, and the careful translation of mythological themes into the game's design, art, and narrative.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-dungeon text-3xl mb-4 uppercase">2. A Rule-Based Dynamic Difficulty Adjustment (DDA) System</h3>
          <p className="mb-4">The central technical contribution is a transparent, rule-based DDA system designed to maintain player "flow," addressing the research question: "How can a rule-based adaptive difficulty system be designed to maintain a state of 'flow' for players of varying skill levels?"</p>
           <ul className="list-disc list-inside space-y-2 pl-4 text-base">
            <li><strong className="text-white">Methodology:</strong> We chose a rule-based approach for its transparency and reproducibility. The system is driven by a Player Performance Score (PPS) calculated from eight distinct, weighted performance factors.</li>
            <li><strong className="text-white">Implementation:</strong> The PPS score maps to difficulty tiers that dynamically adjust over 15 parameters, ensuring a fair but engaging challenge.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-dungeon text-3xl mb-4 uppercase">3. A Delaunay-Inspired Procedural Content Generation (PCG) Framework</h3>
          <p className="mb-4">To ensure high replayability, we designed a novel PCG system for overworld map generation, implementing a graph-based corridor generation system that creates coherent and navigable levels.</p>
           <ul className="list-disc list-inside space-y-2 pl-4 text-base">
            <li><strong className="text-white">Methodology:</strong> The system uses a seven-stage pipeline inspired by Delaunay triangulation and A* pathfinding.</li>
            <li><strong className="text-white">Validation:</strong> The system's effectiveness is measured against clear metrics, including high connectivity ratio, low dead-end ratio, and fast generation time.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default ThesisSection;
