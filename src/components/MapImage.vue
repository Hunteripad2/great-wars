<template>
  <div v-if="currentMap">
    <img class="map-image" :src="require('@/assets/' + currentMap + '.png')" />
  </div>
</template>

<script>
export default {
  name: "map-image",
  computed: {
    currentMap() {
      return this.$store.getters.currentMap;
    }
  }
};
</script>

<style scoped>
.map-image {
  width: 100%;
  position: absolute;
  height: 100%;
}
</style>