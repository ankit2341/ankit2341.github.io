'use client';
import { Box, Flex, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const AVATAR = 'https://avatars.githubusercontent.com/u/103620239?v=4';

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <Box
      as="section"
      id="home"
      w="100%"
      maxW="1400px"
      mx="auto"
      pt={{ base: 24, md: 32 }}
      pb={{ base: 12, md: 20 }}
      px={{ base: 5, md: 12 }}
      minH={{ md: '100vh' }}
      display="flex"
      alignItems="center"
    >
      <Flex
        w="100%"
        gap={{ base: 10, md: 16 }}
        align="center"
        flexDirection={{ base: 'column-reverse', md: 'row' }}
      >
        {/* Left — copy */}
        <VStack align={{ base: 'center', md: 'flex-start' }} gap={6} flex={1.2}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <HStack gap={3}>
              <Box w="40px" h="1px" bg="brand.primary" />
              <Text className="eyebrow">Full-stack developer &amp; artist</Text>
            </HStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Text
              as="h1"
              fontFamily="'Fraunces', serif"
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl' }}
              fontWeight={700}
              lineHeight={0.95}
              letterSpacing="-0.03em"
              color="brand.text"
              textAlign={{ base: 'center', md: 'left' }}
            >
              I build software
              <br />
              <Text as="span" color="brand.primary" fontStyle="italic" fontWeight={500}>
                the way I sketch
              </Text>
              <Text as="span" color="brand.text">
                .
              </Text>
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            maxW="540px"
          >
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="brand.muted"
              lineHeight={1.7}
              textAlign={{ base: 'center', md: 'left' }}
            >
              Hi, I&apos;m <Text as="span" color="brand.text" fontWeight={600}>Ankit Patil</Text> — a
              full-stack engineer leading frontend at{' '}
              <Text as="span" color="brand.primary" fontWeight={500}>Cloudgov</Text>. I care about
              clean interfaces, small details, and the craft in every line — whether it&apos;s
              TypeScript or graphite on paper.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <HStack gap={4} flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
              <Link
                href="#projects"
                display="inline-flex"
                alignItems="center"
                gap={2}
                bg="brand.primary"
                color="brand.background"
                px={6}
                py={3}
                borderRadius="full"
                fontWeight={600}
                fontSize="sm"
                _hover={{ bg: 'brand.primaryDeep', textDecoration: 'none', transform: 'translateY(-1px)' }}
                transition="all 0.2s"
              >
                See my work
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
                borderColor="brand.border"
                fontWeight={500}
                fontSize="sm"
                _hover={{ borderColor: 'brand.primary', color: 'brand.primary', textDecoration: 'none' }}
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
            transition={{ duration: 1, delay: 0.5 }}
            pt={4}
          >
            <HStack gap={5}>
              <SocialIcon href="https://github.com/ankit2341" icon={faGithub} />
              <SocialIcon
                href="https://www.linkedin.com/in/ankit-patil-948036196/"
                icon={faLinkedin}
              />
              <Box w="30px" h="1px" bg="brand.border" />
              <Text fontSize="xs" color="brand.muted" letterSpacing="0.1em">
                NAVI MUMBAI · IN
              </Text>
            </HStack>
          </MotionBox>
        </VStack>

        {/* Right — sketch portrait */}
        <MotionBox
          flex={1}
          w="100%"
          maxW={{ base: '280px', md: '380px' }}
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          position="relative"
        >
          <Box className="portrait-frame">
            <Image
              src={AVATAR}
              alt="Ankit Patil — pencil sketch"
              w="100%"
              h={{ base: '280px', md: '380px' }}
            />
          </Box>

          <Box
            position="absolute"
            top={{ base: '-30px', md: '-40px' }}
            right={{ base: '-10px', md: '-30px' }}
            transform="rotate(8deg)"
          >
            <Text
              className="hand"
              color="brand.primary"
              fontSize={{ base: '2xl', md: '3xl' }}
              lineHeight={1}
              textShadow="0 2px 8px rgba(233,184,114,0.3)"
            >
              hey there!
            </Text>
          </Box>

          <Box
            position="absolute"
            bottom={{ base: '-40px', md: '-50px' }}
            left={{ base: '-20px', md: '-40px' }}
            transform="rotate(-6deg)"
          >
            <Text
              className="hand"
              color="brand.muted"
              fontSize={{ base: 'xl', md: '2xl' }}
              lineHeight={1}
            >
              — self-portrait, graphite
            </Text>
          </Box>
        </MotionBox>
      </Flex>
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
      fontSize="xl"
      _hover={{ color: 'brand.primary', textDecoration: 'none' }}
      transition="color 0.2s"
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
