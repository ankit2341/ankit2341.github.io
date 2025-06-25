'use client';
import ScrollBadge from '@/features/components/scroll-badge';
import ContactSection from '@/shared/components/contact';
import ExperienceTimeline from '@/shared/components/experience';

import Navbar from '@/shared/components/navbar';
import ProjectsSection from '@/shared/components/project';
import SkillsSection from '@/shared/components/skills';
import { SignatureLogo } from '@/shared/icons';
import {
  Avatar,
  Box,
  Center,
  Icon,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import { useEffect, useRef } from 'react';

function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const moveHandler = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const update = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${mousePos.current.x}px`;
        dotRef.current.style.top = `${mousePos.current.y}px`;
      }
      animationFrameId = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', moveHandler);
    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <Box
      ref={dotRef}
      pointerEvents="none"
      pos="fixed"
      w="15px"
      h="15px"
      bg="brand.primary"
      borderRadius="full"
      transform="translate(-50%, -50%)"
      opacity={1}
      zIndex="9999"
    />
  );
}

export default function Home() {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

  return (
    <>
      <div className="site-background"></div>
      <div className="site-content">
        <CursorTrail />
        <VStack color="brand.primary">
          <Navbar />
          <VStack w={'100%'} h={'80vh'} spaceY={'-1.5'} align={'center'} justify={'center'}>
            <Avatar.Root shape="full" width={'100px'} height={'100px'} mb={4}>
              <Avatar.Fallback name="Random User" />
              <Avatar.Image src="https://media.licdn.com/dms/image/v2/D4D03AQHGdPXwK_l8ug/profile-displayphoto-shrink_400_400/B4DZd0ZbPpGgAg-/0/1750004512594?e=1755734400&v=beta&t=Zp3IDcez0FOBQicU2bDiqIC1kt3FVuRqkpa9d61A7cE" />
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
              Full Stack Developer & Design-Driven Engineer
            </Text>
            <Icon width={100} height={100} bottom="0%" as={SignatureLogo} />
            <ScrollBadge />
          </VStack>
          <ExperienceTimeline />
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
      <Box
        w={'100%'}
        bg="brand.background"
        pos={'absolute'}
        py={3}
        left={0}
        right={0}
        bottom={0}
        mt={12}
      >
        <Center>
          <Text fontSize="sm" color="brand.primary">
            Made with ❤️ by Ankit
          </Text>
        </Center>
      </Box>
    </>
  );
}
