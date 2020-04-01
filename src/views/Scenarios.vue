<template>
  <main>
    <h1 class="choose-scenario">Выберите сценарий</h1>
    <ul class="scenarios">
      <ScenarioTile scenario="scenarioFirst" image="scenario-first" :progress="scenarioFirstProgress" title="Первая Мировая Война" date="1910 - 1923" />
      <ScenarioTile scenario="scenarioSecond" image="scenario-second" :progress="scenarioSecondProgress" title="Межвоенный Период" date="1924 - 1933" />
      <ScenarioTile scenario="scenarioThird" image="scenario-third" :progress="scenarioThirdProgress" title="Вторая Мировая Война" date="1934 - 1945" />
    </ul>
    <div class="return-to-mainmenu">
      <router-link to="/" class="return-to-mainmenu__link">Главное меню</router-link>
    </div>
  </main>
</template>

<script>
import ScenarioTile from "@/components/ScenarioTile.vue";

export default {
  name: "scenarios-page",
  components: {
    ScenarioTile
  },
  computed: {
    scenarioFirstProgress() {
      return this.$store.getters.scenarioFirstProgress;
    },
    scenarioSecondProgress() {
      return this.$store.getters.scenarioSecondProgress;
    },
    scenarioThirdProgress() {
      return this.$store.getters.scenarioThirdProgress;
    },
  },
};
</script>

<style scoped>
.choose-scenario {
  font-size: 80px;
  margin-bottom: 0;
  text-align: center;
  cursor: default;
}
@media (max-width: 1600px) {
  .choose-scenario { font-size: 70px; }
}
@media (max-width: 1280px) {
  .choose-scenario { font-size: 60px; }
}
@media (max-width: 960px) {
  .choose-scenario { font-size: 50px; }
}
@media (max-width: 640px) {
  .choose-scenario { font-size: 40px; }
}
.scenarios {
  padding: 0;
  margin: 0;
  margin-top: 4%;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}
.return-to-mainmenu {
  margin-top: 3%;
  margin-left: 3%;
}
.return-to-mainmenu__link {
  font-size: 36px;
}
@media (max-width: 1600px) {
  .return-to-mainmenu__link { font-size: 30px; }
}
@media (max-width: 1280px) {
  .return-to-mainmenu__link { font-size: 24px; }
}
@media (max-width: 960px) {
  .return-to-mainmenu__link { font-size: 18px; }
}
@media (max-width: 640px) {
  .return-to-mainmenu__link { font-size: 12px; }
}
.return-to-mainmenu__link:hover {
  opacity: 0.5;
}
</style>