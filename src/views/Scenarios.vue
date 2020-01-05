<template>
  <main>
    <h1 class="choose-scenario">Выберите сценарий</h1>
    <ui class="scenarios">
      <ScenarioTile title="Первая Мировая Война" date="1910 - 1923" image="scenario-first" scenario="scenarioFirst" />
      <ScenarioTile title="Межвоенный Период" date="1924 - 1933" image="scenario-second" scenario="scenarioSecond" />
      <ScenarioTile title="Вторая Мировая Война" date="1934 - 1945" image="scenario-third" scenario="scenarioThird" />
    </ui>
    <div class="return-to-mainmenu">
      <a href="main.html" class="return-to-mainmenu__link">Главное меню</a>
    </div>
  </main>
</template>

<script>
import ScenarioTile from "@/components/ScenarioTile.vue";

export default {
  name: "Scenarios",
  components: {
    ScenarioTile
  }
};
</script>
