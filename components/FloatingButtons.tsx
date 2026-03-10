import { useState, useEffect } from 'react';
import { ArrowUp, ClipboardList } from 'lucide-react';

const SURVEY_URL = 'https://forms.gle/frDmbAeJljAgKCqJ6';

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={SURVEY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 gradient-gold text-primary-foreground font-display text-[7px] tracking-wider shadow-lg hover:opacity-90 transition-all glow-gold pixel-border"
      >
        <ClipboardList className="w-3 h-3" />
        <span className="hidden sm:inline">SURVEY</span>
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-secondary border border-gold/20 text-foreground hover:text-gold shadow-lg transition-all pixel-border"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
