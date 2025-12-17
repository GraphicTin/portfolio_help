<template>
	<RootContainer class=" flex flex-row">
		
		<div id="index" class=" min-h-screen">

			<Index></Index>


		</div>
		<div id="openhouse" class=" min-h-screen">


		</div>



	</RootContainer>
</template>

<script setup>
	
	
	
	import { ref, onMounted } from 'vue';
	
	import gsap from "gsap";
	import SplitText from "gsap/SplitText";
	
	import { useLocalStorage } from '@vueuse/core';
	import { useScrollLock } from '@vueuse/core'
	
	import PrimeVueLogo from '@/assets/primevue-logo.png';
	import TailwindCssLogo from '@/assets/tailwindcss-logo.png';
	import MainButton from "./components/template/MainButton.vue";

	import Header from './components/Header.vue';
	import MainLayout from './layout/MainLayout.vue';
	import Topper from './layout/Topper.vue';
    import Spacer from './layout/Spacer.vue';
    import MainButtonPool from './layout/MainButtonPool.vue';
	import MainPoolButton from './components/MainPoolButton.vue';

	import Index from './Index.vue';
	
</script>