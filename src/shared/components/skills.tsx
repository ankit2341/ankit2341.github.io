'use client';
import { Box, Text, Flex, Image, SimpleGrid, VStack } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal, SplitText } from './reveal';

type Skill = { title: string; src: string };

const groups: { group: string; items: Skill[] }[] = [
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
        src: 'https://img.icons8.com/?size=100&id=7ImWFDcPfSlz&format=png&color=000000',
      },
    ],
  },
  {
    group: 'State and Data',
    items: [
      {
        title: 'Apollo GraphQL',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/apollographql/apollographql-original.svg',
      },
      {
        title: 'GraphQL',
        src: 'https://graphql.org/_next/static/media/logo.ad338028.svg',
      },
      {
        title: 'TanStack Query',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DVR8bGsyz4lL72etxCa_GyN0Jqw4wKuyK_p7COwlvg&s=10',
      },
      {
        title: 'Redux',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/redux/redux-original.svg',
      },
      { title: 'Zustand', src: 'https://img.icons8.com/?size=100&id=98973&format=png&color=000000' },
      { title: 'Formik', src: 'https://img.icons8.com/?size=100&id=8SNbLwYQVdaJ&format=png&color=000000' },
    ],
  },
  {
    group: 'UI and Styling',
    items: [
      { title: 'Chakra UI', src: 'https://img.icons8.com/color/48/chakra-ui.png' },
      {
        title: 'Tailwind CSS',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg',
      },
      { title: 'shadcn/ui', src: 'https://avatars.githubusercontent.com/u/139895814?s=48&v=4' },
      {
        title: 'Material UI',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/materialui/materialui-original.svg',
      },
    ],
  },
  {
    group: 'Backend and Data',
    items: [
      {
        title: 'Node.js',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg',
      },
      {
        title: 'Express',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/express/express-original.svg',
      },
      {
        title: 'MongoDB',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mongodb/mongodb-original-wordmark.svg',
      },
      {
        title: 'ClickHouse',
        src: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Clickhouse.png',
      },
    ],
  },
  {
    group: 'Testing',
    items: [
      {
        title: 'Jest',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/jest/jest-plain.svg',
      },
      { title: 'React Testing Library', src: 'https://testing-library.com/img/octopus-64x64.png' },
      {
        title: 'Cypress',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/cypressio/cypressio-original.svg',
      },
    ],
  },
  {
    group: 'Tooling and Cloud',
    items: [
      {
        title: 'Git',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original.svg',
      },
      {
        title: 'Docker',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/docker/docker-original.svg',
      },
      {
        title: 'AWS',
        src: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/aws-color.png',
      },
      {
        title: 'Figma',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/figma/figma-original.svg',
      },
      { title: 'Docusaurus', src: 'https://docusaurus.io/img/docusaurus.svg' },
      {
        title: 'WordPress',
        src: 'https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/wordpress/wordpress-original.svg',
      },
    ],
  },
  {
    group: 'Other',
    items: [
      { title: 'Okta SSO', src: 'https://www.okta.com/sites/default/files/Okta_Logo_BrightBlue_Medium.png' },
      {
        title: 'Stripe',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtn_PCDxxE8fZWgO0UVgQD_H7KgZIoq4B3O6-OtTqFTg&s=10',
      },
      { title: 'Chart.js', src: 'https://www.chartjs.org/media/logo-title.svg' },
    ],
  },
];

const MotionBox = motion(Box);
const MotionText = motion(Text);

const SkillsSection = () => {
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
      id="skills"
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
        left={{ base: '-30px', md: '-60px' }}
        fontSize={{ base: '220px', md: '440px' }}
        style={{ y: numeralY, opacity: numeralOpacity }}
        display={{ base: 'none', md: 'block' }}
      >
        04
      </MotionText>

      <SimpleGrid columns={{ base: 1, lg: 5 }} gap={{ base: 8, lg: 16 }} mb={12}>
        <MotionBox gridColumn={{ lg: 'span 2' }} style={{ y: headingY }}>
          <VStack align="start" gap={4}>
            <Reveal>
              <Text className="eyebrow">04 / Toolbox</Text>
            </Reveal>
            <Text className="section-heading">
              <SplitText text="Tools I" delay={0.1} stagger={0.08} />
              <br />
              <Text as="span" color="brand.muted" fontWeight={300}>
                <SplitText text="reach for." delay={0.4} stagger={0.06} />
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
            A working set of technologies I&apos;ve shipped production software with.
          </Text>
        </Reveal>
      </SimpleGrid>

      <VStack gap={0} align="stretch">
        {groups.map((group, gi) => (
          <MotionBox
            key={group.group}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: gi * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Flex
              align={{ base: 'flex-start', md: 'center' }}
              gap={{ base: 4, md: 10 }}
              flexDirection={{ base: 'column', md: 'row' }}
              borderTop="1px solid"
              borderColor="brand.border"
              py={6}
            >
              <Box minW={{ md: '200px' }}>
                <Text
                  fontSize={{ base: 'xl', md: '2xl' }}
                  color="brand.text"
                  fontWeight={800}
                  letterSpacing="-0.02em"
                  textTransform="uppercase"
                >
                  {group.group}
                </Text>
              </Box>
              <Box flex={1} w="100%">
                <SimpleGrid columns={{ base: 3, sm: 4, md: 5, lg: 6 }} gap={3}>
                  {group.items.map((skill, si) => (
                    <MotionBox
                      key={skill.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: si * 0.04 }}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    >
                      <VStack
                        className="editorial-card"
                        p={4}
                        gap={2}
                        minH="100px"
                        justify="center"
                      >
                        <Image
                          src={skill.src}
                          alt={skill.title}
                          boxSize="30px"
                          objectFit="contain"
                        />
                        <Text
                          fontSize="xs"
                          color="brand.muted"
                          fontWeight={500}
                          textAlign="center"
                          lineHeight={1.3}
                        >
                          {skill.title}
                        </Text>
                      </VStack>
                    </MotionBox>
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
