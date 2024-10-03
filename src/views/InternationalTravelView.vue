<script setup></script>

<template>
  <div class="page-container">
    <h2>{{ $t("common.internationalTravel") }}</h2>
    <div class="international-travel">
      <div class="international-travel-container-100">
        <h3>{{ $t("common.travelInformationHeader") }}</h3>

        <h4>{{ $t("common.travelInfoAirport") }}</h4>
        <p>
          {{ $t("common.travelInformationContent") }}
        </p>
        <p>
          {{ $t("common.travelInformationContent2") }}
        </p>
        <h4>{{ $t("common.travelInfoFerry") }}</h4>
        <p>
          {{ $t("common.travelInformationContent3") }}

          <a href="https://www.stenaline.se/rutter/goteborg-fredrikshamn"
            >StenaLine website</a
          >
        </p>
      </div>
      <div class="international-travel-container-100">
        <h3>{{ $t("common.accomodation") }}</h3>
        <p>
          {{ $t("common.accomodationInformation") }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-family: "southern";
  font-size: 3rem;
  margin-top: 0;
}

h3,
h4 {
  font-family: "Cinzel", serif;
}

.international-travel {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
}

@media screen and (min-width: 768px) {
  .international-travel {
    width: 500px;
  }
}
</style>
