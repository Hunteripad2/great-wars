<template>
  <div id="events">
    <event-icon v-for="event in eventList" v-bind:key="event.name" :event="event" />
  </div>
</template>

<script>
import Vue from "vue";
import scenariosData from "@/utils/scenariosData.js";

export const eventData = new Vue({
  el: '#events',
  store,
  computed: {
    currentScenario() {
      return this.$store.state.currentScenario
    }
  },
  data: {
    eventList: scenariosData[currentScenario][localStorage.getItem(`${currentScenario}CurrentPeriodIndex`)].events
  }
})

Vue.component('event-icon', {
  template: `  
    <button :style="style" class="map__event-button" @click="onClick">
      <img :src="require('@/assets/' + event.image + '.png')" class="map__event-icon" />
    </button>
  `,
  props: {
    event: Object
  }
});

export default {
  name: "event-icons",
  //computed: {
  //  style() {
  //    return `left: ${event.left}; top: ${event.top}`;
  //  }
  //},
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