<script setup></script>
<template>
  <div class="page-container">
    <div class="fourohhfour">
      <h2>404</h2>
      <img src="../assets/images/404.jpg" alt="" />
      <p>{{ $t("common.cantBeFound") }}</p>
    </div>
  </div>
</template>
<style scoped>
.fourohhfour {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 80%;
  justify-content: center;
  align-items: center;
}
.fourohhfour img {
  width: 80%;
  animation: spin 4s linear infinite;
}
h2 {
  font-family: "southern";
  font-size: 3rem;
  margin-top: 0;
}

@media screen and (min-width: 768px) {
  .fourohhfour {
    width: 500px;
  }
}
</style>
