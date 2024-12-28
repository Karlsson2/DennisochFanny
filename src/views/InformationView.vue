<template>
  <div class="page-container">
    <h2>Information</h2>
    <div class="information">
      <InformationContainer title="Timeline" width="100">
        <div class="timeline">
          <TimeLine time="15.00" :description="$t('common.ceremony')" />
          <TimeLine
            time="15.30"
            :description="$t('common.photos-and-cocktails')"
          />
          <TimeLine time="18.00" :description="$t('common.dinner')" />
          <TimeLine time="22.30" :description="$t('common.dance-floor')" />
          <TimeLine time="22.30+" :description="$t('common.party')" />
        </div>
      </InformationContainer>

      <InformationContainer :title="$t('common.location')" width="100">
        <MapBoxMap :access-token="apiKey" :center="[9.772262, 57.403853]" />
        <p>
          {{ $t("common.location-info") }}
          <a :href="mapLink">Lykkesholmgaard</a>, Lyngby Torp 84, 9480 Løkken
        </p>
      </InformationContainer>

      <InformationContainer :title="$t('common.arrival')" width="100">
        <p>{{ $t("common.arrival-info") }}</p>
        <h3>{{ $t("common.children") }}</h3>
        <p>{{ $t("common.children-info") }}</p>
        <h3>{{ $t("common.dresscode") }}</h3>
        <p>{{ $t("common.dresscode-info") }}</p>
        <h3>{{ $t("common.toastmaster") }}</h3>
        <p>{{ $t("common.toastmaster-info") }}</p>
      </InformationContainer>

      <InformationContainer :title="$t('common.accomodation')" width="100">
        <p>{{ $t("common.accomodation-info") }}</p>
        <p>{{ $t("common.accomodation-info2") }}</p>
        <p>{{ $t("common.accomodation-info3") }}</p>
      </InformationContainer>
    </div>
  </div>
</template>

<script setup>
import TimeLine from "../components/TimeLine.vue";
import InformationContainer from "../components/InformationContainer.vue";
import MapBoxMap from "../components/MapBoxMap.vue";
const mapLink =
  "https://www.google.com/maps/place/Lykkesholmgaard,+Lyngby+Torp+84,+9480+L%C3%B8kken,+Denmark/@57.403853,9.772262,15z/data=!4m6!3m5!1s0x4648db46b4d6966b:0x448dc483ec560c2c!8m2!3d57.403784!4d9.7715329!16s%2Fg%2F11f3bl38fb?hl=en-GB&gl=US";
const apiKey = import.meta.env.VITE_MAPBOX_KEY;
</script>

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
