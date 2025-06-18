import { Box, Text, Flex, Image, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const skills = [
  {
    title: 'HTML5',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/html5/html5-original.svg',
  },
  {
    title: 'CSS3',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/css3/css3-plain-wordmark.svg',
  },
  {
    title: 'JavaScript',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg',
  },
  {
    title: 'TypeScript',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
  },
  {
    title: 'React',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original-wordmark.svg',
  },

  {
    title: 'Next.js',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nextjs/nextjs-original.svg',
  },
  {
    title: 'React Native',
    src: 'https://img.icons8.com/color/48/react-native.png',
  },
  {
    title: 'Expo',
    src: 'https://img.icons8.com/?size=100&id=7ImWFDcPfSlz&format=png&color=ffffff',
  },
  {
    title: 'Chakra UI',
    src: 'https://img.icons8.com/color/48/chakra-ui.png',
  },
  {
    title: 'Material UI',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/materialui/materialui-original.svg',
  },
  {
    title: 'Shadecn UI',
    src: 'https://avatars.githubusercontent.com/u/139895814?s=48&v=4',
  },
  {
    title: 'Bootstrap',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/bootstrap/bootstrap-original.svg',
  },
  {
    title: 'Redux',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/redux/redux-original.svg',
  },
  {
    title: 'AWS',
    src: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws-color.png',
  },
  {
    title: 'Node.js',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg',
  },
  {
    title: 'MongoDB',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mongodb/mongodb-original-wordmark.svg',
  },
  {
    title: 'GraphQL',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/graphql/graphql-plain-wordmark.svg',
  },
  {
    title: 'Git',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original.svg',
  },
];

const MotionBox = motion(Box);

const SkillsSection = () => {
  return (
    <Box id="skills" py={24} px={6} textAlign="center">
      <Flex justify="center" w="100%" pb={10}>
        <h1 className="jt --debug">
          <span className="jt__row">
            <span className="jt__text">Skills</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Skills</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Skills</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Skills</span>
          </span>
        </h1>
      </Flex>
      <SimpleGrid columns={[2, 3, 6]} gap="40px">
        {skills.map((skill, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            bg="brand.background"
            _dark={{ bg: 'gray.800' }}
            boxShadow={'2xl'}
            rounded="2xl"
            color={'brand.primary'}
            textAlign="center"
            cursor="pointer"
            w={{ base: '100px', md: '120px' }} // Adjust width for mobile vs. desktop
            h="100px"
          >
            <Flex direction="column" align="center">
              <Image src={skill.src} alt={skill.title} boxSize="50px" mb={2} />
              <Text fontSize="sm" fontWeight="medium">
                {skill.title}
              </Text>
            </Flex>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillsSection;
