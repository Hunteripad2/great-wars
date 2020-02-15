import Vue from "vue";
import Vuex from "vuex";
import scenariosData from "@/utils/scenariosData.js";

Vue.use(Vuex);

export const INIT_STATE = "INIT_STATE";

export default new Vuex.Store({
  state: {
    currentScenarioName: null,
    currentPeriod: null,
    scenariosData,
  },
  mutations: {
    [INIT_STATE]: (state, payload) => {
      state.currentPeriod = payload.newPeriod;
      state.currentScenarioName = payload.newScenario;
    }
  },
  getters: {
    currentMap: state => {
      return state.currentPeriod ? state.currentPeriod.map : null;
    },
    currentDate: state => {
      return state.currentPeriod ? state.currentPeriod.date : null;
    },
    currentEvents: state => {
      return state.currentPeriod ? state.currentPeriod.events : null;
    },
  },
  actions: {
    [INIT_STATE]: (context) => {
      const scenarioName = document.URL.slice(document.URL.indexOf("?") + 1);
      const currentPeriodIndex = localStorage.getItem(`${scenarioName}CurrentPeriodIndex`);

      if (currentPeriodIndex) {
        context.commit(INIT_STATE, { newPeriod: context.state.scenariosData[scenarioName][currentPeriodIndex], newScenario: scenarioName });
      }
    }
  },
  modules: {}
});
