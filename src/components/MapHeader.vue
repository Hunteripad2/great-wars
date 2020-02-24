<template>
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
</template>

<script>
import DateCount from "@/components/DateCount.vue";

export default {
  name: "map-header",
  components: {
      DateCount,
  }
};
</script>

<style scoped>
.header {
    height: 100px;
}

.header__return-to-main-menu {
    display: flex;
    align-items: center;
    margin-left: 8px;
    z-index: 1;
}

.header__top {
    background-color: #484848;
    display: flex;
    justify-content: space-between;
    align-content: center;
    position: relative;
}

.header__logo {
    width: 50%;
    margin-top: 4px;
    margin-bottom: 4px;
    z-index: 1;
}

.header__background-left-image {
    background-image: url("../assets/header-background-left-image.jpg");
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
    opacity: .5;
    background-position: 0% 15%;
    background-size: cover;
}

.header__background-right-image {
    background-image: url("../assets/header-background-right-image.jpg");
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    height: 100%;
    opacity: .5;
    background-position: 0% 25%;
    background-size: cover;
}

.turn-counter {
    position: absolute;
    left: 42%;
    width: 16%;
    line-height: 30px;
    font-size: 20px;
    text-align: center;
    border-radius: 0px 0px 90px 90px;
    background-color: #484848;
    z-index: 2;
}

.turn-counter__button {
    width: 35px;
    vertical-align: middle;
    margin-left: 3%;
}

.turn-counter__image {
    width: 100%;
}

.music-buttons {
    display: flex;
    align-items: center;
    margin-right: 8px;
    z-index: 1;
}

.music-buttons__play-button, 
.music-buttons__musiclist-button,
.music-buttons__nextmusic-button {
    width: 65px;
}

.music-buttons__play-image,
.music-buttons__musiclist-image,
.music-buttons__nextmusic-image {
    width: 100%;
}
</style>