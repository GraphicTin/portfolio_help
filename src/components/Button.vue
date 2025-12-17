<template>
  <button
    :type="type"
    :class="[
      'inline-flex btn-primary items-center justify-center font-semibold border rounded-lg transition duration-200 ease-in-out whitespace-nowrap',
      sizeClasses,
      variantClasses,
      { 'opacity-70 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  /**
   * Defines the HTML button type (submit, button, reset)
   */
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['submit', 'button', 'reset'].includes(value),
  },
  /**
   * Defines the visual style of the button.
   */
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'danger', 'ghost'].includes(value),
  },
  /**
   * Defines the size of the button.
   */
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  /**
   * Disables the button and changes its appearance.
   */
  disabled: {
    type: Boolean,
    default: false,
  },
});

// Define emitted events
defineEmits(['click']);

// --- Computed Classes for Styling ---

/**
 * Calculates Tailwind classes based on the 'variant' prop.
 */
const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700 active:bg-blue-800 disabled:bg-gray-400';
    case 'secondary':
      return 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100 active:bg-gray-200 disabled:text-gray-500';
    case 'danger':
      return 'bg-red-600 text-white border-red-600 hover:bg-red-700 active:bg-red-800 disabled:bg-red-300';
    case 'ghost':
      return 'bg-transparent text-blue-600 border-transparent hover:bg-blue-50 active:bg-blue-100 disabled:text-gray-500';
    default:
      return '';
  }
});

/**
 * Calculates Tailwind classes for padding based on the 'size' prop.
 */
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm';
    case 'lg':
      return 'px-8 py-3 text-lg';
    case 'md':
    default:
      return 'px-6 py-2 text-base';
  }
});
</script>