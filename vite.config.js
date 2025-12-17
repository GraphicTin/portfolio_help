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
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        // Group specific heavy hitters
                        if (id.includes('gsap')) return 'vendor-gsap';
                        if (id.includes('primevue')) return 'vendor-ui';
                        
                        // Everything else in node_modules goes to a generic vendor chunk
                        return 'vendor';
                    }
                }
            }
        }
    }

})
