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
  'Design Systems',
  'React + TypeScript',
  'Next.js practitioner',
  'React Native shipper',
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

  // Scroll parallax
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const nameY = useTransform(scrollY, [0, 600], [0, -120]);
  const portraitY = useTransform(scrollY, [0, 600], [0, 180]);
  const portraitRotate = useTransform(scrollY, [0, 600], [-4, 4]);
  const bottomY = useTransform(scrollY, [0, 600], [0, 60]);

  // Cursor parallax on portrait
  const portraitRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
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
      pt={{ base: 24, md: 20 }}
      pb={{ base: 10, md: 0 }}
      overflow="hidden"
      display="flex"
      alignItems="center"
      style={{ opacity: heroOpacity as unknown as number }}
    >
      <MotionBox
        w="100%"
        maxW="1500px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        position="relative"
        style={{ opacity: heroOpacity }}
      >
        {/* Top row: eyebrow + role */}
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Flex
            justify="space-between"
            align="center"
            mb={{ base: 8, md: 12 }}
            flexWrap="wrap"
            gap={2}
          >
            <HStack gap={3}>
              <Box className="rule" />
              <Text className="eyebrow">Portfolio · 2026</Text>
            </HStack>
            <HStack gap={3} display={{ base: 'none', md: 'flex' }}>
              <Text className="eyebrow">Navi Mumbai · Remote OK</Text>
              <Box className="rule" />
            </HStack>
          </Flex>
        </MotionBox>

        {/* Big name — with overlapping portrait */}
        <Box position="relative" mb={{ base: 8, md: 12 }}>
          <MotionBox style={{ y: nameY }}>
            <Box overflow="hidden">
              <Text
                as="h1"
                className="display-huge"
                fontSize={{ base: '20vw', sm: '18vw', md: '16vw', lg: '15rem' }}
                textAlign="center"
                letterSpacing={{ base: '-0.04em', md: '-0.06em' }}
              >
                <SplitText text="ANKIT" delay={0.1} stagger={0.05} as="chars" />
              </Text>
            </Box>
            <Box overflow="hidden">
              <Text
                as="div"
                className="display-huge"
                fontSize={{ base: '20vw', sm: '18vw', md: '16vw', lg: '15rem' }}
                textAlign="center"
                color="brand.muted"
                letterSpacing={{ base: '-0.04em', md: '-0.06em' }}
                fontWeight={300}
              >
                <SplitText text="PATIL" delay={0.5} stagger={0.05} as="chars" />
              </Text>
            </Box>
          </MotionBox>

          {/* Portrait — floats over the name, positioned right-center */}
          <MotionBox
            position="absolute"
            top={{ base: '30%', md: '15%' }}
            right={{ base: '50%', md: '5%' }}
            transform={{ base: 'translateX(50%)', md: 'none' }}
            w={{ base: '150px', md: '260px', lg: '300px' }}
            zIndex={2}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ y: portraitY, rotate: portraitRotate, perspective: 1200 }}
          >
            <MotionBox
              ref={portraitRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              position="relative"
            >
              <Box className="portrait-frame">
                <Image
                  src={AVATAR}
                  alt="Ankit Patil"
                  w="100%"
                  h={{ base: '180px', md: '280px', lg: '320px' }}
                />
                <Text className="portrait-caption">Ankit Patil</Text>
              </Box>

              {/* Availability sticker */}
              <MotionBox
                position="absolute"
                top={{ base: '-10px', md: '-14px' }}
                right={{ base: '-10px', md: '-16px' }}
                px={3}
                py={1.5}
                borderRadius="full"
                bg="brand.text"
                color="brand.background"
                fontSize="xs"
                fontWeight={500}
                letterSpacing="0.24em"
                textTransform="uppercase"
                boxShadow="0 8px 24px rgba(0,0,0,0.2)"
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 8 }}
                transition={{ duration: 0.9, delay: 1.3, type: 'spring' }}
              >
                <HStack gap={2}>
                  <Box w="6px" h="6px" borderRadius="full" bg="#4ade80" />
                  <Text>Open</Text>
                </HStack>
              </MotionBox>
            </MotionBox>
          </MotionBox>
        </Box>

        {/* Bottom row: role + description + CTAs + socials */}
        <MotionBox style={{ y: bottomY }}>
          <Flex
            gap={{ base: 8, md: 12 }}
            align={{ base: 'stretch', md: 'flex-end' }}
            justify="space-between"
            flexDirection={{ base: 'column', md: 'row' }}
            mt={{ base: 20, md: 0 }}
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0 }}
              flex={1}
              maxW="520px"
            >
              <HStack gap={2} align="baseline" mb={3}>
                <Text fontSize={{ base: 'sm', md: 'md' }} color="brand.muted" fontWeight={400}>
                  Currently a
                </Text>
                <Box
                  position="relative"
                  minW={{ base: '160px', md: '240px' }}
                  h={{ base: '24px', md: '30px' }}
                  overflow="hidden"
                >
                  <AnimatePresence mode="wait">
                    <MotionText
                      key={roleIndex}
                      position="absolute"
                      left={0}
                      top={0}
                      color="brand.text"
                      fontWeight={700}
                      fontSize={{ base: 'md', md: 'lg' }}
                      letterSpacing="-0.01em"
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -24, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      {ROLES[roleIndex]}
                    </MotionText>
                  </AnimatePresence>
                </Box>
              </HStack>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="brand.muted"
                lineHeight={1.65}
                fontWeight={400}
              >
                3+ years shipping production React, Next.js and TypeScript at{' '}
                <Text as="span" color="brand.text" fontWeight={700}>
                  Cloudgov
                </Text>
                . Design systems, executive dashboards, and the occasional React Native app.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2 }}
            >
              <VStack align={{ base: 'stretch', md: 'flex-end' }} gap={4}>
                <HStack gap={3} flexWrap="wrap" justify={{ base: 'center', md: 'flex-end' }}>
                  <Link
                    href="#projects"
                    display="inline-flex"
                    alignItems="center"
                    gap={2}
                    bg="brand.text"
                    color="brand.background"
                    px={6}
                    py={3}
                    borderRadius="full"
                    fontWeight={600}
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
                    px={6}
                    py={3}
                    borderRadius="full"
                    border="1px solid"
                    borderColor="brand.borderStrong"
                    fontWeight={600}
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
                <HStack gap={4} justify={{ base: 'center', md: 'flex-end' }}>
                  <SocialIcon href="https://github.com/ankit2341" icon={faGithub} />
                  <SocialIcon
                    href="https://linkedin.com/in/ankit-patil-948036196"
                    icon={faLinkedin}
                  />
                </HStack>
              </VStack>
            </MotionBox>
          </Flex>
        </MotionBox>

        {/* Marquee */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          mt={{ base: 10, md: 14 }}
          py={4}
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
                    fontSize={{ base: 'lg', md: '2xl' }}
                    color="brand.text"
                    fontWeight={700}
                    letterSpacing="-0.01em"
                    textTransform="uppercase"
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
