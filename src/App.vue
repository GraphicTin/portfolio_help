<template>
	<RootContainer class=" flex flex-row">
		
		<div id="index" class=" min-h-screen">

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
					<MainPoolButton @click="openhouse()"></MainPoolButton>
					<MainPoolButton @click="guide() "   ></MainPoolButton>
					<MainPoolButton @click="online()"   ></MainPoolButton>
					<MainPoolButton @click="onsite()"   ></MainPoolButton>
					<!-- <Button style="grid-area: item2;" class="h-full w-full bg-blue-400  rounded-md border "></Button>
					<Button style="grid-area: item3;" class="h-full w-full bg-red-400   rounded-md border "></Button>
					<Button style="grid-area: item4;" class="h-full w-full bg-green-400 rounded-md border "></Button> -->

				</MainButtonPool>

				<Spacer/>
				<Spacer/>
				<Spacer/>   
				<p class="flex justify-center">help student for portfolio  web project  5/11</p>
				
				
			</MainLayout>

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


	import { RouterLink } from 'vue-router';
	import { RouterView } from 'vue-router';
	import { useRouter }  from 'vue-router'
	
</script>