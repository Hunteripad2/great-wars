"use strict";


dragElement(document.querySelector(".map"));

function dragElement(elem) {
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