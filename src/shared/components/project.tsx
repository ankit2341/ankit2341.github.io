'use client';
import { Box, Text, SimpleGrid, Link, Image, VStack, Flex, HStack, Badge } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal, SplitText } from './reveal';

type Project = {
  index: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  code: string;
  live?: string;
  techNames: string[];
};

const projects: Project[] = [
  {
    index: '01',
    title: 'MedKart',
    tagline: 'Full stack healthcare web app',
    description:
      'Order medicines and book lab tests. Auth, cart and checkout, filtered search, prescription upload handling. End to end from schema design to responsive UI.',
    image: 'https://i.postimg.cc/59y8tJfQ/image.png',
    code: 'https://github.com/ankit2341/MedKart',
    live: 'https://medkart.vercel.app/',
    techNames: ['Next.js', 'TypeScript', 'Node / Express', 'MongoDB'],
  },
  {
    index: '02',
    title: 'E camp',
    tagline: 'Camp discovery and booking platform',
    description:
      'Camp browsing and booking web app with filtered search and a checkout UX designed to compress the steps between browse and confirm.',
    image: 'https://i.postimg.cc/Y297npkY/ecamp1.jpg',
    code: 'https://github.com/ankit2341/E-Camp-app',
    live: 'https://e-camp-app.vercel.app/',
    techNames: ['Next.js', 'TypeScript', 'Node / Express', 'MongoDB'],
  },
];

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionImage = motion(Image);

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <MotionBox
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      className="editorial-card"
      overflow="hidden"
      mt={{ lg: index % 2 === 1 ? 16 : 0 }}
    >
      <Box position="relative" overflow="hidden" h={{ base: '260px', md: '360px' }}>
        <MotionImage
          src={project.image}
          alt={project.title}
          objectFit="cover"
          objectPosition="top"
          w="100%"
          h="120%"
          style={{ y: imgY, scale: imgScale }}
          filter="grayscale(0.15) contrast(1.02)"
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-t, rgba(11,11,10,0.7), transparent 45%)"
          pointerEvents="none"
        />
        <Text
          position="absolute"
          top={5}
          left={6}
          color="brand.text"
          fontSize="xs"
          fontFamily="'DM Mono', monospace"
          letterSpacing="0.24em"
          textShadow="0 1px 4px rgba(0,0,0,0.6)"
        >
          {project.index} · PROJECT
        </Text>
      </Box>

      <VStack align="start" p={{ base: 6, md: 10 }} gap={5}>
        <Text
          fontSize="xs"
          color="brand.muted"
          letterSpacing="0.24em"
          textTransform="uppercase"
          fontFamily="'DM Mono', monospace"
          fontWeight={400}
        >
          {project.tagline}
        </Text>
        <Text
          fontFamily="'Instrument Serif', serif"
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight={400}
          color="brand.text"
          letterSpacing="-0.02em"
          lineHeight={1}
        >
          {project.title}
        </Text>
        <Text color="brand.muted" fontSize="md" lineHeight={1.75} fontWeight={300}>
          {project.description}
        </Text>

        <HStack gap={2} flexWrap="wrap">
          {project.techNames.map((tech) => (
            <Badge
              key={tech}
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
              fontFamily="'DM Mono', monospace"
            >
              {tech}
            </Badge>
          ))}
        </HStack>

        <HStack gap={5} pt={2}>
          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              color="brand.text"
              fontWeight={500}
              fontSize="sm"
              display="inline-flex"
              alignItems="center"
              gap={2}
              className="link-slide"
              _hover={{ color: 'brand.muted', textDecoration: 'none' }}
            >
              Live site
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
            </Link>
          )}
          <Link
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            color="brand.muted"
            fontWeight={500}
            fontSize="sm"
            display="inline-flex"
            alignItems="center"
            gap={2}
            _hover={{ color: 'brand.text', textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={faGithub} />
            Source
          </Link>
        </HStack>
      </VStack>
    </MotionBox>
  );
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const numeralY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const numeralOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.4, 0.4, 0]);

  return (
    <Box
      id="projects"
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
        right={{ base: '-20px', md: '-40px' }}
        fontSize={{ base: '180px', md: '320px' }}
        style={{ y: numeralY, opacity: numeralOpacity }}
        display={{ base: 'none', md: 'block' }}
      >
        04
      </MotionText>

      <SimpleGrid columns={{ base: 1, lg: 5 }} gap={{ base: 10, lg: 16 }} mb={16}>
        <VStack align="start" gap={4} gridColumn={{ lg: 'span 2' }}>
          <Reveal>
            <Text className="eyebrow">04 / Selected work</Text>
          </Reveal>
          <Text className="section-heading">
            <SplitText text="Things I've" delay={0.1} stagger={0.06} />
            <br />
            <Text as="span" fontStyle="italic" opacity={0.7}>
              <SplitText text="built." delay={0.5} stagger={0.06} />
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
            Side projects to explore new stacks and design ideas end to end.
          </Text>
        </Reveal>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
        {projects.map((project, i) => (
          <ProjectCard key={project.index} project={project} index={i} />
        ))}
      </SimpleGrid>

      <Flex mt={16} justify="center">
        <Link
          href="https://github.com/ankit2341?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          color="brand.text"
          fontWeight={500}
          fontSize="sm"
          display="inline-flex"
          alignItems="center"
          gap={2}
          px={7}
          py={3}
          borderRadius="full"
          border="1px solid"
          borderColor="brand.borderStrong"
          _hover={{
            borderColor: 'brand.text',
            textDecoration: 'none',
            transform: 'translateY(-2px)',
          }}
          transition="all 0.3s"
        >
          <FontAwesomeIcon icon={faCodeBranch} />
          View all repositories
        </Link>
      </Flex>
    </Box>
  );
};

export default ProjectsSection;
