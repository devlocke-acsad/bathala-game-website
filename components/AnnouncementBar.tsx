import { useState } from 'react';
import { X } from 'lucide-react';

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-50 gradient-gold py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <span className="text-center text-[13px] sm:text-[14px] font-display tracking-wider text-primary-foreground leading-relaxed">
          🏆 GDAP GAMEON 2025 FINALIST — BEST NARRATIVE & BEST AUDIO NOMINEE
        </span>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
