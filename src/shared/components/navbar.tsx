import { Box, Button, HStack } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <HStack w={'100%'} pos={'fixed'} zIndex={1} p={4} top={0} left={0}>
      <Box flex={0.4} fontSize={'lg'} fontWeight={'bold'}>
        Ankit
      </Box>
      <HStack flex={0.6} spaceX={8} justify={'right'}>
        <Button
          colorScheme={'brand'}
          bg={'brand.primary'}
          w={'1/6'}
          borderRadius={'full'}
          boxShadow={'md'}
        >
          Resume
        </Button>
        <Button
          _hover={{
            color: 'brand.text',
            bg: 'brand.primary',
          }}
          borderRadius={'full'}
          colorScheme={'brand'}
          variant={'outline'}
          color={'brand.text'}
          borderColor={'brand.primary'}
          w={'1/6'}
          boxShadow={'md'}
        >
          Projects
        </Button>
        <Button
          _hover={{
            color: 'brand.text',
            bg: 'brand.primary',
          }}
          variant={'outline'}
          borderRadius={'full'}
          colorScheme={'brand'}
          color={'brand.text'}
          borderColor={'brand.primary'}
          w={'1/6'}
          boxShadow={'md'}
        >
          Skills
        </Button>
        <Button
          _hover={{
            color: 'brand.text',
            bg: 'brand.primary',
          }}
          variant={'outline'}
          borderRadius={'full'}
          colorScheme={'brand'}
          color={'brand.text'}
          borderColor={'brand.primary'}
          w={'1/6'}
          boxShadow={'md'}
        >
          Contact
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
