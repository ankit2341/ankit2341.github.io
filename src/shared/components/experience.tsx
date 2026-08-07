'use client';

import { Box, Text, VStack, HStack, Flex, Badge } from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const experiences = [
  {
    company: 'Cloudgov',
    role: 'Lead Frontend Engineer',
    duration: 'Jul 2023 – Present',
    location: 'RKS Cloud · Navi Mumbai, India',
    points: [
      'Led the frontend team in architecting scalable design systems and reusable component libraries, improving development efficiency by 30%.',
      'Developed 15+ features using Next.js, TypeScript, and Chakra UI to streamline workflows and enhance UI consistency, reducing page load times by 40%.',
      'Integrated Single Sign-On (SSO) authentication using Okta on the frontend, enabling secure, seamless user access.',
      'Delivered a customer-facing documentation site with Docusaurus — full ownership of design, dev, and deployment.',
      'Built the frontend interface for a report alerting system enabling users to configure threshold-based alerts.',
      'Implemented SEO best practices to improve site visibility, indexing, and organic search performance.',
    ],
    tags: ['Next.js', 'TypeScript', 'Chakra UI', 'Okta SSO', 'Docusaurus'],
  },
  {
    company: 'TRZR',
    role: 'React Native Engineer',
    duration: 'Jul 2023 – Present',
    location: 'RKS Cloud · Navi Mumbai, India',
    points: [
      'Led React Native development for Android/iOS apps, optimizing state management to improve UI load times by 25%.',
      'Built and maintained cross-platform UI components with Gluestack UI, ensuring visual consistency and accessibility.',
      'Integrated key Expo modules (expo-camera, expo-location, expo-notifications) for rich native functionality.',
      'Collaborated with backend team to design scalable, performance-optimized solutions for key platform features.',
    ],
    tags: ['React Native', 'Expo', 'Gluestack UI', 'iOS', 'Android'],
  },
];

const MotionBox = motion(Box);

export default function ExperienceTimeline() {
  return (
    <Box
      id="experience"
      as="section"
      w="100%"
      maxW="1200px"
      mx="auto"
      py={{ base: 20, md: 32 }}
      px={{ base: 5, md: 8 }}
    >
      <VStack align="start" gap={3} mb={16}>
        <Text className="eyebrow">02 — Where I've been</Text>
        <Text className="section-heading">
          Selected <em>experience</em>
        </Text>
        <Text color="brand.muted" fontSize={{ base: 'md', md: 'lg' }} maxW="600px">
          Shipping production software with small, thoughtful teams — with an eye for craft.
        </Text>
      </VStack>

      <Box position="relative" pl={{ base: 6, md: 10 }}>
        <Box
          position="absolute"
          left={{ base: '10px', md: '14px' }}
          top={0}
          bottom={0}
          width="1px"
          bg="brand.border"
        />
        <VStack gap={12} align="stretch">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}
        </VStack>
      </Box>
    </Box>
  );
}

function ExperienceCard({
  exp,
}: {
  exp: {
    company: string;
    role: string;
    duration: string;
    location: string;
    points: string[];
    tags: string[];
  };
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      position="relative"
    >
      <Box
        position="absolute"
        left={{ base: '-19px', md: '-27px' }}
        top="24px"
        boxSize="14px"
        borderRadius="full"
        bg="brand.primary"
        border="3px solid"
        borderColor="brand.background"
        boxShadow="0 0 0 1px var(--chakra-colors-brand-border)"
      />

      <Box className="sketch-card" p={{ base: 5, md: 8 }}>
        <Flex
          justify="space-between"
          flexWrap="wrap"
          gap={2}
          mb={1}
          align={{ base: 'flex-start', md: 'center' }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box>
            <Text
              fontFamily="'Fraunces', serif"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight={600}
              color="brand.text"
              letterSpacing="-0.01em"
            >
              {exp.role}
            </Text>
            <Text color="brand.primary" fontSize="md" fontWeight={500} mt={1}>
              @ {exp.company}
            </Text>
          </Box>
          <VStack align={{ base: 'flex-start', md: 'flex-end' }} gap={0}>
            <Text color="brand.muted" fontSize="sm" fontWeight={500}>
              {exp.duration}
            </Text>
            <Text color="brand.muted" fontSize="xs">
              {exp.location}
            </Text>
          </VStack>
        </Flex>

        <VStack as="ul" pl={4} gap={2} align="start" mt={5}>
          {exp.points.map((point, i) => (
            <Text
              as="li"
              key={i}
              fontSize={{ base: 'sm', md: 'md' }}
              color="brand.muted"
              lineHeight={1.7}
              listStyleType="'— '"
              css={{ '&::marker': { color: 'var(--chakra-colors-brand-primary)' } }}
            >
              {point}
            </Text>
          ))}
        </VStack>

        <HStack gap={2} mt={6} flexWrap="wrap">
          {exp.tags.map((tag) => (
            <Badge
              key={tag}
              bg="brand.surfaceAlt"
              color="brand.primary"
              border="1px solid"
              borderColor="brand.border"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="xs"
              fontWeight={500}
              textTransform="none"
            >
              {tag}
            </Badge>
          ))}
        </HStack>
      </Box>
    </MotionBox>
  );
}
