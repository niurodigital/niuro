import { useState, useEffect } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

interface ScrambleOptions {
  text: string;
  speed?: number;
  duration?: number;
  delay?: number;
  playOnMount?: boolean;
}

export function useScrambleText({
  text,
  speed = 50,
  duration = 1000,
  delay = 0,
  playOnMount = true,
}: ScrambleOptions) {
  const [displayText, setDisplayText] = useState(text.replace(/./g, ' '));
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    setIsPlaying(true);
    let startTimestamp: number | null = null;
    let timeoutId: NodeJS.Timeout;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const fraction = Math.min(progress / duration, 1);

      const nextText = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index / text.length < fraction) {
            return char;
          }
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join('');

      setDisplayText(nextText);

      if (progress < duration) {
        timeoutId = setTimeout(() => {
          requestAnimationFrame(step);
        }, speed);
      } else {
        setDisplayText(text);
        setIsPlaying(false);
      }
    };

    if (delay > 0) {
      setTimeout(() => requestAnimationFrame(step), delay);
    } else {
      requestAnimationFrame(step);
    }

    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    if (playOnMount) {
      play();
    }
  }, [text]);

  return { displayText, play, isPlaying };
}
