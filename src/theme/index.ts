import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Fraunces', 'Georgia', serif` },
        body: { value: `'Space Grotesk', 'Inter', sans-serif` },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          background: { value: '#0a0a0a' },
          surface: { value: '#111111' },
          surfaceAlt: { value: '#161616' },
          text: { value: '#ede8dc' },
          muted: { value: '#8a857b' },
          primary: { value: '#ede8dc' },
          primaryDeep: { value: '#c9c3b4' },
          accent: { value: '#b8916a' },
          border: { value: '#1e1c19' },
          borderStrong: { value: '#2a2723' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
