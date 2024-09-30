<script setup></script>

<template>
  <div class="welcome-background">
    <div class="welcome-background-cover"></div>
    <div class="welcome-sign">
      <div class="wedding-title">Welcome</div>
      <div class="wedding-subtitle">to our Wedding</div>
      <div class="wedding-names">Dennis and Fann&#57368;</div>
      <div class="wedding-dates">August 9th, 2025</div>
    </div>
  </div>
</template>

<style scoped>
.plus {
  font-family: "Cinzel";
}
.register-button {
  padding: 8px 16px;
  background-color: #b3bfb8;
  border-radius: 10px;
  cursor: pointer;
  width: fit-content;
  border: 1px solid white;
}
.welcome-sign {
  position: absolute;
  top: 15%;
  left: 4rem;
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
  background: rgba(36, 36, 36, 0.3);
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
  font-size: 5rem;
}
</style>
