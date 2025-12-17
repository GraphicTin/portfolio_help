<template>
    <RootContainer ref="rootContainerRef" class="flex">
		<p class="decoy"/>
        
        <div id="index" class="min-h-screen min-w-screen">
			<KeepAlive>
            <LazyIndex 
				@openhouse="scrollToRight()"
				@guide    ="scrollToRight()"
				@online   ="scrollToRight()"
				@onsite   ="scrollToRight()"
			>
			</LazyIndex>	
			</KeepAlive>

        </div>
        <div id="openhouse" class="min-h-screen min-w-screen">
			<KeepAlive>
            <LazyOpenhouse>

			</LazyOpenhouse>
			</KeepAlive>

        </div>
		<div id="guide" class="min-h-screen min-w-screen">

			<LazyIndex></LazyIndex>

		</div>

    </RootContainer>
</template>

<script setup>

	// import Index     from '@/pages/Index.vue';
	// import Openhouse from '@/pages/Openhouse.vue';
	import { defineAsyncComponent } from 'vue';

	const LazyIndex     = defineAsyncComponent(() => import('@/pages/Index.vue'));
	const LazyOpenhouse = defineAsyncComponent(() => import('@/pages/Openhouse.vue'));

	// The script block needs to be a setup script or have a setup function
	import { ref, onMounted, onUnmounted, KeepAlive } from 'vue';
	import { useScrollLock } from '@vueuse/core';

	const rootContainerRef = ref(null); 

	import { useScroll } from '@vueuse/core';
	const { x, y } = useScroll(rootContainerRef);

	const scrollToRight = () => {
		if (rootContainerRef.value) {
			// Use the native scrollTo for better reliability
			rootContainerRef.value.scrollTo({
				left: rootContainerRef.value.scrollLeft + window.innerWidth,
				behavior: 'smooth'
			});
		}
	};

	// 2. Create the reference

	const isLocked = ref(true); 

	const { unlock } = useScrollLock(
		rootContainerRef, 
		isLocked
	);

	onMounted(() => {
		// lock(); 
	});

	onUnmounted(() => {
		unlock(); 
	});
		
	
	
	
	import gsap from "gsap";
	import SplitText from "gsap/SplitText";
	
	import { useLocalStorage } from '@vueuse/core';
	
	import PrimeVueLogo    from '@/assets/primevue-logo.png';
	import TailwindCssLogo from '@/assets/tailwindcss-logo.png';
	import MainButton 	   from "@/components/template/MainButton.vue";

	import Header     from '@/components/Header.vue';
	import MainLayout from '@/layout/MainLayout.vue';
	import Topper     from '@/layout/Topper.vue';
    import Spacer     from '@/layout/Spacer.vue';
    import MainButtonPool from '@/layout/MainButtonPool.vue';
	import MainPoolButton from '@/components/MainPoolButton.vue';

	import Button from '@/components/Button.vue';
	
</script>