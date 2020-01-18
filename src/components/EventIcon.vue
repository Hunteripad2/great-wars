<template>
  <button style="left: {{left}}; top: {{top}}" class="map__event-button" onclick="showEventWindow('${eventList[i].name}', '${eventList[i].desc}', '${eventList[i].image}', '${eventList[i].option1}', '${eventList[i].option2}', '${eventList[i].type}', '${eventList[i].musicUnlockName}', '${eventList[i].musicUnlockSrc}')"><img :src="require('@/assets/' + image + '.png')" class="map__event-icon"></button>
</template>

<script>
export default {
  name: 'event-icon',
  props: {
    left: Number,
    top: Number,
    image: String,
  },
}
</script>

<style scoped>
</style>