<template>
  <main class="main">
    <div class="map-background"></div>
    <div class="map">
      <MapImage />
      <EventIcons />
    </div>
  </main>
</template>

<script>
import MapImage from "@/components/MapImage.vue";
import EventIcons from "@/components/EventIcons.vue";

export default {
  name: "map-content",
  components: {
    MapImage,
    EventIcons
  }
};
</script>

<style scoped>
.main {
  height: calc(100% - 100px);
  position: relative;
}

.map {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  height: 730px;
  width: 1118px;
  border: 3px dashed black;
  border-radius: 5%;
  cursor: grab;
}

.map-background {
  background-image: url("../assets/mapmenu-background-image.jpg");
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
}
</style>