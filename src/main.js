import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Index from "./pages/Index.vue";
import John from "./John.vue";
import Openhouse from './pages/Openhouse.vue';





import primevue from 'primevue/config';
import ToastService from 'primevue/toastservice';

// import customPreset from './mytheme.js';
// import aura from '@primevue/themes/aura';


const app = createApp(App);

app.use(primevue, {
    theme: {
        // preset: customPreset,
        options: {
            darkModeSelector: '.my-app-dark',
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue'
            },
        },
    },
    unstyled: true,
    ripple: true,
});
app.use(ToastService);








app.mount('#app')



