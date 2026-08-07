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
          background: { value: '#0f0e0c' },
          surface: { value: '#171512' },
          surfaceAlt: { value: '#1e1b17' },
          text: { value: '#f5efe1' },
          muted: { value: '#a8a196' },
          primary: { value: '#e9b872' },
          primaryDeep: { value: '#c9944b' },
          border: { value: '#2a2620' },
          ink: { value: '#f5efe1' },
          paper: { value: '#f5efe1' },
          charcoal: { value: '#1a1815' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
