<template>
  <div class="main-page-container">
    <h2>Product Catalog</h2>

    <div id="controls-container">
      <input 
        type="text" 
        v-model="searchTerm" 
        placeholder="Search ONLY by tag (e.g., doe, bread)..." 
        class="search-input"
      />

      <a 
        href="https://docs.google.com/spreadsheets/d/1_FJ45DXzhzYm7A09SOfXkK2sBgUsmkk5TUvdp8JshGo/edit?gid=0#gid=0"
        target="_blank"
        class="source-button"
      >
        View Data Source 📊
      </a>
    </div>

    <div id="data-container">
      <p v-if="loading" class="status-message">Loading data...</p>
      <p v-else-if="error" class="status-message error-message">Sorry, unable to load data. Please check the console for details.</p>
      
      <p v-else-if="filteredProducts.length === 0 && !loading" class="status-message">
        No products found matching tag: "{{ searchTerm }}".
      </p>

      <ul v-else id="product-list">
        <li v-for="item in filteredProducts" :key="item.name" class="product-card">
          <h3>{{ item.name }}</h3>
          <p class="product-price">${{ item.price }}</p>
          <p>
            <strong>Description:</strong> {{ item.description || 'No description provided.' }}
          </p>
          <div v-if="item.tag" class="tag-list">
            <span v-for="tagItem in item.tag.split(',')" :key="tagItem.trim()" class="product-tag">
              {{ tagItem.trim() }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzkyVPnrL7LHagOSE1UXVOrFcd0-MBEmLvivRk1wxoll9pHubj5ulWF5Ly4_l8zt8pNKA/exec';

// 1. Reactive State
const products = ref([]);
const loading = ref(true);
const error = ref(false);
const searchTerm = ref('');

// 2. Data Fetching Logic (unchanged)
const fetchData = async () => {
  loading.value = true;
  error.value = false;
  
  try {
    const response = await fetch(SCRIPT_URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    
    if (data && data.data) {
      // Ensure the column name used in the template/logic is consistent with your sheet.
      // We assume your column is named 'tag' (lowercase) based on your last input.
      products.value = data.data; 
    } else {
       throw new Error('Invalid data format received from script.');
    }
  } catch (err) {
    console.error('Error fetching or processing data:', err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});

// 3. Computed Property for Tag-Only Filtering (RECoded)
const filteredProducts = computed(() => {
  const query = searchTerm.value.toLowerCase().trim();
  
  if (!query) {
    // If the search box is empty, show all products
    return products.value;
  }
  
  return products.value.filter(product => {
    // We only check the 'tag' property now.
    
    // 1. Safety Check: Ensure the product has a tag field and it's a non-empty string.
    if (!product.tag || typeof product.tag !== 'string' || product.tag.trim() === '') {
        return false; // Skip products with no tag data
    }

    // 2. Split and Clean Tags
    // Split the comma-separated string into an array of individual tags, 
    // trim whitespace, and convert to lowercase for case-insensitive comparison.
    const tagsArray = product.tag.split(',')
      .map(tag => tag.trim().toLowerCase())
      .filter(tag => tag.length > 0); // Remove any empty strings resulting from multiple commas

    // 3. Search: Check if ANY tag in the clean array includes the search query
    const tagMatch = tagsArray.some(tag => tag.includes(query));
      
    // The product matches ONLY if the tag search is successful
    return tagMatch;
  });
});
</script>

<style scoped>
/*
Note: The CSS is unchanged from the previous version, 
as the request focused only on modifying the search functionality.
*/

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

/* Apply the custom font to the entire component */
* {
    font-family: 'Inter', sans-serif;
}

/* --- General Layout and Font --- */
.main-page-container {
    padding: 20px;
    background-color: #f4f4f9;
}

/* --- Controls Container --- */
#controls-container {
    max-width: 900px;
    margin: 20px auto; 
    display: flex;
    justify-content: space-between; 
    align-items: center;
    gap: 20px;
}

/* --- Search Input Styling --- */
.search-input {
    flex-grow: 1;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    max-width: 500px;
    transition: border-color 0.3s, box-shadow 0.3s;
}

.search-input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

/* --- Styling for the button --- */
.source-button {
    padding: 10px 15px;
    background-color: #007bff; 
    color: white;
    text-decoration: none; 
    border-radius: 5px;
    font-weight: 600; 
    transition: background-color 0.3s;
    border: none;
    cursor: pointer;
    display: inline-block; 
}

.source-button:hover {
    background-color: #0056b3; 
}

/* --- Container for the product list --- */
#data-container {
    max-width: 900px;
    margin: 0 auto;
}

/* --- Status Messages --- */
.status-message {
  text-align: center;
  font-size: 1.2em;
  color: #555;
  padding: 40px;
}

.error-message {
  color: #dc3545; 
  font-weight: bold;
}


/* --- Product List Grid --- */
#product-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
    gap: 20px;
}

/* --- Styling for each product card --- */
.product-card {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.product-card:hover {
    transform: translateY(-5px); 
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.product-card h3 {
    margin-top: 0;
    color: #333;
    border-bottom: 2px solid #007bff;
    padding-bottom: 5px;
}

.product-card p {
    margin: 5px 0;
    color: #555;
}

.product-price {
    font-size: 1.2em;
    font-weight: 700; 
    color: #28a745;
}

/* --- Tag Styling --- */
.tag-list {
    margin-top: 10px;
}

.product-tag {
    display: inline-block;
    background-color: #e0f7fa; /* Light blue background */
    color: #007bff;
    padding: 4px 8px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 4px;
    font-size: 0.8em;
    font-weight: 600;
}
</style>