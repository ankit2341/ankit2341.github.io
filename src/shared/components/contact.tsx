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
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Reveal, SplitText } from './reveal';

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

const MotionText = motion(Text);

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const numeralY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const numeralOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.4, 0.4, 0]);

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
      ref={sectionRef}
      position="relative"
      w="100%"
      maxW="1200px"
      mx="auto"
      py={{ base: 24, md: 40 }}
      px={{ base: 5, md: 8 }}
      overflow="hidden"
    >
      <MotionText
        className="bg-numeral"
        top="8%"
        right={{ base: '-20px', md: '-40px' }}
        fontSize={{ base: '180px', md: '320px' }}
        style={{ y: numeralY, opacity: numeralOpacity }}
        display={{ base: 'none', md: 'block' }}
      >
        06
      </MotionText>

      <VStack
        align={{ base: 'center', md: 'start' }}
        gap={4}
        mb={16}
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Reveal>
          <Text className="eyebrow">06 / Contact</Text>
        </Reveal>
        <Text className="section-heading">
          <SplitText text="Let's work" delay={0.1} stagger={0.08} />
          <br />
          <Text as="span" fontStyle="italic" opacity={0.7}>
            <SplitText text="together." delay={0.5} stagger={0.06} />
          </Text>
        </Text>
        <Reveal delay={0.3}>
          <Text
            color="brand.muted"
            fontSize={{ base: 'md', md: 'lg' }}
            maxW="560px"
            fontWeight={300}
            lineHeight={1.8}
            pt={2}
          >
            Currently open to remote and hybrid roles. Reach out for full time work,
            freelance, or just to say hello.
          </Text>
        </Reveal>
      </VStack>

      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8}>
        <Reveal delay={0.2}>
          <VStack align="stretch" gap={5} className="editorial-card" p={{ base: 6, md: 8 }} h="100%">
            <Text
              fontFamily="'Instrument Serif', serif"
              fontSize="3xl"
              fontStyle="italic"
              color="brand.text"
            >
              Get in touch
            </Text>
            <Text color="brand.muted" fontSize="sm" lineHeight={1.75} fontWeight={300}>
              Email is the fastest way to reach me. Usually a reply within a day.
            </Text>

            <VStack align="stretch" gap={4} pt={2}>
              <ContactRow icon={faEnvelope} label="Email">
                <Link
                  href="mailto:ankitpatil2341@gmail.com"
                  color="brand.text"
                  _hover={{ color: 'brand.muted', textDecoration: 'none' }}
                >
                  ankitpatil2341@gmail.com
                </Link>
              </ContactRow>
              <ContactRow icon={faPhone} label="Phone">
                <Link
                  href="tel:+917972592414"
                  color="brand.text"
                  _hover={{ color: 'brand.muted', textDecoration: 'none' }}
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
                  _hover={{ color: 'brand.muted', textDecoration: 'none' }}
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
                  _hover={{ color: 'brand.muted', textDecoration: 'none' }}
                >
                  linkedin.com/in/ankit-patil-948036196
                </Link>
              </ContactRow>
            </VStack>

            <Box mt={4} pt={4} borderTop="1px solid" borderColor="brand.border">
              <Text
                fontFamily="'Instrument Serif', serif"
                fontStyle="italic"
                color="brand.text"
                fontSize="2xl"
              >
                Ankit Patil
              </Text>
            </Box>
          </VStack>
        </Reveal>

        <Reveal delay={0.35}>
          <VStack align="stretch" gap={4} className="editorial-card" p={{ base: 6, md: 8 }} h="100%">
            <Text
              fontSize="xs"
              color="brand.muted"
              fontWeight={400}
              fontFamily="'DM Mono', monospace"
              letterSpacing="0.24em"
              textTransform="uppercase"
            >
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
                _hover={{ bg: 'brand.primaryDeep', transform: 'translateY(-2px)' }}
                fontWeight={500}
                borderRadius="full"
                px={7}
                w={{ base: '100%', sm: 'auto' }}
                transition="all 0.3s"
                onClick={handleSend}
              >
                <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: 8 }} />
                Send message
              </Button>
            </Flex>
          </VStack>
        </Reveal>
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
        color="brand.text"
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
          fontFamily="'DM Mono', monospace"
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
