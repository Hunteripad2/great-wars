"use strict";


function showMusicMenu() {
  document.querySelector('.music-menu').style.transform = "translate(0%)";
  document.querySelector('#blackening').style.opacity = "0.8";
  document.querySelector('#blackening').style.transform = "translate(0%)";
}

function closeTabs() {
  document.querySelector('.music-menu').style.transform = "translate(100%)";
  document.querySelector('#blackening').style.opacity = "0";
  document.querySelector('#blackening').style.transform = "translate(100%)";
}




dragElement(document.querySelector(".map"));

function dragElement(elem) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  document.querySelector("main").onmousedown = dragMouseDown;

  function dragMouseDown(elmnt) {
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
    document.onmouseup = null;
    document.onmousemove = null;
  }
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
    event.currentTarget.removeAttribute("pause")
    event.target.title="Поставить на паузу";
  } else {
    currentMusic.pause();
    event.target.src = "play-music-button.png";
    event.currentTarget.setAttribute("pause", "")
    event.target.title="Снять с паузы";
  }
}