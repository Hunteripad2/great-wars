<template>
  <div v-if="currentEvents" class="map__event-field">
    <button :style="`left: ${event.positionX}; top: ${event.positionY}`" class="map__event-button" @click="showEventWindow" v-for="event in currentEvents" v-bind:key="event.name">
      <img :src="require('@/assets/' + event.icon + '.png')" class="map__event-icon">
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
  },
  methods: {
    showEventWindow() {
      console.log("click");
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
</style>