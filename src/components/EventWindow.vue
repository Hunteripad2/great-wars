<template>
  <div v-if="currentEvent" class="event" :style="eventTabStatus">
    <h1 class="event__name">{{currentEvent.name}}</h1>
    <img class="event__image" :src="require('@/assets/' + currentEvent.image + '.jpg')">
    <p class="event__desc">{{currentEvent.desc}}</p>
    <button class="event__button-first" @click="chooseEventOption" :style="firstOption">{{currentEvent.option1}}</button>
    <button class="event__button-second" @click="chooseEventOption" v-if="currentEvent.option2">{{currentEvent.option2}}</button>
  </div>
</template>

<script>
export default {
  name: "event-window",
  computed: {
    currentEventTabStatus() {
      return this.$store.getters.currentEventTabStatus;
    },
    eventTabStatus() {
      if (this.currentEventTabStatus) {
        return 'transform: scale(1, 1)';
      } else return 'transform: scale(0, 0)';
    },
    currentEvent() {
      return this.$store.getters.currentEventData;
    },
    firstOption() {
      if (this.currentEvent.option2) {
        return "";
      } else return "border-top-left-radius: 15px; border-top-right-radius: 15px";
    }
  },
  methods: {
    chooseEventOption() {
      console.log("click");
      //const musicName = event.target.parentNode.getAttribute("musicname");
      //const musicSrc = event.target.parentNode.getAttribute("musicsrc");
      //let musicList = JSON.parse(localStorage.getItem(`${currentScenario}MusicList`));
      //
      //if (event.target.parentNode.getAttribute("eventtype") === "music" && event.target === document.querySelector('.event__button-second')) {
      //  document.querySelector('.music-menu').insertAdjacentHTML('beforeend', `<li class="music-menu__item" onclick="chooseThisMusic()"><span class="music-menu__item-name">${musicName}</span><audio class="inactive-music" onended="playNextMusic()"><source src="${musicSrc}" type="audio/ogg"></audio><img src="forbid-music-unckecked.png" class="music-menu__item-forbid" onclick="forbidMusic()" title="Запретить воспроизведение"></li>`);
      //
      //  musicList.push({name: musicName, src: musicSrc});
      //  localStorage.setItem(`${currentScenario}MusicList`, JSON.stringify(musicList));
      //}
  
      //closeTabs();
    },
  }
};
</script>

<style scoped>
</style>