<template>
  <div class="map-screen">
    <header class="header">
      <div class="header__top">
        <div class="header__background-left-image"></div>
        <div class="header__background-right-image"></div>
        <div class="header__return-to-main-menu">
          <router-link to="/" class="header__return-to-mainmenu-link">Главное меню</router-link>
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
import MusicPlayer from "@/components/MusicPlayer.vue";
import DateCount from "@/components/DateCount.vue";
import MapImage from "@/components/MapImage.vue";
import EventIcons from "@/components/EventIcons.vue";
import Blackening from "@/components/Blackening.vue";
import MusicList from "@/components/MusicList.vue";
import EventWindow from "@/components/EventWindow.vue";
import { INIT_STATE, END_TURN, EVENT_BLINK, EVENT_UNBLINK } from '@/store';
import { mapActions } from 'vuex'

export default {
  name: "map-page",
  components: {
    MusicPlayer,
    DateCount,
    MapImage,
    EventIcons,
    Blackening,
    MusicList,
    EventWindow,
  },
  computed: {
    currentMusicList() {
      return this.$store.getters.currentMusicList
    },
    playingMusic() {
      return this.$store.getters.playingMusic;
    },
    currentEventIconsBlinkingStatus() {
      return this.$store.getters.currentEventIconsBlinkingStatus;
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
        if (this.currentEventIconsBlinkingStatus) {
          this.eventBlink();
        } else this.eventUnblink();
      }, 1000);
    },
    ...mapActions({
      initState: INIT_STATE,
      endTurn: END_TURN,
      eventBlink: EVENT_BLINK,
      eventUnblink: EVENT_UNBLINK,
    })
  },
  mounted() {
    this.initState();
    this.setDraggableMap(document.querySelector(".map"));
    this.setEventBlinking();
  }
};
</script>