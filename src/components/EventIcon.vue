<template>
  <button :style="style" class="map__event-button" @click="onClick">
    <img :src="require('@/assets/' + image + '.png')" class="map__event-icon" />
  </button>
</template>

<script>
export default {
  name: "event-icon",
  props: {
    left: Number,
    top: Number,
    image: String
  },
  computed: {
    style() {
      return `left: ${this.left}; top: ${this.top}`;
    }
  },
  methods: {
    onClick() {
      // showEventWindow(
      //   "${eventList[i].name}",
      //   "${eventList[i].desc}",
      //   "${eventList[i].image}",
      //   "${eventList[i].option1}",
      //   "${eventList[i].option2}",
      //   "${eventList[i].type}",
      //   "${eventList[i].musicUnlockName}",
      //   "${eventList[i].musicUnlockSrc}"
      // );
    }
  }
};
</script>

<style scoped>
</style>