<template>
  <div v-if="visible" class="background-popup">
    <div class="popup">
      <div class="popup-content">
        <!-- Slot for custom content -->
        <div>
          <div v-if="props.type === 'success'" class="success-title">
            ✨ Success ✨
          </div>
          <div v-else-if="props.type === 'error'" class="error-title">
            🔥 Error 🔥
          </div>
        </div>
        <slot></slot>
        <!-- Close Icon -->
        <font-awesome-icon
          :icon="['fas', 'circle-xmark']"
          @click="closePopup"
          class="close-icon"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import { defineProps, defineEmits } from "vue";

library.add(faCircleXmark);

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    default: "", // Can be 'success' or 'error'
  },
});

const emit = defineEmits(["update:visible"]);

const closePopup = () => {
  emit("update:visible", false);
};
</script>

<style scoped>
.background-popup {
  position: fixed;
  top: 0;
  left: 0; /* Ensure full coverage */
  height: 100%;
  width: 100%;
  background: rgba(36, 36, 36, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it overlays other content */
}

.popup {
  background: #3b3b3b;
  border: 1px solid #ccc;
  padding: 1.5rem;
  border-radius: 0.5em;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 90%;
  position: relative;
  color: white; /* Default text color */
}

.success-title {
  font-family: "Cinzel";
  font-size: 24px;
}

.error-title {
  font-family: "Cinzel";
  font-size: 24px;
}

.close-icon {
  position: absolute;
  top: -12px;
  right: -12px;
  color: #b3bfb8;
  font-size: 24px;
  cursor: pointer;
}

.popup-content {
  text-align: center;
}
</style>
