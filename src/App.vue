<script setup>
import NavigationHeader from "./components/Header.vue";
</script>

<template>
  <main>
    <NavigationHeader />
    <RouterView />
  </main>
  <footer></footer>
</template>

<style>
.page-container {
  width: 100%;
  padding-top: 80px;
}
* {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
}
main {
  height: -webkit-fill-available;
  position: relative;
}
@font-face {
  font-family: southern;
  src: url("./assets/fonts/southerns.ttf");
}
</style>
