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
    <Blackening />
    <ResourceMenu />
    <SettingsMenu />
  </div>
</template>

<script>
import Blackening from "@/components/Blackening.vue";
import ResourceMenu from "@/components/ResourceMenu.vue";
import SettingsMenu from "@/components/SettingsMenu.vue";
import { mapActions } from 'vuex'
import { SHOW_SETTINGS_MENU, SHOW_RESOURCE_MENU } from '@/store';

export default {
  name: "main-page",
  components: {
    Blackening,
    ResourceMenu,
    SettingsMenu,
  },
  computed: {
    scenariosData() {
      return this.$store.getters.scenariosData;
    },
  },
  methods: {
    ...mapActions({
      showResourceMenu: SHOW_RESOURCE_MENU,
      showSettingsMenu: SHOW_SETTINGS_MENU,
    })
  },
  created() {
    if (!localStorage.getItem(`scenarioFirstCurrentPeriodIndex`)) {
      localStorage.setItem(`scenarioFirstCurrentPeriodIndex`, "0");
      localStorage.setItem(`scenarioFirstCurrentStoryline`, "Historical");
      localStorage.setItem(`scenarioFirstCurrentMusicList`, JSON.stringify(this.scenariosData.scenarioFirst[0].startingMusic));
    }
    if (!localStorage.getItem(`scenarioSecondCurrentPeriodIndex`)) {
      localStorage.setItem(`scenarioSecondCurrentPeriodIndex`, "0");
      localStorage.setItem(`scenarioSecondCurrentStoryline`, "Historical");
      localStorage.setItem(`scenarioSecondCurrentMusicList`, JSON.stringify(this.scenariosData.scenarioSecond[0].startingMusic));
    }
    if (!localStorage.getItem(`scenarioThirdCurrentPeriodIndex`)) {
      localStorage.setItem(`scenarioThirdCurrentPeriodIndex`, "0");
      localStorage.setItem(`scenarioThirdCurrentStoryline`, "Historical");
      localStorage.setItem(`scenarioThirdCurrentMusicList`, JSON.stringify(this.scenariosData.scenarioThird[0].startingMusic));
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
.logo {
  margin-top: 10%;
  margin-left: 21%;
  width: 60%;
}
.menu {
  margin: 0;
  padding: 0;
  margin-top: 7%;
  list-style: none;
  text-align: center;
}
.menu__item {
  margin-bottom: 4%;
}
.menu__option {
  font-size: 36px;
}
@media (max-width: 1600px) {
  .menu__option { font-size: 30px; }
}
@media (max-width: 1280px) {
  .menu__option { font-size: 24px; }
}
@media (max-width: 960px) {
  .menu__option { font-size: 18px; }
}
@media (max-width: 640px) {
  .menu__option { font-size: 12px; }
}
</style>