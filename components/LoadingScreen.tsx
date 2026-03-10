import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'ready' | 'done'>('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setPhase('ready');
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (phase === 'ready') {
      const timer = setTimeout(() => {
        setPhase('done');
        setTimeout(onComplete, 500);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="font-display text-2xl sm:text-3xl text-gold mb-8 text-shadow-gold"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            BATHALA
          </motion.h1>

          <div className="w-64 sm:w-80 h-6 border-2 border-gold/40 bg-secondary/30 pixel-border relative overflow-hidden">
            <motion.div
              className="h-full gradient-gold"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <p className="font-display text-[8px] text-gold/60 tracking-wider mt-4">
            {phase === 'ready' ? 'PRESS START' : 'LOADING REALM...'}
          </p>

          <div className="flex gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gold"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
