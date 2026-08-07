'use client';
import { Box, Button, Flex, HStack, IconButton, Link as ChakraLink, Text, VStack } from '@chakra-ui/react';
import { faDownload, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const RESUME_URL = '/Ankit-Patil-Resume.pdf';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Navbar = () => {
  const [hydrated, setHydrated] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={60}
        px={{ base: 5, md: 12 }}
        py={4}
        bg={scrolled || menuOpen ? 'rgba(10,10,10,0.85)' : 'transparent'}
        backdropFilter={scrolled || menuOpen ? 'blur(14px)' : 'none'}
        borderBottom={scrolled ? '1px solid' : 'none'}
        borderColor="brand.border"
        transition="all 0.35s ease"
      >
        <HStack justify="space-between" maxW="1400px" mx="auto">
          {Logo}

          <HStack gap={8} display={{ base: 'none', lg: 'flex' }}>
            {NAV_LINKS.map((link) => (
              <NextLink key={link.href} href={link.href} passHref>
                <Text
                  as="span"
                  className="link-slide"
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
              bg="brand.accent"
              color="brand.background"
              borderRadius="full"
              fontWeight={500}
              px={5}
              _hover={{ bg: 'brand.accentDeep', transform: 'translateY(-1px)' }}
              transition="all 0.2s"
              onClick={handleDownloadResume}
            >
              <FontAwesomeIcon icon={faDownload} style={{ marginRight: 8 }} />
              Resume
            </Button>
          </HStack>

          <IconButton
            display={{ base: 'flex', lg: 'none' }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            variant="outline"
            borderColor="brand.borderStrong"
            color="brand.text"
            bg="transparent"
            _hover={{ bg: 'brand.surface', borderColor: 'brand.accent' }}
            size="sm"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </IconButton>
        </HStack>
      </Box>

      <AnimatePresence>
        {menuOpen && (
          <MotionBox
            key="mobile-menu"
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={55}
            bg="rgba(10,10,10,0.98)"
            backdropFilter="blur(24px)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            display={{ base: 'flex', lg: 'none' }}
            flexDirection="column"
            pt="80px"
            px={6}
            pb={10}
          >
            <VStack align="stretch" gap={0} flex={1} justify="center">
              {NAV_LINKS.map((link, i) => (
                <MotionBox
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 * i + 0.15 }}
                >
                  <NextLink href={link.href} passHref>
                    <Flex
                      as="span"
                      align="baseline"
                      gap={5}
                      py={5}
                      borderBottom="1px solid"
                      borderColor="brand.border"
                      color="brand.text"
                      cursor="pointer"
                      onClick={() => setMenuOpen(false)}
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
                        fontSize={{ base: '3xl', sm: '4xl' }}
                        fontWeight={400}
                      >
                        {link.label}
                      </Text>
                    </Flex>
                  </NextLink>
                </MotionBox>
              ))}
            </VStack>

            <MotionText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <VStack gap={4} pb={4}>
                <Button
                  w="100%"
                  bg="brand.accent"
                  color="brand.background"
                  borderRadius="full"
                  fontWeight={500}
                  py={6}
                  _hover={{ bg: 'brand.accentDeep' }}
                  onClick={() => {
                    handleDownloadResume();
                    setMenuOpen(false);
                  }}
                >
                  <FontAwesomeIcon icon={faDownload} style={{ marginRight: 10 }} />
                  Download resume
                </Button>
                <HStack gap={6} pt={2}>
                  <ChakraLink
                    href="https://github.com/ankit2341"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="brand.muted"
                    _hover={{ color: 'brand.accent' }}
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </ChakraLink>
                  <ChakraLink
                    href="https://linkedin.com/in/ankit-patil-948036196"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="brand.muted"
                    _hover={{ color: 'brand.accent' }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </ChakraLink>
                </HStack>
              </VStack>
            </MotionText>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
