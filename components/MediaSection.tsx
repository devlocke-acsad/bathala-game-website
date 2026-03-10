import React, { useEffect, useState } from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import bathalaTitle from '../assets/videos/title.gif';
import combat from '../assets/images/combat.png';
import overworldMap from '../assets/images/overworld_map.png';
import overworldGif from '../assets/videos/overworld.gif';
import combatGif from '../assets/videos/combat.gif';

interface MediaItem {
  src: string;
  alt: string;
}

const mediaItems: MediaItem[] = [
  { src: combat, alt: 'Combat scene showing a Full House' },
  { src: overworldMap, alt: 'The overworld map at night' },
  { src: overworldGif, alt: "The Mysterious Merchant's shop interface" },
  { src: combatGif, alt: 'The final boss, the False Bathala' },
  { src: bathalaTitle, alt: 'The prologue storyboard' },
];

const MediaImage = ({
  src,
  alt,
  expanded,
  onExpand,
}: {
  src: string;
  alt: string;
  expanded?: boolean;
  onExpand?: () => void;
}) => {
  if (expanded) {
    return (
      <div className="aspect-video bg-[#000] border-2 border-[#77888C]/30 rounded-lg overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onExpand}
      className="group w-full aspect-video bg-[#000] border-2 border-[#77888C]/30 hover:border-[rgba(168,147,108,0.62)] rounded-lg overflow-hidden transition-colors duration-200"
    >
      <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
    </button>
  );
};

const MediaSection: React.FC = () => {
  const [expandedMedia, setExpandedMedia] = useState<MediaItem | null>(null);

  useEffect(() => {
    if (!expandedMedia) {
      return;
    }

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpandedMedia(null);
      }
    };

    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [expandedMedia]);

  return (
    <Section id="media">
      <SectionTitle>Media Gallery</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mediaItems.map((item, idx) => {
          const isLast = idx === mediaItems.length - 1;
          return (
            <div key={item.alt} className={isLast ? 'sm:col-span-2' : ''}>
              <MediaImage src={item.src} alt={item.alt} onExpand={() => setExpandedMedia(item)} />
            </div>
          );
        })}
      </div>

      {expandedMedia && (
        <div className="fixed inset-0 z-[70] bg-[rgba(9,6,7,0.92)] backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setExpandedMedia(null)}>
          <div className="absolute inset-0 noise-overlay" />
          <div
            className="relative z-10 w-full max-w-5xl surface-panel rounded-2xl p-4"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={expandedMedia.alt}
          >
            <button
              type="button"
              onClick={() => setExpandedMedia(null)}
              aria-label="Close media preview"
              className="absolute top-6 right-6 h-10 w-10 rounded-full bg-[rgba(20,15,16,0.75)] border border-[rgba(169,182,185,0.5)] text-[#A8B5B9] hover:text-white transition-colors"
            >
              x
            </button>
            <MediaImage src={expandedMedia.src} alt={expandedMedia.alt} expanded />
          </div>
        </div>
      )}
    </Section>
  );
};

export default MediaSection;
