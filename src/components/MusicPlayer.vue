<template>
  <div class="music-buttons">
    <button class="music-buttons__play-button" @click="playCurrentMusic">
      <img class="music-buttons__play-image" :src="require('@/assets/music_player/header_buttons/' + playButtonSrc + '.png')" :title="playButtonTooltip">
    </button>
    <button class="music-buttons__nextmusic-button" @click="playNextMusic">
      <img class="music-buttons__nextmusic-image" src="@/assets/music_player/header_buttons/next-music-button.png" title="Следующая композиция">
    </button>
    <button class="music-buttons__musiclist-button" @click="showMusicMenu">
      <img class="music-buttons__musiclist-image" src="@/assets/music_player/header_buttons/music-list-button.png" title="Список композиций">
    </button>
    <audio @ended="playNextMusic">
      <source :src="require('@/assets/music_player/tracks/' + playingMusic.src + '.ogg')" type="audio/ogg">
    </audio>
  </div>
</template>

<script>
import { SHOW_MUSIC_MENU, CHANGE_MUSIC_PLAY_STATUS, SET_ACTIVE_MUSIC, SET_PREVIOUS_MUSIC } from '@/store';
import { mapActions } from 'vuex'

export default {
  name: "music-player",
  computed: {
    playingMusic() {
      return this.$store.getters.playingMusic;
    },
    previousMusic() {
      return this.$store.getters.previousMusic;
    },
    currentMusicList() {
      return this.$store.getters.currentMusicList
    },
    currentMusicPlayStatus() {
      return this.$store.getters.currentMusicPlayStatus
    },
    playButtonSrc() {
      if (this.currentMusicPlayStatus) {
        return "pause-music-button";
      } else return "play-music-button";
    },
    playButtonTooltip() {
      if (this.currentMusicPlayStatus) {
        return "Поставить на паузу";
      } else return "Снять с паузы";
    },
  },
  methods: {
    playCurrentMusic() {
      if (this.currentMusicPlayStatus) {
        document.querySelector("audio").pause();
      } else document.querySelector("audio").play();
      this.changeMusicPlayStatus();
    },
    playNextMusic() {
      const currentMusicList = this.currentMusicList;
      const playingMusic = this.playingMusic;

      for (let music of currentMusicList) {
        if (music.status === "allowed" && music !== playingMusic) {
          let randomIndex = Math.floor(Math.random() * currentMusicList.length);
          while (currentMusicList[randomIndex].status !== "allowed" && currentMusicList[randomIndex] !== playingMusic) {
            randomIndex = Math.floor(Math.random() * currentMusicList.length);
          }
          this.setActiveMusic({ newPlayingMusic: currentMusicList[randomIndex] });
          break;
        }
      }
    },
    ...mapActions({
      showMusicMenu: SHOW_MUSIC_MENU,
      changeMusicPlayStatus: CHANGE_MUSIC_PLAY_STATUS,
      setActiveMusic: SET_ACTIVE_MUSIC,
      setPreviuosMusic: SET_PREVIOUS_MUSIC,
    })
  },
  updated() {
    if (this.playingMusic !== this.previousMusic) {
      document.querySelector("audio").currentTime = 0;
      if (!this.currentMusicPlayStatus) {
        this.changeMusicPlayStatus();
      }
      document.querySelector("audio").play();
      this.setPreviuosMusic();
    }
    console.log('done');
  }
};
</script>

<style scoped>
.music-buttons {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.music-buttons__play-button, 
.music-buttons__musiclist-button,
.music-buttons__nextmusic-button {
  margin-right: 10%;
  padding: 0;
  width: 16%;
}
.music-buttons__play-image,
.music-buttons__musiclist-image,
.music-buttons__nextmusic-image {
  width: 100%;
}
</style>