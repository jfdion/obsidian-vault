import { defineConfig } from 'vite'
import { resolve } from 'path'

const config = {
  tplExt: {
    entry: resolve(__dirname, "./src/templateExtender.ts"),
    filename: "tplExt.js"
  },
  sessionExt: {
    entry: resolve(__dirname, "./src/sessionExtender.ts"),
    filename: "sessionExt.js"
  },
  seanceExt: {
    entry: resolve(__dirname, "./src/seanceExtender.ts"),
    filename: "seanceExt.js"
  },
  configSession: {
    entry: resolve(__dirname, "./src/configSession.ts"),
    filename: "configSession.js"
  }
}

const currentConfig = config[process.env.LIB_NAME];

if (currentConfig === undefined) {
  throw new Error("LIB_NAME is not defined or is not valid")
}

// https://vitejs.dev/config/
export default defineConfig({
  build: { 
    outdir: "/dist",
    lib: { 
      ...currentConfig, 
      formats: ['cjs', 'es'] 
    },
    emptyOutDir: false
  }
})