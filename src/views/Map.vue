<template>
  <div class="map-screen">
    <header class="header">
            <div class="header__top">
                <div class="header__background-left-image"></div>
                <div class="header__background-right-image"></div>
                <div class="header__return-to-main-menu">
                    <a href="main.html" class="return-to-mainmenu__link">Главное меню</a>
                </div>
                <img src="../assets/logo.png" class="header__logo">
                <div class="music-buttons">
                    <button class="music-buttons__play-button" onclick="playCurrentMusic()" pause>
                        <img class="music-buttons__play-image" src="../assets/play-music-button.png" title="Снять с паузы">
                    </button>
                    <button class="music-buttons__nextmusic-button" onclick="playNextMusic()">
                        <img class="music-buttons__nextmusic-image" src="../assets/next-music-button.png" title="Следующая композиция">
                    </button>
                    <button class="music-buttons__musiclist-button" onclick="showMusicMenu()">
                        <img class="music-buttons__musiclist-image" src="../assets/music-list-button.png" title="Список композиций">
                    </button>
                </div>
            </div>
            <div class="turn-counter">
                <span class="turn-counter__date"></span>
                <button class="turn-counter__button" onclick="endTurn()"><img class="turn-counter__image" src="../assets/turn-button.png"></button>
            </div> 
        </header>
        <main>
            <div class="map-background"></div>
            <div class="map"><img class="map__map" src=""></div>
        </main>
        <div class="blackening" onclick="closeTabs()"></div>
        <ul class="music-menu"></ul>
        <div class="event">
            <h1 class="event__name"></h1>
            <img class="event__image" src="">
            <p class="event__desc"></p>
            <button class="event__button-first" onclick="chooseEventOption()"></button>
            <button class="event__button-second" onclick="chooseEventOption()"></button>
        </div>
  </div>
</template>
