<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import { supabase } from "../services/supabase";
import Popup from "../components/Popup.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";

library.add(faLink);

// Reactive references for gifts and selected type
const gifts = ref([]);
const selectedType = ref(""); // Holds the selected gift type ("GROUP" or "SINGLE")

// Reactive object to store claim data for each gift
const claimData = reactive({});

// Reactive object to track loading states
const loading = reactive({
  fetchingGifts: false,
  claiming: {}, // Tracks claiming state per gift ID
});

// Popup state for claim form
const showClaimPopup = ref(false);
const currentGiftId = ref(null);

// Popup state for messages
const showMessagePopup = ref(false);
const messagePopupContent = ref("");
const messagePopupType = ref(""); // 'success' or 'error'

// Function to fetch gifts from Supabase
async function getGifts() {
  loading.fetchingGifts = true;
  const { data, error } = await supabase.from("gifts").select();

  if (error) {
    console.error("Error fetching gifts:", error);
    showMessage("Failed to load gifts. Please try again later.", "error");
    loading.fetchingGifts = false;
    closeClaimPopup(); // Close the claim popup if it's open
    return;
  }

  gifts.value = data;

  // Initialize claimData for each gift if not already initialized
  data.forEach((gift) => {
    if (!claimData[gift.id]) {
      claimData[gift.id] = {
        email: "",
        claimAmount: 1, // Default claim amount
      };
    }
  });

  loading.fetchingGifts = false;
}

// Computed property to filter gifts based on selected type
const filteredGifts = computed(() => {
  if (!selectedType.value) {
    return gifts.value;
  }
  return gifts.value.filter((gift) => gift.type === selectedType.value);
});

// Computed property to get the maximum claimable amount for the current gift
const currentGiftMaxAmount = computed(() => {
  if (currentGiftId.value) {
    const gift = gifts.value.find((g) => g.id === currentGiftId.value);
    return gift ? gift.amount - gift.claimed_amount : 1;
  }
  return 1;
});

// Fetch gifts when the component is mounted
onMounted(() => {
  getGifts();
});

// Function to handle claiming a gift
async function claimGift(giftId) {
  const { email, claimAmount } = claimData[giftId];

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage("Please enter a valid email address.", "error");
    closeClaimPopup(); // Close the claim popup on error
    return;
  }

  // Find the current gift
  const gift = gifts.value.find((g) => g.id === giftId);
  if (!gift) {
    showMessage("Gift not found.", "error");
    closeClaimPopup(); // Close the claim popup on error
    return;
  }

  const remainingAmount = gift.amount - gift.claimed_amount;

  // Validate claim amount
  if (claimAmount <= 0 || claimAmount > remainingAmount) {
    showMessage("Invalid claim amount.", "error");
    closeClaimPopup(); // Close the claim popup on error
    return;
  }

  // Prevent multiple claims simultaneously for the same gift
  if (loading.claiming[giftId]) {
    return;
  }

  loading.claiming[giftId] = true;

  try {
    // Check if the email has already claimed this gift
    const { data: existingClaim, error: existingClaimError } = await supabase
      .from("gift_claims")
      .select("*")
      .eq("gift_id", giftId)
      .eq("email", email);

    // Check if there was an error fetching the claim
    if (existingClaimError) {
      console.error("Error fetching existing claim:", existingClaimError);
      showMessage("An error occurred while checking your claim.", "error");
      closeClaimPopup(); // Close the claim popup on error
      return;
    }

    // Check if the existingClaim array has any items
    if (existingClaim.length > 0) {
      console.log("Existing claim:", existingClaim);
      showMessage("You've already claimed this gift.", "error");
      closeClaimPopup(); // Close the claim popup on error
      return;
    }

    // Insert the new claim into the gift_claims table
    const { data: newClaim, error: insertError } = await supabase
      .from("gift_claims")
      .insert({ gift_id: giftId, email, amount_claimed: claimAmount });

    if (insertError) {
      showMessage(
        "There was an error claiming the gift. Please try again.",
        "error"
      );
      closeClaimPopup(); // Close the claim popup on error
      return;
    }

    // Update the claimed_amount in the gifts table
    const { data: updatedGift, error: updateError } = await supabase
      .from("gifts")
      .update({ claimed_amount: gift.claimed_amount + claimAmount })
      .eq("id", giftId)
      .select();

    // Check if there was an error during the update
    if (updateError) {
      showMessage("Contact support", "error");
      closeClaimPopup(); // Close the claim popup on error
      return;
    }

    // Check if the update was successful
    if (updatedGift && updatedGift.length > 0) {
      showMessage("Gift successfully claimed!", "success");
    } else {
      showMessage("plase contact an admin.", "error");
      closeClaimPopup(); // Close the claim popup on error
      return;
    }

    // Update the local state with the new claimed_amount
    gift.claimed_amount += claimAmount;

    // Optionally, clear the input fields after a successful claim
    claimData[giftId].email = "";
    claimData[giftId].claimAmount = 1;

    // Close the claim form popup after successful claim
    closeClaimPopup();
  } catch (err) {
    console.error("Unexpected error:", err);
    showMessage("An unexpected error occurred. Please try again.", "error");
    closeClaimPopup(); // Close the claim popup on error
  } finally {
    loading.claiming[giftId] = false;
  }
}

// Function to set the selected gift type for filtering
function setType(type) {
  selectedType.value = type;
}

