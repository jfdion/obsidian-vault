import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
    build: {
        watch: {
            exclude: "node_modules/**",
            include: "src/**"
        },
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: "obExt",
            fileName: 'ob-ext'
        },
        rollupOptions: {

        }
    },
})