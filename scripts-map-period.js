"use strict";


document.addEventListener('DOMContentLoaded', choosePeriod);

function choosePeriod() {
  let scenario = allData[document.URL.slice(document.URL.indexOf("?") + 1)];
  let choosenPeriod = scenario[0]; // Temporary

  document.querySelector('.map__map').src = choosenPeriod.map;
  document.querySelector('.turn-counter__date').innerHTML = choosenPeriod.date;

  let eventList = choosenPeriod.events;
  for (let i = 0; i < eventList.length; i += 1) {
    document.querySelector('.map').insertAdjacentHTML('beforeend', `<button style="left: ${eventList[i].positionX}; top: ${eventList[i].positionY}" class="map__event-button" onclick="showEventWindow('${eventList[i].name}', '${eventList[i].desc}', '${eventList[i].image}', '${eventList[i].option1}', '${eventList[i].option2}', '${eventList[i].type}', '${eventList[i].musicUnlockName}', '${eventList[i].musicUnlockSrc}')"><img src="${eventList[i].icon}" class="map__event-icon"></button>`);
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
  document.querySelector('.blackening').style.opacity = "0.8";
  document.querySelector('.blackening').style.transform = "translate(0%)";

  if (type === "music" || type === "choice") {
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