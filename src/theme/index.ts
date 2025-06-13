import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6f2ff" },
          100: { value: "#e6f2ff" },
          200: { value: "#bfdeff" },
          300: { value: "#99caff" },
          // ...
          950: { value: "#001a33" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
        background: {value:"#0d0d0d"} ,     
  text: {value:"#f5f5f5"}  ,         
  primary: {value:"#14b8a6"},         
  border: {value:"#2c2c2e"},
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)