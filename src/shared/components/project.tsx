// components/ProjectsSection.tsx
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Link,
  Image,
  VStack,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  techStack: string[];
};

const projects: Project[] = [
  {
    title: 'Medkart App',
    description:
      'MedKart is a modern web application for buying medical and wellness products online, with seamless lab test booking and doorstep diagnostic services. It streamlines healthcare access by combining e-commerce and health checkups in one platform.',
    image:
      'https://camo.githubusercontent.com/7837518fc339533e00b76d174365b5bf5d062c48d852f15618add2f3a211ac5c/68747470733a2f2f692e706f7374696d672e63632f37627635427047712f696d6167652e706e67',
    link: 'https://medkart.vercel.app/',
    techStack: [
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nextjs/nextjs-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg',
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mongodb/mongodb-original-wordmark.svg',
    ],
  },
  {
    title: 'E-camp App',
    description:
      'E-camp App is an online platform that allows users to effortlessly discover and book adventure, wellness, and educational camps. It simplifies camp planning with real-time availability, detailed listings, and secure reservations.',
    image:
      'https://camo.githubusercontent.com/7cade5525fa4e576351b592ff84827c9a33d82ae691a44e4ab556e6b53a3c477/68747470733a2f2f692e706f7374696d672e63632f4d486867584a6e702f6563616d70312e6a7067',
    link: 'https://e-camp-app.vercel.app/',
    techStack: [
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original-wordmark.svg',
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg',
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg',
      'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mongodb/mongodb-original-wordmark.svg',
    ],
  },
];

const ProjectsSection = () => {
  const bg = 'brand.background';
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box py={20} w={'100%'} px={isMobile ? 0 : 8} id="projects">
      <VStack my={10} textAlign="center">
        <h1 className="jt --debug">
          <span className="jt__row">
            <span className="jt__text">Projects</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Projects</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Projects</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Projects</span>
          </span>
        </h1>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={'30px'}>
        {projects.map((project, index) => (
          <Box
            key={index}
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="lg"
            bg={bg}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.02)', boxShadow: '2xl' }}
          >
            <Image
              src={project.image}
              alt={project.title}
              objectFit="cover"
              w="100%"
              h={isMobile ? '100px' : '300px'}
            />
            <Flex p={6} align={'flex-start'} justify={'space-between'} flexDir={'column'}>
              <Heading size="md" mb={2}>
                {project.title}
              </Heading>
              <Text mb={4}>{project.description}</Text>
              <SimpleGrid columns={{ base: 4, lg: 10 }} gap={'4px'}>
                {project?.techStack?.map((el) => {
                  return (
                    <Image
                      border={'1px solid'}
                      borderColor={'gray.700'}
                      p={1}
                      boxSize={'10'}
                      borderRadius={'lg'}
                      src={el}
                      alt="el"
                      key={el}
                    />
                  );
                })}
              </SimpleGrid>
              <Link
                as="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                color="teal.400"
                fontWeight="bold"
                pt={4}
              >
                Visit Project →
              </Link>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      <Flex mt={4} w={'100%'} justify={'center'} align={'center'}>
        <Link
          as="a"
          href={'https://github.com/ankit2341?tab=repositories'}
          target="_blank"
          rel="noopener noreferrer"
          color="teal.400"
          fontWeight="bold"
          pt={4}
        >
          View All →
        </Link>
      </Flex>
    </Box>
  );
};

export default ProjectsSection;
