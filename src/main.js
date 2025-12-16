import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


const app = createApp(App);


import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { 
        path: '/', 
        component: () => import('@/App.vue')
    },
    { 
        // ⚠️ RECOMMENDATION: Change the path name to something more descriptive if needed,
        // but often /index redirects to /. I'll keep it for now.
        path: '/index', 
        component: () => import('@/views/Index.vue') 
    },
    { 
        path: '/openhouse', 
        component: () => import('@/views/Openhouse.vue')
    },
    {
        path: '/blank',
        component: () => import('@/views/Blank.vue')
    }
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



