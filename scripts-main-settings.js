"use strict";


function showSettingsMenu() {
  document.querySelector('.settings-menu').style.transform = "scale(1, 1)";
  document.querySelector('.blackening').style.opacity = "0.8";
  document.querySelector('.blackening').style.transform = "translate(0%)";
}

function resetProgressFirst() {
  if (localStorage.getItem(`scenarioFirstCurrentPeriodIndex`)) {
    if (confirm("Все связанные с первым сценарием данные будут удалены")) {
      localStorage.removeItem(`scenarioFirstCurrentPeriodIndex`);
      localStorage.removeItem(`scenarioFirstCurrentStoryline`);
      localStorage.removeItem(`scenarioFirstMusicList`);
    }
  } else alert("Данные не найдены");
}

function resetProgressSecond() {
  if (localStorage.getItem(`scenarioSecondCurrentPeriodIndex`)) {
    if (confirm("Все связанные со вторым сценарием данные будут удалены")) {
      localStorage.removeItem(`scenarioSecondCurrentPeriodIndex`);
      localStorage.removeItem(`scenarioSecondCurrentStoryline`);
      localStorage.removeItem(`scenarioSecondMusicList`);
    }
  } else alert("Данные не найдены");
}

function resetProgressThird() {
  if (localStorage.getItem(`scenarioThirdCurrentPeriodIndex`)) {
    if (confirm("Все связанные с третьим сценарием данные будут удалены")) {
      localStorage.removeItem(`scenarioThirdCurrentPeriodIndex`);
      localStorage.removeItem(`scenarioThirdCurrentStoryline`);
      localStorage.removeItem(`scenarioThirdMusicList`);
    }
  } else alert("Данные не найдены");
}