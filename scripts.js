"use strict";

function showMusicMenu() {
    document.querySelector('.music-menu').style.transform = "translate(0%)";
    document.querySelector('#blackening').style.display = "block";
}

function closeTabs() {
    document.querySelector('#blackening').style.display = "none";
    document.querySelector('.music-menu').style.transform = "translate(100%)";
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

    elem.style.top = (elem.offsetTop - pos2) + "px";
    elem.style.left = (elem.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}