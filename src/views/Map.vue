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
                <span class="turn-counter__date"></span>
                <button class="turn-counter__button" @click="endTurn"><img class="turn-counter__image" src="../assets/turn-button.png"></button>
            </div> 
        </header>
        <main>
            <div class="map-background"></div>
            <div class="map"><img class="map__map" src=""></div>
        </main>
        <div class="blackening" @click="closeTabs"></div>
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

<script>
import closeTabs from "@/utils/closeTabs.js";

export default {
    name: "map",
    methods: {
        closeTabs,
        showMusicMenu() {
            document.querySelector('.music-menu').style.transform = "translate(0%)";
            document.querySelector('.blackening').style.opacity = "0.8";
            document.querySelector('.blackening').style.transform = "translate(0%)";
        },
        forbidMusic() {
            if (!event.target.hasAttribute("checked")) {
                event.target.src = "forbid-music-ckecked.png";
                event.target.title = "Разрешить воспроизведение";
                event.target.setAttribute("checked", "");
                event.target.parentNode.querySelector('.music-menu__item-name').style.opacity = "0.2";
            } else if (event.target.hasAttribute("checked")) {
                event.target.src = "forbid-music-unckecked.png";
                event.target.title = "Запретить воспроизведение";
                event.target.removeAttribute("checked");
                event.target.parentNode.querySelector('.music-menu__item-name').style.opacity = "1";
            }
        },
        chooseThisMusic() {
            if (event.target.className === "music-menu__item-forbid") {
                return 0;
            }

            const currentMusic = document.querySelector('.active-music');
            const newMusic = event.currentTarget.querySelector('audio');

            currentMusic.pause();
            currentMusic.currentTime = 0;
            currentMusic.className = "inactive-music";

            newMusic.className = "active-music";
            newMusic.play();

            let playImage = document.querySelector('.music-buttons__play-image');
            if (playImage.parentNode.hasAttribute("pause")) {
                playImage.src = "pause-music-button.png";
                playImage.parentNode.removeAttribute("pause")
                playImage.title="Поставить на паузу";
            }
        },
        playNextMusic() {
            const currentMusic = document.querySelector('.active-music');
            const inactiveMusicList = document.querySelectorAll('.inactive-music');

            if (inactiveMusicList === undefined) {
                return 0;
            }
            let hasPossibleMusic = false;
            for (let music of inactiveMusicList) {
                if (!music.parentNode.querySelector('.music-menu__item-forbid').hasAttribute("checked")) {
                    hasPossibleMusic = true;
                    break;
                }
            }
            if (!hasPossibleMusic) {
                return 0;
            }

            currentMusic.pause();
            currentMusic.currentTime = 0;
            currentMusic.className = "inactive-music";

            let randomNumber;
            while (inactiveMusicList[randomNumber].parentNode.querySelector('.music-menu__item-forbid').hasAttribute("checked")) {
                randomNumber = Math.floor(Math.random() * inactiveMusicList.length);
                if (inactiveMusicList[randomNumber].parentNode.querySelector('.music-menu__item-forbid').hasAttribute("checked")) {
                    continue;
                } else {
                    inactiveMusicList[randomNumber].className = "active-music";
                    inactiveMusicList[randomNumber].play();

                    let playImage = document.querySelector('.music-buttons__play-image');
                    if (playImage.parentNode.hasAttribute("pause")) {
                        playImage.src = "pause-music-button.png";
                        playImage.parentNode.removeAttribute("pause")
                        playImage.title="Поставить на паузу";
                    }

                    break;
                }
            }
        },
        playCurrentMusic() {
            const currentMusic = document.querySelector('.active-music');

            if (event.currentTarget.hasAttribute("pause")) {
                currentMusic.play();
                event.target.src = "pause-music-button.png";
                event.currentTarget.removeAttribute("pause");
                event.target.title="Поставить на паузу";
            } else {
                currentMusic.pause();
                event.target.src = "play-music-button.png";
                event.currentTarget.setAttribute("pause", "");
                event.target.title="Снять с паузы";
            }
        },
        dragElement(elem) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            document.querySelector("main").onmousedown = dragMouseDown;

            function dragMouseDown(elmnt) {
                document.querySelector('.map').style.cursor = "grabbing";

                elmnt = elmnt || window.event;
                elmnt.preventDefault();

                pos3 = elmnt.clientX;
                pos4 = elmnt.clientY;

                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function elementDrag(elmnt) {
                elmnt = elmnt || window.event;
                elmnt.preventDefault();

                pos1 = pos3 - elmnt.clientX;
                pos2 = pos4 - elmnt.clientY;
                pos3 = elmnt.clientX;
                pos4 = elmnt.clientY;

                if (elem.offsetTop - pos2 > -500 && elem.offsetTop - pos2 < 500) {
                    elem.style.top = (elem.offsetTop - pos2) + "px";
                }
                if (elem.offsetLeft - pos1 > -500 && elem.offsetLeft - pos1 < 500) {
                    elem.style.left = (elem.offsetLeft - pos1) + "px";
                }
            }
        
            function closeDragElement() {
                document.querySelector('.map').style.cursor = "grab";

                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    },
};

//dragElement(document.querySelector(".map"));
</script>