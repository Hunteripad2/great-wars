"use strict";

function showResourceMenu() {
  document.querySelector('.resource-menu').style.transform = "translateY(0%)";
  document.querySelector('.blackening').style.opacity = "0.8";
  document.querySelector('.blackening').style.transform = "translate(0%)";
}




function chooseThisCategory() {
  if (document.querySelector('.resource-menu__category-item_active')) {
    document.querySelector('.resource-menu__category-item_active').className = "resource-menu__category-item_inactive";
  }
  event.target.parentNode.className = "resource-menu__category-item_active";
}