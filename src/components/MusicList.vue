<template>
  <div class="music-menu" :style="musicTabStatus">
    <ul v-if="currentMusicList" class="music-menu__list">
      <li class="music-menu__item" v-for="(music, index) in currentMusicList" v-bind:key="music.name" @click="chooseThisMusic(index)">
        <span class="music-menu__item-name" :style="forbidStatusMusicName(index)">{{music.name}}</span>
        <img :src="require('@/assets/music_player/track_status/' + music.status + '.png')" class="music-menu__item-forbid" @click="forbidMusic(index)" :title="forbidTooltip(index)">
      </li>
    </ul>
  </div>
</template>

<script>
import { SET_ACTIVE_MUSIC, CHANGE_MUSIC_STATUS } from '@/store';
import { mapActions } from 'vuex'

export default {
  name: "music-list",
  computed: {
    currentMusicList() {
      return this.$store.getters.currentMusicList
    },
    playingMusic() {
      return this.$store.getters.playingMusic;
    },
    currentMusicTabStatus() {
      return this.$store.getters.currentMusicTabStatus;
    },
    musicTabStatus() {
      if (this.currentMusicTabStatus) {
        return 'transform: translate(0%)';
      } else return 'transform: translate(100%)';
    },
  },
  methods: {
    chooseThisMusic(musicIndex) {
      if (event.target.className === "music-menu__item-forbid") {
        return 0;
      }
      //currentMusic.currentTime = 0;
      this.setActiveMusic({ newPlayingMusic: this.currentMusicList[musicIndex] });
      //let playImage = document.querySelector(".music-buttons__play-image");
      //if (playImage.parentNode.hasAttribute("pause")) {
      //  //playImage.src = "pause-music-button.png";
      //  playImage.parentNode.removeAttribute("pause");
      //  playImage.title = "Поставить на паузу";
      //}
    },
    forbidTooltip(musicIndex) {
      if (this.currentMusicList[musicIndex].status === "allowed") {
        return "Запретить воспроизведение";
      } else return "Разрешить воспроизведение";
    },
    forbidStatusMusicName(musicIndex) {
      if (this.currentMusicList[musicIndex].status === "allowed") {
        return "opacity: 1";
      } else return "opacity: 0.2";
    },
    forbidMusic(musicIndex) {
      this.changeMusicStatus({ musicIndex });
    },
    ...mapActions({
      setActiveMusic: SET_ACTIVE_MUSIC,
      changeMusicStatus: CHANGE_MUSIC_STATUS,
    })
  },
};
</script>

<style scoped>
</style>