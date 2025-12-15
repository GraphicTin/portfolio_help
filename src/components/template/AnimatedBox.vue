<script setup>
import anime from 'animejs';
import { ref, onMounted } from 'vue';

// 1. Create a template ref to link to the DOM element
const animatableElement = ref(null);

onMounted(() => {
  // 2. The element is now in the DOM, so we can run the animation
  if (animatableElement.value) {
    anime({
      targets: animatableElement.value, // Target the DOM element via its ref
      translateX: 250,                  // Move it 250px on the X-axis
      rotate: '1turn',                  // Rotate it 360 degrees
      backgroundColor: '#FFF',
      duration: 800,
      loop: true,
      easing: 'easeInOutQuad'
    });
  }
});
</script>

<template>
  <div 
    ref="animatableElement" 
    class="box"
  >
    Animate Me!
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #41b883; /* Vue Green */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>