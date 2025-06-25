'use client';
import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionSvg = motion.svg; // ✅ Use raw motion.svg here
const MotionBox = motion.div;

const ScrollBadge = () => {
  return (
    <chakra.a
      href="#experience"
      position="relative"
      display="inline-block"
      w="100px"
      h="100px"
      cursor="pointer"
      color="#f5f5f5"
      _hover={{ color: 'brand.primary' }}
      aria-label="Scroll to explore"
    >
      {/* Spinning text ring */}
      <MotionSvg
        viewBox="0 0 200 200"
        style={{ width: '100%', height: '100%' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
      >
        <defs>
          <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
        </defs>
        <text fontSize="12" fill="currentColor">
          <textPath href="#circlePath">
            &nbsp; EXPLORE PROJECTS • SCROLL DOWN • EXPLORE MORE •
          </textPath>
        </text>
      </MotionSvg>

      {/* Mouse icon */}
      <MotionBox
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '20px',
          height: '30px',
          transform: 'translate(-50%, -50%)',
          border: '2px solid currentColor',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: 'inherit',
        }}
      >
        <MotionBox
          style={{
            width: '3px',
            height: '6px',
            marginTop: '8px',
            borderRadius: '3px',
            backgroundColor: 'currentColor',
          }}
          animate={{ y: [0, 10], opacity: [1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </MotionBox>
    </chakra.a>
  );
};

export default ScrollBadge;
