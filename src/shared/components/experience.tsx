'use client';

import { Box, Text, VStack, HStack, Stack, Flex } from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const experiences = [
  {
    company: 'Cloudgov',
    duration: 'Jul 2023 – today',
    location: 'RKS Cloud, Navi Mumbai, India',
    points: [
      'Led the frontend team in architecting scalable design systems and reusable component libraries, improving development efficiency by 30%.',
      'Developed 15+ features using Next.js, TypeScript, and Chakra UI to streamline workflows and enhance UI consistency, reducing page load times by 40%.',
      'Integrated Single Sign-On (SSO) authentication using Okta on the frontend, enabling secure, seamless user access and aligning with enterprise identity standards.',
      'Delivered a customer-facing documentation site for Cloudgov using Docusaurus, with full ownership over design, development, and deployment to ensure responsive, scalable, and branded technical content.',
      'Built the frontend interface for a report alerting system that enables users to configure threshold-based alerts, triggering backend-driven email and message notifications for timely reporting insights.',
      'Implemented SEO best practices to improve site visibility, indexing, and organic search performance.',
    ],
  },
  {
    company: 'TRZR',
    duration: 'Jul 2023 – today',
    location: 'RKS Cloud, Navi Mumbai, India',
    points: [
      'Led React Native development for Android/iOS apps, optimizing state management to improve UI load times by 25% while implementing key features',
      'Built and maintained cross-platform UI components using Gluestack UI, ensuring visual consistency and accessibility across iOS and Android.',
      'Integrated key Expo modules such as expo-camera, expo-location, and expo-notifications to enable rich, device native functionality with minimal overhead.',
      'Collaborated with the backend team to design scalable, performance-optimized solutions for key platform features.',
    ],
  },
];

const MotionBox = motion(Box);

export default function ExperienceTimeline() {
  return (
    <Box py={20} w={'100%'} id="experience" px={{ base: 0, md: 12 }} position="relative">
      <Flex w={'100%'} justify="center" mb={12}>
        <h1 className="jt --debug">
          <span className="jt__row">
            <span className="jt__text">Experience</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Experience</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Experience</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Experience</span>
          </span>
        </h1>
      </Flex>
      <VStack gap={10} align="stretch" position="relative">
        {/* Vertical line */}
        <Box position="absolute" left="20px" top="0" bottom="0" width="2px" bg="gray.700" />

        {experiences.map((exp, index) => (
          <ExperienceCard exp={exp} key={index} />
        ))}
      </VStack>
    </Box>
  );
}

function ExperienceCard({
  exp,
}: {
  exp: { company: string; duration: string; location: string; points: string[] };
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <MotionBox
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      pl={12}
      pos="relative"
    >
      {/* Circle Dot */}
      <Box
        position="absolute"
        left="12px"
        top="6px"
        boxSize="12px"
        borderRadius="full"
        bg="brand.primary"
        zIndex={1}
      />

      <Stack
        gap={2}
        bg="brand.background"
        p={6}
        rounded="lg"
        shadow="md"
        borderLeft="4px solid"
        borderColor="brand.primary"
      >
        <HStack justify="space-between" flexWrap="wrap">
          <Text fontWeight="bold" fontSize="lg" color="white">
            {exp.company}
          </Text>
          <Text fontSize="sm" color="gray.400">
            {exp.duration}
          </Text>
        </HStack>
        <Text fontSize="sm" color="gray.300" mb={2}>
          {exp.location}
        </Text>
        <VStack as="ul" pl={4} gap={1} align="start">
          {exp.points.map((point: string, i: number) => (
            <Text as="li" key={i} fontSize="sm" color="gray.200" listStyleType="disc">
              {point}
            </Text>
          ))}
        </VStack>
      </Stack>
    </MotionBox>
  );
}
