<template>
  <div class="music-menu">
    <ul v-if="currentMusicList" class="music-menu__list">
      <li class="music-menu__item" @click="chooseThisMusic" v-for="music in currentMusicList" v-bind:key="music.name">
        <span class="music-menu__item-name">{{music.name}}</span>
        <audio @ended="playNextMusic">
          <source :src="require('@/assets/' + music.src + '.ogg')" type="audio/ogg">
        </audio>
        <img src="@/assets/forbid-music-unckecked.png" class="music-menu__item-forbid" @click="forbidMusic" title="Запретить воспроизведение">
      </li>
    </ul>
  </div>
</template>

<script>
import { SET_ACTIVE_MUSIC } from '@/store';
import { mapActions } from 'vuex'

export default {
  name: "music-list",
  computed: {
    currentMusicList() {
      return this.$store.getters.currentMusicList
    },
    playingMusic() {
      return this.$store.getters.playingMusic;
    }
  },
  methods: {
    chooseThisMusic() {
      if (event.target.className === "music-menu__item-forbid") {
        return 0;
      }

      let currentMusic;
      if (!this.playingMusic) {
        currentMusic = document.querySelectorAll('audio')[0];
      } else currentMusic = this.playingMusic;
      const newMusic = event.currentTarget.querySelector("audio");

      currentMusic.pause();
      currentMusic.currentTime = 0;
      newMusic.play();

      this.setActiveMusic({ newPlayingMusic: newMusic });

      let playImage = document.querySelector(".music-buttons__play-image");
      if (playImage.parentNode.hasAttribute("pause")) {
        //playImage.src = "pause-music-button.png";
        playImage.parentNode.removeAttribute("pause");
        playImage.title = "Поставить на паузу";
      }
    },
    forbidMusic() {
      if (!event.target.hasAttribute("checked")) {
        //event.target.src = "@/assets/forbid-music-ckecked.png";
        event.target.title = "Разрешить воспроизведение";
        event.target.setAttribute("checked", "");
        event.target.parentNode.querySelector(".music-menu__item-name").style.opacity = "0.2";
      } else if (event.target.hasAttribute("checked")) {
        //event.target.src = "@/assets/forbid-music-unckecked.png";
        event.target.title = "Запретить воспроизведение";
        event.target.removeAttribute("checked");
        event.target.parentNode.querySelector(".music-menu__item-name").style.opacity = "1";
      }
    },
    ...mapActions({
      setActiveMusic: SET_ACTIVE_MUSIC
    })
  },
};
</script>

<style scoped>
</style>