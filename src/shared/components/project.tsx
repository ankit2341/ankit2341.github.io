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
} from '@chakra-ui/react';

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio built with Next.js and Chakra UI.',
    image:
      'https://colorlib.com/wp/wp-content/uploads/sites/2/davis-photographer-portfolio-multipage-html5-website-template.jpg',
    link: 'https://yourportfolio.com',
  },
  {
    title: 'Task Manager App',
    description: 'Full-stack task management app using Next.js and MongoDB.',
    image:
      'https://colorlib.com/wp/wp-content/uploads/sites/2/davis-photographer-portfolio-multipage-html5-website-template.jpg',
    link: 'https://taskmanager.com',
  },
  {
    title: 'E-Commerce Store',
    description: 'Online store with Stripe integration and modern UI.',
    image:
      'https://colorlib.com/wp/wp-content/uploads/sites/2/davis-photographer-portfolio-multipage-html5-website-template.jpg',
    link: 'https://ecommerce.com',
  },
  {
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio built with Next.js and Chakra UI.',
    image:
      'https://colorlib.com/wp/wp-content/uploads/sites/2/davis-photographer-portfolio-multipage-html5-website-template.jpg',
    link: 'https://yourportfolio.com',
  },
  {
    title: 'Task Manager App',
    description: 'Full-stack task management app using Next.js and MongoDB.',
    image:
      'https://colorlib.com/wp/wp-content/uploads/sites/2/davis-photographer-portfolio-multipage-html5-website-template.jpg',
    link: 'https://taskmanager.com',
  },
  {
    title: 'E-Commerce Store',
    description: 'Online store with Stripe integration and modern UI.',
    image:
      'https://colorlib.com/wp/wp-content/uploads/sites/2/davis-photographer-portfolio-multipage-html5-website-template.jpg',
    link: 'https://ecommerce.com',
  },
];

const ProjectsSection = () => {
  const bg = 'brand.background';
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box py={20} w={"100%"} px={isMobile ? 0 : 8} id="projects">
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

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={'30px'}>
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
            <Image src={project.image} alt={project.title} objectFit="cover" w="100%" h="200px" />
            <Box p={6}>
              <Heading size="md" mb={2}>
                {project.title}
              </Heading>
              <Text mb={4}>{project.description}</Text>
              <Link href={project.link} color="teal.400" fontWeight="bold">
                Visit Project →
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;
