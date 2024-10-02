<script setup>
import { ref, onMounted, computed } from "vue";
import { supabase } from "../services/supabase";

const gifts = ref([]);
const selectedType = ref(""); // Holds the selected gift type (either "Group" or "Single")

async function getGifts() {
  const { data, error } = await supabase.from("gifts").select();
  if (error) {
    console.error("Error fetching gifts:", error);
    return;
  }
  gifts.value = data;
}

const filteredGifts = computed(() => {
  if (!selectedType.value) {
    return gifts.value;
  }
  return gifts.value.filter((gift) => gift.type === selectedType.value);
});

onMounted(() => {
  getGifts();
});

function setType(type) {
  selectedType.value = type;
}
</script>

<template>
  <div class="page-container">
    <h2>{{ $t("common.wishlist") }}</h2>
    <div class="gift-info">
      {{ $t("common.gift-info") }}
    </div>
    <!-- Filter buttons -->
    <div class="sort-by">
      <button @click="setType('')">{{ $t("common.all") }}</button>
      <button @click="setType('GROUP')">{{ $t("common.group") }}</button>
      <button @click="setType('SINGLE')">{{ $t("common.single") }}</button>
    </div>
    <!-- Display filtered gifts -->
    <div class="gifts">
      <a :href="gift.link" v-for="gift in filteredGifts" :key="gift.id">
        <div class="gift">
          <img :src="gift.image_url" alt="" />
          <div class="title">{{ gift.name }}</div>
        </div>
      </a>
    </div>
  </div>
</template>
<style scoped>
.gifts {
  display: flex;
  margin: 0 auto;
  max-width: 80%;
  flex-wrap: wrap;
}
h2 {
  font-family: "southern";
  font-size: 3rem;
  margin-top: 0;
}

.gifts a {
  width: 50%;
}
.gift {
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;
}

.gift img {
  max-width: 100%;
  border-radius: 8px;
}
.gift-info {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 80%;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.gift .title {
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
}

.gift:hover {
  transform: scale(1.01);
}

/* Button styling */
.sort-by {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.sort-by button {
  margin: 0 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #b3bfb8;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.sort-by button:hover {
  background-color: #828b86;
}

@media screen and (min-width: 768px) {
  .gifts {
    width: 500px;
  }
  .gift-info {
    width: 500px;
  }
}
</style>
