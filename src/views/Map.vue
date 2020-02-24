<template>
  <div class="map-screen">
    <MapHeader />
    <MapContent />
    <div class="blackening" @click="closeTabs"></div>
    <div class="music-menu">
      <MusicList />
    </div>
    <EventModal />
  </div>
</template>

<script>
import closeTabs from "@/utils/closeTabs.js";
import MusicList from "@/components/MusicList.vue";
import MapHeader from '@/components/MapHeader.vue';
import MapContent from '@/components/MapContent.vue';
import EventModal from '@/components/EventModal.vue';
import { INIT_STATE } from '@/store';
import { mapActions } from 'vuex'

export default {
  name: "map-page",
  components: {
    MusicList,
    MapHeader,
    MapContent,
    EventModal
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
    dragElement(/*elem*/) {
    //  let pos1 = 0,
    //    pos2 = 0,
    //    pos3 = 0,
    //    pos4 = 0;
    //
    //  document.querySelector("main").onmousedown = dragMouseDown;
    //
    //  function dragMouseDown(elmnt) {
    //    document.querySelector(".map").style.cursor = "grabbing";
    //
    //    elmnt = elmnt || window.event;
    //    elmnt.preventDefault();
    //
    //    pos3 = elmnt.clientX;
    //    pos4 = elmnt.clientY;
    //
    //    document.onmouseup = closeDragElement;
    //    document.onmousemove = elementDrag;
    //  }
    //
    //  function elementDrag(elmnt) {
    //    elmnt = elmnt || window.event;
    //    elmnt.preventDefault();
    //
    //    pos1 = pos3 - elmnt.clientX;
    //    pos2 = pos4 - elmnt.clientY;
    //    pos3 = elmnt.clientX;
    //    pos4 = elmnt.clientY;
    //
    //    if (elem.offsetTop - pos2 > -500 && elem.offsetTop - pos2 < 500) {
    //      elem.style.top = elem.offsetTop - pos2 + "px";
    //    }
    //    if (elem.offsetLeft - pos1 > -500 && elem.offsetLeft - pos1 < 500) {
    //      elem.style.left = elem.offsetLeft - pos1 + "px";
    //    }
    //  }
    //
    //  function closeDragElement() {
    //    document.querySelector(".map").style.cursor = "grab";
    //
    //    document.onmouseup = null;
    //    document.onmousemove = null;
    //  }
    },
    chooseEventOption() {
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

    // this.dragElement(document.querySelector(".map"));
  }
};
</script>

<style scoped>
.map-screen {
  height: 100%;
}
</style>