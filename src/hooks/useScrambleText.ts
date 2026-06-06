import { useState, useEffect, useCallback, useRef } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

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
  const [displayText, setDisplayText] = useState(text.replace(/./g, " "));
  const [isPlaying, setIsPlaying] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cleanTimers = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (delayTimeoutRef.current) {
      clearTimeout(delayTimeoutRef.current);
      delayTimeoutRef.current = null;
    }
  }, []);

  const play = useCallback(() => {
    cleanTimers();
    setIsPlaying(true);
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const fraction = Math.min(progress / duration, 1);

      const nextText = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index / text.length < fraction) {
            return char;
          }
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join("");

      setDisplayText(nextText);

      if (progress < duration) {
        timeoutRef.current = setTimeout(() => {
          rafRef.current = requestAnimationFrame(step);
        }, speed);
      } else {
        setDisplayText(text);
        setIsPlaying(false);
      }
    };

    if (delay > 0) {
      delayTimeoutRef.current = setTimeout(() => {
        rafRef.current = requestAnimationFrame(step);
      }, delay);
    } else {
      rafRef.current = requestAnimationFrame(step);
    }
  }, [text, speed, duration, delay, cleanTimers]);

  useEffect(() => {
    if (playOnMount) {
      play();
    }
    return () => {
      cleanTimers();
    };
  }, [text, playOnMount, play, cleanTimers]);

  return { displayText, play, isPlaying };
}
