'use client';
import { Box, Flex, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  AnimatePresence,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { SplitText } from './reveal';

const AVATAR = 'https://avatars.githubusercontent.com/u/103620239?v=4';

const ROLES = [
  'Frontend Engineer',
  'Design Systems Author',
  'React & TypeScript',
  'Next.js Practitioner',
  'React Native Ships',
];

const MARQUEE_WORDS = [
  'Design Systems',
  'Next.js',
  'TypeScript',
  'GraphQL',
  'React Native',
  'Chart.js',
  'Okta SSO',
  'Stripe',
  'Docusaurus',
  'Chakra UI',
];

const MotionBox = motion(Box);
const MotionText = motion(Text);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((v) => (v + 1) % ROLES.length), 2400);
    return () => clearInterval(id);
  }, []);

  // Scroll-driven parallax + fade for hero content
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroBlur = useTransform(scrollY, [0, 500], [0, 6]);
  const heroBlurFilter = useTransform(heroBlur, (v) => `blur(${v}px)`);
  const heroY = useTransform(scrollY, [0, 500], [0, 120]);
  const portraitY = useTransform(scrollY, [0, 500], [0, -60]);
  const portraitRotate = useTransform(scrollY, [0, 500], [0, 4]);

  // Cursor tilt on portrait
  const portraitRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Box
      as="section"
      id="home"
      ref={sectionRef}
      position="relative"
      w="100%"
      minH={{ base: 'auto', md: '100vh' }}
      pt={{ base: 28, md: 24 }}
      pb={{ base: 16, md: 0 }}
      overflow="hidden"
      display="flex"
      alignItems="center"
    >
      {/* Ambient graphite smudges */}
      <Box
        className="hero-smudge"
        top="10%"
        left="-10%"
        style={{ animation: 'float-slow 12s ease-in-out infinite' }}
      />
      <Box className="hero-smudge" bottom="10%" right="-10%" opacity={0.7} />

      {/* Faint background numeral */}
      <Text
        className="bg-numeral"
        top={{ base: '15%', md: '10%' }}
        right={{ base: '-40px', md: '-60px' }}
        fontSize={{ base: '200px', md: '380px' }}
        opacity={0.35}
        display={{ base: 'none', md: 'block' }}
      >
        01
      </Text>

      <MotionBox
        maxW="1400px"
        mx="auto"
        w="100%"
        px={{ base: 5, md: 12 }}
        position="relative"
        style={{ opacity: heroOpacity, filter: heroBlurFilter, y: heroY }}
      >
        <Flex
          w="100%"
          gap={{ base: 12, md: 16 }}
          align={{ base: 'center', md: 'flex-end' }}
          flexDirection={{ base: 'column-reverse', md: 'row' }}
        >
          <VStack
            align={{ base: 'center', md: 'flex-start' }}
            gap={8}
            flex={1.4}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <MotionBox
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <HStack gap={3}>
                <Box className="rule" />
                <Text className="eyebrow">Portfolio · 2026</Text>
              </HStack>
            </MotionBox>

            <Box overflow="hidden">
              <Text
                as="h1"
                fontFamily="'Instrument Serif', serif"
                fontSize={{ base: '5xl', sm: '6xl', md: '8xl', lg: '9xl' }}
                fontWeight={400}
                lineHeight={0.92}
                letterSpacing="-0.03em"
                color="brand.text"
              >
                <SplitText text="Ankit" delay={0.1} stagger={0.06} as="chars" />
                <br />
                <Text as="span" fontStyle="italic" color="brand.muted">
                  <SplitText text="Patil" delay={0.5} stagger={0.06} as="chars" />
                </Text>
              </Text>
            </Box>

            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              minH={{ base: '30px', md: '40px' }}
              display="flex"
              alignItems="center"
              justifyContent={{ base: 'center', md: 'flex-start' }}
              w="100%"
            >
              <HStack gap={3} align="center">
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="brand.muted"
                  fontWeight={300}
                >
                  currently a
                </Text>
                <Box
                  position="relative"
                  minW={{ base: '180px', md: '280px' }}
                  h={{ base: '28px', md: '36px' }}
                  overflow="hidden"
                >
                  <AnimatePresence mode="wait">
                    <MotionText
                      key={roleIndex}
                      position="absolute"
                      left={0}
                      top={0}
                      color="brand.text"
                      fontFamily="'Instrument Serif', serif"
                      fontStyle="italic"
                      fontWeight={400}
                      fontSize={{ base: 'xl', md: '2xl' }}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      {ROLES[roleIndex]}
                    </MotionText>
                  </AnimatePresence>
                </Box>
              </HStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2 }}
              maxW="520px"
            >
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="brand.muted"
                lineHeight={1.75}
                fontWeight={300}
              >
                3+ years shipping production React, Next.js and TypeScript at{' '}
                <Text as="span" color="brand.text" fontWeight={400}>
                  Cloudgov
                </Text>
                . I build design systems, executive dashboards and the occasional React
                Native app. Off the clock I sketch in graphite.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.4 }}
            >
              <HStack gap={4} flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
                <Link
                  href="#projects"
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  bg="brand.text"
                  color="brand.background"
                  px={7}
                  py={3}
                  borderRadius="full"
                  fontWeight={500}
                  fontSize="sm"
                  _hover={{
                    bg: 'brand.primaryDeep',
                    textDecoration: 'none',
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.3s"
                >
                  Selected work
                  <FontAwesomeIcon icon={faArrowDown} />
                </Link>
                <Link
                  href="#contact"
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  color="brand.text"
                  px={7}
                  py={3}
                  borderRadius="full"
                  border="1px solid"
                  borderColor="brand.borderStrong"
                  fontWeight={500}
                  fontSize="sm"
                  _hover={{
                    borderColor: 'brand.text',
                    textDecoration: 'none',
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.3s"
                >
                  Say hello
                </Link>
              </HStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              pt={2}
            >
              <HStack gap={5}>
                <SocialIcon href="https://github.com/ankit2341" icon={faGithub} />
                <SocialIcon
                  href="https://linkedin.com/in/ankit-patil-948036196"
                  icon={faLinkedin}
                />
                <Box w="24px" h="1px" bg="brand.borderStrong" />
                <Text
                  fontSize="xs"
                  color="brand.muted"
                  letterSpacing="0.24em"
                  fontFamily="'DM Mono', monospace"
                >
                  NAVI MUMBAI · REMOTE OK
                </Text>
              </HStack>
            </MotionBox>
          </VStack>

          {/* Portrait */}
          <MotionBox
            flex={1}
            w="100%"
            maxW={{ base: '260px', md: '360px' }}
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            position="relative"
            style={{
              perspective: '1200px',
              y: portraitY,
              rotate: portraitRotate,
            }}
          >
            <MotionBox
              ref={portraitRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              position="relative"
            >
              <Box className="portrait-frame">
                <Image src={AVATAR} alt="Ankit Patil" w="100%" h={{ base: '300px', md: '400px' }} />
                <Text className="portrait-caption">Ankit Patil</Text>
              </Box>
            </MotionBox>

            {/* Signature-style badge */}
            <MotionBox
              position="absolute"
              top={{ base: '-14px', md: '-24px' }}
              right={{ base: '-14px', md: '-30px' }}
              px={3}
              py={1.5}
              borderRadius="full"
              bg="brand.surface"
              border="1px solid"
              borderColor="brand.borderStrong"
              fontSize="xs"
              color="brand.text"
              fontFamily="'DM Mono', monospace"
              fontWeight={400}
              boxShadow="0 12px 30px rgba(0,0,0,0.5)"
              initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ duration: 0.9, delay: 1.4, type: 'spring' }}
            >
              <HStack gap={2}>
                <Box w="6px" h="6px" borderRadius="full" bg="#a3e635" />
                <Text>AVAILABLE</Text>
              </HStack>
            </MotionBox>

            <MotionBox
              position="absolute"
              bottom={{ base: '-14px', md: '-24px' }}
              left={{ base: '-14px', md: '-30px' }}
              px={4}
              py={1.5}
              borderRadius="full"
              bg="brand.surface"
              border="1px solid"
              borderColor="brand.borderStrong"
              fontSize="sm"
              color="brand.text"
              fontFamily="'Instrument Serif', serif"
              fontStyle="italic"
              fontWeight={400}
              boxShadow="0 12px 30px rgba(0,0,0,0.5)"
              initial={{ opacity: 0, scale: 0.6, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: -5 }}
              transition={{ duration: 0.9, delay: 1.6, type: 'spring' }}
            >
              3+ yrs at Cloudgov
            </MotionBox>
          </MotionBox>
        </Flex>

        {/* Marquee */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          mt={{ base: 12, md: 20 }}
          py={5}
          borderTop="1px solid"
          borderBottom="1px solid"
          borderColor="brand.border"
          className="marquee"
        >
          <Flex className="marquee__track">
            {[...Array(2)].map((_, r) =>
              MARQUEE_WORDS.map((word, i) => (
                <HStack key={`${r}-${i}`} gap={8}>
                  <Text
                    fontFamily="'Instrument Serif', serif"
                    fontStyle="italic"
                    fontSize={{ base: 'xl', md: '3xl' }}
                    color="brand.text"
                    fontWeight={400}
                  >
                    {word}
                  </Text>
                  <Text color="brand.muted" fontSize="xs">
                    ✦
                  </Text>
                </HStack>
              ))
            )}
          </Flex>
        </MotionBox>
      </MotionBox>

      {/* Scroll cue */}
      <MotionBox
        position="absolute"
        bottom={{ base: 4, md: 6 }}
        left="50%"
        style={{ x: '-50%', opacity: heroOpacity }}
        display={{ base: 'none', md: 'block' }}
      >
        <VStack gap={2}>
          <Text
            fontSize="xs"
            color="brand.muted"
            fontFamily="'DM Mono', monospace"
            letterSpacing="0.24em"
          >
            SCROLL
          </Text>
          <MotionBox
            w="1px"
            h="40px"
            bg="brand.borderStrong"
            animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </VStack>
      </MotionBox>
    </Box>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: typeof faGithub }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color="brand.text"
      fontSize="lg"
      _hover={{ color: 'brand.muted', textDecoration: 'none', transform: 'translateY(-2px)' }}
      transition="all 0.2s"
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
