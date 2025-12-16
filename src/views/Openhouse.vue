<template>

    <Topper class="">
		
		<Button @click="changeMode()" class="flex h-full w-full rounded-t-none border-t-0">
            <p>
                {{ useLocalStorage('theme') }} mode
            </p>
        </Button>
		
	</Topper>

    <Spacer/>

</template> 

<script setup>  

    import Topper from '@/layout/Topper.vue';
    import Spacer from '@/layout/Spacer.vue';
    import { useLocalStorage } from '@vueuse/core'
    import { ref } from 'vue'; 
    import { onMounted } from 'vue';

    // 1. IMPORT THE COMPOSABLE
    import { useSheetData } from '@/utils/useSheetData'; 
    import Button from '@/components/Button.vue';

    // 2. CALL THE COMPOSABLE TO GET ALL STATE AND METHODS IN ONE OBJECT
    const sheet = useSheetData();

    // --- 2. DEFINE THE ONMOUNTED LOGIC ---
    onMounted(async () => {
        // A. Initial Read/Fetch: 
        // Calls the sheet.read() method, which uses the default 
        // sheet.inputSheetName ('openhouse') and sheet.inputAreaRange ('A1:B').
        await sheet.read(); 

        // B. Write Test: 
        // This is how you call the simplified write function.
        // Arguments: 1. Target Cell/Range, 2. Value to write.
        // The write function handles the POST, the 2D array formatting, 
        // and automatically calls sheet.read() again to refresh the table!
        const success = await sheet.write('A4', 'INIT LOAD SUCCESS');
        
        if (success) {
            console.log("Successfully wrote data to A1 and refreshed the view.");
        } else {
            console.error("Write failed. Check console and Apps Script logs.");
        }
    });


</script>