import { Box, Text, Wrap, WrapItem, Flex, Image } from '@chakra-ui/react';
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
    title: 'Bootstrap',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/bootstrap/bootstrap-original.svg',
  },
  {
    title: 'TypeScript',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
  },
  {
    title: 'Next.js',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nextjs/nextjs-original.svg',
  },
  {
    title: 'React',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original-wordmark.svg',
  },
  {
    title: 'Material UI',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/materialui/materialui-original.svg',
  },
  {
    title: 'Redux',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/redux/redux-original.svg',
  },
  {
    title: 'GraphQL',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/graphql/graphql-plain-wordmark.svg',
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
    title: 'VSCode',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/vscode/vscode-original.svg',
  },
  {
    title: 'Git',
    src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original.svg',
  },
];

const MotionBox = motion(Box);

const SkillsSection = () => {
  return (
    <Box py={16} px={6} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold" mb={10}>
        My Skills
      </Text>
      <Wrap justify="center" spaceX={'30px'} spaceY={'30px'}>
        {skills.map((skill, index) => (
          <WrapItem key={index}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              bg="white"
              _dark={{ bg: 'gray.800' }}
              boxShadow="lg"
              rounded="2xl"
              p={4}
              textAlign="center"
              cursor="pointer"
              w="100px"
              h="120px"
            >
              <Flex direction="column" align="center">
                <Image src={skill.src} alt={skill.title} boxSize="50px" mb={2} />
                <Text fontSize="sm" fontWeight="medium">
                  {skill.title}
                </Text>
              </Flex>
            </MotionBox>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default SkillsSection;
