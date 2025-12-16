import { createApp } from 'vue'
import './style.css'
import App from './App.vue'





import primevue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import customPreset from './mytheme.js';
import aura from '@primevue/themes/aura';


const app = createApp(App);

app.use(primevue, {
    theme: {
        preset: customPreset,
        options: {
            darkModeSelector: '.my-app-dark',
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue'
            },
        },
    },
    unstyled: false,
    ripple: true,
});
app.use(ToastService);





import { createRouter, createWebHistory } from 'vue-router';

const VITE_BASE_PATH = '/portfolio_help/';

const routes = [
    {
        path: '/', // Your root route, which will become /portfolio_help/
        name: 'Index',
        component: () => import('@/views/Index.vue'),
    },
    {
        path: '/openhouse', // This route will be accessible at /portfolio_help/about
        name: 'Openhouse',
        component: () => import('@/views/Openhouse.vue'),
    },
    // ... other routes
];

const router = createRouter({
    history: createWebHistory(VITE_BASE_PATH),
    routes,
});

app.use(router);





app.mount('#app');



