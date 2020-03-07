<template>
  <div class="map-screen">
    <header class="header">
      <div class="header__top">
        <div class="header__background-left-image"></div>
        <div class="header__background-right-image"></div>
        <div class="header__return-to-main-menu">
          <router-link to="/" class="return-to-mainmenu__link">Главное меню</router-link>
        </div>
        <img src="../assets/logo.png" class="header__logo">
        <MusicPlayer />
      </div>
      <div class="turn-counter">
        <DateCount />
        <button class="turn-counter__button" @click="endTurn">
          <img class="turn-counter__image" src="../assets/turn-button.png">
        </button>
      </div>
    </header>
    <main>
      <div class="map-background"></div>
      <div class="map">
        <MapImage />
        <EventIcons />
      </div>
    </main>
    <Blackening />
    <MusicList />
    <EventWindow />
  </div>
</template>

<script>
import MapImage from "@/components/MapImage.vue";
import EventIcons from "@/components/EventIcons.vue";
import MusicList from "@/components/MusicList.vue";
import DateCount from "@/components/DateCount.vue";
import EventWindow from "@/components/EventWindow.vue";
import MusicPlayer from "@/components/MusicPlayer.vue";
import Blackening from "@/components/Blackening.vue";
import { INIT_STATE, END_TURN } from '@/store';
import { mapActions } from 'vuex'

export default {
  name: "map-page",
  components: {
    MapImage,
    DateCount,
    EventIcons,
    MusicList,
    EventWindow,
    MusicPlayer,
    Blackening,
  },
  computed: {
    currentMusicList() {
      return this.$store.getters.currentMusicList
    },
    playingMusic() {
      return this.$store.getters.playingMusic;
    },
  },
  methods: {
    setDraggableMap(map) {
      let pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;

      document.querySelector("main").onmousedown = grabMap

      function grabMap(evnt) {
        map.style.cursor = "grabbing";

        evnt = evnt || window.event;
        evnt.preventDefault();

        pos3 = evnt.clientX;
        pos4 = evnt.clientY;

        document.onmouseup = stopDraggingMap;
        document.onmousemove = dragMap;
      }

      function dragMap(evnt) {
        evnt = evnt || window.event;
        evnt.preventDefault();

        pos1 = pos3 - evnt.clientX;
        pos2 = pos4 - evnt.clientY;
        pos3 = evnt.clientX;
        pos4 = evnt.clientY;

        if (map.offsetTop - pos2 > -500 && map.offsetTop - pos2 < 500) {
          map.style.top = (map.offsetTop - pos2) + "px";
        }
        if (map.offsetLeft - pos1 > -500 && map.offsetLeft - pos1 < 500) {
          map.style.left = (map.offsetLeft - pos1) + "px";
        }
      }
        
      function stopDraggingMap() {
          map.style.cursor = "grab";

          document.onmouseup = null;
          document.onmousemove = null;
      }
    },
    setEventBlinking() {
      setInterval(() => {
        let events = document.querySelectorAll(".map__event-button");
        for (let evnt of events) {
          if (getComputedStyle(evnt).opacity === "1") {
            evnt.style.opacity = "0.2";
          } else if (!evnt.hasAttribute("checked")) {
            evnt.style.opacity = "1";
          }
        }
      }, 500);
    },
    ...mapActions({
      initState: INIT_STATE,
      endTurn: END_TURN,
    })
  },
  mounted() {
    this.initState();
    this.setEventBlinking();
    this.setDraggableMap(document.querySelector(".map"));
  }
};
</script>