// Function to open the claim popup
function openClaimPopup(giftId) {
  currentGiftId.value = giftId;
  showClaimPopup.value = true;
}

// Function to close the claim popup
function closeClaimPopup() {
  showClaimPopup.value = false;
  currentGiftId.value = null;
}

// Function to display message popup
function showMessage(message, type) {
  messagePopupContent.value = message;
  messagePopupType.value = type;
  showMessagePopup.value = true;
}

// Function to close the message popup
function closeMessagePopup() {
  showMessagePopup.value = false;
  messagePopupContent.value = "";
  messagePopupType.value = "";
}
</script>

<template>
  <div class="page-container">
    <h2>{{ $t("common.wishlist") }}</h2>
    <div class="gift-info">
      <p>{{ $t("common.gift-info") }}</p>
      <p>{{ $t("common.gift-info2") }}</p>
    </div>

    <!-- Filter buttons -->
    <div class="sort-by">
      <button @click="setType('')">{{ $t("common.all") }}</button>
      <button @click="setType('GROUP')">{{ $t("common.group") }}</button>
      <button @click="setType('SINGLE')">{{ $t("common.single") }}</button>
    </div>

    <!-- Display loading state -->
    <div v-if="loading.fetchingGifts" class="loading">Loading gifts...</div>

    <!-- Display filtered gifts -->
    <div class="gifts">
      <div v-for="gift in filteredGifts" :key="gift.id" class="gift">
        <a :href="gift.link" target="_blank" rel="noopener noreferrer">
          <img :src="gift.image_url" alt="Gift Image" />
          <div class="amount">
            {{ gift.claimed_amount }} / {{ gift.amount }}
            {{ $t("common.claimed") }}
          </div>
          <div class="type">
            {{
              gift.type === "GROUP" ? $t("common.group") : $t("common.single")
            }}
          </div>
        </a>
        <div class="gift-body">
          <div class="gift-text">
            <div class="title">{{ gift.name }}</div>
            <div class="wished-for">
              {{ gift.amount }} {{ $t("common.wishedFor") }}
            </div>
          </div>

          <button
            class="claim-button"
            @click="openClaimPopup(gift.id)"
            :disabled="gift.claimed_amount >= gift.amount"
          >
            {{
              gift.claimed_amount >= gift.amount
                ? $t("common.fullyClaimed")
                : $t("common.claim")
            }}
          </button>
        </div>
      </div>
    </div>

    <!-- Claim Form Popup -->
    <Popup :visible="showClaimPopup" @update:visible="closeClaimPopup">
      <div class="claim-form">
        <h3>{{ $t("common.claimGift") }}</h3>
        <label for="email">{{ $t("common.yourEmail") }}</label>
        <input
          id="email"
          type="email"
          v-model="claimData[currentGiftId].email"
          placeholder="Enter your email"
        />
        <label for="amount">{{ $t("common.giftingAmount") }}</label>
        <input
          id="amount"
          type="number"
          v-model.number="claimData[currentGiftId].claimAmount"
          :max="currentGiftMaxAmount"
          min="1"
          placeholder="Enter amount"
        />
        <button
          class="claim-button claim-submit"
          @click="claimGift(currentGiftId)"
          :disabled="loading.claiming[currentGiftId]"
        >
          <span v-if="loading.claiming[currentGiftId]">Claiming...</span>
          <span v-else>{{ $t("common.claim") }}</span>
        </button>
      </div>
    </Popup>

    <!-- Message Popup -->
    <Popup
      :visible="showMessagePopup"
      :type="messagePopupType"
      @update:visible="closeMessagePopup"
    >
      <div class="message-content">
        <p>{{ messagePopupContent }}</p>
      </div>
    </Popup>
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

.gift {
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  position: relative;
}

.gift-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 0px 0px 8px 8px;
  background: #3c3c3c;
  padding: 0.5rem;
  min-height: 150px;
}
.gift a {
  position: relative;
  background: #3c3c3c;
  border-radius: 8px 8px 0px 0px;
}
.gift img {
  width: 100%;
  border-radius: 8px 8px 0px 0px;
  max-height: 200px;
  object-fit: cover;
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

.gift .amount {
  margin-top: 4px;
  font-size: 16px;
  color: #f3f3f3;
  border-radius: 8px;
  position: absolute;
  right: 5px;
  top: 0;
  padding: 0.5rem;
  background: #555;
}
.gift .type {
  margin-top: 4px;
  font-size: 16px;
  color: #f3f3f3;
  border-radius: 8px;
  position: absolute;
  right: 5px;
  bottom: 10px;
  padding: 0.5rem;
  background: #b3bfb8;
}
.claim-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1rem 2rem 1rem;
}
.claim-form h3 {
  font-family: "Cinzel";
  font-size: 1.5rem;
  margin: 0;
}
.claim-form input {
  margin-top: 0px !important;
}
.wished-for {
  color: #808080;
}
.claim-button {
  width: 100%;
  padding: 8px 16px;
  background-color: #b3bfb8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}
.claim-button:disabled {
  background-color: #727272;
  cursor: not-allowed;
  color: #a7a7a7;
}
.claim-submit {
  margin-top: 16px;
  width: 80%;
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

input[type="email"],
input[type="number"] {
  margin-top: 8px;
  padding: 8px;
  width: 80%;
}

@media screen and (min-width: 768px) {
  .gift {
    width: 50%;
  }
  .gifts {
    width: 500px;
  }
  .gift-info {
    width: 500px;
  }
}
</style>
