<template>
  <div v-if="currentEvents" class="event-icons">
    <button
      :style="`left: ${event.positionX}; top: ${event.positionY}`"
      class="map__event-button"
      @click="showEventWindow(event)"
      v-for="event in currentEvents"
      v-bind:key="event.name"
    >
      <img :src="require('@/assets/' + event.icon + '.png')" class="map__event-icon" />
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { SET_CURRENT_EVENT } from "@/store";
export default {
  name: "event-icons",
  computed: {
    currentEvents() {
      return this.$store.getters.currentEvents;
    }
  },
  methods: {
    ...mapActions({
      setNewEvent: SET_CURRENT_EVENT
    }),
    showEventWindow(event) {
      this.setNewEvent({ newEvent: event });
    }
    //showEventWindow(evnt /*name, desc, image, option1, option2, type, musicName, musicSrc*/) {
    //  console.log(evnt);
    //  event.currentTarget.setAttribute("checked", "");
    //
    //  document.querySelector('.event__name').innerHTML = name;
    //  document.querySelector('.event__image').src = image;
    //  document.querySelector('.event__desc').innerHTML = desc;
    //  document.querySelector('.event__button-first').innerHTML = option1;
    //  document.querySelector('.event__button-second').innerHTML = option2;
    //  document.querySelector('.event').setAttribute("eventtype", `${type}`);
    //  document.querySelector('.event').setAttribute("musicname", `${musicName}`);
    //  document.querySelector('.event').setAttribute("musicsrc", `${musicSrc}`);
    //
    //  document.querySelector('.event').style.transform = "scale(1, 1)";
    //  document.querySelector('.blackening').style.opacity = "0.8";
    //  document.querySelector('.blackening').style.transform = "translate(0%)";
    //
    //  const musicList = JSON.parse(localStorage.getItem(`${currentScenario}MusicList`));
    //
    //  if (type === "music" && !musicList.some(music => music.src === document.querySelector('.event').getAttribute("musicsrc")) || type === "choice") {
    //    document.querySelector('.event__button-second').style = "visibility: visible";
    //    document.querySelector('.event__button-first').style = "border-top-left-radius: 0; border-top-right-radius: 0";
    //  } else {
    //    document.querySelector('.event__button-second').style = "visibility: hidden";
    //    document.querySelector('.event__button-first').style = "border-top-left-radius: 25px; border-top-right-radius: 25px";
    //  }
    //},
  }
};
</script>

<style scoped>
.event-icons {
  height: 100%;
  width: 100%;
  position: relative;
}

.map__event-button {
  position: absolute;
  width: 40px;
  transition: opacity 1s;
  z-index: 10;
}
</style>