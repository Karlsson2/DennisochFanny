<template>
  <div class="page-container">
    <h1>{{ successMessage }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const successMessage = route.query.message || "No message provided";
</script>
<style scoped></style>
