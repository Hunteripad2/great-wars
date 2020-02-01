<template>
  <img class="map__map" :src="require('@/assets/' + currentMap + '.png')">
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'map-image',
  computed: mapState([
    'currentMap'
  ]),

}
</script>

<style scoped>
</style>