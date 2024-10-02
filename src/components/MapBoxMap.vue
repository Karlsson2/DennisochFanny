<template>
  <div
    ref="mapContainer"
    class="map-container"
    style="width: 100%; height: 350px"
  ></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "MapBoxMap",
  props: {
    accessToken: {
      type: String,
      required: true,
    },
    center: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      map: null,
      mapLink:
        "https://www.google.com/maps?ll=57.403853,9.772262&z=15&t=m&hl=en-GB&gl=US&mapclient=apiv3&cid=4939820437180124204",
    };
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    // Initialize the Mapbox map
    this.map = new mapboxgl.Map({
      container: this.$refs.mapContainer,
      style: "mapbox://styles/fannykarlsson/cm1rvfrdn00zo01r25vu59qvw", // Style URL
      center: this.center, // Initial map center
      zoom: 15, // Initial zoom level
    });

    // Add zoom and rotation controls to the map.
    this.map.addControl(new mapboxgl.NavigationControl());

    // Add a custom marker
    const markerElement = document.createElement("div");
    markerElement.className = "custom-marker";
    markerElement.innerHTML = `
        <a href="${this.mapLink}">
          <img src="/src/assets/images/weddingpin.png" width="60" height="60" style="margin-top: 8px" />
        </a>
      `;

    new mapboxgl.Marker(markerElement).setLngLat(this.center).addTo(this.map);
  },
};
</script>

<style scoped>
.map-container {
  position: relative;
}

.custom-marker {
  text-align: center;
}
</style>
