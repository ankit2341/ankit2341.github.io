'use client';
import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const facts = [
  { value: '3+', label: 'Years shipping\nproduction React' },
  { value: '5', label: 'Clouds integrated in\nthe onboarding flow' },
  { value: '2', label: 'Cross platform\napps live' },
  { value: '1', label: 'Design system built\nfrom scratch' },
];

export default function AboutSection() {
  return (
    <Box
      id="about"
      as="section"
      w="100%"
      maxW="1200px"
      mx="auto"
      py={{ base: 20, md: 32 }}
      px={{ base: 5, md: 8 }}
    >
      <SimpleGrid columns={{ base: 1, lg: 5 }} gap={{ base: 12, lg: 16 }}>
        <VStack align="start" gap={4} gridColumn={{ lg: 'span 2' }}>
          <Text className="eyebrow">01 / About</Text>
          <Text className="section-heading">
            Frontend that carries <em>weight</em>.
          </Text>
        </VStack>

        <VStack align="start" gap={6} gridColumn={{ lg: 'span 3' }}>
          <Text
            color="brand.text"
            fontSize={{ base: 'lg', md: 'xl' }}
            lineHeight={1.7}
            fontFamily="'Fraunces', serif"
            fontWeight={400}
            fontStyle="italic"
          >
            I care about the small stuff. Load order, the difference between hover and focus, how
            a chart reads at a glance, whether a table stays honest under real data.
          </Text>
          <Text color="brand.muted" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
            At Cloudgov I lead the frontend for a multi cloud FinOps and governance platform.
            The work spans a shared design system on Chakra UI v3, the CXO Dashboard and AI
            Governance surfaces, an onboarding flow across AWS, GCP, Azure, Datadog and
            Databricks, Okta SSO for enterprise tenants, and the Docusaurus documentation site.
          </Text>
          <Text color="brand.muted" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
            On the mobile side I ship features on TRZR with React Native and Expo. Off the
            clock I sketch in graphite and occasionally over engineer my own portfolio.
          </Text>

          <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} w="100%" pt={4}>
            {facts.map((fact, i) => (
              <MotionBox
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="editorial-card"
                p={5}
              >
                <Text
                  fontFamily="'Fraunces', serif"
                  fontSize={{ base: '3xl', md: '4xl' }}
                  fontWeight={400}
                  color="brand.text"
                  lineHeight={1}
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
                >
                  {fact.label}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
