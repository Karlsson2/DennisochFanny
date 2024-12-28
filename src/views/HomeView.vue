<script setup></script>

<template>
  <div class="welcome-background">
    <div class="welcome-background-cover"></div>
    <div class="welcome-sign">
      <div class="container-container">
        <div class="text-container">
          <div class="wedding-title">{{ $t("common.welcome") }}</div>
          <div class="wedding-subtitle">
            {{ $t("common.welcome-subtitle") }}
          </div>
          <div class="wedding-names">{{ $t("common.welcome-names") }}</div>
          <div class="wedding-dates">{{ $t("common.welcome-dates") }}</div>
        </div>

        <div class="message">{{ $t("common.welcome-message") }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-sign {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.message {
  font-family: "Cinzel", serif;
  font-size: 1rem;
  background: #b3bfb8;
  padding: 10px;
  height: fit-content;
  border-radius: 5px;
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translate(-50%, 50%);
}

.container-container {
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: relative;
}
.welcome-background {
  height: -webkit-fill-available;
  height: fill-available; /* For Firefox */
  height: 100%; /* Fallback for other browsers */
  background-image: url("../assets/images/trolltunga3.jpg");
  background-size: cover;
  background-position: top center;
  position: relative;
}
.welcome-background-cover {
  background: rgba(36, 36, 36, 0.35);
  height: 100%;
  width: 100%;
}
.wedding-title {
  font-family: "southern";
  font-size: 6rem;
}
.wedding-subtitle {
  font-family: "Cinzel", serif;
  font-size: 1rem;
  margin-top: -56px;
  margin-left: 92px;
}
.wedding-dates {
  font-family: "Cinzel", serif;
  font-size: 1rem;
  margin-top: -15px;
}
.wedding-names {
  font-family: "southern";
  font-size: 2.6rem;
}
@media screen and (max-width: 375px) {
  .wedding-title {
    font-size: 4rem;
  }
  .wedding-names {
    font-size: 2rem;
  }
  .wedding-subtitle {
    font-family: "Cinzel", serif;
    font-size: 0.75rem;
    margin-top: -40px;
  }
  .wedding-dates {
    font-family: "Cinzel", serif;
    font-size: 0.75rem;
    margin-top: -5px;
  }
}
@media screen and (min-width: 769px) {
  .welcome-sign {
    position: absolute;
    transform: translate(-50%, -70%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .welcome-background {
    position: relative;
    background-position: top center;
  }
  .welcome-background-cover {
    background: rgba(36, 36, 36, 0.35);
    height: 100%;
    width: 100%;
  }
  .wedding-title {
    font-size: 6rem;
  }
  .wedding-subtitle {
    font-size: 1rem;
    margin-top: -56px;
    margin-left: 92px;
  }
  .wedding-dates {
    font-size: 1rem;
    margin-top: -40px;
  }
  .wedding-names {
    font-size: 5rem;
  }
}

@media screen and (min-width: 1200px) {
  .message {
    position: absolute;
    top: 50%;
    transform: translate(0%, -40%);
    left: calc(100% + 48px);
    max-width: 300px;
  }
}
</style>
