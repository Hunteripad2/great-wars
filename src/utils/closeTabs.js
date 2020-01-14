"use strict";


function closeTabs() {
  if (document.querySelector('.music-menu')) {
    document.querySelector('.music-menu').style.transform = "translate(100%)";
    document.querySelector('.event').style.transform = "scale(0, 0)";
  } else {
    document.querySelector('.resource-menu').style.transform = "translateY(100%)";
    document.querySelector('.settings-menu').style.transform = "scale(0, 0)";
  }
  document.querySelector('.blackening').style.opacity = "0";
  document.querySelector('.blackening').style.transform = "translate(100%)";
}

export default closeTabs;