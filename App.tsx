
import React, { useEffect, useState } from 'react';
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
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!revealElements.length) {
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        rootMargin: '-42% 0px -46% 0px',
        threshold: [0.15, 0.35, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(20,15,16,0.3),transparent_18%,transparent_82%,rgba(20,15,16,0.4))]" />
      <Header activeSection={activeSection} onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
      <MobileMenu activeSection={activeSection} isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="relative z-10">
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
