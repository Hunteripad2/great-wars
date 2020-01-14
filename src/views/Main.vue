<template>
  <div class="main-menu">
    <main>
      <img src="../assets/logo.png" class="logo" />
      <ul class="menu">
        <li class="menu__item">
          <router-link to="/scenarios" class="menu__option">Начать</router-link>
        </li>
        <li class="menu__item">
          <button class="menu__option" @click="showResourceMenu">Ресурсы</button>
        </li>
        <li class="menu__item">
          <button class="menu__option" @click="showSettingsMenu">Настройки</button>
        </li>
      </ul>
    </main>
    <div class="blackening" @click="closeTabs"></div>
    <div class="resource-menu">
      <ul class="resource-menu__category-list">
        <li class="resource-menu__category-item_inactive">
          <button class="resource-menu__category-button" @click="chooseThisCategory">Книги</button>
        </li>
        <li class="resource-menu__category-item_inactive">
          <button class="resource-menu__category-button" @click="chooseThisCategory">Статьи</button>
        </li>
        <li class="resource-menu__category-item_inactive">
          <button class="resource-menu__category-button" @click="chooseThisCategory">Фильмы</button>
        </li>
      </ul>
      <h1 class="resource-menu__choose-category">Выберите раздел</h1>
    </div>
    <div class="settings-menu">
      <ul class="settings-menu__progress-list">
        <li class="settings-menu__progress-item">
          <button
            class="settings-menu__progress-button"
            onclick="resetProgressFirst()"
          >Сбросить прогресс первого сценария</button>
        </li>
        <li class="settings-menu__progress-item">
          <button
            class="settings-menu__progress-button"
            onclick="resetProgressSecond()"
          >Сбросить прогресс второго сценария</button>
        </li>
        <li class="settings-menu__progress-item">
          <button
            class="settings-menu__progress-button"
            onclick="resetProgressThird()"
          >Сбросить прогресс третьего сценария</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import closeTabs from "@/utils/closeTabs.js";

export default {
  name: "main-menu",
  methods: {
    closeTabs,
    showSettingsMenu() {
      document.querySelector(".settings-menu").style.transform = "scale(1, 1)";
      document.querySelector(".blackening").style.opacity = "0.8";
      document.querySelector(".blackening").style.transform = "translate(0%)";
    },
    resetProgressFirst() {
      if (localStorage.getItem(`scenarioFirstCurrentPeriodIndex`)) {
        if (confirm("Все связанные с первым сценарием данные будут удалены")) {
          localStorage.removeItem(`scenarioFirstCurrentPeriodIndex`);
          localStorage.removeItem(`scenarioFirstCurrentStoryline`);
          localStorage.removeItem(`scenarioFirstMusicList`);
        }
      } else alert("Данные не найдены");
    },
    resetProgressSecond() {
      if (localStorage.getItem(`scenarioSecondCurrentPeriodIndex`)) {
        if (confirm("Все связанные со вторым сценарием данные будут удалены")) {
          localStorage.removeItem(`scenarioSecondCurrentPeriodIndex`);
          localStorage.removeItem(`scenarioSecondCurrentStoryline`);
          localStorage.removeItem(`scenarioSecondMusicList`);
        }
      } else alert("Данные не найдены");
    },
    resetProgressThird() {
      if (localStorage.getItem(`scenarioThirdCurrentPeriodIndex`)) {
        if (confirm("Все связанные с третьим сценарием данные будут удалены")) {
          localStorage.removeItem(`scenarioThirdCurrentPeriodIndex`);
          localStorage.removeItem(`scenarioThirdCurrentStoryline`);
          localStorage.removeItem(`scenarioThirdMusicList`);
        }
      } else alert("Данные не найдены");
    },
    showResourceMenu() {
      document.querySelector('.resource-menu').style.transform = "translateY(0%)";
      document.querySelector('.blackening').style.opacity = "0.8";
      document.querySelector('.blackening').style.transform = "translate(0%)";
    },
    chooseThisCategory() {
      if (document.querySelector('.resource-menu__category-item_active')) {
        document.querySelector('.resource-menu__category-item_active').className = "resource-menu__category-item_inactive";
      }
      event.target.parentNode.className = "resource-menu__category-item_active";
    }
  }
};
</script>

<style scoped>
.main-menu {
  background-image: url("../assets/mainmenu-background-image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
</style>