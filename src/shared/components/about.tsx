'use client';
import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal, SplitText } from './reveal';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const facts = [
  { value: '3+', label: 'Years shipping\nproduction React' },
  { value: '5', label: 'Clouds in the\nonboarding flow' },
  { value: '2', label: 'Cross platform\napps live' },
  { value: '1', label: 'Design system\nbuilt from scratch' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const numeralY = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const numeralOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Box
      id="about"
      as="section"
      ref={sectionRef}
      position="relative"
      w="100%"
      maxW="1200px"
      mx="auto"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
      overflow="hidden"
    >
      <MotionText
        className="bg-numeral"
        top="5%"
        right={{ base: '-30px', md: '-60px' }}
        fontSize={{ base: '220px', md: '440px' }}
        style={{ y: numeralY, opacity: numeralOpacity }}
        display={{ base: 'none', md: 'block' }}
      >
        01
      </MotionText>

      <SimpleGrid columns={{ base: 1, lg: 5 }} gap={{ base: 8, lg: 16 }}>
        <MotionBox gridColumn={{ lg: 'span 2' }} style={{ y: headingY }}>
          <VStack align="start" gap={4}>
            <Reveal>
              <Text className="eyebrow">01 / About</Text>
            </Reveal>
            <Text className="section-heading">
              <SplitText text="Craft over" delay={0.1} stagger={0.08} />
              <br />
              <Text as="span" color="brand.muted" fontWeight={300}>
                <SplitText text="noise." delay={0.5} stagger={0.08} />
              </Text>
            </Text>
          </VStack>
        </MotionBox>

        <VStack align="start" gap={5} gridColumn={{ lg: 'span 3' }}>
          <Reveal delay={0.2}>
            <Text
              color="brand.text"
              fontSize={{ base: 'xl', md: '2xl' }}
              lineHeight={1.5}
              fontWeight={500}
              letterSpacing="-0.01em"
            >
              I care about the small stuff. Load order. The difference between hover and
              focus. How a chart reads at a glance. Whether a table stays honest under real
              data.
            </Text>
          </Reveal>

          <Reveal delay={0.35}>
            <Text
              color="brand.muted"
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight={1.75}
              fontWeight={400}
            >
              At Cloudgov I lead the frontend for a multi cloud FinOps and governance
              platform. The work spans a shared design system on Chakra UI v3, the CXO
              Dashboard and AI Governance surfaces, an onboarding flow across AWS, GCP,
              Azure, Datadog and Databricks, Okta SSO for enterprise tenants, and the
              Docusaurus documentation site.
            </Text>
          </Reveal>

          <Reveal delay={0.5}>
            <Text
              color="brand.muted"
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight={1.75}
              fontWeight={400}
            >
              On the mobile side I ship features on TRZR with React Native and Expo. Off the
              clock I sketch in graphite and occasionally over engineer my own portfolio.
            </Text>
          </Reveal>

          <SimpleGrid columns={{ base: 2, md: 4 }} gap={3} w="100%" pt={4}>
            {facts.map((fact, i) => (
              <Reveal key={fact.label} delay={0.6 + i * 0.08} y={30}>
                <MotionBox
                  className="editorial-card"
                  p={4}
                  h="100%"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Text
                    fontSize={{ base: '4xl', md: '5xl' }}
                    fontWeight={900}
                    color="brand.text"
                    lineHeight={1}
                    letterSpacing="-0.03em"
                  >
                    {fact.value}
                  </Text>
                  <Text
                    color="brand.muted"
                    fontSize="xs"
                    mt={2}
                    whiteSpace="pre-line"
                    lineHeight={1.4}
                    fontWeight={500}
                    letterSpacing="0.02em"
                    textTransform="uppercase"
                  >
                    {fact.label}
                  </Text>
                </MotionBox>
              </Reveal>
            ))}
          </SimpleGrid>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
