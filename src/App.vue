<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html, body, #app {
  height: 100%;
}
body {
    margin: 0;
    background: #2e2e2e;
    color: white;
    font-family: sans-serif;
    overflow: hidden;
}
a {
    color: white;
    text-decoration-line: none;
}
a:hover {
    opacity: 0.5;
}
button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
}
button:hover {
    opacity: 0.5;
}
button:focus {
    outline: none;
}









.resource-menu {
    background-color: #2e2e2e;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 45%;
    width: 100%;
    transition: transform 0.3s;
    transform: translateY(100%);
    z-index: 100;
}

.resource-menu__category-list {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    padding-left: 0;
}

.resource-menu__category-item_active {
    background-color: #484848;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
}

.resource-menu__category-button {
    font-size: 40px;
}

.resource-menu__choose-category {
    text-align: center;
    width: 100%;
    font-size: 60px;
    opacity: 0.1;
    position: absolute;
    bottom: 24%;
    cursor: default;
}

.settings-menu {
    background-color: #2e2e2e;
    position: fixed;
    left: 40%;
    top: 25%;
    width: 20%;
    height: 50%;
    transform: scale(0, 0);
    transition: transform 0.3s;
    z-index: 100;
}

.settings-menu__progress-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.settings-menu__progress-item {
    text-align: center;
    margin: 5px;
}

.settings-menu__progress-button {
    background-color: #484848;
    border-radius: 20px;
    font-size: 30px;
}































.music-menu {
    background-color: #2e2e2e;
    padding: 0;
    margin: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform 0.3s;
    transform: translate(100%);
    width: 25%;
    height: 100%;
    z-index: 100;
}

.music-menu__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.music-menu__item {
    position: relative;
    background-color: #484848;
    margin: 5px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.music-menu__item:hover {
    background-color: #505050;
}

.music-menu__item-name {
    margin: 10px;
    font-size: 30px;
}

.music-menu__item-forbid {
    position: absolute;
    right: 5%;
    height: 80%;
}

.music-menu__item-forbid:hover {
    opacity: 0.5;
}





.event {
    background-color: #2e2e2e;
    position: fixed;
    left: 35%;
    top: 15%;
    width: 30%;
    height: 70%;
    transform: scale(0, 0);
    transition: transform 0.3s;
    z-index: 100;
}

.event__window {
    height: 100%;
}

.event__name {
    font-size: 25px;
    line-height: 40px;
    margin: 0;
    text-align: center;
    background-color: #484848;
}

.event__image {
    position: relative;
    width: 50%;
    border: 5px solid #484848;
}

.event__desc {
    text-align: center;
}

.event__button-first {
    bottom: 0;
    border-top: 1px solid #2e2e2e;
}

.event__button-second {
    bottom: 5%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom: 1px solid #2e2e2e;
}

.event__button-first,
.event__button-second {
    position: absolute;
    font-size: 20px;
    background-color: #484848;
    left: 20%;
    width: 60%;
    height: 5%;
}

.event__button-first:hover,
.event__button-second:hover {
    opacity: 0.5;
}

.blackening {
    background-color: #202020;
    position: absolute;
    left: 0px;
    top: 0px;
    transform: translate(100%);
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    transition: opacity 0.3s;
}
</style>
