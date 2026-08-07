'use client';
import {
  Box,
  Button,
  CloseButton,
  Drawer,
  HStack,
  IconButton,
  Portal,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { faDownload, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const RESUME_URL = 'https://drive.google.com/uc?export=download&id=1Nx-s7mb1Sc7p8Ag4PpR0iqAPPJCg8Tzl';

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  const [hydrated, setHydrated] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = RESUME_URL;
    link.download = 'Ankit-Patil-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!hydrated) return null;

  const Logo = (
    <HStack gap={2}>
      <Box
        w="34px"
        h="34px"
        borderRadius="full"
        bg="brand.primary"
        color="brand.background"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontFamily="'Fraunces', serif"
        fontWeight={700}
        fontSize="lg"
        boxShadow="0 4px 14px rgba(233,184,114,0.35)"
      >
        A
      </Box>
      <Text
        fontFamily="'Fraunces', serif"
        fontSize="xl"
        fontWeight={600}
        color="brand.text"
        letterSpacing="-0.02em"
      >
        Ankit Patil
      </Text>
    </HStack>
  );

  if (isMobile) {
    return (
      <Drawer.Root placement="end">
        <Box
          as="nav"
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={50}
          px={5}
          py={3}
          bg={scrolled ? 'rgba(15,14,12,0.85)' : 'transparent'}
          backdropFilter={scrolled ? 'blur(12px)' : 'none'}
          borderBottom={scrolled ? '1px solid' : 'none'}
          borderColor="brand.border"
          transition="all 0.3s ease"
        >
          <HStack justify="space-between">
            {Logo}
            <Drawer.Trigger asChild>
              <IconButton
                aria-label="Open menu"
                variant="outline"
                borderColor="brand.border"
                color="brand.text"
                _hover={{ bg: 'brand.surface', borderColor: 'brand.primary' }}
                size="sm"
              >
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
            </Drawer.Trigger>
          </HStack>
        </Box>

        <Portal>
          <Drawer.Backdrop bg="rgba(0,0,0,0.65)" backdropFilter="blur(4px)" />
          <Drawer.Positioner>
            <Drawer.Content bg="brand.background" borderLeft="1px solid" borderColor="brand.border">
              <Drawer.Header borderBottom="1px solid" borderColor="brand.border">
                <Drawer.Title>
                  <Text fontFamily="'Fraunces', serif" fontSize="2xl" color="brand.text">
                    Menu
                  </Text>
                </Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <VStack align="stretch" gap={2} pt={4}>
                  {NAV_LINKS.map((link) => (
                    <Drawer.CloseTrigger key={link.href} asChild>
                      <NextLink href={link.href} passHref>
                        <Button
                          w="100%"
                          justifyContent="flex-start"
                          variant="ghost"
                          color="brand.text"
                          fontFamily="'Fraunces', serif"
                          fontSize="xl"
                          fontWeight={500}
                          py={6}
                          _hover={{ color: 'brand.primary', bg: 'brand.surface' }}
                        >
                          {link.label}
                        </Button>
                      </NextLink>
                    </Drawer.CloseTrigger>
                  ))}
                  <Button
                    mt={4}
                    bg="brand.primary"
                    color="brand.background"
                    borderRadius="full"
                    fontWeight={600}
                    _hover={{ bg: 'brand.primaryDeep' }}
                    onClick={handleDownloadResume}
                  >
                    <FontAwesomeIcon icon={faDownload} style={{ marginRight: 8 }} />
                    Download Resume
                  </Button>
                </VStack>
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton color="brand.text" size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    );
  }

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      px={{ base: 6, md: 12 }}
      py={4}
      bg={scrolled ? 'rgba(15,14,12,0.75)' : 'transparent'}
      backdropFilter={scrolled ? 'blur(14px)' : 'none'}
      borderBottom={scrolled ? '1px solid' : 'none'}
      borderColor="brand.border"
      transition="all 0.35s ease"
    >
      <HStack justify="space-between" maxW="1400px" mx="auto">
        {Logo}
        <HStack gap={8}>
          {NAV_LINKS.map((link) => (
            <NextLink key={link.href} href={link.href} passHref>
              <Text
                as="span"
                color="brand.text"
                fontSize="sm"
                fontWeight={500}
                letterSpacing="0.02em"
                cursor="pointer"
                position="relative"
                _hover={{ color: 'brand.primary' }}
                transition="color 0.2s"
              >
                {link.label}
              </Text>
            </NextLink>
          ))}
          <Button
            size="sm"
            bg="brand.primary"
            color="brand.background"
            borderRadius="full"
            fontWeight={600}
            px={5}
            _hover={{ bg: 'brand.primaryDeep', transform: 'translateY(-1px)' }}
            transition="all 0.2s"
            onClick={handleDownloadResume}
          >
            <FontAwesomeIcon icon={faDownload} style={{ marginRight: 8 }} />
            Resume
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
