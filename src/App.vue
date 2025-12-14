<template>
    <Toast position="top-right" />

    <div id="section1" ref="section1" class="my-app-dark flex flex-col items-center bg-transparent
         sm:h-screen"
    >

        <div class="flex justify-center mt-10" >

            <Image :src="PrimeVueLogo" alt="PrimeVue logo" width="200" 
                :pt="{ root: { class: 'm-10' } }" 
            />
            <Image :src="TailwindCssLogo" alt="PrimeVue logo" width="200" 
                :pt="{ root: { class: 'm-10' } }" 
                class="my-auto"
            />

        </div>

        <MainButton class=" mb-10 w-[200px] " @mode-changed="modeChanged"/>
        
        <h1 class="text-4xl text-center" ref="heading" > Hello Primevue + TailwindCss </h1>
        
        <InputText 
            @keyup.enter="toasting" 
            placeholder="enter name" 
            class="p-1 m-10 w-[200px] text-center" 
            v-model="inputValue"
        />
        <button class="interested">
            See Interest Action
        </button>

    </div>
    <div id="section2" class="my-app-dark flex flex-col items-center h-screen bg-transparent" >
        <div class="card my-auto">
        <Accordion header="Hello Panel" class=" w-[50vw]" v-once value="0">
            <AccordionPanel value="0" class="">
                <AccordionHeader>Header I</AccordionHeader>
                <AccordionContent>
                    <ScrollPanel class="h-[40vh]">
                        <img src="./assets/exposion.gif" alt="Exposion" class="w-full h-50" />
                        {{  lorem }}   
                    </ScrollPanel>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Header II</AccordionHeader>
                <AccordionContent>
                    <ScrollPanel class="h-[40vh]">
                        {{  lorem }}
                    </ScrollPanel>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
        </div>

    </div>
    <div id="section3" class="my-app-dark flex flex-col items-center h-screen bg-transparent">
    <footer class="w-full text-gray-400 text-xs py-8 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-700 pb-4 mb-6 space-y-4 sm:space-y-0">
          
          <div class="flex items-center space-x-2">
            <span class="font-semibold text-gray-300">© Tradeit.gg LLC 2017 – 2025. All Rights Reserved.</span>
          </div>
          
          <div class="text-right">
            <p>Support@tradeit.gg 16192 Coastal Hwy, Lewes, DE 19958, United States</p>
          </div>

          <div class="flex space-x-2 items-center">
            <div class="font-bold text-gray-300 text-lg">VISA</div>
            <div class="h-4 w-6 bg-blue-500 rounded"></div> <div class="h-4 w-6 bg-red-500 rounded"></div>   <div class="h-4 w-6 bg-yellow-500 rounded"></div><div class="h-4 w-6 bg-green-500 rounded"></div>  </div>
        </div>

        <h3 class="text-lg font-bold text-gray-300 mb-6">Additional Links</h3>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-x-8 gap-y-8">

          <div>
            <h4 class="font-bold text-gray-300 mb-3 uppercase">Best CSGO Cases</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition duration-150">Fracture Case</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Prisma 2 Case</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Recoil Case</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-gray-300 mb-3 uppercase">Best Glock-18 Skins</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition duration-150">Glock-18 | Dragon Tattoo</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Glock-18 | Pink DDPAT</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Glock-18 | Water Elemental</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-gray-300 mb-3 uppercase">Best USP-S Skins</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition duration-150">USP-S | Black Lotus</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">USP-S | Kill Confirmed</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">USP-S | Monster Mashup</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-gray-300 mb-3 uppercase">Best AWP Skins</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition duration-150">AWP | Dragon Lore</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">AWP | Medusa</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">AWP | Asiimov</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-gray-300 mb-3 uppercase">Best M4A4 Skins</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition duration-150">M4A4 | Howl</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">M4A4 | Asiimov</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">M4A4 | Dragon King</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-gray-300 mb-3 uppercase">Best M4A1-S Skins</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition duration-150">M4A1-S | Golden Coil</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">M4A1-S | Icarus Fell</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">M4A1-S | Hyper Beast</a></li>
            </ul>
          </div>

          <div class="mt-8">
            <h4 class="font-bold text-gray-300 mb-3 uppercase">Best AK-47 Skins</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition duration-150">AK-47 | Fire Serpent</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">AK-47 | Vulcan</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">AK-47 | Case Hardened</a></li>
            </ul>
          </div>

          <div class="mt-8">
            <h4 class="font-bold text-gray-300 mb-3 uppercase">Best Knife Skins</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition duration-150">Karambit skins</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Butterfly skins</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Talon skins</a></li>
            </ul>
          </div>

          <div class="mt-8">
            <h4 class="font-bold text-gray-300 mb-3 uppercase">Trade</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition duration-150">Trade CS2 Skins</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Trade RUST Skins</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Trade TF2 Skins</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Trade CS2 Knives</a></li>
            </ul>
          </div>

          <div class="mt-8">
            <h4 class="font-bold text-gray-300 mb-3 uppercase">Buy</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition duration-150">Buy CS2 Skins</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Buy RUST Skins</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Buy TF2 Skins</a></li>
            </ul>
          </div>

          <div class="mt-8">
            <h4 class="font-bold text-gray-300 mb-3 uppercase">Sell</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition duration-150">Sell CS2 Skins</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Sell RUST Skins</a></li>
              <li><a href="#" class="hover:text-white transition duration-150">Sell TF2 Skins</a></li>
            </ul>
          </div>

          <div class="hidden md:block"></div> 

        </div>
      </div>
    </footer>
  </div>
    
