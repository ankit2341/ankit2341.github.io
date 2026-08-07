'use client';
import { Box, Text, SimpleGrid, Link, Image, VStack, Flex, HStack, Badge } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

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

const ProjectsSection = () => {
  return (
    <Box
      id="projects"
      as="section"
      w="100%"
      maxW="1200px"
      mx="auto"
      py={{ base: 20, md: 32 }}
      px={{ base: 5, md: 8 }}
    >
      <VStack align="start" gap={3} mb={16}>
        <Text className="eyebrow">03 / Selected work</Text>
        <Text className="section-heading">
          Things I&apos;ve <em>built</em>.
        </Text>
        <Text color="brand.muted" fontSize={{ base: 'md', md: 'lg' }} maxW="600px" mt={2}>
          Side projects to explore new stacks and design ideas end to end.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="editorial-card"
            overflow="hidden"
          >
            <Box position="relative" overflow="hidden">
              <Image
                src={project.image}
                alt={project.title}
                objectFit="cover"
                objectPosition="top"
                w="100%"
                h={{ base: '220px', md: '300px' }}
                transition="transform 0.7s cubic-bezier(0.2,0.8,0.2,1)"
                _hover={{ transform: 'scale(1.03)' }}
                filter="saturate(0.92)"
              />
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-t, rgba(10,10,10,0.6), transparent 45%)"
                pointerEvents="none"
              />
              <Text
                position="absolute"
                top={4}
                left={5}
                color="brand.text"
                fontSize="xs"
                fontFamily="'Fraunces', serif"
                letterSpacing="0.24em"
                textShadow="0 1px 4px rgba(0,0,0,0.6)"
              >
                {project.index}
              </Text>
            </Box>

            <VStack align="start" p={{ base: 6, md: 8 }} gap={4}>
              <Text
                fontSize="xs"
                color="brand.accent"
                letterSpacing="0.2em"
                textTransform="uppercase"
                fontWeight={500}
              >
                {project.tagline}
              </Text>
              <Text
                fontFamily="'Fraunces', serif"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight={400}
                color="brand.text"
                letterSpacing="-0.02em"
                lineHeight={1.1}
              >
                {project.title}
              </Text>
              <Text color="brand.muted" fontSize="md" lineHeight={1.75}>
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
                    _hover={{ color: 'brand.accent', textDecoration: 'none' }}
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
                  _hover={{ color: 'brand.accent', textDecoration: 'none' }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                  Source
                </Link>
              </HStack>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>

      <Flex mt={12} justify="center">
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
          px={6}
          py={3}
          borderRadius="full"
          border="1px solid"
          borderColor="brand.borderStrong"
          _hover={{ borderColor: 'brand.text', color: 'brand.accent', textDecoration: 'none' }}
          transition="all 0.2s"
        >
          <FontAwesomeIcon icon={faCodeBranch} />
          View all repositories
        </Link>
      </Flex>
    </Box>
  );
};

export default ProjectsSection;
