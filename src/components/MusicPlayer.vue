<template>
  <div v-if="playingMusic" class="music-buttons">
    <button class="music-buttons__play-button" @click="playCurrentMusic" pause>
      <img class="music-buttons__play-image" src="../assets/play-music-button.png" title="Снять с паузы">
    </button>
    <button class="music-buttons__nextmusic-button" @click="playNextMusic">
      <img class="music-buttons__nextmusic-image" src="../assets/next-music-button.png" title="Следующая композиция">
    </button>
    <button class="music-buttons__musiclist-button" @click="showMusicMenu">
      <img class="music-buttons__musiclist-image" src="../assets/music-list-button.png" title="Список композиций">
    </button>
    <audio @ended="playNextMusic">
      <source :src="require('@/assets/' + playingMusic.src + '.ogg')" type="audio/ogg">
    </audio>
  </div>
</template>

<script>
import { SHOW_MUSIC_MENU } from '@/store';
import { mapActions } from 'vuex'

export default {
  name: "map-image",
  computed: {
    playingMusic() {
      return this.$store.getters.playingMusic;
    },
  },
  methods: {
    playCurrentMusic() {
      //if (event.currentTarget.hasAttribute("pause")) {
      //  currentMusic.play();
      //  //event.target.src = "pause-music-button.png";
      //  event.currentTarget.removeAttribute("pause");
      //  event.target.title = "Поставить на паузу";
      //} else {
      //  currentMusic.pause();
      //  //event.target.src = "play-music-button.png";
      //  event.currentTarget.setAttribute("pause", "");
      //  event.target.title = "Снять с паузы";
      //}
    },
    playNextMusic() {
      const currentMusicList = this.currentMusicList;
      const playingMusic = this.playingMusic;

      let hasPossibleMusic = false;
      for (let music of currentMusicList) {
        if (music.status === "allowed" && music !== playingMusic) {
          hasPossibleMusic = true;
          break;
        }
      }
      if (!hasPossibleMusic) {
        alert("Нет доступной музыки");
        return 0;
      }

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
    ...mapActions({
      showMusicMenu: SHOW_MUSIC_MENU
    })
  }
};
</script>

<style scoped>
</style>