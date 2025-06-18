import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  Text,
  Link,
  HStack,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleSend = () => {
    const { name, email, subject, message } = form;
    const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box id="contact" w={isMobile ? '100%' : '70%'} py={20} px={isMobile ? 0 : 6}>
      <VStack gap={'4px'} textAlign="center" mb={12}>
        <h1 className="jt --debug">
          <span className="jt__row">
            <span className="jt__text">Contact Me</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Contact Me</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Contact Me</span>
          </span>
          <span className="jt__row jt__row--sibling" aria-hidden="true">
            <span className="jt__text">Contact Me</span>
          </span>
        </h1>
        <Text fontSize="lg" fontWeight={'semibold'} color={'gray.300'}>
          I&apos;d love to connect with you!
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10} maxW="6xl" mx="auto">
        {/* Left: Contact Info */}
        <VStack align={isMobile ? 'center' : 'flex-start'} gap={6} color="brand.primary">
          <Text fontSize="xl" fontWeight="bold" color={'gray.300'}>
            Let&apos;s get in touch
          </Text>

          <HStack gap={3} color="brand.primary">
            <FontAwesomeIcon icon={faGithub} />
            <Link href="https://github.com/ankit2341" color="brand.primary">
              GitHub
            </Link>
          </HStack>
          <HStack gap={3} color="brand.primary">
            <FontAwesomeIcon icon={faLinkedin} />
            <Link href="https://www.linkedin.com/in/ankit-patil-948036196/" color="brand.primary">
              LinkedIn
            </Link>
          </HStack>
          <HStack gap={3}>
            <FontAwesomeIcon icon={faPhone} />
            <Text>+91 7972592414</Text>
          </HStack>
          <HStack gap={3}>
            <FontAwesomeIcon icon={faEnvelope} />
            <Text>ankitpatil2341@gmail.com</Text>
          </HStack>
        </VStack>

        {/* Right: Contact Form */}
        <VStack gap={4}>
          <Input
            name="name"
            placeholder="Your name"
            onChange={handleChange}
            bg="brand.background"
            borderColor={'gray'}
            _placeholder={{ color: 'gray.400' }}
            _focus={{
              borderColor: 'brand.primary',
              boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)',
            }}
          />
          <Input
            name="email"
            type="email"
            placeholder="Your email"
            onChange={handleChange}
            borderColor={'gray'}
            bg="brand.background"
            color="white"
            _placeholder={{ color: 'gray.400' }}
            _focus={{
              borderColor: 'brand.primary',
              boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)',
            }}
          />
          <Input
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
            bg="brand.background"
            borderColor={'gray'}
            color="white"
            _placeholder={{ color: 'gray.400' }}
            _focus={{
              borderColor: 'brand.primary',
              boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)',
            }}
          />
          <Textarea
            name="message"
            placeholder="Your message"
            rows={5}
            onChange={handleChange}
            borderColor={'gray'}
            bg="brand.background"
            color="white"
            _placeholder={{ color: 'gray.400' }}
            _focus={{
              borderColor: 'brand.primary',
              boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)',
            }}
          />
          <Button
            bg="brand.primary"
            color="white"
            _hover={{ bg: 'teal.400' }}
            w={'100%'}
            fontWeight="bold"
            borderRadius="md"
            onClick={handleSend}
            alignSelf="flex-start"
          >
            Send
          </Button>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default ContactSection;
