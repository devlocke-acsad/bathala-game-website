import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroBg from '@/assets/images/hero-bg.jpg';
import Typewriter from './Typewriter';

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines vignette"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroBg})`, y: bgY }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      {/* Floating embers */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold"
          style={{
            left: `${10 + (i * 7.3) % 80}%`,
            top: `${20 + (i * 5.1) % 60}%`,
          }}
          animate={{
            y: [0, -80 - (i * 11) % 100],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: 3 + (i * 0.4) % 4,
            repeat: Infinity,
            delay: (i * 0.41) % 5,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ opacity: contentOpacity }}
      >
        <motion.h1
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 text-shadow-gold leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          BATHALA
        </motion.h1>

        <motion.div
          className="font-display text-[15px] sm:text-sm tracking-[0.3em] uppercase text-gold mb-8 leading-loose h-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Typewriter
            text="Mend the Shattered Balance."
            delay={70}
            startDelay={800}
          />
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
        >
          Wield divine power in a Filipino mythology-inspired roguelike where poker meets ancient spirits.
          Can you restore what was broken?
        </motion.p>

        {/* Social proof */}
        <motion.p
          className="text-[14px] sm:text-[15px] font-display tracking-wider text-gold/80 mb-10 leading-loose"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          🏆 GDAP GameOn 2025 Finalist · 🎓 UMak CS Thesis
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.8 }}
        >
          <a
            href="https://play.bathala.quest/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display tracking-[0.15em] text-[15px] px-8 py-4 bg-gold text-primary-foreground hover:bg-gold-light transition-all duration-300 glow-gold pixel-border"
          >
            ▶ PLAY NOW
          </a>
          <a
            href="#game"
            className="font-display tracking-[0.15em] text-[15px] px-8 py-4 border-2 border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300"
          >
            ↓ LEARN MORE
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

