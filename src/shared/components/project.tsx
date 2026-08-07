'use client';
import {
  Box,
  Text,
  SimpleGrid,
  Link,
  Image,
  VStack,
  Flex,
  HStack,
  Badge,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
  techNames: string[];
};

const projects: Project[] = [
  {
    title: 'Medkart',
    tagline: 'Healthcare · E-commerce',
    description:
      'A modern web app for buying medical and wellness products online, with seamless lab test booking and doorstep diagnostic services.',
    image:
      'https://camo.githubusercontent.com/7837518fc339533e00b76d174365b5bf5d062c48d852f15618add2f3a211ac5c/68747470733a2f2f692e706f7374696d672e63632f37627635427047712f696d6167652e706e67',
    link: 'https://medkart.vercel.app/',
    techStack: [
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nextjs/nextjs-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg',
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mongodb/mongodb-original-wordmark.svg',
    ],
    techNames: ['Next.js', 'TypeScript', 'Node', 'MongoDB'],
  },
  {
    title: 'E-camp',
    tagline: 'Booking · Adventure',
    description:
      'Discover and book adventure, wellness, and educational camps effortlessly. Real-time availability, detailed listings, and secure reservations.',
    image:
      'https://camo.githubusercontent.com/7cade5525fa4e576351b592ff84827c9a33d82ae691a44e4ab556e6b53a3c477/68747470733a2f2f692e706f7374696d672e63632f4d486867584a6e702f6563616d70312e6a7067',
    link: 'https://e-camp-app.vercel.app/',
    techStack: [
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original-wordmark.svg',
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg',
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mongodb/mongodb-original-wordmark.svg',
    ],
    techNames: ['React', 'JavaScript', 'Node', 'MongoDB'],
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
        <Text className="eyebrow">03 — Selected work</Text>
        <Text className="section-heading">
          Things I&apos;ve <em>built</em>
        </Text>
        <Text color="brand.muted" fontSize={{ base: 'md', md: 'lg' }} maxW="600px">
          A few side projects that let me play with new stacks and design ideas.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="sketch-card"
            overflow="hidden"
          >
            <Box position="relative" overflow="hidden">
              <Image
                src={project.image}
                alt={project.title}
                objectFit="cover"
                w="100%"
                h={{ base: '220px', md: '280px' }}
                transition="transform 0.6s cubic-bezier(0.2,0.8,0.2,1)"
                _groupHover={{ transform: 'scale(1.04)' }}
                filter="saturate(0.9)"
              />
              <Box
                position="absolute"
                inset={0}
                bgGradient="linear(to-t, rgba(15,14,12,0.85), transparent 40%)"
                pointerEvents="none"
              />
              <Badge
                position="absolute"
                top={4}
                left={4}
                bg="brand.background"
                color="brand.primary"
                border="1px solid"
                borderColor="brand.border"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontWeight={500}
                textTransform="none"
              >
                {project.tagline}
              </Badge>
            </Box>

            <VStack align="start" p={{ base: 6, md: 8 }} gap={4}>
              <Text
                fontFamily="'Fraunces', serif"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight={600}
                color="brand.text"
                letterSpacing="-0.02em"
                lineHeight={1.1}
              >
                {project.title}
              </Text>
              <Text color="brand.muted" fontSize="md" lineHeight={1.7}>
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

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                color="brand.primary"
                fontWeight={600}
                fontSize="sm"
                display="inline-flex"
                alignItems="center"
                gap={2}
                mt={2}
                _hover={{ color: 'brand.primaryDeep', textDecoration: 'none' }}
              >
                Visit project
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
              </Link>
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
          borderColor="brand.border"
          _hover={{ borderColor: 'brand.primary', color: 'brand.primary', textDecoration: 'none' }}
          transition="all 0.2s"
        >
          <FontAwesomeIcon icon={faCodeBranch} />
          View all repositories on GitHub
        </Link>
      </Flex>
    </Box>
  );
};

export default ProjectsSection;
