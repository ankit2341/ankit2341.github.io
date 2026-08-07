'use client';
import { Box, Flex, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const facts = [
  { value: '3+', label: 'Years shipping\nproduction' },
  { value: '15+', label: 'Features delivered\nat Cloudgov' },
  { value: '2', label: 'Native apps\nlive on stores' },
  { value: '∞', label: 'Sketchbook\npages filled' },
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
        {/* Left — heading */}
        <VStack align="start" gap={4} gridColumn={{ lg: 'span 2' }}>
          <Text className="eyebrow">01 — About</Text>
          <Text className="section-heading">
            Code &amp; <em>graphite</em>.
          </Text>
          <Text className="hand" color="brand.primary" fontSize="3xl" pt={2}>
            two sides, one craft.
          </Text>
        </VStack>

        {/* Right — copy */}
        <VStack align="start" gap={6} gridColumn={{ lg: 'span 3' }}>
          <Text color="brand.text" fontSize={{ base: 'lg', md: 'xl' }} lineHeight={1.7}>
            I&apos;m a full-stack developer who spends weekdays shipping React and TypeScript, and
            weekends filling sketchbooks with graphite portraits.
          </Text>
          <Text color="brand.muted" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
            The two feel more alike than people think — both are about noticing the small stuff:
            the right amount of contrast, where the light falls, when to leave negative space, and
            how one confident stroke can beat a hundred timid ones. That&apos;s the mindset I bring
            to product work at{' '}
            <Text as="span" color="brand.primary" fontWeight={500}>
              Cloudgov
            </Text>
            , where I lead frontend across the platform and its docs.
          </Text>
          <Text color="brand.muted" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
            When I&apos;m not shipping features, I&apos;m usually sketching, learning a new UI
            library, or over-engineering my own portfolio (hi 👋).
          </Text>

          {/* Stat row */}
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} w="100%" pt={4}>
            {facts.map((fact, i) => (
              <MotionBox
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="sketch-card"
                p={4}
                textAlign="center"
              >
                <Text
                  fontFamily="'Fraunces', serif"
                  fontSize={{ base: '3xl', md: '4xl' }}
                  fontWeight={700}
                  color="brand.primary"
                  lineHeight={1}
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
                >
                  {fact.label}
                </Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </SimpleGrid>

      {/* Marquee of values */}
      <Box
        mt={{ base: 16, md: 24 }}
        py={6}
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="brand.border"
        className="marquee"
      >
        <Flex className="marquee__track">
          {[...Array(2)].flatMap((_, r) =>
            [
              'Design-driven engineering',
              'Small details matter',
              'Ship the thing',
              'Craft over noise',
              'Kind pixels',
              'Sketchbook always open',
            ].map((word, i) => (
              <HStack key={`${r}-${i}`} gap={6}>
                <Text
                  fontFamily="'Fraunces', serif"
                  fontStyle="italic"
                  fontSize={{ base: '2xl', md: '4xl' }}
                  color="brand.text"
                  fontWeight={500}
                >
                  {word}
                </Text>
                <Text color="brand.primary" fontSize="2xl">
                  ✦
                </Text>
              </HStack>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  );
}
