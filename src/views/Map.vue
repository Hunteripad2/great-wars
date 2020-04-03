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

<style scoped>
.header__return-to-main-menu {
  margin-left: 3%;
  display: flex;
  align-items: center;
  z-index: 3;
}
.header__return-to-mainmenu-link {
  font-size: 36px;
}
@media (max-width: 1600px) {
  .header__return-to-mainmenu-link { font-size: 30px; }
}
@media (max-width: 1280px) {
  .header__return-to-mainmenu-link { font-size: 24px; }
}
@media (max-width: 960px) {
  .header__return-to-mainmenu-link { font-size: 18px; }
}
@media (max-width: 640px) {
  .header__return-to-mainmenu-link { font-size: 12px; }
}
.header__top {
  background-color: #484848;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  z-index: 2;
}
.header__logo {
  width: 50%;
  margin-top: 1%;
  margin-bottom: 1%;
  margin-left: 3%;
  z-index: 3;
}
.header__background-left-image,
.header__background-right-image {
  position: absolute;
  top: 0;
  width: 30%;
  height: 100%;
  opacity: 0.5;
}
.header__background-left-image {
  background-image: url("../assets/header-background-left-image.jpg");
  background-position: 0% 15%;
  background-size: cover;
  left: 0;
}
.header__background-right-image {
  background-image: url("../assets/header-background-right-image.jpg");
  background-position: 0% 25%;
  background-size: cover;
  right: 0;
}
.turn-counter {
  background-color: #484848;
  position: absolute;
  left: 42%;
  width: 16%;
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  border-radius: 0px 0px 90px 90px;
  cursor: default;
  z-index: 2;
}
@media (max-width: 1600px) {
  .turn-counter { line-height: 28px; font-size: 16px; }
}
@media (max-width: 1280px) {
  .turn-counter { line-height: 21px; font-size: 12px; }
}
@media (max-width: 960px) {
  .turn-counter { line-height: 14px; font-size: 8px; }
}
@media (max-width: 640px) {
  .turn-counter { line-height: 7px; font-size: 4px; }
}
.turn-counter__button {
  margin-left: 5%;
  padding: 0;
  width: 12%;
  vertical-align: middle;
}
.turn-counter__image {
  width: 100%;
}
.map-background {
  background-image: url("../assets/mapmenu-background-image.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.map {
  position: absolute;
  left: 10%;
  height: 1080px;
  width: 1468px;
  border: 3px dashed black;
  border-radius: 5%;
  cursor: grab;
}
.map__map {
  position: absolute;
}
</style>