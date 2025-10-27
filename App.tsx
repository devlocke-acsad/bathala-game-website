
import React, { useState } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import HeroSection from './components/HeroSection';
import GameSection from './components/GameSection';
import WorldSection from './components/WorldSection';
import FeaturesSection from './components/FeaturesSection';
import ThesisSection from './components/ThesisSection';
import MediaSection from './components/MediaSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <Header onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main>
        <HeroSection />
        <GameSection />
        <WorldSection />
        <FeaturesSection />
        <ThesisSection />
        <MediaSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
