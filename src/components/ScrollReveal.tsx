'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type RevealProps = {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
};

export default function ScrollReveal({ 
  children, 
  width = '100%', 
  delay = 0,
  direction = 'up',
  duration = 0.6
}: RevealProps) {
  const ref = useRef(null);
  // Trigger animation when element is 10% into the viewport
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getHiddenState = () => {
    switch(direction) {
      case 'up': return { opacity: 0, y: 50 };
      case 'down': return { opacity: 0, y: -50 };
      case 'left': return { opacity: 0, x: 50 };
      case 'right': return { opacity: 0, x: -50 };
      case 'none': return { opacity: 0 };
    }
  };

  const getVisibleState = () => {
    switch(direction) {
      case 'up':
      case 'down': return { opacity: 1, y: 0 };
      case 'left':
      case 'right': return { opacity: 1, x: 0 };
      case 'none': return { opacity: 1 };
    }
  };

  return (
    <div ref={ref} style={{ width, position: 'relative' }}>
      <motion.div
        initial={getHiddenState()}
        animate={isInView ? getVisibleState() : getHiddenState()}
        transition={{
          duration: duration,
          ease: [0.16, 1, 0.3, 1], // Custom sleek spring-like bezier
          delay: delay,
        }}
        style={{ width: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
