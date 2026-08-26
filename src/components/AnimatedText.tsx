import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Word: React.FC<{ word: string; progress: any; range: [number, number] }> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block mr-[0.28em] my-[0.1em]">
      <span className="opacity-20 text-[#D7E2EA]">{word}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA] font-medium">
        {word}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const targetRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const words = text.split(' ');

  return (
    <p
      ref={targetRef}
      className={`text-center font-medium leading-relaxed max-w-[580px] text-[#D7E2EA] ${className}`}
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

export default AnimatedText;
