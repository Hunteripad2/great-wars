<template>
  <div v-if="currentEvents" class="map__event-field">
    <button :style="`left: ${event.positionX}; top: ${event.positionY}`" 
            class="map__event-button" 
            @click="showEventWindow(event)" 
            v-for="event in currentEvents" 
            v-bind:key="event.name"
    >
      <img :src="require('@/assets/' + event.icon + '.png')" class="map__event-icon" :style="eventIconStyle">
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { SET_EVENT_DATA, SHOW_EVENT_MENU } from "@/store";

export default {
  name: "event-icons",
  computed: {
    currentEvents() {
      return this.$store.getters.currentEvents;
    },
    currentEventIconsBlinkingStatus() {
      return this.$store.getters.currentEventIconsBlinkingStatus;
    },
    eventIconStyle() {
      if (this.currentEventIconsBlinkingStatus) {
        return "opacity: 1";
      } else return "opacity: 0.4";
    }
  },
  methods: {
    showEventWindow(evnt) {
      this.setEventData({ newEventData: evnt });
      this.showEventMenu();
      event.currentTarget.setAttribute("checked", "");
      event.currentTarget.style.opacity = "0.2";
    },
    ...mapActions({
      setEventData: SET_EVENT_DATA,
      showEventMenu: SHOW_EVENT_MENU,
    }),
    //showEventWindow(evnt /*name, desc, image, option1, option2, type, musicName, musicSrc*/) {
    //  console.log(evnt);
    //  
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
.map__event-field {
  height: 100%;
  width: 100%;
}
.map__event-button {
  position: absolute;
  width: 40px;
  z-index: 1;
}
.map__event-icon {
  width: 100%;
  transition: opacity 0.9s;
}
</style>