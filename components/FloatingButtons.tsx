import { ClipboardList } from 'lucide-react';

const SURVEY_URL = 'https://forms.gle/frDmbAeJljAgKCqJ6';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={SURVEY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 gradient-gold text-primary-foreground font-display text-[12px] tracking-wider shadow-lg hover:opacity-90 transition-all glow-gold pixel-border"
      >
        <ClipboardList className="w-3 h-3" />
        <span className="hidden sm:inline">SURVEY</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
