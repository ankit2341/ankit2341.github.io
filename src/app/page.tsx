'use client';
import ScrollBadge from '@/features/components/scroll-badge';
import ContactForm from '@/shared/components/contact-form';
import Navbar from '@/shared/components/navbar';
import { SignatureLogo } from '@/shared/icons';
import { Avatar, Icon, Text, VStack } from '@chakra-ui/react';

export default function Home() {
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
            <Text fontSize="md" opacity={0.7} color={'brand.text'}>
              Full Stack Developer & UI/UX Enthusiast
            </Text>
            <Icon width={100} height={100} bottom="0%" as={SignatureLogo} />
            <ScrollBadge />
          </VStack>
          <ContactForm />
        </VStack>
      </div>
    </>
  );
}
