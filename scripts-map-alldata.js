"use strict";

const currentScenario = document.URL.slice(document.URL.indexOf("?") + 1);


if (document.URL === "file:///C:/Users/User/Documents/Project/map.html") {
  if (!localStorage.getItem(`${currentScenario}CurrentPeriodIndex`)) {
    localStorage.setItem(`${currentScenario}CurrentPeriodIndex`, "0");
  }

  if (!localStorage.getItem(`${currentScenario}CurrentStoryline`)) {
    localStorage.setItem(`${currentScenario}CurrentStoryline`, "Historical");
  }

  if (!localStorage.getItem(`${currentScenario}MusicList`)) {
    localStorage.setItem(`${currentScenario}MusicList`, JSON.stringify(allData[currentScenario][localStorage.getItem(`${currentScenario}CurrentPeriodIndex`)].defaultMusic));
  }
}