</template>

<script setup>

    import rawContent from './assets/lorem.txt?raw';
    const lorem = ref(rawContent);

    // const app = ref(document.body);
    // const isLocked = useScrollLock(app);
    // isLocked.value = true;

    const heading = ref(null);
    let headingChars = null;
    let headingTimeLine = gsap.timeline({ repeat: -1, repeatDelay: 2, });

    const isDarkTheme = ref(false);
    const darkClassName = 'my-app-dark';
    let primaryColor = null;

    const toast = useToast();
    let inputValue = ref(null);

    function modeChanged() {
        isDarkTheme.value = document.documentElement.classList.contains(darkClassName);
        
        if (!heading.value) { console.log('no heading'); return;}

        let progress = headingTimeLine.progress();
        headingTimeLine.progress(0);
        headingTimeLine.clear();
        buildHeadingTimeLine();
        headingTimeLine.progress(progress);
    }

    function toasting() {
        toast.add({ 
            severity: 'secondary', 
            summary: "hello " + inputValue.value,
            detail: '', 
            life: 2000 
        });
        inputValue.value = '';
    }


    onMounted(() => {
        useLocalStorage('theme', 'dark').value == 'dark'
            ? document.documentElement.classList.add(darkClassName) 
            : document.documentElement.classList.remove(darkClassName);
        
        handleAnimation();
    });

    function buildHeadingTimeLine() {

        let baseColor = isDarkTheme.value ? '#ffffff' : '#000000';

        headingTimeLine
        .set(headingChars, {
            y: "0",
            ease: "none",
            stagger: 0,
            color: baseColor,
        });

        headingTimeLine
        .to(headingChars, {
            duration: 0.5,
            y: "-=15",
            ease: "circle.inOut",
            stagger: 0.02,
            color: primaryColor,

        })
        .to(headingChars, {
            duration: 1,
            y: "0",
            ease: "bounce.out",
            stagger: 0.03,
            color: baseColor,

        }, ">-0.7");

    }



    function handleAnimation() {

        const rootStyles = window.getComputedStyle(document.documentElement);
        primaryColor = rootStyles.getPropertyValue('--p-primary-color').trim();
        
        isDarkTheme.value = document.documentElement.classList.contains(darkClassName);
        



        if (heading.value) {

            let split = new SplitText(heading.value, { type: "chars" });
            headingChars = split.chars;

            gsap.from(split.chars, {
                duration: 1,
                yPercent: "+=25",
                stagger: 0.02,
                autoAlpha: -0.4,
            });

            buildHeadingTimeLine(primaryColor);

        }
    }
        

    


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
    import MainButton from "./components/MainButton.vue";

</script>