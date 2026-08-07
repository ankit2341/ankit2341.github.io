'use client';
import { Box, Text, Flex, Image, SimpleGrid, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const skills = [
  {
    group: 'Languages',
    items: [
      {
        title: 'TypeScript',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/typescript/typescript-original.svg',
      },
      {
        title: 'JavaScript',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg',
      },
      {
        title: 'HTML5',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/html5/html5-original.svg',
      },
      {
        title: 'CSS3',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/css3/css3-plain-wordmark.svg',
      },
    ],
  },
  {
    group: 'Frameworks',
    items: [
      {
        title: 'React',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original-wordmark.svg',
      },
      {
        title: 'Next.js',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nextjs/nextjs-original.svg',
      },
      { title: 'React Native', src: 'https://img.icons8.com/color/48/react-native.png' },
      {
        title: 'Expo',
        src: 'https://img.icons8.com/?size=100&id=7ImWFDcPfSlz&format=png&color=ffffff',
      },
      {
        title: 'Node.js',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg',
      },
    ],
  },
  {
    group: 'UI & Design',
    items: [
      { title: 'Chakra UI', src: 'https://img.icons8.com/color/48/chakra-ui.png' },
      {
        title: 'Material UI',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/materialui/materialui-original.svg',
      },
      { title: 'shadcn/ui', src: 'https://avatars.githubusercontent.com/u/139895814?s=48&v=4' },
      {
        title: 'Bootstrap',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/bootstrap/bootstrap-original.svg',
      },
    ],
  },
  {
    group: 'Data & Cloud',
    items: [
      {
        title: 'MongoDB',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mongodb/mongodb-original-wordmark.svg',
      },
      {
        title: 'GraphQL',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/graphql/graphql-plain-wordmark.svg',
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
        title: 'Git',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original.svg',
      },
    ],
  },
];

const MotionBox = motion(Box);

const SkillsSection = () => {
  return (
    <Box
      id="skills"
      as="section"
      w="100%"
      maxW="1200px"
      mx="auto"
      py={{ base: 20, md: 32 }}
      px={{ base: 5, md: 8 }}
    >
      <VStack align="start" gap={3} mb={16}>
        <Text className="eyebrow">04 — Toolbox</Text>
        <Text className="section-heading">
          Tools I <em>reach for</em>
        </Text>
        <Text color="brand.muted" fontSize={{ base: 'md', md: 'lg' }} maxW="600px">
          A working set of technologies I&apos;ve shipped production software with.
        </Text>
      </VStack>

      <VStack gap={12} align="stretch">
        {skills.map((group, gi) => (
          <MotionBox
            key={group.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: gi * 0.05 }}
          >
            <Flex
              align={{ base: 'flex-start', md: 'center' }}
              gap={{ base: 4, md: 10 }}
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Box minW={{ md: '160px' }}>
                <Text
                  fontFamily="'Fraunces', serif"
                  fontSize="xl"
                  fontStyle="italic"
                  color="brand.primary"
                  fontWeight={500}
                >
                  {group.group}
                </Text>
              </Box>
              <Box flex={1} w="100%">
                <SimpleGrid columns={{ base: 3, sm: 4, md: 5 }} gap={4}>
                  {group.items.map((skill) => (
                    <VStack
                      key={skill.title}
                      className="sketch-card"
                      p={4}
                      gap={2}
                      minH="100px"
                      justify="center"
                    >
                      <Image src={skill.src} alt={skill.title} boxSize="36px" />
                      <Text
                        fontSize="xs"
                        color="brand.muted"
                        fontWeight={500}
                        textAlign="center"
                      >
                        {skill.title}
                      </Text>
                    </VStack>
                  ))}
                </SimpleGrid>
              </Box>
            </Flex>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
};

export default SkillsSection;
