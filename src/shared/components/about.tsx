'use client';
import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal, SplitText } from './reveal';

const MotionBox = motion(Box);

const facts = [
  { value: '3+', label: 'Years shipping\nproduction React' },
  { value: '5', label: 'Clouds integrated in\nthe onboarding flow' },
  { value: '2', label: 'Cross platform\napps live' },
  { value: '1', label: 'Design system built\nfrom scratch' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const numeralY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const numeralOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.4, 0.4, 0]);

  return (
    <Box
      id="about"
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
        top="10%"
        right={{ base: '-20px', md: '-40px' }}
        fontSize={{ base: '180px', md: '320px' }}
        style={{ y: numeralY, opacity: numeralOpacity }}
        display={{ base: 'none', md: 'block' }}
      >
        02
      </MotionText>

      <SimpleGrid columns={{ base: 1, lg: 5 }} gap={{ base: 12, lg: 16 }}>
        <VStack align="start" gap={4} gridColumn={{ lg: 'span 2' }}>
          <Reveal>
            <Text className="eyebrow">02 / About</Text>
          </Reveal>
          <Text className="section-heading">
            <SplitText text="Craft over" delay={0.1} stagger={0.08} />
            <br />
            <Text as="span" fontStyle="italic" opacity={0.7}>
              <SplitText text="noise." delay={0.5} stagger={0.08} />
            </Text>
          </Text>
        </VStack>

        <VStack align="start" gap={6} gridColumn={{ lg: 'span 3' }}>
          <Reveal delay={0.2}>
            <Text
              color="brand.text"
              fontSize={{ base: 'xl', md: '2xl' }}
              lineHeight={1.5}
              fontFamily="'Instrument Serif', serif"
              fontWeight={400}
              fontStyle="italic"
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
              lineHeight={1.8}
              fontWeight={300}
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
              lineHeight={1.8}
              fontWeight={300}
            >
              On the mobile side I ship features on TRZR with React Native and Expo. Off the
              clock I sketch in graphite and occasionally over engineer my own portfolio.
            </Text>
          </Reveal>

          <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} w="100%" pt={4}>
            {facts.map((fact, i) => (
              <Reveal key={fact.label} delay={0.6 + i * 0.1} y={30}>
                <MotionBox
                  className="editorial-card"
                  p={5}
                  h="100%"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <Text
                    fontFamily="'Instrument Serif', serif"
                    fontSize={{ base: '4xl', md: '5xl' }}
                    fontWeight={400}
                    color="brand.text"
                    lineHeight={1}
                    fontStyle="italic"
                  >
                    {fact.value}
                  </Text>
                  <Text
                    color="brand.muted"
                    fontSize="xs"
                    mt={3}
                    whiteSpace="pre-line"
                    lineHeight={1.5}
                    fontWeight={400}
                    fontFamily="'DM Mono', monospace"
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

const MotionText = motion(Text);
