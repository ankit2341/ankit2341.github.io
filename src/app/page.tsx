'use client';
import ScrollBadge from '@/features/components/scroll-badge';
import ContactSection from '@/shared/components/contact';

import Navbar from '@/shared/components/navbar';
import ProjectsSection from '@/shared/components/project';
import SkillsSection from '@/shared/components/skills';
import { SignatureLogo } from '@/shared/icons';
import { Avatar, Box, Icon, Image, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';

export default function Home() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <div className="site-background"></div>
      <div className="site-content">
        <VStack color="brand.primary">
          <Navbar />
          <VStack w={'100%'} h={'80vh'} spaceY={'-1.5'} align={'center'} justify={'center'}>
            <Avatar.Root shape="full" size="2xl" mb={4}>
              <Avatar.Fallback name="Random User" />
              <Avatar.Image src="https://i.pravatar.cc/300?u=iu" />
            </Avatar.Root>
            <Text fontSize={'2xl'} color={'brand.text'}>
              Hi, I am
            </Text>
            <h1 className="jt --debug">
              <span className="jt__row">
                <span className="jt__text">Ankit</span>
              </span>
              <span className="jt__row jt__row--sibling" aria-hidden="true">
                <span className="jt__text">Ankit</span>
              </span>
              <span className="jt__row jt__row--sibling" aria-hidden="true">
                <span className="jt__text">Ankit</span>
              </span>
              <span className="jt__row jt__row--sibling" aria-hidden="true">
                <span className="jt__text">Ankit</span>
              </span>
            </h1>
            <Text fontSize="md" w={'100%'} textAlign={'center'} opacity={0.7} color={'brand.text'}>
              Full Stack Developer & UI/UX Enthusiast
            </Text>
            <Icon width={100} height={100} bottom="0%" as={SignatureLogo} />
            <ScrollBadge />
          </VStack>
          <ProjectsSection />
          <SkillsSection />
          {!isMobile && (
            <VStack py={16} px={6} textAlign="center" align={'center'} justify={'center'}>
              <h1 className="jt --debug">
                <span className="jt__row">
                  <span className="jt__text">Github Stats</span>
                </span>
                <span className="jt__row jt__row--sibling" aria-hidden="true">
                  <span className="jt__text">Github Stats</span>
                </span>
                <span className="jt__row jt__row--sibling" aria-hidden="true">
                  <span className="jt__text">Github Stats</span>
                </span>
                <span className="jt__row jt__row--sibling" aria-hidden="true">
                  <span className="jt__text">Github Stats</span>
                </span>
              </h1>

              <Box w="100%" overflowX="auto" p={4} bg={'brand.background'} borderRadius="xl">
                <GitHubCalendar
                  username="ankit2341"
                  colorScheme="dark"
                  style={{ maxWidth: '100%' }}
                />
              </Box>
              <Image
                mt={6}
                src="https://github-readme-stats.vercel.app/api?username=ankit2341&show_icons=true&theme=tokyonight&hide_border=true&border_radius=10&custom_title=Ankit%20Patil%27s%20GitHub%20Stats"
                alt="GitHub Stats"
              />
            </VStack>
          )}
          <ContactSection />
        </VStack>
      </div>
    </>
  );
}
