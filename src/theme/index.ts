import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Gothic A1', system-ui, sans-serif` },
        body: { value: `'Gothic A1', system-ui, sans-serif` },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          background: { value: '#f4f1e8' },
          surface: { value: '#ffffff' },
          surfaceAlt: { value: '#ebe7dc' },
          text: { value: '#0a0a0a' },
          muted: { value: '#6b6b6b' },
          primary: { value: '#0a0a0a' },
          primaryDeep: { value: '#2a2a2a' },
          accent: { value: '#0a0a0a' },
          accentDeep: { value: '#2a2a2a' },
          accentSoft: { value: '#4a4a4a' },
          border: { value: '#dcd7c9' },
          borderStrong: { value: '#b8b3a4' },
          graphite: { value: '#3a3630' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
