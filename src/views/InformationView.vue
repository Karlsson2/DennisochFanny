<script setup>
import { GoogleMap, CustomMarker } from "vue3-google-map";
import MapBoxMap from "../components/MapBoxMap.vue";

const center = { lat: 57.40381284095866, lng: 9.771508127390755 };
const mapLink =
  "https://www.google.com/maps/place/Lykkesholmgaard,+Lyngby+Torp+84,+9480+L%C3%B8kken,+Denmark/@57.403853,9.772262,15z/data=!4m6!3m5!1s0x4648db46b4d6966b:0x448dc483ec560c2c!8m2!3d57.403784!4d9.7715329!16s%2Fg%2F11f3bl38fb?hl=en-GB&gl=US";
const apiKey = import.meta.env.VITE_MAPBOX_KEY;
</script>

<template>
  <div class="page-container">
    <h2>Information</h2>
    <div class="information">
      <div class="information-container-100">
        <h3 style="margin-bottom: 54px">Timeline</h3>
        <div class="timeline">
          <div class="timeline-component">
            <div class="time">16.00</div>
            <p>{{ $t("common.ceremony") }}</p>
          </div>
          <div class="timeline-component">
            <div class="time">16.30</div>
            <p>{{ $t("common.photos-and-cocktails") }}</p>
          </div>
          <div class="timeline-component">
            <div class="time">18.00</div>
            <p>{{ $t("common.dinner") }}</p>
          </div>
          <div class="timeline-component">
            <div class="time">23.00</div>
            <p>{{ $t("common.dance-floor") }}</p>
          </div>
          <div class="timeline-component">
            <div class="time">23.00+</div>
            <p>{{ $t("common.party") }}</p>
          </div>
        </div>
      </div>
      <div class="information-container-100">
        <h3>{{ $t("common.location") }}</h3>
        <MapBoxMap :access-token="apiKey" :center="[9.772262, 57.403853]" />
        <p>
          {{ $t("common.location-info") }}

          <a :href="mapLink">Lykkesholmgaard</a>, Lyngby Torp 84, 9480 Løkken
        </p>
      </div>
      <div class="information-container-100">
        <h3>{{ $t("common.accomodation") }}</h3>
        <p>
          {{ $t("common.accomodation-info") }}
        </p>
        <p>
          {{ $t("common.accomodation-info2") }}
        </p>
      </div>
      <div class="information-container-100">
        <h3>{{ $t("common.children") }}</h3>
        <p>
          {{ $t("common.children-info") }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.information {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
}
.timeline {
  border-left: 1px solid #fff;
  margin: 0 auto;
  width: 0;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}
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

.information-container-50 {
  width: 50%;
}
.information-container-100 {
  width: 100%;
}
h2 {
  font-family: "southern";
  font-size: 3rem;
  margin-top: 0;
}
h3 {
  font-family: "Cinzel";
}

.bold {
  font-weight: bold;
}
.info-flex {
  display: flex;
  gap: 3rem;
}

@media screen and (min-width: 768px) {
  .information {
    width: unset;
    max-width: 80%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .information-container-100 {
    width: calc(50% - 40px);
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
</style>
