// src/composables/useSheetData.js

import { ref } from 'vue';

// ---------------------------------------------------------------------
// 1. CONFIGURATION
// ---------------------------------------------------------------------

// **CRITICAL: REPLACE THIS URL with your final, deployed Apps Script URL.**
// Ensure it is the /exec URL from your latest deployment!
const SCRIPT_URL = 
'https://script.google.com/macros/s/AKfycbzKZDhdWzD2vqwbUdnPMwlEjfePy_tFpjWzmlmV6AiTzx4dooDZBAwxlIxgAALj-torZQ/exec'; 

// ---------------------------------------------------------------------
// 2. CENTRALIZED STATE
// ---------------------------------------------------------------------

const fetchedData = ref(null);
const isLoading = ref(false); // Status for GET requests
const isWriting = ref(false); // Status for POST requests
const error = ref(null);

// ---------------------------------------------------------------------
// 3. CORE NETWORK FUNCTIONS
// ---------------------------------------------------------------------

/**
 * Executes an HTTP GET request to retrieve data.
 * @param {string} sheetName - The sheet tab name.
 * @param {string} areaRange - The A1 notation range (supports 'A1:B' for infinity).
 */
async function fetchData(sheetName, areaRange) {
    if (!SCRIPT_URL.startsWith('http')) {
        error.value = 'Configuration Error: Script URL is invalid.';
        return;
    }

    const urlWithParams = `${SCRIPT_URL}?sheetName=${sheetName}&area=${areaRange}`;
    
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

        if (Array.isArray(data.data) && data.data.length > 0 && Array.isArray(data.data[0])) {
             fetchedData.value = data;
        } else {
             error.value = 'Data format invalid or empty sheet.';
        }

    } catch (err) {
        console.error('Fetch error:', err);
        error.value = `Failed to fetch data: ${err.message}`;
    } finally {
        isLoading.value = false;
    }
}

/**
 * Executes an HTTP POST request to write data (uses URLSearchParams to avoid CORS preflight).
 * @param {string} sheetName - The sheet tab name.
 * @param {string} areaRange - The A1 notation range (e.g., 'A5', 'B1:C2').
 * @param {Array<Array<any>>} dataToSend - The data to write (MUST be a 2D array).
 * @returns {Promise<boolean>} True if write was successful.
 */
async function writeData(sheetName, areaRange, dataToSend) {
    if (!SCRIPT_URL.startsWith('http')) {
        error.value = 'Configuration Error: Script URL is invalid.';
        return false;
    }

    // 1. Prepare URL-encoded form data
    const formData = new URLSearchParams();
    formData.append('sheetName', sheetName);
    formData.append('range', areaRange);
    // CRITICAL: Stringify the 2D array so the Apps Script can parse it back
    formData.append('dataToSend', JSON.stringify(dataToSend)); 

    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            // IMPORTANT: No custom Content-Type header is set here!
            body: formData 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        
        if (result.error) {
            throw new Error(result.error);
        }

        console.log("Write Successful:", result.message);
        return true; 

    } catch (err) {
        console.error('Write error:', err);
        error.value = `Failed to write data: ${err.message}`;
        return false;
    }
}


// ---------------------------------------------------------------------
// 4. COMPOSABLE EXPORT AND SIMPLE API
// ---------------------------------------------------------------------

export function useSheetData() {
    // --- LOCAL STATE FOR UI INPUT BINDING ---
    const inputSheetName = ref('openhouse'); 
    const inputAreaRange = ref('A1:B'); 
    
    // --- SIMPLE API WRAPPERS ---
    
    /**
     * Reads data using the current values of the reactive inputs (sheet name and range).
     */
    const read = async () => {
        return fetchData(inputSheetName.value, inputAreaRange.value);
    };

    /**
     * Writes a single value to a target cell/range, then refreshes the fetched data.
     * @param {string} range - The A1 notation range (e.g., 'A5').
     * @param {any} value - The single value to write.
     * @returns {Promise<boolean>} True if write was successful.
     */
    const write = async (range, value) => {
        isWriting.value = true;
        
        // 1. Format the data: Must be a 2D array: [[value]]
        const dataToSend = [[value]];
        
        // 2. Execute the write function
        const success = await writeData(inputSheetName.value, range, dataToSend);
        
        if (success) {
            // 3. Refresh the fetched data immediately after a successful write
            await read(); 
        }

        isWriting.value = false;
        return success;
    };


    return {
        // STATE: Reactive variables for display (v-if, table loops)
        fetchedData,
        isLoading,
        isWriting,
        error,

        // INPUT BINDINGS: Reactive variables for form v-model
        inputSheetName,
        inputAreaRange,

        // CLEAN API METHODS: The simple functions for your script
        read,
        write, 
    };
}