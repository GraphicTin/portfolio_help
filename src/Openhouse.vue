<template>

    <Topper class="">
		
		<Button @click="changeMode()" class="flex h-full w-full rounded-t-none border-t-0">
            <p>
                {{ useLocalStorage('theme') }} mode
            </p>
        </Button>
		
	</Topper>

    <Spacer/>

    <div class="bg-indigo-100 dark:bg-indigo-900 p-6 rounded-lg shadow-xl mt-8">
        <h3 class="text-xl font-bold mb-4 dark:text-gray-100">
            Write Data Back to Sheet (POST)
        </h3>
        <div class="flex flex-wrap gap-4 items-end">
            <div class="flex flex-col grow min-w-32">
                <label class="text-sm font-medium mb-1 dark:text-gray-300">Target Cell/Range</label>
                <InputText v-model="writeRange" placeholder="e.g., A5" />
            </div>
            <div class="flex flex-col grow min-w-48">
                <label class="text-sm font-medium mb-1 dark:text-gray-300">Value to Write</label>
                <InputText v-model="writeValue" placeholder="Enter new content..." />
            </div>
            <Button 
                @click="handleWrite()"
                :disabled="isWriting || !writeRange || !writeValue"
                class="p-button-secondary h-10 w-full md:w-auto"
                :label="isWriting ? 'Writing...' : 'Write Value'"
            />
        </div>
    </div>
</template> 

<script setup>  
    import Topper from './layout/Topper.vue';
    import Spacer from './layout/Spacer.vue';
    import Button  from 'primevue/button';
    import { useLocalStorage } from '@vueuse/core'
    import { ref } from 'vue'; 
    import InputText from 'primevue/inputtext'; // Added for user input fields
    import { onMounted } from 'vue'; // Added for initial data load example

    // 1. IMPORT THE COMPOSABLE
    import { useSheetData } from './utils/useSheetData'; 

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