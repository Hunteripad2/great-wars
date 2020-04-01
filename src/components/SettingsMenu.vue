<template>
  <div class="settings-menu" :style="settingsTabStatus">
    <ul class="settings-menu__progress-list">
      <li class="settings-menu__progress-item">
        <button class="settings-menu__progress-button" @click="resetProgressFirst">Сбросить прогресс первого сценария</button>
      </li>
      <li class="settings-menu__progress-item">
        <button class="settings-menu__progress-button" @click="resetProgressSecond">Сбросить прогресс второго сценария</button>
      </li>
      <li class="settings-menu__progress-item">
        <button class="settings-menu__progress-button" @click="resetProgressThird">Сбросить прогресс третьего сценария</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "settings-menu",
  computed: {
    currentSettingsTabStatus() {
      return this.$store.getters.currentSettingsTabStatus;
    },
    settingsTabStatus() {
      if (this.currentSettingsTabStatus) {
        return 'transform: scale(1, 1)';
      } else return 'transform: scale(0, 0)';
    },
    scenariosData() {
      return this.$store.getters.scenariosData;
    },
  },
  methods: {
    resetProgressFirst() {
      if (confirm("Все связанные с первым сценарием данные будут удалены")) {
        localStorage.setItem(`scenarioFirstCurrentPeriodIndex`, "0");
        localStorage.setItem(`scenarioFirstCurrentStoryline`, "Historical");
        localStorage.setItem(`scenarioFirstCurrentMusicList`, JSON.stringify(this.scenariosData.scenarioFirst[0].startingMusic));
        alert("Прогресс первого сценария сброшен");
      }
    },
    resetProgressSecond() {
      if (confirm("Все связанные со вторым сценарием данные будут удалены")) {
        localStorage.setItem(`scenarioSecondCurrentPeriodIndex`, "0");
        localStorage.setItem(`scenarioSecondCurrentStoryline`, "Historical");
        localStorage.setItem(`scenarioSecondCurrentMusicList`, JSON.stringify(this.scenariosData.scenarioSecond[0].startingMusic));
        alert("Прогресс второго сценария сброшен");
      }
    },
    resetProgressThird() {
      if (confirm("Все связанные с третьим сценарием данные будут удалены")) {
        localStorage.setItem(`scenarioThirdCurrentPeriodIndex`, "0");
        localStorage.setItem(`scenarioThirdCurrentStoryline`, "Historical");
        localStorage.setItem(`scenarioThirdCurrentMusicList`, JSON.stringify(this.scenariosData.scenarioThird[0].startingMusic));
        alert("Прогресс третьего сценария сброшен");
      }
    },
  }
};
</script>

<style scoped>
</style>