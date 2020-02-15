<template>
  <div v-if="currentMap">
    <img class="map__map" :src="require('@/assets/' + currentMap + '.png')" />
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
</style>