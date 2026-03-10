
import type React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="font-dungeon text-4xl md:text-5xl text-center text-[#8D9CA0] mb-12 tracking-wider uppercase relative">
      {children}
      <span className="block h-px w-24 mx-auto mt-4 bg-[rgba(168,147,108,0.52)]" />
    </h2>
  );
};

export default SectionTitle;
