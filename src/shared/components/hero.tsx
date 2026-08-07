'use client';
import { Box, Flex, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AVATAR = 'https://avatars.githubusercontent.com/u/103620239?v=4';

const ROLES = [
  'Frontend Engineer',
  'Design Systems',
  'React & TypeScript',
  'Next.js & GraphQL',
  'React Native',
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
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((v) => (v + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);

  const portraitRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

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
      position="relative"
      w="100%"
      minH={{ md: '100vh' }}
      pt={{ base: 24, md: 20 }}
      pb={{ base: 12, md: 0 }}
      overflow="hidden"
      display="flex"
      alignItems="center"
    >
      {/* Ambient glow */}
      <Box
        position="absolute"
        top="20%"
        left="10%"
        w="400px"
        h="400px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(251,113,133,0.15), transparent 70%)"
        filter="blur(80px)"
        pointerEvents="none"
        className="float-slow"
      />
      <Box
        position="absolute"
        bottom="20%"
        right="10%"
        w="500px"
        h="500px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)"
        filter="blur(90px)"
        pointerEvents="none"
      />

      <Box maxW="1400px" mx="auto" w="100%" px={{ base: 5, md: 12 }} position="relative">
        <Flex
          w="100%"
          gap={{ base: 12, md: 16 }}
          align="center"
          flexDirection={{ base: 'column-reverse', md: 'row' }}
        >
          <VStack align={{ base: 'center', md: 'flex-start' }} gap={7} flex={1.3}>
            <MotionBox
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <HStack gap={3}>
                <Box className="rule" />
                <Text className="eyebrow">Available for hire · Navi Mumbai / Remote</Text>
              </HStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Text
                as="h1"
                fontFamily="'Fraunces', serif"
                fontSize={{ base: '5xl', sm: '6xl', md: '7xl', lg: '8xl' }}
                fontWeight={400}
                lineHeight={0.98}
                letterSpacing="-0.035em"
                color="brand.text"
                textAlign={{ base: 'center', md: 'left' }}
              >
                Ankit
                <br />
                <Text as="span" className="gradient-text" fontStyle="italic" fontWeight={500}>
                  Patil
                </Text>
                <Text as="span" color="brand.accent">
                  .
                </Text>
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              minH={{ base: '30px', md: '40px' }}
              display="flex"
              alignItems="center"
              justifyContent={{ base: 'center', md: 'flex-start' }}
              w="100%"
            >
              <HStack gap={3}>
                <Text
                  fontSize={{ base: 'md', md: 'xl' }}
                  color="brand.muted"
                  fontWeight={400}
                >
                  I&apos;m a
                </Text>
                <Box position="relative" minW={{ base: '180px', md: '260px' }} h={{ base: '28px', md: '36px' }} overflow="hidden">
                  <AnimatePresence mode="wait">
                    <MotionText
                      key={roleIndex}
                      position="absolute"
                      left={0}
                      top={0}
                      color="brand.accent"
                      fontFamily="'Fraunces', serif"
                      fontStyle="italic"
                      fontWeight={500}
                      fontSize={{ base: 'lg', md: '2xl' }}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
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
              transition={{ duration: 0.8, delay: 0.3 }}
              maxW="560px"
            >
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="brand.muted"
                lineHeight={1.75}
                textAlign={{ base: 'center', md: 'left' }}
              >
                3+ years shipping production React, Next.js and TypeScript at{' '}
                <Text as="span" color="brand.text" fontWeight={500}>
                  Cloudgov
                </Text>
                , a multi cloud FinOps and governance platform. I build design systems,
                executive dashboards, and the occasional React Native app.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HStack gap={4} flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
                <Link
                  href="#projects"
                  display="inline-flex"
                  alignItems="center"
                  gap={2}
                  bg="brand.accent"
                  color="brand.background"
                  px={7}
                  py={3}
                  borderRadius="full"
                  fontWeight={500}
                  fontSize="sm"
                  _hover={{
                    bg: 'brand.accentDeep',
                    textDecoration: 'none',
                    transform: 'translateY(-1px)',
                  }}
                  transition="all 0.2s"
                  boxShadow="0 10px 30px -10px rgba(251,113,133,0.5)"
                >
                  See selected work
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
                    borderColor: 'brand.accent',
                    color: 'brand.accent',
                    textDecoration: 'none',
                  }}
                  transition="all 0.2s"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  Get in touch
                </Link>
              </HStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              pt={4}
            >
              <HStack gap={5}>
                <SocialIcon href="https://github.com/ankit2341" icon={faGithub} />
                <SocialIcon href="https://linkedin.com/in/ankit-patil-948036196" icon={faLinkedin} />
                <Box w="24px" h="1px" bg="brand.borderStrong" />
                <Text fontSize="xs" color="brand.muted" letterSpacing="0.24em">
                  OPEN TO OPPORTUNITIES
                </Text>
              </HStack>
            </MotionBox>
          </VStack>

          {/* Portrait with tilt */}
          <MotionBox
            flex={1}
            w="100%"
            maxW={{ base: '260px', md: '340px' }}
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            position="relative"
            style={{ perspective: '1000px' }}
          >
            <MotionBox
              ref={portraitRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              position="relative"
            >
              <Box
                position="absolute"
                inset="-20px"
                bg="radial-gradient(circle, rgba(251,113,133,0.35), transparent 70%)"
                filter="blur(30px)"
                zIndex={-1}
              />
              <Box className="portrait-frame">
                <Image src={AVATAR} alt="Ankit Patil" w="100%" h={{ base: '280px', md: '360px' }} />
                <Text className="portrait-caption">Ankit Patil</Text>
              </Box>
            </MotionBox>

            {/* Floating badges */}
            <MotionBox
              position="absolute"
              top={{ base: '-14px', md: '-20px' }}
              right={{ base: '-14px', md: '-24px' }}
              px={3}
              py={1.5}
              borderRadius="full"
              bg="brand.surface"
              border="1px solid"
              borderColor="brand.borderStrong"
              fontSize="xs"
              color="brand.text"
              fontWeight={500}
              boxShadow="0 8px 24px rgba(0,0,0,0.4)"
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 8 }}
              transition={{ duration: 0.7, delay: 0.9, type: 'spring' }}
            >
              <HStack gap={2}>
                <Box w="8px" h="8px" borderRadius="full" bg="green.400" />
                <Text>Available</Text>
              </HStack>
            </MotionBox>

            <MotionBox
              position="absolute"
              bottom={{ base: '-14px', md: '-20px' }}
              left={{ base: '-14px', md: '-24px' }}
              px={3}
              py={1.5}
              borderRadius="full"
              bg="brand.surface"
              border="1px solid"
              borderColor="brand.borderStrong"
              fontSize="xs"
              color="brand.accent"
              fontWeight={500}
              boxShadow="0 8px 24px rgba(0,0,0,0.4)"
              initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.7, delay: 1.1, type: 'spring' }}
              fontFamily="'Fraunces', serif"
              fontStyle="italic"
            >
              3+ years @ Cloudgov
            </MotionBox>
          </MotionBox>
        </Flex>

        {/* Marquee band */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          mt={{ base: 12, md: 16 }}
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
                    fontFamily="'Fraunces', serif"
                    fontStyle="italic"
                    fontSize={{ base: 'xl', md: '2xl' }}
                    color="brand.text"
                    fontWeight={400}
                  >
                    {word}
                  </Text>
                  <Text color="brand.accent" fontSize="xs">
                    ✦
                  </Text>
                </HStack>
              ))
            )}
          </Flex>
        </MotionBox>
      </Box>
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
      _hover={{ color: 'brand.accent', textDecoration: 'none', transform: 'translateY(-2px)' }}
      transition="all 0.2s"
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
