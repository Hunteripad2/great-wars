<template>
  <div v-if="currentEvents">
    <button :style="style" class="map__event-button" @click="onClick" v-for="event in currentEvents" v-bind:key="event.name">
      <img :src="require('@/assets/' + event.icon + '.png')" class="map__event-icon" />
    </button>
  </div>
</template>

<script>
export default {
  name: "event-icons",
  computed: {
    currentEvents() {
      return this.$store.getters.currentEvents
    },
    style(event) { 
      return `left: ${event.positionX}; top: ${event.positionY}`;
    }
  },
  methods: {
    onClick() {
      console.log("click");
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