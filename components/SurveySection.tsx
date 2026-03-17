// SURVEY SECTION - REMOVE AFTER THESIS
import { ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const SURVEY_URL = 'https://forms.gle/TEJwaNaa2DR1ztmaA';

const SurveySection = () => {
  return (
    <SectionWrapper id="survey">
      <div className="container mx-auto max-w-3xl">
        <div className="relative bg-parchment-dark border-2 border-gold/30 p-10 md:p-14 text-center overflow-hidden pixel-border">
          {/* Pixel corner marks */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/50" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/50" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/50" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/50" />

          <span className="font-display text-[12px] tracking-[0.4em] text-gold/70">
            ═══ A QUEST FOR YOU ═══
          </span>
          <h2 className="font-display text-sm sm:text-base md:text-lg text-foreground mt-6 mb-4 leading-loose">
            HEED THE CALL!
          </h2>
          <p className="text-foreground text-lg leading-relaxed max-w-xl mx-auto mb-4 font-body">
            We're rolling out our thesis survey and need brave souls to answer! Play the game and
            share your feedback to help us complete our research.
          </p>
          <p className="text-gold font-display text-[13px] tracking-wider mb-8 leading-loose">
            4 WINNERS GET 100 PHP GCASH +<br />EXCLUSIVE PHYSICAL CARD SOUVENIR
          </p>

          <a
            href={SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-display tracking-[0.15em] text-[14px] px-10 py-4 gradient-gold text-primary-foreground hover:opacity-90 transition-all duration-300 glow-gold pixel-border"
          >
            ▶ TAKE THE SURVEY
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SurveySection;
