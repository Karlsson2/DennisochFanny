<script setup></script>

<template>
  <div class="welcome-background">
    <div class="welcome-background-cover"></div>
    <div class="welcome-sign">
      <div class="wedding-title">{{ $t("common.welcome") }}</div>
      <div class="wedding-subtitle">{{ $t("common.welcome-subtitle") }}</div>
      <div class="wedding-names">{{ $t("common.welcome-names") }}</div>
      <div class="wedding-dates">{{ $t("common.welcome-dates") }}</div>
    </div>
  </div>
</template>

<style scoped>
.welcome-sign {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.welcome-background {
  height: -webkit-fill-available;
  background-image: url("../assets/images/trolltunga2.jpg");
  background-size: cover;
  background-position: top left;
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
  margin-top: -40px;
}
.wedding-names {
  font-family: "southern";
  font-size: 4rem;
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
    top: 15%;
    left: 4rem;
    transform: translate(0, 0);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .welcome-background {
    position: relative;
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
</style>
