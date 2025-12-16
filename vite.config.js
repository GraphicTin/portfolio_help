import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    base: '/portfolio_help/',
    // build: {
    //     minify: 'terser', // Use 'terser' for maximum compression (slower build, smaller output)
    //     sourcemap: false, // Turn off sourcemaps in production builds (unless debugging)
    //     cssCodeSplit: true, // Should be true by default, ensures CSS is loaded with its component chunk
    // },
})
