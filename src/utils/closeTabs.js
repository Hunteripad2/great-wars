"use strict";


function closeTabs() {
  if (document.querySelectorAll('.music-menu')[0]) {
    document.querySelectorAll('.music-menu')[0].style.transform = "translate(100%)";
    document.querySelectorAll('.event')[0].style.transform = "scale(0, 0)";
  } else {
    document.querySelector('.resource-menu').style.transform = "translateY(100%)";
    document.querySelector('.settings-menu').style.transform = "scale(0, 0)";
  }
  document.querySelector('.blackening').style.opacity = "0";
  document.querySelector('.blackening').style.transform = "translate(100%)";
}

export default closeTabs;