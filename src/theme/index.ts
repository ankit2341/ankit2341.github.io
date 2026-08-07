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
          surface: { value: '#141414' },
          surfaceAlt: { value: '#1c1c1c' },
          text: { value: '#f5f5f5' },
          muted: { value: '#71717a' },
          primary: { value: '#f5f5f5' },
          primaryDeep: { value: '#d4d4d8' },
          accent: { value: '#fb7185' },
          accentDeep: { value: '#f43f5e' },
          accentSoft: { value: '#fda4af' },
          border: { value: '#262626' },
          borderStrong: { value: '#404040' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
