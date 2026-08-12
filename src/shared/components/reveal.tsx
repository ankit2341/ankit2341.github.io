'use client';
import { Box, BoxProps } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type RevealProps = BoxProps & {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  y = 40,
  duration = 0.9,
  once = true,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: 0.15 });
  return (
    <Box ref={ref} {...rest}>
      <motion.div
        initial={{ opacity: 0, y, filter: 'blur(6px)' }}
        animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration, delay, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ willChange: 'transform, opacity, filter' }}
      >
        {children}
      </motion.div>
    </Box>
  );
}

type SplitTextProps = {
  text: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  as?: 'words' | 'chars';
};

export function SplitText({
  text,
  delay = 0,
  stagger = 0.05,
  once = true,
  as = 'words',
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, amount: 0.3 });
  const units = as === 'words' ? text.split(' ') : text.split('');

  return (
    <span ref={ref} style={{ display: 'inline-block' }} aria-label={text}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          className="split-char"
          initial={{ y: '100%', opacity: 0 }}
          animate={inView ? { y: '0%', opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: delay + i * stagger,
            ease: [0.2, 0.8, 0.2, 1],
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {unit}
          {as === 'words' && i < units.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </span>
  );
}
