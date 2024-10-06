<script setup>
import NavigationHeader from "./components/Header.vue";
import "mapbox-gl/dist/mapbox-gl.css";
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
html,
body {
  overflow-x: hidden; /* Prevent horizontal scrolling */
}
* {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
}
main {
  height: -webkit-fill-available;
  height: fill-available; /* For Firefox */
  height: 100%; /* Fallback for other browsers */
  position: relative;
}
@font-face {
  font-family: southern;
  src: url("./assets/fonts/southerns.ttf");
}
@font-face {
  font-family: Cinzel;
  src: url("./assets/fonts/Cinzel.ttf");
}
</style>
