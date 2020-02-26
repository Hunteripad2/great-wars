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
        <div class="music-buttons">
          <button class="music-buttons__play-button" @click="playCurrentMusic" pause>
            <img class="music-buttons__play-image" src="../assets/play-music-button.png" title="Снять с паузы">
          </button>
          <button class="music-buttons__nextmusic-button" @click="playNextMusic">
            <img class="music-buttons__nextmusic-image" src="../assets/next-music-button.png" title="Следующая композиция">
          </button>
          <button class="music-buttons__musiclist-button" @click="showMusicMenu">
            <img class="music-buttons__musiclist-image" src="../assets/music-list-button.png" title="Список композиций">
          </button>
        </div>
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
    <div class="blackening" @click="closeTabs"></div>
    <MusicList />
    <EventWindow />
  </div>
</template>

<script>
import closeTabs from "@/utils/closeTabs.js";
import MapImage from "@/components/MapImage.vue";
import EventIcons from "@/components/EventIcons.vue";
import MusicList from "@/components/MusicList.vue";
import DateCount from "@/components/DateCount.vue";
import EventWindow from "@/components/EventWindow.vue";
import { INIT_STATE } from '@/store';
import { mapActions } from 'vuex'

export default {
  name: "map-page",
  components: {
    MapImage,
    DateCount,
    EventIcons,
    MusicList,
    EventWindow,
  },
  methods: {
    closeTabs,
    showMusicMenu() {
      document.querySelector(".music-menu").style.transform = "translate(0%)";
      document.querySelector(".blackening").style.opacity = "0.8";
      document.querySelector(".blackening").style.transform = "translate(0%)";
    },
    playNextMusic() {
      //  const currentMusic = document.querySelector(".active-music");
      //  const inactiveMusicList = document.querySelectorAll(".inactive-music");
      //
      //  if (inactiveMusicList === undefined) {
      //    return 0;
      //  }
      //  let hasPossibleMusic = false;
      //  for (let music of inactiveMusicList) {
      //    if (
      //      !music.parentNode
      //        .querySelector(".music-menu__item-forbid")
      //        .hasAttribute("checked")
      //    ) {
      //      hasPossibleMusic = true;
      //      break;
      //    }
      //  }
      //  if (!hasPossibleMusic) {
      //    return 0;
      //  }
      //
      //  currentMusic.pause();
      //  currentMusic.currentTime = 0;
      //  currentMusic.className = "inactive-music";
      //
      //  let randomNumber;
      //  while (
      //    inactiveMusicList[randomNumber].parentNode
      //      .querySelector(".music-menu__item-forbid")
      //      .hasAttribute("checked")
      //  ) {
      //    randomNumber = Math.floor(Math.random() * inactiveMusicList.length);
      //    if (
      //      inactiveMusicList[randomNumber].parentNode
      //        .querySelector(".music-menu__item-forbid")
      //        .hasAttribute("checked")
      //    ) {
      //      continue;
      //    } else {
      //      inactiveMusicList[randomNumber].className = "active-music";
      //      inactiveMusicList[randomNumber].play();
      //
      //      let playImage = document.querySelector(".music-buttons__play-image");
      //      if (playImage.parentNode.hasAttribute("pause")) {
      //        playImage.src = "pause-music-button.png";
      //        playImage.parentNode.removeAttribute("pause");
      //        playImage.title = "Поставить на паузу";
      //      }
      //
      //      break;
      //    }
      //  }
    },
    playCurrentMusic() {
      //  const currentMusic = document.querySelector(".active-music");
      //
      //  if (event.currentTarget.hasAttribute("pause")) {
      //    currentMusic.play();
      //    event.target.src = "pause-music-button.png";
      //    event.currentTarget.removeAttribute("pause");
      //    event.target.title = "Поставить на паузу";
      //  } else {
      //    currentMusic.pause();
      //    event.target.src = "play-music-button.png";
      //    event.currentTarget.setAttribute("pause", "");
      //    event.target.title = "Снять с паузы";
      //  }
    },
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
    endTurn() {
      // const currentEventList = document.querySelectorAll(".map__event-button");
      //
      // for (
      //   let i = currentPeriodIndex + 1;
      //   i < allData[currentScenario].length;
      //   i += 1
      // ) {
      //   if (currentStoryline === allData[currentScenario][i].storyLine) {
      //     localStorage.setItem(`${currentScenario}CurrentPeriodIndex`, `${i}`);
      //     for (let evnt of currentEventList) {
      //       evnt.remove();
      //     }
      //     this.choosePeriod();
      //     break;
      //   }
      // }
      console.log("click");
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
      initState: INIT_STATE
    })
  },
  mounted() {
    this.initState();
    this.setEventBlinking();
    this.setDraggableMap(document.querySelector(".map"));
  }
};
</script>