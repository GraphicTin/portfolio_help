import { createApp } from 'vue'
import './style.css'
import App from './App.vue'



import primevue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import customPreset from './mytheme.js';
// import aura from '@primevue/themes/aura';


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

const routes = [
    { 
        path: '/', 
        component: () => import('@/views/Blank.vue')
    },
    { 
        // ⚠️ RECOMMENDATION: Change the path name to something more descriptive if needed,
        // but often /index redirects to /. I'll keep it for now.
        path: '/index', 
        component: () => import('@/views/Blank.vue') 
    },
    { 
        path: '/openhouse', 
        component: () => import('@/views/Blank.vue')
    },
    // {
    //     path: '/',
    //     component: () => import('@/views/Blank.vue')
    // }

];

const router = createRouter({
    history: createWebHistory('/portfolio_help/'),
    routes,
});

app.use(router);





app.mount('#app');



