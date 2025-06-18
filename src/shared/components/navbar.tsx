import {
  Box,
  Button,
  CloseButton,
  Drawer,
  HStack,
  Portal,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import {
  faBrain,
  faCloudArrowDown,
  faGripLines,
  faLayerGroup,
  faNetworkWired,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [hydrated, setHydrated] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bg = scrolled ? 'brand.background' : 'transparent';
  const transition = 'background-color 0.3s ease';

  // Ensure rendering only happens after hydration
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  if (isMobile) {
    return (
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <HStack
            bg={'brand.background'}
            w={'100%'}
            pos={'fixed'}
            zIndex={1}
            p={4}
            gap={'10px'}
            top={0}
            left={0}
          >
            <Button variant="solid" size="sm" bg={'brand.background'}>
              <FontAwesomeIcon color="white" icon={faGripLines} />
            </Button>{' '}
            <Box flex={0.4} fontSize={'lg'} fontWeight={'bold'}>
              Ankit
            </Box>
          </HStack>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg={'brand.background'}>
              <Drawer.Header>
                <Drawer.Title>MENU</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body w={'100%'} bg={'brand.background'}>
                <VStack flex={1} w={'100%'} gap={'10px'} justify={'right'}>
                  <Button
                    colorScheme={'brand'}
                    bg={'brand.primary'}
                    w={'100%'}
                    borderRadius={'lg'}
                    boxShadow={'md'}
                  >
                    <FontAwesomeIcon icon={faCloudArrowDown} />
                    Resume
                  </Button>
                  <Button
                    _hover={{
                      color: 'brand.text',
                      bg: 'brand.primary',
                    }}
                    borderRadius={'lg'}
                    colorScheme={'brand'}
                    variant={'outline'}
                    color={'brand.text'}
                    borderColor={'brand.primary'}
                    w={'100%'}
                    boxShadow={'md'}
                  >
                    {' '}
                    <FontAwesomeIcon icon={faLayerGroup} />
                    Projects
                  </Button>
                  <Button
                    _hover={{
                      color: 'brand.text',
                      bg: 'brand.primary',
                    }}
                    variant={'outline'}
                    borderRadius={'lg'}
                    colorScheme={'brand'}
                    color={'brand.text'}
                    borderColor={'brand.primary'}
                    w={'100%'}
                    boxShadow={'md'}
                  >
                    <FontAwesomeIcon icon={faBrain} />
                    Skills
                  </Button>
                  <Button
                    _hover={{
                      color: 'brand.text',
                      bg: 'brand.primary',
                    }}
                    variant={'outline'}
                    borderRadius={'lg'}
                    colorScheme={'brand'}
                    color={'brand.text'}
                    borderColor={'brand.primary'}
                    w={'100%'}
                    boxShadow={'md'}
                  >
                    <FontAwesomeIcon icon={faNetworkWired} />
                    Contact
                  </Button>
                </VStack>
              </Drawer.Body>

              <Drawer.CloseTrigger asChild>
                <CloseButton color={'white'} size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    );
  }

  return (
    <HStack
      bg={bg}
      transition={transition}
      w={'100%'}
      pos={'fixed'}
      zIndex={1}
      p={4}
      top={0}
      left={0}
    >
      <Box flex={0.4} fontSize={'xl'} fontWeight={'bold'}>
        Ankit
      </Box>
      <HStack flex={0.6} gap={4} justify={'right'}>
        <NextLink href="#projects" passHref>
          <Button
            px={10}
            colorScheme={'brand'}
            bg={'brand.primary'}
            borderRadius={'full'}
            boxShadow={'md'}
          >
            <FontAwesomeIcon icon={faCloudArrowDown} />
            Resume
          </Button>
        </NextLink>
        <NextLink href="#projects" passHref>
          <Button
            _hover={{
              color: 'brand.text',
              bg: 'brand.primary',
            }}
            px={10}
            bg={'brand.background'}
            borderRadius={'full'}
            colorScheme={'brand'}
            variant={'outline'}
            color={'brand.text'}
            borderColor={'brand.primary'}
            boxShadow={'md'}
          >
            <FontAwesomeIcon icon={faLayerGroup} />
            Projects
          </Button>
        </NextLink>
        <NextLink href="#skills" passHref>
          <Button
            _hover={{
              color: 'brand.text',
              bg: 'brand.primary',
            }}
            bg={'brand.background'}
            px={10}
            variant={'outline'}
            borderRadius={'full'}
            colorScheme={'brand'}
            color={'brand.text'}
            borderColor={'brand.primary'}
            boxShadow={'md'}
          >
            <FontAwesomeIcon icon={faBrain} />
            Skills
          </Button>
        </NextLink>
        <NextLink href="#contact" passHref>
          <Button
            _hover={{
              color: 'brand.text',
              bg: 'brand.primary',
            }}
            bg={'brand.background'}
            px={10}
            variant={'outline'}
            borderRadius={'full'}
            colorScheme={'brand'}
            color={'brand.text'}
            borderColor={'brand.primary'}
            boxShadow={'md'}
          >
            <FontAwesomeIcon icon={faNetworkWired} />
            Contact
          </Button>
        </NextLink>
      </HStack>
    </HStack>
  );
};

export default Navbar;
