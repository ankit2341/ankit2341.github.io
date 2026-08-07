'use client';
import AboutSection from '@/shared/components/about';
import ContactSection from '@/shared/components/contact';
import ExperienceTimeline from '@/shared/components/experience';
import Hero from '@/shared/components/hero';
import Navbar from '@/shared/components/navbar';
import ProjectsSection from '@/shared/components/project';
import SkillsSection from '@/shared/components/skills';
import {
  Box,
  Center,
  HStack,
  Image,
  Link,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import GitHubCalendar from 'react-github-calendar';
import { useEffect, useRef } from 'react';

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

export default function Home() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <CursorFollower />
      <Navbar />

      <VStack gap={0} align="stretch">
        <Hero />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <SkillsSection />

        {isDesktop && (
          <Box
            as="section"
            w="100%"
            maxW="1200px"
            mx="auto"
            py={{ base: 12, md: 20 }}
            px={{ base: 5, md: 8 }}
          >
            <VStack align="start" gap={3} mb={10}>
              <Text className="eyebrow">06 — Activity</Text>
              <Text className="section-heading">
                Recent <em>commits</em>
              </Text>
            </VStack>
            <Box className="sketch-card" p={{ base: 4, md: 6 }} overflowX="auto">
              <GitHubCalendar
                username="ankit2341"
                colorScheme="dark"
                blockRadius={3}
                style={{ maxWidth: '100%' }}
              />
            </Box>
            <Center mt={6}>
              <Image
                src="https://github-readme-stats.vercel.app/api?username=ankit2341&show_icons=true&theme=vue-dark&hide_border=true&bg_color=171512&title_color=e9b872&text_color=a8a196&icon_color=e9b872"
                alt="GitHub Stats"
                borderRadius="lg"
              />
            </Center>
          </Box>
        )}

        <ContactSection />
      </VStack>

      {/* Footer */}
      <Box
        as="footer"
        w="100%"
        borderTop="1px solid"
        borderColor="brand.border"
        py={8}
        px={{ base: 5, md: 8 }}
        mt={12}
      >
        <VStack
          maxW="1200px"
          mx="auto"
          gap={4}
        >
          <HStack gap={6}>
            <Link
              href="https://github.com/ankit2341"
              target="_blank"
              rel="noopener noreferrer"
              color="brand.muted"
              _hover={{ color: 'brand.primary' }}
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ankit-patil-948036196/"
              target="_blank"
              rel="noopener noreferrer"
              color="brand.muted"
              _hover={{ color: 'brand.primary' }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
          </HStack>
          <Text fontSize="sm" color="brand.muted" textAlign="center">
            Designed &amp; built with care by{' '}
            <Text as="span" color="brand.primary" fontWeight={500}>
              Ankit Patil
            </Text>{' '}
            · © {new Date().getFullYear()}
          </Text>
          <Text className="hand" color="brand.primary" fontSize="xl">
            keep sketching · keep shipping
          </Text>
        </VStack>
      </Box>
    </>
  );
}
