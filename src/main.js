import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";

// Import locale messages
import en from "./locales/en/common.json";
import sv from "./locales/sv/common.json";
import dk from "./locales/dk/common.json";

// Define available languages
const messages = {
  en: { common: en },
  dk: { common: dk },
  sv: { common: sv },
};

const userLang = navigator.language.split("-")[0];
const locale = ["en", "sv", "dk"].includes(userLang) ? userLang : "en";

const i18n = createI18n({
  locale, // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
  legacy: false, // use Composition API
  globalInjection: true, // allow global usage
});

createApp(App).use(router).use(i18n).mount("#app");
