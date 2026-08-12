'use client';

import { Box, Text, VStack, HStack, Flex, Badge, SimpleGrid } from '@chakra-ui/react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Reveal, SplitText } from './reveal';

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
const MotionText = motion(Text);

export default function ExperienceTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const numeralY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const numeralOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.4, 0.4, 0]);

  return (
    <Box
      id="experience"
      as="section"
      ref={sectionRef}
      position="relative"
      w="100%"
      maxW="1200px"
      mx="auto"
      py={{ base: 24, md: 40 }}
      px={{ base: 5, md: 8 }}
      overflow="hidden"
    >
      <MotionText
        className="bg-numeral"
        top="8%"
        left={{ base: '-20px', md: '-40px' }}
        fontSize={{ base: '180px', md: '320px' }}
        style={{ y: numeralY, opacity: numeralOpacity }}
        display={{ base: 'none', md: 'block' }}
      >
        03
      </MotionText>

      <SimpleGrid columns={{ base: 1, lg: 5 }} gap={{ base: 10, lg: 16 }} mb={16}>
        <VStack align="start" gap={4} gridColumn={{ lg: 'span 2' }}>
          <Reveal>
            <Text className="eyebrow">03 / Experience</Text>
          </Reveal>
          <Text className="section-heading">
            <SplitText text="Where I've" delay={0.1} stagger={0.06} />
            <br />
            <Text as="span" fontStyle="italic" opacity={0.7}>
              <SplitText text="shipped." delay={0.5} stagger={0.06} />
            </Text>
          </Text>
        </VStack>
        <Reveal gridColumn={{ lg: 'span 3' }} delay={0.3}>
          <Text
            color="brand.muted"
            fontSize={{ base: 'md', md: 'lg' }}
            maxW="560px"
            fontWeight={300}
            lineHeight={1.8}
            pt={{ lg: 8 }}
          >
            Production work at Cloudgov, from the design system up through executive
            dashboards and the mobile app.
          </Text>
        </Reveal>
      </SimpleGrid>

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
  const isInView = useInView(ref, { once: true, amount: 0.1 });
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
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
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
            fontFamily="'Instrument Serif', serif"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight={400}
            color="brand.text"
            letterSpacing="-0.01em"
            lineHeight={1.05}
          >
            {exp.role}
          </Text>
          <Text
            color="brand.text"
            fontSize="md"
            fontWeight={400}
            mt={2}
            fontFamily="'Instrument Serif', serif"
            fontStyle="italic"
            opacity={0.75}
          >
            {exp.company}
          </Text>
        </Box>
        <VStack align={{ base: 'flex-start', md: 'flex-end' }} gap={1}>
          <Text
            color="brand.text"
            fontSize="sm"
            fontWeight={400}
            fontFamily="'DM Mono', monospace"
            letterSpacing="0.05em"
          >
            {exp.duration}
          </Text>
          <Text
            color="brand.muted"
            fontSize="xs"
            fontFamily="'DM Mono', monospace"
            letterSpacing="0.05em"
          >
            {exp.location}
          </Text>
        </VStack>
      </Flex>

      <Box h="1px" bg="brand.border" mb={10} />

      <VStack gap={12} align="stretch">
        {exp.groups.map((group, gi) => (
          <MotionBox
            key={group.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: gi * 0.1 }}
          >
            <Text
              fontSize="xs"
              color="brand.muted"
              textTransform="uppercase"
              letterSpacing="0.24em"
              fontWeight={400}
              mb={5}
              fontFamily="'DM Mono', monospace"
            >
              {group.heading}
            </Text>
            <VStack align="stretch" gap={3}>
              {group.points.map((point, i) => (
                <MotionBox
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <HStack align="flex-start" gap={4}>
                    <Text
                      color="brand.muted"
                      fontSize="xs"
                      mt={1.5}
                      fontFamily="'DM Mono', monospace"
                      minW="24px"
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
                </MotionBox>
              ))}
            </VStack>
          </MotionBox>
        ))}
      </VStack>

      <Box h="1px" bg="brand.border" my={10} />

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
            fontFamily="'DM Mono', monospace"
          >
            {tag}
          </Badge>
        ))}
      </HStack>
    </MotionBox>
  );
}
