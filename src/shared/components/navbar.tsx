'use client';
import {
  Box,
  Button,
  CloseButton,
  Drawer,
  Flex,
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
    <HStack gap={3}>
      <Box
        w="34px"
        h="34px"
        borderRadius="full"
        border="1px solid"
        borderColor="brand.borderStrong"
        color="brand.text"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontFamily="'Fraunces', serif"
        fontStyle="italic"
        fontWeight={400}
        fontSize="lg"
      >
        a
      </Box>
      <Text
        fontFamily="'Fraunces', serif"
        fontSize="lg"
        fontWeight={400}
        color="brand.text"
        letterSpacing="0.02em"
      >
        Ankit Patil
      </Text>
    </HStack>
  );

  if (isMobile) {
    return (
      <Drawer.Root placement="end" size="xs">
        <Box
          as="nav"
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={50}
          px={5}
          py={3}
          bg={scrolled ? 'rgba(10,10,10,0.85)' : 'transparent'}
          backdropFilter={scrolled ? 'blur(14px)' : 'none'}
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
                borderColor="brand.borderStrong"
                color="brand.text"
                bg="transparent"
                _hover={{ bg: 'brand.surface', borderColor: 'brand.text' }}
                size="sm"
              >
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
            </Drawer.Trigger>
          </HStack>
        </Box>

        <Portal>
          <Drawer.Backdrop bg="rgba(0,0,0,0.72)" backdropFilter="blur(6px)" />
          <Drawer.Positioner>
            <Drawer.Content
              bg="brand.background"
              borderLeft="1px solid"
              borderColor="brand.border"
            >
              <Flex
                align="center"
                justify="space-between"
                px={5}
                py={4}
                borderBottom="1px solid"
                borderColor="brand.border"
              >
                <Text
                  fontFamily="'Fraunces', serif"
                  fontSize="xl"
                  color="brand.text"
                  letterSpacing="0.02em"
                >
                  Menu
                </Text>
                <Drawer.CloseTrigger asChild>
                  <CloseButton
                    color="brand.text"
                    size="sm"
                    position="static"
                    _hover={{ color: 'brand.accent', bg: 'brand.surface' }}
                  />
                </Drawer.CloseTrigger>
              </Flex>

              <Drawer.Body px={5} py={6}>
                <VStack align="stretch" gap={1}>
                  {NAV_LINKS.map((link, i) => (
                    <Drawer.CloseTrigger key={link.href} asChild>
                      <NextLink href={link.href} passHref>
                        <Box
                          as="span"
                          display="flex"
                          alignItems="baseline"
                          gap={4}
                          py={4}
                          borderBottom="1px solid"
                          borderColor="brand.border"
                          color="brand.text"
                          cursor="pointer"
                          _hover={{ color: 'brand.accent' }}
                          transition="color 0.2s"
                        >
                          <Text
                            fontSize="xs"
                            color="brand.muted"
                            letterSpacing="0.2em"
                            minW="30px"
                          >
                            0{i + 1}
                          </Text>
                          <Text
                            fontFamily="'Fraunces', serif"
                            fontSize="2xl"
                            fontWeight={400}
                          >
                            {link.label}
                          </Text>
                        </Box>
                      </NextLink>
                    </Drawer.CloseTrigger>
                  ))}

                  <Button
                    mt={8}
                    bg="brand.text"
                    color="brand.background"
                    borderRadius="full"
                    fontWeight={500}
                    py={6}
                    _hover={{ bg: 'brand.primaryDeep' }}
                    onClick={handleDownloadResume}
                  >
                    <FontAwesomeIcon icon={faDownload} style={{ marginRight: 10 }} />
                    Download resume
                  </Button>
                </VStack>
              </Drawer.Body>
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
      bg={scrolled ? 'rgba(10,10,10,0.75)' : 'transparent'}
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
                fontWeight={400}
                letterSpacing="0.02em"
                cursor="pointer"
                _hover={{ color: 'brand.accent' }}
                transition="color 0.2s"
              >
                {link.label}
              </Text>
            </NextLink>
          ))}
          <Button
            size="sm"
            bg="brand.text"
            color="brand.background"
            borderRadius="full"
            fontWeight={500}
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
