<script>
import { useI18n } from "vue-i18n";

export default {
  data() {
    return {
      isMenuOpen: false,
      currentLocale: this.$i18n.locale, // Initialize with current locale
      availableLocales: [
        { code: "en", label: "🇬🇧 EN" },
        { code: "sv", label: "🇸🇪 SV" },
        { code: "dk", label: "🇩🇰 DK" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.handleBodyScroll(this.isMenuOpen);
    },
    closeMenu() {
      this.isMenuOpen = false;
      this.handleBodyScroll(false);
    },
    handleBodyScroll(isMenuOpen) {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden"; // Prevent scrolling
      } else {
        document.body.style.overflow = "auto"; // Enable scrolling
      }
    },
    changeLocale() {
      this.$i18n.locale = this.currentLocale; // Update vue-i18n locale
      localStorage.setItem("locale", this.currentLocale); // Persist selection
    },
  },
  watch: {
    // Watch for route changes
    $route() {
      this.isMenuOpen = false;
      this.handleBodyScroll(false); // Reset scrolling when route changes
    },
  },
  mounted() {
    // Load saved locale from localStorage if available
    const savedLocale = localStorage.getItem("locale");
    if (
      savedLocale &&
      this.availableLocales.map((l) => l.code).includes(savedLocale)
    ) {
      this.currentLocale = savedLocale;
      this.$i18n.locale = savedLocale;
    }
  },
};
</script>

<template>
  <header>
    <div class="logo">
      <RouterLink to="/">D&F</RouterLink>
    </div>
    <button class="burger" @click="toggleMenu" aria-label="Toggle navigation">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <nav :class="{ active: isMenuOpen }">
      <div :class="{ active: isMenuOpen }" class="nav-title">
        {{ $t("common.welcome-names") }}
      </div>
      <RouterLink to="/information" @click="toggleMenu">{{
        $t("common.information")
      }}</RouterLink>
      <RouterLink to="/register" @click="toggleMenu">{{
        $t("common.rsvp")
      }}</RouterLink>
      <RouterLink to="/gifts" @click="toggleMenu">{{
        $t("common.wishlist")
      }}</RouterLink>

      <!-- Language Selector -->
      <label for="language-select" class="sr-only">Select Language</label>
      <select
        id="language-select"
        v-model="currentLocale"
        @change="changeLocale"
      >
        <option
          v-for="locale in availableLocales"
          :key="locale.code"
          :value="locale.code"
        >
          {{ locale.label }}
        </option>
      </select>

      <div :class="{ active: isMenuOpen }" class="message">
        {{ $t("common.thankYou") }}
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: absolute;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between; /* Change to space-between */
  align-items: center; /* Align items vertically */
  width: 100%;
  padding: 10px;
  margin-bottom: 40px;
}
.logo a {
  font-family: "Cinzel", serif;
}
.nav-title {
  display: none;
  font-family: "southern";
  transition: all 0.5s ease; /* Add transition */
  font-size: 32px;
}
.message {
  display: none;
  font-family: "southern";
  transition: all 0.5s ease; /* Add transition */
}
nav {
  display: flex; /* Show the nav by default for larger screens */
  gap: 20px;
  font-family: "Cinzel", serif;
}

nav a {
  font-family: "Cinzel", serif;
}

/* Burger button styles */
.burger {
  display: none; /* Hide burger button by default */
  flex-direction: column;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 9999;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.bar {
  width: 25px;
  height: 3px;
  background: #fff;
  margin: 3px 0; /* Spacing between bars */
  transition: 0.3s; /* Smooth transition */
}
select {
  font-family: "Cinzel", serif;
  background: none;
  border: none;
  font-size: 16px;
  width: fit-content;
}

select:hover {
  cursor: pointer;
}

/* Mobile and tablet styles */
@media (max-width: 768px) {
  nav {
    align-items: center;
    color: #fff;
    font-family: "Cinzel";
    opacity: 0; /* Hidden initially */
    transform: translateX(100%); /* Initially off-screen to the right */
    position: fixed;
    top: 0;
    right: 0;
    background: #b3bfb8;
    width: 100%;
    height: 100vh;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
    transition: transform 0.5s ease, opacity 0.5s ease; /* Add transition for sliding */
    font-size: 1.2rem;
    gap: 1rem;
    padding: 5rem;
    justify-content: space-around;
    flex-direction: column;
  }
  nav a:hover {
    color: #828b86;
  }
  nav a {
    font-family: "Cinzel", serif;
  }

  nav.active {
    opacity: 1; /* Fully visible */
    transform: translateX(0); /* Slide in from the right */
    visibility: visible; /* Make visible */
  }

  .nav-title.active {
    font-size: 32px;
    display: block;
  }
  .message.active {
    display: block;
  }

  .burger {
    display: flex; /* Show burger button on mobile */
  }
}

/* Large screens styles (optional) */
@media (min-width: 769px) {
  nav {
    display: flex; /* Show nav by default for larger screens */
  }
  .burger {
    display: none; /* Hide burger button for larger screens */
  }
}
html,
body {
  overflow-x: hidden; /* Prevent horizontal scrolling */
}
</style>
