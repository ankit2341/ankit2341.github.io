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
import { faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const inputStyle = {
  bg: 'brand.surface',
  border: '1px solid',
  borderColor: 'brand.border',
  color: 'brand.text',
  borderRadius: 'md',
  fontSize: 'md',
  _placeholder: { color: 'brand.muted' },
  _hover: { borderColor: 'brand.primary' },
  _focus: {
    borderColor: 'brand.primary',
    boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)',
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
      <VStack align="start" gap={3} mb={16}>
        <Text className="eyebrow">05 — Let&apos;s talk</Text>
        <Text className="section-heading">
          Say <em>hello</em>
        </Text>
        <Text color="brand.muted" fontSize={{ base: 'md', md: 'lg' }} maxW="600px">
          Have a project in mind, want to collaborate on something, or just want to trade sketchbook
          references? Drop me a line.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10}>
        {/* Left — info */}
        <VStack align="stretch" gap={5} className="sketch-card" p={{ base: 6, md: 8 }}>
          <Text
            fontFamily="'Fraunces', serif"
            fontSize="2xl"
            fontStyle="italic"
            color="brand.text"
          >
            Get in touch
          </Text>
          <Text color="brand.muted" fontSize="sm" lineHeight={1.7}>
            The fastest way to reach me is email. I usually reply within a day.
          </Text>

          <VStack align="stretch" gap={3} pt={2}>
            <ContactRow icon={faEnvelope} label="Email">
              <Link
                href="mailto:ankitpatil2341@gmail.com"
                color="brand.text"
                _hover={{ color: 'brand.primary', textDecoration: 'none' }}
              >
                ankitpatil2341@gmail.com
              </Link>
            </ContactRow>
            <ContactRow icon={faPhone} label="Phone">
              <Text color="brand.text">+91 79725 92414</Text>
            </ContactRow>
            <ContactRow icon={faGithub} label="GitHub">
              <Link
                href="https://github.com/ankit2341"
                target="_blank"
                rel="noopener noreferrer"
                color="brand.text"
                _hover={{ color: 'brand.primary', textDecoration: 'none' }}
              >
                github.com/ankit2341
              </Link>
            </ContactRow>
            <ContactRow icon={faLinkedin} label="LinkedIn">
              <Link
                href="https://www.linkedin.com/in/ankit-patil-948036196/"
                target="_blank"
                rel="noopener noreferrer"
                color="brand.text"
                _hover={{ color: 'brand.primary', textDecoration: 'none' }}
              >
                linkedin.com/in/ankit-patil
              </Link>
            </ContactRow>
          </VStack>

          <Box mt={4} pt={4} borderTop="1px solid" borderColor="brand.border">
            <Text className="hand" color="brand.primary" fontSize="2xl">
              — Ankit
            </Text>
          </Box>
        </VStack>

        {/* Right — form */}
        <VStack align="stretch" gap={4} className="sketch-card" p={{ base: 6, md: 8 }}>
          <Text fontSize="sm" color="brand.muted" fontWeight={500}>
            Or send a message
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
          <Flex justify="flex-end">
            <Button
              bg="brand.primary"
              color="brand.background"
              _hover={{ bg: 'brand.primaryDeep', transform: 'translateY(-1px)' }}
              fontWeight={600}
              borderRadius="full"
              px={6}
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
        w="36px"
        h="36px"
        borderRadius="full"
        bg="brand.surfaceAlt"
        border="1px solid"
        borderColor="brand.border"
        align="center"
        justify="center"
        color="brand.primary"
        flexShrink={0}
      >
        <FontAwesomeIcon icon={icon} />
      </Flex>
      <VStack align="start" gap={0}>
        <Text fontSize="xs" color="brand.muted" textTransform="uppercase" letterSpacing="0.1em">
          {label}
        </Text>
        <Box fontSize="sm">{children}</Box>
      </VStack>
    </HStack>
  );
}

export default ContactSection;
