<script setup>
import { GoogleMap, CustomMarker } from "vue3-google-map";

const center = { lat: 57.40381284095866, lng: 9.771508127390755 };

const apiKey = import.meta.env.VITE_GMAPS_KEY;
</script>

<template>
  <div class="page-container">
    <h2>Information</h2>
    <div class="information">
      <div class="information-container-100">
        <h3>Timeline</h3>
        <div class="timeline">
          <div class="timeline-component">
            <div class="time">16.00</div>
            <p>Ceremony</p>
          </div>
          <div class="timeline-component">
            <div class="time">16.30</div>
            <p>Photos & Cocktails</p>
          </div>
          <div class="timeline-component">
            <div class="time">18.00</div>
            <p>Dinner</p>
          </div>
          <div class="timeline-component">
            <div class="time">23.00</div>
            <p>Dance floor opens</p>
          </div>
          <div class="timeline-component">
            <div class="time">23.00+</div>
            <p>Party</p>
          </div>
        </div>
      </div>
      <div class="information-container-100">
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
          style="width: 100%; height: 400px"
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
      <div class="information-container-100 info-flex">
        <div class="information-container-50">
          <h3>Accomodation</h3>
          <p>
            If you’d like to extend the celebration and stay overnight at the
            venue between Saturday and Sunday, we’re pleased to offer some
            sleeping arrangement, there will be 27 sleeping spots in double beds
            and additional arrangements can be made with air matresses for those
            that are comfortable to sleep on them in the communal areas in the
            accomodation halls.
          </p>
          <p>
            Accomodation will be priced at
            <span class="bold">370DKK per person,</span> please fill in this is
            the RSVP if you wish to stay overnight.
          </p>
        </div>
        <div class="information-container-50">
          <h3>Children</h3>
          <p>
            Children are welcome at the ceremony but we kindly ask that you make
            arrangements for them afterwards, children whom are too young to
            have a babysitter is obviously exempt from this.
          </p>
        </div>
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
  margin: 0 auto;
  padding: 0px 120px;
  gap: 4rem;
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
  padding-left: 40px;
  white-space: nowrap;
  font-family: "Cinzel";
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
</style>
