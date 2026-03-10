import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
  onComplete?: () => void;
}

const Typewriter = ({ text, delay = 80, startDelay = 0, className = '', onComplete }: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayText.length >= text.length) {
      setDone(true);
      onComplete?.();
      return;
    }
    const timer = setTimeout(() => {
      setDisplayText(text.slice(0, displayText.length + 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [started, displayText, text, delay, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {!done && <span className="animate-blink text-gold">▌</span>}
    </span>
  );
};

export default Typewriter;
