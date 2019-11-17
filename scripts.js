"use strict";


function showMusicMenu() {
  document.querySelector('.music-menu').style.transform = "translate(0%)";
  document.querySelector('#blackening').style.opacity = "0.8";
  document.querySelector('#blackening').style.transform = "translate(0%)";
}

function closeTabs() {
  document.querySelector('.music-menu').style.transform = "translate(100%)";
  document.querySelector('.event').style.transform = "scale(0, 0)";
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
    event.currentTarget.removeAttribute("pause");
    event.target.title="Поставить на паузу";
  } else {
    currentMusic.pause();
    event.target.src = "play-music-button.png";
    event.currentTarget.setAttribute("pause", "");
    event.target.title="Снять с паузы";
  }
}




let currentTurn = 1;

const allData = {
  scenarioFirst: [
    {
      name: "Historical",
      turn: 1,
      date: "Январь 1910г.",
      map: "map.png",
      events: [
      ]
    }
  ],

  scenarioSecond: [
    {
      name: "Historical",
      turn: 1,
      date: "Январь 1924г.",
      map: "map.png",
      events: [
      ]
    },
  ],

  scenarioThird: [
    {
      name: "Historical",
      turn: 1,
      date: "Январь 1934г.",
      map: "map-1934-01-historical.png",
      events: [
        {
          name: "Название события номер 2",
          desc: "Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание",
          image: "scenario-second.jpg",
          option1: "Первая опция",
          type: "info",
          icon: "red-circle.png",
          positionX: "450px",
          positionY: "550px",
        },
        {
          name: "Название события номер 3",
          desc: "Описание описание описание описание описание описание описание",
          image: "scenario-second.jpg",
          option1: "Первая опция",
          type: "info",
          icon: "red-circle.png",
          positionX: "600px",
          positionY: "600px",
        },
        {
          name: "Название музыкального события",
          desc: "Описание описание описание описание описание описание описание",
          image: "scenario-second.jpg",
          option1: "Не добавлять в список",
          option2: "Добавить в список",
          type: "music",
          icon: "red-circle.png",
          positionX: "380px",
          positionY: "450px",
          musicUnlockName: "Музыка 2",
          musicUnlockSrc: "example2.ogg",
        },
      ]
    },
  ],
}

let scenario = allData[document.URL.slice(document.URL.indexOf("?") + 1)];

document.addEventListener('DOMContentLoaded', choosePeriod);
function choosePeriod() {
  let choosenPeriod;

  if (currentTurn === 1) {
    choosenPeriod = scenario.find(period => period.turn === 1);
  }

  document.querySelector('.map__map').src = choosenPeriod.map;
  document.querySelector('.turn-counter__date').innerHTML = choosenPeriod.date;

  let eventList = choosenPeriod.events;
  for (let i = 0; i < eventList.length; i += 1) {
    let name = eventList[i].name;
    let desc = eventList[i].desc;
    let image = eventList[i].image;
    let option1 = eventList[i].option1;
    let option2 = eventList[i].option2;
    let type = eventList[i].type;
    let musicName = eventList[i].musicUnlockName;
    let musicSrc = eventList[i].musicUnlockSrc;
    let icon = eventList[i].icon;
    let positionX = eventList[i].positionX;
    let positionY = eventList[i].positionY;

    document.querySelector('.map').insertAdjacentHTML('beforeend', `<button style="left: ${positionX}; top: ${positionY}" class="map__event-button" onclick="showEventWindow('${name}', '${desc}', '${image}', '${option1}', '${option2}', '${type}', '${musicName}', '${musicSrc}')"><img src="${icon}" class="map__event-icon"></button>`);
  }
}

setInterval(() => {
  let events = document.querySelectorAll('.map__event-button');
  
  for (let evnt of events) {
    if (getComputedStyle(evnt).opacity === "1") {  
      evnt.style.opacity = "0.2";
    } else if (!evnt.hasAttribute("checked")) {
      evnt.style.opacity = "1";
    }
  }
}, 500);

function showEventWindow(name, desc, image, option1, option2, type, musicName, musicSrc) {
  event.currentTarget.setAttribute("checked", "");

  document.querySelector('.event__name').innerHTML = name;
  document.querySelector('.event__image').src = image;
  document.querySelector('.event__desc').innerHTML = desc;
  document.querySelector('.event__button-first').innerHTML = option1;
  document.querySelector('.event__button-second').innerHTML = option2;
  document.querySelector('.event').setAttribute("eventtype", `${type}`);
  document.querySelector('.event').setAttribute("musicname", `${musicName}`);
  document.querySelector('.event').setAttribute("musicsrc", `${musicSrc}`);

  document.querySelector('.event').style.transform = "scale(1, 1)";
  document.querySelector('#blackening').style.opacity = "0.8";
  document.querySelector('#blackening').style.transform = "translate(0%)";

  if (type === "music") {
    document.querySelector('.event__button-second').style = "visibility: visible";
    document.querySelector('.event__button-first').style = "border-top-left-radius: 0; border-top-right-radius: 0";
  } else { 
    document.querySelector('.event__button-second').style = "visibility: hidden";
    document.querySelector('.event__button-first').style = "border-top-left-radius: 25px; border-top-right-radius: 25px";
  }
}

function chooseEventOption() {
  let musicName = event.target.parentNode.getAttribute("musicname");
  let musicSrc = event.target.parentNode.getAttribute("musicsrc");
  if (event.target.parentNode.getAttribute("eventtype") === "music" && event.target === document.querySelector('.event__button-second')) {
    document.querySelector('.music-menu').insertAdjacentHTML('beforeend', `<li class="music-menu__item" onclick="chooseThisMusic()"><span class="music-menu__item-name">${musicName}</span><audio class="inactive-music" onended="playNextMusic()"><source src="${musicSrc}" type="audio/ogg"></audio><img src="forbid-music-unckecked.png" class="music-menu__item-forbid" onclick="forbidMusic()" title="Запретить воспроизведение"></li>`);
  }
  closeTabs();
}