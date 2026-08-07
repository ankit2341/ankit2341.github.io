'use client';

import { Box, Text, VStack, HStack, Flex, Badge } from '@chakra-ui/react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Group = {
  heading: string;
  points: string[];
};

type Experience = {
  role: string;
  company: string;
  duration: string;
  location: string;
  groups: Group[];
  tags: string[];
};

const experiences: Experience[] = [
  {
    role: 'Full Stack Engineer, Frontend',
    company: 'RKS Cloud · Cloudgov',
    duration: 'Jul 2023 · Present',
    location: 'Navi Mumbai, India',
    groups: [
      {
        heading: 'Cloudgov Web · Next.js 15, TypeScript, Chakra UI, Apollo, GraphQL',
        points: [
          'Built and maintain the Cloudgov UI foundation, a design system in React and TypeScript on Chakra UI v3, reused across the CXO Dashboard, Insights, Anomaly detection and multi cloud Onboarding flows.',
          'Shipped executive facing surfaces including the CXO Dashboard with KPIs, drill downs and forecast views using Chart.js, and the AI Governance suite for LLM cost visibility.',
          'Owned the multi cloud Onboarding flow across AWS, GCP, Azure, Datadog and Databricks. Connector wizards, credential handling UI and validation states.',
          'Built a configurable alerting UI with a rule builder and preview, used by ops and support teams to catch anomalies before they hit customer bills.',
          'Integrated Okta SSO for enterprise tenants including the SAML callback flow and org scoped session state.',
          'Integrated Stripe for subscription billing and the payments UI.',
          'Wrote unit and integration tests with Jest and React Testing Library. Kept the shared UI covered as the surface grew.',
          'Frontend performance work: route level code splitting, dynamic imports for heavy widgets like Monaco and chart heavy dashboards, image optimization, asset lazy loading. Noticeably faster time to interactive on the main dashboards.',
          'Improved organic discoverability through Next.js metadata, sitemaps and structured data on public product pages.',
        ],
      },
      {
        heading: 'Docs and Marketing Platforms',
        points: [
          'Owned the Cloudgov Docusaurus documentation site end to end. IA, design, build, CI/CD deploy. Improved self serve onboarding for customers.',
          'Built and maintained supporting WordPress marketing surfaces alongside the product docs.',
        ],
      },
      {
        heading: 'TRZR Mobile · React Native, Expo, Gluestack UI',
        points: [
          'Shipped cross platform features across Android and iOS.',
          'Built a shared UI kit on Gluestack UI for parity between platforms.',
          'Integrated native modules including camera, geolocation and Expo push notifications for core in app features.',
          'Reduced re render churn on feed screens by memoizing list items and moving derived state out of render.',
        ],
      },
    ],
    tags: [
      'Next.js 15',
      'TypeScript',
      'Chakra UI v3',
      'Apollo GraphQL',
      'Chart.js',
      'Okta SSO',
      'Stripe',
      'React Native',
      'Expo',
      'Docusaurus',
    ],
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
        <Text className="eyebrow">02 / Experience</Text>
        <Text className="section-heading">
          Where I&apos;ve <em>shipped</em>.
        </Text>
        <Text color="brand.muted" fontSize={{ base: 'md', md: 'lg' }} maxW="600px" mt={2}>
          Production work at Cloudgov, from the design system up through executive dashboards
          and the mobile app.
        </Text>
      </VStack>

      <VStack gap={16} align="stretch">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} />
        ))}
      </VStack>
    </Box>
  );
}

function ExperienceCard({ exp }: { exp: Experience }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
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
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className="editorial-card"
      p={{ base: 6, md: 10 }}
    >
      <Flex
        justify="space-between"
        flexWrap="wrap"
        gap={3}
        mb={8}
        align={{ base: 'flex-start', md: 'center' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box>
          <Text
            fontFamily="'Fraunces', serif"
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight={400}
            color="brand.text"
            letterSpacing="-0.01em"
            lineHeight={1.15}
          >
            {exp.role}
          </Text>
          <Text
            color="brand.accent"
            fontSize="md"
            fontWeight={400}
            mt={2}
            fontFamily="'Fraunces', serif"
            fontStyle="italic"
          >
            {exp.company}
          </Text>
        </Box>
        <VStack align={{ base: 'flex-start', md: 'flex-end' }} gap={1}>
          <Text
            color="brand.text"
            fontSize="sm"
            fontWeight={500}
            letterSpacing="0.02em"
          >
            {exp.duration}
          </Text>
          <Text color="brand.muted" fontSize="xs" letterSpacing="0.02em">
            {exp.location}
          </Text>
        </VStack>
      </Flex>

      <Box h="1px" bg="brand.border" mb={8} />

      <VStack gap={10} align="stretch">
        {exp.groups.map((group) => (
          <Box key={group.heading}>
            <Text
              fontSize="xs"
              color="brand.muted"
              textTransform="uppercase"
              letterSpacing="0.24em"
              fontWeight={500}
              mb={4}
            >
              {group.heading}
            </Text>
            <VStack align="stretch" gap={3}>
              {group.points.map((point, i) => (
                <HStack key={i} align="flex-start" gap={4}>
                  <Text
                    color="brand.accent"
                    fontSize="sm"
                    mt={1}
                    fontFamily="'Fraunces', serif"
                    minW="20px"
                  >
                    0{i + 1}
                  </Text>
                  <Text
                    fontSize={{ base: 'sm', md: 'md' }}
                    color="brand.text"
                    lineHeight={1.75}
                    fontWeight={300}
                    flex={1}
                  >
                    {point}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        ))}
      </VStack>

      <Box h="1px" bg="brand.border" my={8} />

      <HStack gap={2} flexWrap="wrap">
        {exp.tags.map((tag) => (
          <Badge
            key={tag}
            bg="transparent"
            color="brand.muted"
            border="1px solid"
            borderColor="brand.border"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight={400}
            textTransform="none"
            letterSpacing="0.02em"
          >
            {tag}
          </Badge>
        ))}
      </HStack>
    </MotionBox>
  );
}
