<template>
  <div v-if="visible" class="background-popup">
    <div class="popup">
      <div class="popup-content">
        <p>{{ message }}</p>

        <font-awesome-icon
          :icon="['fas', 'circle-xmark']"
          @click="closePopup"
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
  message: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
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
  right: 0;
  height: 100%;
  width: 100%;
  background: rgba(36, 36, 36, 0.5);
}
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #3b3b3b;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 0.5em;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  max-width: 500px;
}
.fa-circle-xmark {
  color: #b3bfb8;
  position: absolute;
  top: -8px;
  right: -8px;
  font-size: 32px;
  cursor: pointer;
}
.popup-content {
  text-align: center;
}
@media (max-width: 600px) {
  .popup {
    min-width: 80%;
  }
}
</style>
