
<template>
    <div class="flex justify-center ">

        <SplitButton 
            @click="items[selected_action].command" 
            :model="items" 
        > 
            {{  items[selected_action].label  }}
            <Badge 
                class="ml-4 bg-white" 
                severity="contrast" 
            > 
                {{ count_number }} 
            </Badge>
        </SplitButton>

        <Image 
            :src="exposion_gif" 
            width="300" 
            class=" absolute hidden pointer-events-none top-[20dvh]" 
            id="expogif" 
        />
        
    </div>
</template>

<script setup>

    const { x, y }  = useWindowScroll();

    const count_number    = ref(0);
    const selected_action = ref(0);

    onMounted(() => {
        selected_action.value = useLocalStorage('selected_action', 0).value;
        count_number.value    = Number(useLocalStorage('count_number', 0).value);
        useLocalStorage('theme', 'dark');
    })
    const emit = defineEmits(['modeChanged']);

    const items = [
        {
            label: 'CountUp',
            command: () => {
                count_number.value += 1;
                selected_action.value = 0;
                useLocalStorage('selected_action').value = selected_action.value;
                useLocalStorage('count_number').value = count_number.value;
            }
        },
        {
            label: 'CountDown',
            command: () => {
                count_number.value -= 1;
                selected_action.value = 1;
                useLocalStorage('selected_action').value = selected_action.value;
                useLocalStorage('count_number').value = count_number.value;
            }
        },
        {
            label: 'CountReset',
            command: () => {
                count_number.value = 0;
                selected_action.value = 2;
                useLocalStorage('selected_action').value = selected_action.value;
                useLocalStorage('count_number').value = count_number.value;
            }
        },
        { 
            label: 'SwitchMode',
            command: () => {
                document.documentElement.classList.toggle('my-app-dark');
                useLocalStorage('theme').value = (
                    document.documentElement.classList.contains('my-app-dark') 
                        ? 'dark' 
                        : 'light' 
                );
                emit('modeChanged');

                selected_action.value = 3;
                useLocalStorage('selected_action').value = selected_action.value;
            }
        },
        {
            label: 'Exposion',
            command: () => {
                let expo = document.getElementById('expogif')
                expo.classList.toggle('hidden');

                selected_action.value = 4;
                useLocalStorage('selected_action').value = selected_action.value;
            }
        },
        {
            label: 'Section2',
            command: () => {
                scrollTo({ top: (window.innerHeight), behavior: 'smooth' });
            }
        }
    ];



    import { ref, onMounted, defineEmits } from 'vue';
    import { SplitButton } from "primevue";
    import { Badge } from 'primevue';
    import { Image } from 'primevue';

    import { useLocalStorage } from '@vueuse/core';
    import { useWindowScroll } from '@vueuse/core';

    import exposion_gif from '@/assets/exposion.gif';
    

</script>
