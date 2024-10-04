<template>
  <div class="page-container">
    <div class="guest-form">
      <h2>{{ $t("common.guest-form") }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-div">
          <label for="name">{{ $t("common.name") }}</label>
          <input
            type="text"
            id="name"
            v-model="guest.name"
            :placeholder="$t('common.name-placeholder')"
            required
          />
        </div>
        <div class="input-div">
          <label for="name">{{ $t("common.email") }}</label>
          <input
            type="text"
            id="email"
            v-model="guest.email"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div class="input-div">
          <label>{{ $t("common.attending") }}</label>
          <div class="radio">
            <input
              type="radio"
              id="attending-yes"
              value="true"
              v-model="guest.attending"
              required
            />
            <label class="yesno" for="attending-yes">{{
              $t("common.yes")
            }}</label>
            <input
              type="radio"
              id="attending-no"
              value="false"
              v-model="guest.attending"
            />
            <label class="yesno" for="attending-no">{{
              $t("common.no")
            }}</label>
          </div>
        </div>

        <div class="input-div">
          <label for="allergies">{{ $t("common.allergies") }} </label>
          <textarea
            id="allergies"
            v-model="guest.allergies"
            :placeholder="$t('common.allergies-placeholder')"
          ></textarea>
        </div>

        <div class="input-div">
          <label>
            {{ $t("common.staying-over") }}
            <div class="information">
              <font-awesome-icon
                :icon="['fas', 'circle-info']"
                @click="showPopup()"
              />
            </div>
          </label>
          <div class="radio">
            <input
              type="radio"
              id="sleeping"
              value="true"
              v-model="guest.sleeping"
              required
            />
            <label class="yesno" for="sleeping-yes">{{
              $t("common.yes")
            }}</label>
            <input
              type="radio"
              id="sleeping"
              value="false"
              v-model="guest.sleeping"
            />
            <label class="yesno" for="sleeping-no">{{ $t("common.no") }}</label>
          </div>
        </div>
        <Popup
          :visible="isPopupVisible"
          @update:visible="isPopupVisible = $event"
        >
          <div class="">
            <h3>{{ $t("common.staying-over") }}</h3>
            <p>{{ $t("common.staying-over-info") }}</p>
          </div>
        </Popup>

        <div class="songs-container">
          <div class="songs">{{ $t("common.dancing") }}</div>
          <div class="information-box">
            {{ $t("common.dancing-info") }}
          </div>
        </div>

        <div class="input-div">
          <input
            type="text"
            id="song1"
            v-model="guest.song1"
            placeholder="Dead or Alive - You spin me right round"
          />
        </div>

        <div class="input-div">
          <input
            type="text"
            id="song2"
            v-model="guest.song2"
            placeholder="Rick Astley - Never Gonna Give you Up "
          />
        </div>

        <div class="input-div">
          <input
            type="text"
            id="song3"
            v-model="guest.song3"
            placeholder="Baby Shark - Baby Shark"
          />
        </div>
        <button type="submit">{{ $t("common.submit") }}</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { supabase } from "../services/supabase";
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Popup from "../components/Popup.vue";
import router from "../router";

library.add(faCircleInfo);

const guest = ref({
  name: "",
  email: "",
  attending: "true",
  allergies: "",
  sleeping: "false",
  song1: "",
  song2: "",
  song3: "",
});

const isPopupVisible = ref(false);
const popupMessage = ref("");

const showPopup = () => {
  isPopupVisible.value = true;
};

const handleSubmit = async () => {
  try {
    const { error } = await supabase.from("guests").insert({
      name: guest.value.name,
      email: guest.value.email,
      attending: guest.value.attending,
      allergies: guest.value.allergies,
      sleeping: guest.value.sleeping,
      song1: guest.value.song1,
      song2: guest.value.song2,
      song3: guest.value.song3,
    });

    if (error) {
      console.error("Error inserting data:", error.message);
      alert("An error occurred: " + error.message);
      return;
    }

    guest.value = {
      name: "",
      email: "",
      attending: "true",
      allergies: "",
      sleeping: "false",
      song1: "",
      song2: "",
      song3: "",
    };

    router.push({
      path: "/success",
      query: { message: "Registration successful!" },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    alert("An unexpected error occurred. Please try again.");
  }
};
</script>
<style scoped>
h2 {
  font-family: "southern";
  font-size: 3rem;
  margin-top: 0;
}
.radio {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}
.input-div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input,
textarea {
  font-size: 1.1rem;
}
.guest-form {
  margin: 0 auto;
  max-width: 500px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 1rem 3rem 1rem;
}
.songs-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
label,
.songs {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  font-family: "Cinzel", serif;
  font-size: 1.2rem;
}

input[type="text"],
textarea {
  padding: 0.5em;
  width: -webkit-fill-available;
}

button {
  padding: 0.7em;
  background-color: #b3bfb8;

  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.yesno {
  font-size: 1rem;
}

button:hover {
  background-color: #828b86;
}

p {
  margin-top: 0.5em;
}
.information:hover {
  cursor: pointer;
  color: #828b86;
}
</style>
