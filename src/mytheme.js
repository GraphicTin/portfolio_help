import primitheme from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

/**
 * Function to inject custom application-level CSS rules into the document head.
 * This is necessary because definePreset only controls CSS *variables*, not 
 * arbitrary CSS *selectors* like #app or transitions.
 */
function injectGlobalAppStyles() {
    const styleId = 'global-style';
    
    // Check if the style tag is already present to prevent duplicates in dev mode
    if (document.getElementById(styleId)) {
        return; 
    }

    // Your custom CSS rules defined as a JavaScript string
    const appStyles = `

        #app {

            background-color: var(--app-bg); 

            transition: background-color 1s, color 1s;

            min-height: 100vh;
        }


        :root {

            --app-bg: var(--p-surface-0);
        }


        :root.my-app-dark {

            --app-bg: var(--p-surface-900);
        }
    `;

    const style = document.createElement('style');
    style.setAttribute('id', styleId);
    style.textContent = appStyles;
    
    // Inject the style tag into the document head
    document.head.appendChild(style);
}
 


const MyPreset = definePreset(primitheme, {
    semantic: {
        // 👑 Primary Color: Royal Purple Palette (UNCHANGED)
        primary: {
            50 : '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
            950: '#2e1065'
        },
        // 🔥 Interest Color: Fiery Orange Palette (UNCHANGED)
        interest: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
            950: '#431407'
        },
        colorScheme: {
            // ☀️ Light Mode Configuration
            light: {
                // --- NEW BRIGHT LIGHT MODE SURFACE: High Luminance ---
                surface: {
                    0: '#ffffff',   // Pure White Base (Highest brightness)
                    50: '#f9f9f9',   // Near-White Background (Very bright)
                    100: '#f0f0f0',
                    200: '#e5e5e5',
                    300: '#d9d9d9',
                    400: '#c2c2c2',
                    500: '#999999',
                    600: '#737373',
                    700: '#525252',
                    800: '#404040',
                    900: '#262626',
                    950: '#0a0a0a'   
                },
                // --- Light Mode Action Colors (UNCHANGED) ---
                primary: {
                    color: '#7c3aed',
                    inverseColor: '#f5f3ff',
                    hoverColor: '#6d28d9',
                    activeColor: '#5b21b6'
                },
                highlight: {
                    background: '#7c3aed',
                    focusBackground: '#8b5cf6',
                    color: '#f5f3ff',
                    focusColor: '#f5f3ff'
                },
                interest: {
                    color: '#ea580c',
                    inverseColor: '#fff7ed',
                    hoverColor: '#c2410c',
                    activeColor: '#9a3412'
                },
            },
            
            // 🌙 Dark Mode Configuration (UNCHANGED)
            dark: {
                surface: {
                    0: '#e5e7eb',
                    50: '#c4c6ca',
                    100: '#9ea2a7',
                    200: '#7f848b',
                    300: '#5a5f66',
                    400: '#3d4147',
                    500: '#2c2f34',
                    600: '#212429',
                    700: '#1d1f22',
                    800: '#1a1c1f',
                    900: '#1a1c1e',
                    950: '#111213'
                },
                primary: {
                    color: '#a78bfa',
                    inverseColor: '#d4d4d4',
                    hoverColor: '#c4b5fd',
                    activeColor: '#8b5cf6'
                },
                highlight: {
                    background: '#a78bfa',
                    focusBackground: '#c4b5fd',
                    color: '#d4d4d4',
                    focusColor: '#d4d4d4'
                },
                interest: {
                    color: '#fb923c',
                    inverseColor: '#d4d4d4',
                    hoverColor: '#fdba74',
                    activeColor: '#f97316'
                },
            }
        }
    }
});


injectGlobalAppStyles();
export default MyPreset;