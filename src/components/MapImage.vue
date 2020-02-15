<template>
  <img class="map__map" :src="require('@/assets/' + currentMap + '.png')">
</template>

<script>
export default {
  name: 'map-image',
  computed: {
    currentMap() {
      return this.$store.getters.currentMap
    }
  }
}
</script>

<style scoped>
</style>