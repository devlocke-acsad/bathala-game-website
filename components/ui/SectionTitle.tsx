
import type React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="font-dungeon text-4xl md:text-5xl text-center text-[#77888C] mb-12 tracking-wider uppercase">
      {children}
    </h2>
  );
};

export default SectionTitle;
