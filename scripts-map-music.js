"use strict";


function showMusicMenu() {
  document.querySelector('.music-menu').style.transform = "translate(0%)";
  document.querySelector('.blackening').style.opacity = "0.8";
  document.querySelector('.blackening').style.transform = "translate(0%)";
}

function forbidMusic() {
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
}

function chooseThisMusic() {
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
}

function playNextMusic() {
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
  while (true) {
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
}

function playCurrentMusic() {
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
}