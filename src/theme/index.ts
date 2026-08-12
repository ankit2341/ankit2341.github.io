import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Instrument Serif', 'Cormorant Garamond', 'Georgia', serif` },
        body: { value: `'Inter', 'DM Sans', system-ui, sans-serif` },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          background: { value: '#0b0b0a' },
          surface: { value: '#131211' },
          surfaceAlt: { value: '#1a1917' },
          text: { value: '#ede9dc' },
          muted: { value: '#7a756b' },
          primary: { value: '#ede9dc' },
          primaryDeep: { value: '#c9c3b4' },
          accent: { value: '#ede9dc' },
          accentDeep: { value: '#c9c3b4' },
          accentSoft: { value: '#8a857b' },
          border: { value: '#1f1d1a' },
          borderStrong: { value: '#2e2b26' },
          graphite: { value: '#3a3630' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
