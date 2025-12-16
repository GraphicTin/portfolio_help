import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Index from "./views/Index.vue";
import John from "./views/John.vue";
import Openhouse from './views/Openhouse.vue';





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

const routes = [
    { 
        path: '/', 
        component: App 
    },
    { 
        path: '/index', 
        component: Index 
    },
    { 
        path: '/openhouse', 
        component: Openhouse 
    }

]

const router = createRouter({
    history: createWebHistory('/portfolio_help/'),
    routes,
})

app.use(router);





app.mount('#app')



