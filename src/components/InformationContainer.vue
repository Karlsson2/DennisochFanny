<template>
  <div :class="['information-container', `information-container-${width}`]">
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "100%", // Can be '100%' or '50%' depending on layout
  },
});
</script>

<style scoped>
.information-container {
  padding: 1rem;
}

.information-container-50 {
  width: 50%;
}

.information-container-100 {
  width: 100%;
}

h3 {
  font-family: "Cinzel";
}
</style>
