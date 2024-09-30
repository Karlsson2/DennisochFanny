<script setup>
import { GoogleMap, CustomMarker } from "vue3-google-map";

const center = { lat: 57.40381284095866, lng: 9.771508127390755 };

const apiKey = import.meta.env.VITE_GMAPS_KEY;
</script>

<template>
  <div class="page-container">
    <h2>Information</h2>
    <div class="information">
      <div class="information-container">
        <h3>Location</h3>
        <p>
          The event will be held at
          <a
            href="https://www.google.com/maps?ll=57.403853,9.772262&z=15&t=m&hl=en-GB&gl=US&mapclient=apiv3&cid=4939820437180124204"
            >Lykkesholmgaard</a
          >, Lyngby Torp 84, 9480 Løkken
        </p>
        <GoogleMap
          :api-key="apiKey"
          style="width: 100%; height: 500px"
          :center="center"
          :zoom="15"
        >
          <CustomMarker
            :options="{ position: center, anchorPoint: 'BOTTOM_CENTER' }"
          >
            <a
              href="https://www.google.com/maps?ll=57.403853,9.772262&z=15&t=m&hl=en-GB&gl=US&mapclient=apiv3&cid=4939820437180124204"
            >
              <div style="text-align: center">
                <img
                  src="../assets/images/weddingpin.png"
                  width="50"
                  height="50"
                  style="margin-top: 8px"
                />
              </div>
            </a>
          </CustomMarker>
        </GoogleMap>
      </div>
      <div class="information-container">
        <h3>Timeline</h3>
      </div>
      <div class="information-container">
        <h3>Accomodation</h3>
        <p>
          If you’d like to extend the celebration and stay overnight at the
          venue between Saturday and Sunday, we’re pleased to offer some
          sleeping arrangement, there will be 27 sleeping spots in double beds
          and additional arrangements can be made with air matresses for those
          that are comfortable to sleep on them in the communal areas in the
          accomodation halls.
        </p>
      </div>
      <div class="information-container">
        <h3>Children</h3>
        <p>
          Children are welcome at the ceremony but we kindly ask that you make
          arrangements for them afterwards, children whom are too young to have
          a babysitter is obviously exempt from this.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.information {
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.information-container {
  width: 50%;
}
h2 {
  font-family: "southern";
  font-size: 3rem;
  margin-top: 0;
}
</style>
