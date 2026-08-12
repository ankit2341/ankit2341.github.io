'use client';
import AboutSection from '@/shared/components/about';
import ContactSection from '@/shared/components/contact';
import ExperienceTimeline from '@/shared/components/experience';
import Hero from '@/shared/components/hero';
import Navbar from '@/shared/components/navbar';
import ProjectsSection from '@/shared/components/project';
import SkillsSection from '@/shared/components/skills';
import { Box, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const MotionBox = motion(Box);

function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    let raf: number;
    const move = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${mousePos.current.x}px`;
        dotRef.current.style.top = `${mousePos.current.y}px`;
      }
      if (ringRef.current) {
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return <MotionBox className="scroll-progress" style={{ scaleX, width: '100%' }} />;
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorFollower />
      <Navbar />

      <VStack gap={0} align="stretch">
        <Hero />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </VStack>

      <Box
        as="footer"
        w="100%"
        borderTop="1px solid"
        borderColor="brand.border"
        py={10}
        px={{ base: 4, md: 8 }}
        mt={8}
      >
        <VStack maxW="1200px" mx="auto" gap={5}>
          <Text
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight={900}
            color="brand.text"
            letterSpacing="-0.03em"
            textTransform="uppercase"
            textAlign="center"
          >
            Thanks for scrolling
          </Text>
          <HStack gap={6}>
            <Link
              href="https://github.com/ankit2341"
              target="_blank"
              rel="noopener noreferrer"
              color="brand.muted"
              _hover={{ color: 'brand.text' }}
              transition="color 0.2s"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
            <Link
              href="https://linkedin.com/in/ankit-patil-948036196"
              target="_blank"
              rel="noopener noreferrer"
              color="brand.muted"
              _hover={{ color: 'brand.text' }}
              transition="color 0.2s"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
            <Link
              href="mailto:ankitpatil2341@gmail.com"
              color="brand.muted"
              _hover={{ color: 'brand.text' }}
              transition="color 0.2s"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </Link>
          </HStack>
          <Text
            fontSize="xs"
            color="brand.muted"
            textAlign="center"
            letterSpacing="0.24em"
            fontWeight={500}
            textTransform="uppercase"
          >
            Ankit Patil · © {new Date().getFullYear()}
          </Text>
        </VStack>
      </Box>
    </>
  );
}
