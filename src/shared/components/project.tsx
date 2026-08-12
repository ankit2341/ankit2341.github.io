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
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.1, 1.2]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.2, 0.5]);

  return (
    <MotionBox
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      className="editorial-card"
      overflow="hidden"
      mt={{ lg: index % 2 === 1 ? 12 : 0 }}
    >
      <Box position="relative" overflow="hidden" h={{ base: '240px', md: '340px' }}>
        <MotionImage
          src={project.image}
          alt={project.title}
          objectFit="cover"
          objectPosition="top"
          w="100%"
          h="120%"
          style={{ y: imgY, scale: imgScale }}
        />
        <MotionBox
          position="absolute"
          inset={0}
          bg="linear-gradient(to top, rgba(10,10,10,0.85), transparent 45%)"
          pointerEvents="none"
          style={{ opacity: overlayOpacity }}
        />
        <Text
          position="absolute"
          top={5}
          left={6}
          color="white"
          fontSize="xs"
          fontWeight={700}
          letterSpacing="0.24em"
          textShadow="0 1px 4px rgba(0,0,0,0.6)"
        >
          {project.index} · PROJECT
        </Text>
      </Box>

      <VStack align="start" p={{ base: 6, md: 8 }} gap={4}>
        <Text
          fontSize="xs"
          color="brand.muted"
          letterSpacing="0.24em"
          textTransform="uppercase"
          fontWeight={600}
        >
          {project.tagline}
        </Text>
        <Text
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight={900}
          color="brand.text"
          letterSpacing="-0.03em"
          lineHeight={0.95}
          textTransform="uppercase"
        >
          {project.title}
        </Text>
        <Text color="brand.muted" fontSize="md" lineHeight={1.7} fontWeight={400}>
          {project.description}
        </Text>

        <HStack gap={2} flexWrap="wrap">
          {project.techNames.map((tech) => (
            <Badge
              key={tech}
              bg="brand.surfaceAlt"
              color="brand.text"
              border="1px solid"
              borderColor="brand.border"
              px={3}
              py={1}
              borderRadius="full"
              fontSize="xs"
              fontWeight={500}
              textTransform="none"
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
              fontWeight={600}
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
            fontWeight={600}
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
  const numeralY = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const numeralOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <Box
      id="projects"
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
        03
      </MotionText>

      <SimpleGrid columns={{ base: 1, lg: 5 }} gap={{ base: 8, lg: 16 }} mb={12}>
        <MotionBox gridColumn={{ lg: 'span 2' }} style={{ y: headingY }}>
          <VStack align="start" gap={4}>
            <Reveal>
              <Text className="eyebrow">03 / Selected work</Text>
            </Reveal>
            <Text className="section-heading">
              <SplitText text="Things I've" delay={0.1} stagger={0.06} />
              <br />
              <Text as="span" color="brand.muted" fontWeight={300}>
                <SplitText text="built." delay={0.5} stagger={0.06} />
              </Text>
            </Text>
          </VStack>
        </MotionBox>
        <Reveal gridColumn={{ lg: 'span 3' }} delay={0.3}>
          <Text
            color="brand.muted"
            fontSize={{ base: 'md', md: 'lg' }}
            maxW="560px"
            fontWeight={400}
            lineHeight={1.75}
            pt={{ lg: 8 }}
          >
            Side projects to explore new stacks and design ideas end to end.
          </Text>
        </Reveal>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
        {projects.map((project, i) => (
          <ProjectCard key={project.index} project={project} index={i} />
        ))}
      </SimpleGrid>

      <Flex mt={12} justify="center">
        <Link
          href="https://github.com/ankit2341?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          color="brand.text"
          fontWeight={600}
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
