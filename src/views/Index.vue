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


			<MainPoolButton @click="openhouse()"></MainPoolButton>
			<MainPoolButton @click="guide() "   ></MainPoolButton>
			<MainPoolButton @click="online()"   ></MainPoolButton>
			<MainPoolButton @click="onsite()"   ></MainPoolButton>


        </MainButtonPool>

        <Spacer/>
        <Spacer/>
        <Spacer/>   
        <p class="flex justify-center">help student for portfolio  web project  5/11</p>
        
		
	</MainLayout>
	
</template>

<script setup>

	const darkClassName = 'theme-dark';
    const router = useRouter();

	
	onMounted(() => {
	    useLocalStorage('theme', 'dark').value == 'dark'
	        ? document.documentElement.classList.add(darkClassName) 
	        : document.documentElement.classList.remove(darkClassName);
	
	    // handleAnimation();
	});

    function changeMode() {
        document.documentElement.classList.toggle(darkClassName);
        useLocalStorage('theme').value = (
            document.documentElement.classList.contains(darkClassName) 
                ? 'dark' 
                : 'light' 
        );
    }

    function openhouse() {
        router.push('/openhouse');
    }
	
	
	
	import { ref, onMounted } from 'vue';

	
	import { useLocalStorage } from '@vueuse/core';


	import Header     from '@/components/Header.vue';
	import MainLayout from '@/layout/MainLayout.vue';
	import Topper     from '@/layout/Topper.vue';
    import Spacer     from '@/layout/Spacer.vue';
    import MainButtonPool from '@/layout/MainButtonPool.vue';
	import MainPoolButton from '@/components/MainPoolButton.vue';

    import { useRouter  } from 'vue-router';

	import Button from '@/components/Button.vue';
	
</script>