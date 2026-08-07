'use client';
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
  Flex,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faPaperPlane, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const inputStyle = {
  bg: 'transparent',
  border: '1px solid',
  borderColor: 'brand.border',
  color: 'brand.text',
  borderRadius: 'md',
  fontSize: 'md',
  _placeholder: { color: 'brand.muted' },
  _hover: { borderColor: 'brand.borderStrong' },
  _focus: {
    borderColor: 'brand.text',
    boxShadow: '0 0 0 1px var(--chakra-colors-brand-text)',
    outline: 'none',
  },
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    const { name, email, subject, message } = form;
    const mailtoLink = `mailto:ankitpatil2341@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box
      id="contact"
      as="section"
      w="100%"
      maxW="1200px"
      mx="auto"
      py={{ base: 20, md: 32 }}
      px={{ base: 5, md: 8 }}
    >
      <VStack
        align={{ base: 'center', md: 'start' }}
        gap={3}
        mb={16}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Text className="eyebrow">05 / Contact</Text>
        <Text className="section-heading">
          Let&apos;s <em>work together</em>.
        </Text>
        <Text
          color="brand.muted"
          fontSize={{ base: 'md', md: 'lg' }}
          maxW="600px"
          mt={2}
        >
          Currently open to remote and hybrid roles. Reach out for full time work,
          freelance, or just to say hello.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
        <VStack align="stretch" gap={5} className="editorial-card" p={{ base: 6, md: 8 }}>
          <Text
            fontFamily="'Fraunces', serif"
            fontSize="2xl"
            fontStyle="italic"
            color="brand.text"
          >
            Get in touch
          </Text>
          <Text color="brand.muted" fontSize="sm" lineHeight={1.75}>
            Email is the fastest way to reach me. Usually a reply within a day.
          </Text>

          <VStack align="stretch" gap={4} pt={2}>
            <ContactRow icon={faEnvelope} label="Email">
              <Link
                href="mailto:ankitpatil2341@gmail.com"
                color="brand.text"
                _hover={{ color: 'brand.accent', textDecoration: 'none' }}
              >
                ankitpatil2341@gmail.com
              </Link>
            </ContactRow>
            <ContactRow icon={faPhone} label="Phone">
              <Link
                href="tel:+917972592414"
                color="brand.text"
                _hover={{ color: 'brand.accent', textDecoration: 'none' }}
              >
                +91 79725 92414
              </Link>
            </ContactRow>
            <ContactRow icon={faLocationDot} label="Location">
              <Text color="brand.text">Navi Mumbai, India · Open to remote</Text>
            </ContactRow>
            <ContactRow icon={faGithub} label="GitHub">
              <Link
                href="https://github.com/ankit2341"
                target="_blank"
                rel="noopener noreferrer"
                color="brand.text"
                _hover={{ color: 'brand.accent', textDecoration: 'none' }}
              >
                github.com/ankit2341
              </Link>
            </ContactRow>
            <ContactRow icon={faLinkedin} label="LinkedIn">
              <Link
                href="https://linkedin.com/in/ankit-patil-948036196"
                target="_blank"
                rel="noopener noreferrer"
                color="brand.text"
                _hover={{ color: 'brand.accent', textDecoration: 'none' }}
              >
                linkedin.com/in/ankit-patil-948036196
              </Link>
            </ContactRow>
          </VStack>

          <Box mt={4} pt={4} borderTop="1px solid" borderColor="brand.border">
            <Text
              fontFamily="'Fraunces', serif"
              fontStyle="italic"
              color="brand.accent"
              fontSize="xl"
            >
              Ankit Patil
            </Text>
          </Box>
        </VStack>

        <VStack align="stretch" gap={4} className="editorial-card" p={{ base: 6, md: 8 }}>
          <Text fontSize="sm" color="brand.muted" fontWeight={500}>
            Or drop a message here
          </Text>

          <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3}>
            <Input name="name" placeholder="Your name" onChange={handleChange} {...inputStyle} />
            <Input
              name="email"
              type="email"
              placeholder="Your email"
              onChange={handleChange}
              {...inputStyle}
            />
          </SimpleGrid>
          <Input name="subject" placeholder="Subject" onChange={handleChange} {...inputStyle} />
          <Textarea
            name="message"
            placeholder="What's on your mind?"
            rows={6}
            onChange={handleChange}
            resize="vertical"
            {...inputStyle}
          />
          <Flex justify={{ base: 'center', md: 'flex-end' }} w="100%">
            <Button
              bg="brand.text"
              color="brand.background"
              _hover={{ bg: 'brand.primaryDeep', transform: 'translateY(-1px)' }}
              fontWeight={500}
              borderRadius="full"
              px={7}
              w={{ base: '100%', sm: 'auto' }}
              transition="all 0.2s"
              onClick={handleSend}
            >
              <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: 8 }} />
              Send message
            </Button>
          </Flex>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: typeof faEnvelope;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <HStack align="flex-start" gap={4}>
      <Flex
        w="34px"
        h="34px"
        borderRadius="full"
        border="1px solid"
        borderColor="brand.border"
        align="center"
        justify="center"
        color="brand.accent"
        flexShrink={0}
      >
        <FontAwesomeIcon icon={icon} size="sm" />
      </Flex>
      <VStack align="start" gap={0}>
        <Text
          fontSize="xs"
          color="brand.muted"
          textTransform="uppercase"
          letterSpacing="0.2em"
        >
          {label}
        </Text>
        <Box fontSize="sm" wordBreak="break-word">
          {children}
        </Box>
      </VStack>
    </HStack>
  );
}

export default ContactSection;
