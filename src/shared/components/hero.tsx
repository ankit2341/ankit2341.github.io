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
      pt={{ base: 28, md: 36 }}
      pb={{ base: 16, md: 24 }}
      px={{ base: 5, md: 12 }}
      minH={{ md: '100vh' }}
      display="flex"
      alignItems="center"
    >
      <Flex
        w="100%"
        gap={{ base: 12, md: 20 }}
        align="center"
        flexDirection={{ base: 'column-reverse', md: 'row' }}
      >
        <VStack align={{ base: 'center', md: 'flex-start' }} gap={7} flex={1.3}>
          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <HStack gap={3}>
              <Box className="rule" />
              <Text className="eyebrow">Frontend Engineer, Navi Mumbai</Text>
            </HStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Text
              as="h1"
              fontFamily="'Fraunces', serif"
              fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl' }}
              fontWeight={400}
              lineHeight={1.02}
              letterSpacing="-0.03em"
              color="brand.text"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Interfaces built
              <br />
              with{' '}
              <Text as="span" color="brand.accent" fontStyle="italic" fontWeight={400}>
                intention
              </Text>
              .
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            maxW="560px"
          >
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="brand.muted"
              lineHeight={1.75}
              textAlign={{ base: 'center', md: 'left' }}
            >
              I&apos;m{' '}
              <Text as="span" color="brand.text" fontWeight={500}>
                Ankit Patil
              </Text>
              , a full stack engineer with 3+ years shipping production React, Next.js and
              TypeScript at{' '}
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
            transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
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
                  transform: 'translateY(-1px)',
                }}
                transition="all 0.2s"
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
                  borderColor: 'brand.text',
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
            transition={{ duration: 1, delay: 0.5 }}
            pt={4}
          >
            <HStack gap={5}>
              <SocialIcon href="https://github.com/ankit2341" icon={faGithub} />
              <SocialIcon
                href="https://linkedin.com/in/ankit-patil-948036196"
                icon={faLinkedin}
              />
              <Box w="24px" h="1px" bg="brand.borderStrong" />
              <Text fontSize="xs" color="brand.muted" letterSpacing="0.24em">
                NAVI MUMBAI · OPEN TO REMOTE
              </Text>
            </HStack>
          </MotionBox>
        </VStack>

        <MotionBox
          flex={1}
          w="100%"
          maxW={{ base: '260px', md: '340px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          position="relative"
        >
          <Box className="portrait-frame">
            <Image
              src={AVATAR}
              alt="Ankit Patil"
              w="100%"
              h={{ base: '280px', md: '360px' }}
            />
            <Text className="portrait-caption">Ankit Patil, 2026</Text>
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
      fontSize="lg"
      _hover={{ color: 'brand.accent', textDecoration: 'none' }}
      transition="color 0.2s"
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
