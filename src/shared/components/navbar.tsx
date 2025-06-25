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
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1Nx-s7mb1Sc7p8Ag4PpR0iqAPPJCg8Tzl';
    link.download = 'Ankit-Patil-Resume.pdf'; // Optional: specify file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Ensure rendering only happens after hydration
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  if (isMobile) {
    return (
      <Drawer.Root placement={'start'}>
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
            right={0}
          >
            <Button
              variant="solid"
              size="sm"
              bg={'brand.background'}
              border={'1px solid'}
              borderColor={'gray'}
            >
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
                    px={10}
                    colorScheme={'brand'}
                    bg={'brand.primary'}
                    borderRadius={'lg'}
                    boxShadow={'md'}
                    onClick={handleDownloadResume}
                  >
                    <FontAwesomeIcon icon={faCloudArrowDown} style={{ marginRight: 8 }} />
                    Resume
                  </Button>
                  <NextLink href="#projects" passHref>
                    <Button
                      _hover={{
                        color: 'brand.text',
                        bg: 'brand.primary',
                      }}
                      px={10}
                      borderRadius={'lg'}
                      colorScheme={'brand'}
                      variant={'outline'}
                      color={'brand.text'}
                      w={'100%'}
                      border={'none'}
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
                      px={16}
                      variant={'outline'}
                      borderRadius={'lg'}
                      colorScheme={'brand'}
                      color={'brand.text'}
                      w={'100%'}
                      border={'none'}
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
                      px={10}
                      variant={'outline'}
                      borderRadius={'lg'}
                      colorScheme={'brand'}
                      color={'brand.text'}
                      border={'none'}
                      w={'100%'}
                      boxShadow={'md'}
                    >
                      <FontAwesomeIcon icon={faNetworkWired} />
                      Contact
                    </Button>
                  </NextLink>
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
        <Button
          px={10}
          colorScheme={'brand'}
          bg={'brand.primary'}
          borderRadius={'full'}
          boxShadow={'md'}
          onClick={handleDownloadResume}
        >
          <FontAwesomeIcon icon={faCloudArrowDown} style={{ marginRight: 8 }} />
          Resume
        </Button>
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
