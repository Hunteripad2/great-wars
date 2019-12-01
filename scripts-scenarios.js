"use strict";


document.addEventListener('DOMContentLoaded', setProgress);

function setProgress() {
  const firstScenarioProgress = localStorage.getItem(`scenarioFirstCurrentPeriodIndex`);
  const secondScenarioProgress = localStorage.getItem(`scenarioSecondCurrentPeriodIndex`);
  const thirdScenarioProgress = localStorage.getItem(`scenarioThirdCurrentPeriodIndex`);

  const progressBars = document.querySelectorAll('.scenarios__progress');

  progressBars[0].innerHTML = Math.round(100 / allData.scenarioFirst.length * firstScenarioProgress * 100) / 100 + "%";
  progressBars[1].innerHTML = Math.round(100 / allData.scenarioSecond.length * secondScenarioProgress * 100) / 100 + "%";
  progressBars[2].innerHTML = Math.round(100 / allData.scenarioThird.length * thirdScenarioProgress * 100) / 100 + "%";
}