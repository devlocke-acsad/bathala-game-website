import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Game', href: '#game' },
  { label: 'World', href: '#world' },
  { label: 'Creatures', href: '#creatures' },
  { label: 'Features', href: '#features' },
  { label: 'Thesis', href: '#thesis' },
  { label: 'Media', href: '#media' },
  { label: 'About', href: '#about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);

      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-gold/20 shadow-lg shadow-background/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="font-display text-[10px] text-gold">
          BATHALA
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative font-display text-[8px] tracking-wider uppercase transition-colors duration-200 pb-1 ${
                activeSection === item.href.slice(1)
                  ? 'text-gold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Scroll progress bar */}
      <div
        className="h-[2px] gradient-gold transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-gold/20 pb-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 font-display text-[9px] tracking-wider uppercase ${
                activeSection === item.href.slice(1)
                  ? 'text-gold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {activeSection === item.href.slice(1) ? '▶ ' : '  '}{item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
