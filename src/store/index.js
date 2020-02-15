import Vue from "vue";
import Vuex from "vuex";
import allData from "@/utils/allData.js";

Vue.use(Vuex);

export const CHANGE_SCENARIO = "CHANGE_SCENARIO";
export const CHOOSE_PERIOD = "CHOOSE_PERIOD";

export default new Vuex.Store({
  state: {
    currentScenario: "---",
  },
  mutations: {
    [CHANGE_SCENARIO]: (state, payload) => {
      state.currentScenario = payload.newScenario;
    },
  },
  getters: {
    currentMap: state => {
      const currentPeriodIndex = localStorage.getItem(`${state.currentScenario}CurrentPeriodIndex`)
      return allData[state.currentScenario][currentPeriodIndex].map;
    },
    currentDate: state => {
      const currentPeriodIndex = localStorage.getItem(`${state.currentScenario}CurrentPeriodIndex`)
      return allData[state.currentScenario][currentPeriodIndex].date;
    }
  },
  actions: {
    [CHOOSE_PERIOD]: (context) => {
      context.commit(CHANGE_SCENARIO, { newScenario: document.URL.slice(document.URL.indexOf("?") + 1) });
    }
  },
  modules: {}
});
