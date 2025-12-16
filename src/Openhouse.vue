<template>

    <Topper class="">
		
		<Button @click="changeMode()" class="flex h-full w-full rounded-t-none border-t-0">
            <p>
                {{ useLocalStorage('theme') }} mode
            </p>
        </Button>
		
	</Topper>

    <Spacer/>

    <div class="p-6 bg-gray-50 dark:bg-gray-800 min-h-screen">
        <h2 class="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Google Sheets Data Fetcher
        </h2>
        
        <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl mb-8">
            <div class="flex flex-wrap gap-4 items-end mb-4">
                
                <div class="flex flex-col flex-grow min-w-40">
                    <label for="sheet" class="text-sm font-medium mb-1 dark:text-gray-300">Sheet Tab Name</label>
                    <InputText id="sheet" v-model="inputSheetName" placeholder="e.g., openhouse" />
                </div>
                
                <div class="flex flex-col flex-grow min-w-40">
                    <label for="range" class="text-sm font-medium mb-1 dark:text-gray-300">A1 Range (E.g., A2:A or B1:C5)</label>
                    <InputText id="range" v-model="inputAreaRange" placeholder="e.g., A2:A (to infinity)" />
                </div>

                <Button 
                    @click="fetchData(inputSheetName, inputAreaRange)" 
                    :disabled="isLoading || !inputSheetName || !inputAreaRange"
                    class="p-button-primary h-10 w-full md:w-auto"
                    :label="isLoading ? 'Loading...' : 'Fetch Data'"
                />
            </div>
        </div>
        
        <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 p-4 rounded mb-4 dark:bg-red-900 dark:border-red-600 dark:text-red-300">
            <p class="font-bold">Fetch Error:</p>
            <p>{{ error }}</p>
        </div>

        <div v-if="isLoading" class="mt-4 text-lg font-semibold text-blue-500 dark:text-blue-300">
            Fetching data... please wait.
        </div>
        
        <div v-if="fetchedData && fetchedData.data && fetchedData.data.length" class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl">
            <h3 class="text-xl font-semibold mb-4 dark:text-gray-100">
                Results from: <span class="text-blue-500">{{ fetchedData.sheet }}</span> (Range: <span class="text-blue-500">{{ fetchedData.range }}</span>)
            </h3>
            
            <div class="overflow-x-auto">
                <table class="w-full table-auto border-collapse border border-gray-300 dark:border-gray-600">
                    <thead class="bg-gray-100 dark:bg-gray-600">
                        <tr>
                            <th class="border p-2 text-left text-sm font-semibold dark:text-gray-200">#</th>
                            <th v-for="(_, colIndex) in fetchedData.data[0]" :key="colIndex" class="border p-2 text-left text-sm font-semibold dark:text-gray-200">
                                Column {{ colIndex + 1 }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, rowIndex) in fetchedData.data" :key="rowIndex" :class="{'bg-gray-50 dark:bg-gray-700': rowIndex % 2 === 0, 'bg-white dark:bg-gray-800': rowIndex % 2 !== 0}">
                            <td class="border p-2 font-medium dark:text-gray-300">{{ rowIndex + 1 }}</td>
                            <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="border p-2 text-sm dark:text-gray-300">
                                {{ cell && cell.toString().trim() !== '' ? cell : '—' }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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

    // --- Configuration and State ---
    
    // **CRITICAL: Replace the URL below with your final, deployed Google Apps Script URL.**
    const scriptUrl = ref('https://script.google.com/macros/s/AKfycbyNgLbLc9IVXT6zEG8frcnRa9VK0v5p0z1VsTrms10mgxQuZci-sQSpR5EeBiHWtA1xMw/exec');
    
    const fetchedData = ref(null);
    const isLoading = ref(false);
    const error = ref(null);

    // Reactive variables for user input - Use your sheet/data as defaults
    const inputSheetName = ref('openhouse'); 
    const inputAreaRange = ref('A1:B'); // Example range for the first two columns down to the end

    // 2. Local Storage Theme Logic
    const theme = useLocalStorage('theme', 'dark');
    const changeMode = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        // You would typically update a CSS class on the body here
        document.documentElement.classList.toggle('dark', theme.value === 'dark');
    };
    onMounted(() => {
        // Apply initial theme class
        document.documentElement.classList.toggle('dark', theme.value === 'dark');
    });

    // 3. Define the GET Data Function
    const fetchData = async (sheetName, areaRange) => {
        if (!scriptUrl.value.startsWith('http')) {
            error.value = 'Configuration Error: Please update scriptUrl with your deployed Google Apps Script URL.';
            return;
        }

        const urlWithParams = `${scriptUrl.value}?sheetName=${sheetName}&area=${areaRange}`;
        
        isLoading.value = true;
        error.value = null;
        fetchedData.value = null;

        try {
            const response = await fetch(urlWithParams);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.error);
            }

            // Check if data is an array of arrays (2D)
            if (Array.isArray(data.data) && data.data.length > 0 && Array.isArray(data.data[0])) {
                 fetchedData.value = data;
            } else {
                 error.value = 'Data format invalid. Received data may not be a 2D array.';
            }

        } catch (err) {
            console.error('Fetch error:', err);
            error.value = `Failed to fetch data: ${err.message}`;
        } finally {
            isLoading.value = false;
        }
    };
</script>