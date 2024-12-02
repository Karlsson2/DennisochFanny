<template>
  <div class="timeline-component">
    <div class="time">{{ time }}</div>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  time: String,
  description: String,
});
</script>

<style scoped>
.timeline-component {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  position: relative;
}
.timeline-component p {
  padding-left: 60px;
  font-family: "Cinzel";
  text-align: left;
}
.timeline .time {
  position: absolute;
  top: 0;
  left: -100px;
  font-family: "Cinzel";
  margin: 16px 0px;
}

.timeline img {
  height: 50px;
}

@media screen and (max-width: 320px) {
  .timeline-component p {
    padding-left: 40px;
  }
  .timeline .time {
    left: -80px;
  }
}

@media screen and (min-width: 768px) {
  .information {
    width: unset;
    max-width: 80%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .information-container-100 {
    width: calc(50% - 1rem);
    padding: 10px;
  }
  .timeline-component p {
    white-space: nowrap;
  }
  .information-container-100 {
    padding: 1rem;
  }
  .timeline {
    margin: 18px auto;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .timeline-component p {
    white-space: wrap;
  }
  .information {
    max-width: 90%;
  }
}
</style>
