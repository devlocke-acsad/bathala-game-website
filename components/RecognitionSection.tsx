import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionTitle from './SectionTitle';
import awardBadge from '@/assets/images/award-badge.png';

const RecognitionSection = () => {
  return (
    <SectionWrapper id="recognition" className="gradient-section">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle title="RECOGNIZED AT GDAP 2025" />
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src={awardBadge}
            alt="GDAP GameOn 2025 Award Badge"
            className="w-36 h-36 md:w-44 md:h-44 object-contain animate-float drop-shadow-[0_0_30px_hsl(40_80%_55%/0.4)]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-xs md:text-sm text-gold tracking-wider mb-4 leading-loose">
              AWARD-WINNING GAME
            </h3>
            <p className="text-foreground text-lg leading-relaxed mb-6 font-body">
              Bathala was selected as a <strong className="text-gold">Finalist in the Professional Game Category</strong> at
              the GDAP GameOn 2025 Awards Night on November 24, 2025, and was nominated for{' '}
              <strong className="text-gold">Best Game Narrative Writing</strong> and{' '}
              <strong className="text-gold">Best Game Audio Design & Music</strong>.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {['PRO GAME FINALIST', 'BEST NARRATIVE', 'BEST AUDIO'].map((tag) => (
                <span
                  key={tag}
                  className="font-display text-[7px] tracking-wider px-3 py-2 border border-gold/30 text-gold bg-gold/5 pixel-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RecognitionSection;
