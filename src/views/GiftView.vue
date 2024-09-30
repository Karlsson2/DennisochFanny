<script setup>
import { ref, onMounted } from "vue"; // Import ref and onMounted from Vue
import { supabase } from "../services/supabase";

const gifts = ref([]); // Initialize gifts as a reactive reference

async function getGifts() {
  const { data, error } = await supabase.from("gifts").select();
  if (error) {
    console.error("Error fetching gifts:", error);
    return;
  }
  gifts.value = data; // Set the data to the reactive gifts reference
}

onMounted(() => {
  getGifts(); // Fetch gifts when the component is mounted
});
</script>

<template>
  <div class="page-container">
    <h2>WishList</h2>
    <div class="gifts">
      <a :href="gift.link" v-for="gift in gifts" :key="gift.id">
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
  width: 500px;
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

.gift .title {
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
}

.gift:hover {
  transform: scale(1.01);
}
</style>
