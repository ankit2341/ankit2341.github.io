'use client';

import { system } from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';

import { ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
