<template>
  <img class="map__map" :src="require('@/assets/' + map + '.png')">
</template>

<script>
export default {
  name: 'map-image',
  props: {
    map: String,
  },
}
</script>

<style scoped>
</style>