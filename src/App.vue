<template>
	
	<Topper class="">
		
		<Button @click="changeMode()" class="flex h-full w-full rounded-t-none border-t-0">
            <p>
                {{ useLocalStorage('theme') }} mode
            </p>
        </Button>
		
	</Topper>

    <Spacer/>
	
	<MainLayout>
		
		<Header class="border border-b-slate-500"/>
        <Spacer/>
        
		
	</MainLayout>
	
</template>

<script setup>
	
	// import rawContent from './assets/lorem.txt?raw';
	// const lorem = ref(rawContent);
	
	// // const app = ref(document.body);
	// // const isLocked = useScrollLock(app);
	// // isLocked.value = true;
	
	// const heading = ref(null);
	// let headingChars = null;
	// let headingTimeLine = gsap.timeline({ repeat: -1, repeatDelay: 2, });
	
	// const isDarkTheme = ref(false);
	const darkClassName = 'my-app-dark';
	// let primaryColor = null;
	
	// const toast = useToast();
	// let inputValue = ref(null);
	
	// function modeChanged() {
	//     isDarkTheme.value = document.documentElement.classList.contains(darkClassName);
	
	//     if (!heading.value) { console.log('no heading'); return;}
	
	//     let progress = headingTimeLine.progress();
	//     headingTimeLine.progress(0);
	//     headingTimeLine.clear();
	//     buildHeadingTimeLine();
	//     headingTimeLine.progress(progress);
	// }
	
	// function toasting() {
	//     toast.add({ 
	//         severity: 'secondary', 
	//         summary: "hello " + inputValue.value,
	//         detail: '', 
	//         life: 2000 
	//     });
	//     inputValue.value = '';
	// }
	
	
	onMounted(() => {
	    useLocalStorage('theme', 'dark').value == 'dark'
	        ? document.documentElement.classList.add(darkClassName) 
	        : document.documentElement.classList.remove(darkClassName);
	
	    // handleAnimation();
	});

    function changeMode() {
        document.documentElement.classList.toggle('my-app-dark');
        useLocalStorage('theme').value = (
            document.documentElement.classList.contains('my-app-dark') 
                ? 'dark' 
                : 'light' 
        );
    }

	
	// function buildHeadingTimeLine() {
	
	//     let baseColor = isDarkTheme.value ? '#ffffff' : '#000000';
	
	//     headingTimeLine
	//     .set(headingChars, {
	//         y: "0",
	//         ease: "none",
	//         stagger: 0,
	//         color: baseColor,
	//     });
	
	//     headingTimeLine
	//     .to(headingChars, {
	//         duration: 0.5,
	//         y: "-=15",
	//         ease: "circle.inOut",
	//         stagger: 0.02,
	//         color: primaryColor,
	
	//     })
	//     .to(headingChars, {
	//         duration: 1,
	//         y: "0",
	//         ease: "bounce.out",
	//         stagger: 0.03,
	//         color: baseColor,
	
	//     }, ">-0.7");
	
	// }
	
	
	
	// function handleAnimation() {
	
	//     const rootStyles = window.getComputedStyle(document.documentElement);
	//     primaryColor = rootStyles.getPropertyValue('--p-primary-color').trim();
	
	//     isDarkTheme.value = document.documentElement.classList.contains(darkClassName);
	
	
	
	
	//     if (heading.value) {
	
	//         let split = new SplitText(heading.value, { type: "chars" });
	//         headingChars = split.chars;
	
	//         gsap.from(split.chars, {
	//             duration: 1,
	//             yPercent: "+=25",
	//             stagger: 0.02,
	//             autoAlpha: -0.4,
	//         });
	
	//         buildHeadingTimeLine(primaryColor);
	
	//     }
	// }
	
	
	
	
	
	import { ref, onMounted } from 'vue';
	import { useToast } from 'primevue/usetoast';
	import Toast   from 'primevue/toast';
	import Toolbar from 'primevue/toolbar';
	import Sidebar from 'primevue/sidebar';
	import Button  from 'primevue/button';
	import InputText from 'primevue/inputtext';
	import Card    from 'primevue/card'  ;
	import Image   from 'primevue/image' ;  
	import Panel   from 'primevue/panel' ;  
	import Accordion        from 'primevue/accordion';
	import AccordionPanel   from 'primevue/accordionpanel';
	import AccordionHeader  from 'primevue/accordionheader';
	import AccordionContent from 'primevue/accordioncontent';
	import ScrollPanel from 'primevue/scrollpanel';
	
	import gsap from "gsap";
	import SplitText from "gsap/SplitText";
	
	import { useLocalStorage } from '@vueuse/core';
	import { useScrollLock } from '@vueuse/core'
	
	import PrimeVueLogo from '@/assets/primevue-logo.png';
	import TailwindCssLogo from '@/assets/tailwindcss-logo.png';
	import MainButton from "./components/template/MainButton.vue";
	// import NavigationBar from "./components/NavigationBar.vue";
	import Header from './components/Header.vue';
	import MainLayout from './layout/MainLayout.vue';
	import Topper from './layout/Topper.vue';
    import Spacer from './layout/Spacer.vue';
	
</script>