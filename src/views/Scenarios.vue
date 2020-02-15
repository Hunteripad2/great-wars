<template>
  <main>
    <h1 class="choose-scenario">Выберите сценарий</h1>
    <ul class="scenarios">
      <ScenarioTile title="Первая Мировая Война" date="1910 - 1923" image="scenario-first" scenario="scenarioFirst" />
      <ScenarioTile title="Межвоенный Период" date="1924 - 1933" image="scenario-second" scenario="scenarioSecond" />
      <ScenarioTile title="Вторая Мировая Война" date="1934 - 1945" image="scenario-third" scenario="scenarioThird" />
    </ul>
    <div class="return-to-mainmenu">
      <router-link to="/" class="return-to-mainmenu__link">Главное меню</router-link>
    </div>
  </main>
</template>

<script>
import ScenarioTile from "@/components/ScenarioTile.vue";
import scenariosData from "@/utils/scenariosData.js";

export default {
  name: "scenarios-page",
  components: {
    ScenarioTile
  },
  methods: {
    setProgress() {
      const firstScenarioProgress = localStorage.getItem(`scenarioFirstCurrentPeriodIndex`);
      const secondScenarioProgress = localStorage.getItem(`scenarioSecondCurrentPeriodIndex`);
      const thirdScenarioProgress = localStorage.getItem(`scenarioThirdCurrentPeriodIndex`);
    
      const progressBars = document.querySelectorAll('.scenarios__progress');
    
      progressBars[0].innerHTML = Math.round(100 / scenariosData.scenarioFirst.length * firstScenarioProgress * 100) / 100 + "%";
      progressBars[1].innerHTML = Math.round(100 / scenariosData.scenarioSecond.length * secondScenarioProgress * 100) / 100 + "%";
      progressBars[2].innerHTML = Math.round(100 / scenariosData.scenarioThird.length * thirdScenarioProgress * 100) / 100 + "%";
    }
  },
  mounted(){
    this.setProgress();
  },
};
</script>