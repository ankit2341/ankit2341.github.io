'use client';
import { Box, Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal, SplitText } from './reveal';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const focus = [
  'Design systems',
  'Data heavy dashboards',
  'React Native for mobile',
  'Frontend performance',
  'Documentation sites',
  'Design engineering',
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
              <SplitText text="Hey, I'm" delay={0.1} stagger={0.08} />
              <br />
              <Text as="span" color="brand.muted" fontWeight={300}>
                <SplitText text="Ankit." delay={0.5} stagger={0.08} />
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
              Engineer by trade, sketch artist by weekend. I build for the web and for
              mobile, and I&apos;m a lot more interested in whether the thing feels right
              than which framework it was built with.
            </Text>
          </Reveal>

          <Reveal delay={0.35}>
            <Text
              color="brand.muted"
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight={1.75}
              fontWeight={400}
            >
              I like building things that hold up under real users, not just demo data. That
              usually means caring about the small stuff: load order, focus states, how a
              chart reads at a glance, whether a form is honest about its errors. Craft over
              noise, always.
            </Text>
          </Reveal>

          <Reveal delay={0.5}>
            <Text
              color="brand.muted"
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight={1.75}
              fontWeight={400}
            >
              I write React, Next.js and TypeScript most days, and reach for React Native
              when the work goes mobile. I&apos;m happiest inside a design system, or in the
              part of the codebase where design and engineering blur into one thing. Off the
              clock I sketch in graphite, hence the pencil portrait up top.
            </Text>
          </Reveal>

          <Reveal delay={0.6}>
            <Box w="100%" pt={2}>
              <Text
                fontSize="xs"
                color="brand.muted"
                letterSpacing="0.24em"
                textTransform="uppercase"
                fontWeight={600}
                mb={3}
              >
                What I focus on
              </Text>
              <Flex gap={2} flexWrap="wrap">
                {focus.map((item) => (
                  <Box
                    key={item}
                    px={3}
                    py={1.5}
                    border="1px solid"
                    borderColor="brand.border"
                    borderRadius="full"
                    bg="brand.surface"
                    fontSize="xs"
                    fontWeight={500}
                    color="brand.text"
                  >
                    {item}
                  </Box>
                ))}
              </Flex>
            </Box>
          </Reveal>
        </VStack>
      </SimpleGrid>
    </Box>
  );
}
