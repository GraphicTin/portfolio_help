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
        <MainButtonPool>

			<!-- <Button style="grid-area: item1;" class="h-full w-full bg-amber-400 rounded-md border "></Button> -->
			<MainPoolButton @click="emit('openhouse')"></MainPoolButton>
			<MainPoolButton @click="emit('guide') "   ></MainPoolButton>
			<MainPoolButton @click="emit('online')"   ></MainPoolButton>
			<MainPoolButton @click="emit('onsite')"   ></MainPoolButton>
			<!-- <Button style="grid-area: item2;" class="h-full w-full bg-blue-400  rounded-md border "></Button>
			<Button style="grid-area: item3;" class="h-full w-full bg-red-400   rounded-md border "></Button>
			<Button style="grid-area: item4;" class="h-full w-full bg-green-400 rounded-md border "></Button> -->

        </MainButtonPool>

        <Spacer/>
        <Spacer/>
        <Spacer/>   
        <p class="flex justify-center">help student for portfolio  web project  5/11</p>
        
		
	</MainLayout>
	
</template>

<script setup>

	const emit = defineEmits(['openhouse']);


import { onDeactivated } from 'vue';

let heavyTimer = null;

// When the component is first created
// ...

onDeactivated(() => {
    // This runs when the component is scrolled off-screen and deactivated by <KeepAlive>
    console.log('Component is hidden. Clearing heavy resources.');
    
    // Example: Stop a resource-intensive timer or animation
    if (heavyTimer) {
        clearInterval(heavyTimer);
        heavyTimer = null;
    }
    
    // Example: Clean up GSAP or other active resource listeners
    // gsap.killTweensOf(myElement);
});

// If you need to restart the task when the user scrolls back to the component:
// onActivated(() => {
//     console.log('Component is now visible. Restarting resources.');
//     // Restart your timer or GSAP animation here
// });

	

	const darkClassName = 'my-app-dark';

	
	
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

    function openhouse() {
        pass
    }
	
	
	
	
	import { ref, onMounted } from 'vue';
	import { useToast } from 'primevue/usetoast';
	import Toast   from 'primevue/toast';
	import Toolbar from 'primevue/toolbar';
	import Sidebar from 'primevue/sidebar';
	// import Button  from 'primevue/button';
	import InputText from 'primevue/inputtext';
	import Card    from 'primevue/card'  ;
	import Image   from 'primevue/image' ;  
	import Panel   from 'primevue/panel' ;  
	import Accordion        from 'primevue/accordion';
	import AccordionPanel   from 'primevue/accordionpanel';
	import AccordionHeader  from 'primevue/accordionheader';
	import AccordionContent from 'primevue/accordioncontent';
	import ScrollPanel from 'primevue/scrollpanel';

	import Button from '@/components/Button.vue';
	
	import gsap from "gsap";
	import SplitText from "gsap/SplitText";
	
	import { useLocalStorage } from '@vueuse/core';
	import { useScrollLock } from '@vueuse/core'

	import Header     from '@/components/Header.vue';
	import MainLayout from '@/layout/MainLayout.vue';
	import Topper     from '@/layout/Topper.vue';
    import Spacer     from '@/layout/Spacer.vue';
    import MainButtonPool from '@/layout/MainButtonPool.vue';
	import MainPoolButton from '@/components/MainPoolButton.vue';

	
</script>