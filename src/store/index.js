import Vue from "vue";
import Vuex from "vuex";
import allData from "@/utils/allData.js";

Vue.use(Vuex);

export const CHANGE_MAP = "CHANGE_MAP";
export const CHANGE_DATE = "CHANGE_DATE";

export const CHOOSE_PERIOD = "CHOOSE_PERIOD";

export default new Vuex.Store({
  state: {
    currentMap: "map",
    currentDate: "---",
  },
  mutations: {
    [CHANGE_MAP]: (state, payload) => {
      state.currentMap = payload.newMap;
    },
    [CHANGE_DATE]: (state, payload) => {
      state.currentDate = payload.newDate;
    },
  },
  actions: {
    [CHOOSE_PERIOD]: (context) => {
      const currentScenario = document.URL.slice(document.URL.indexOf("?") + 1);
      const choosenPeriod = allData[currentScenario][localStorage.getItem(`${currentScenario}CurrentPeriodIndex`)];

      context.commit(CHANGE_MAP, { newMap: choosenPeriod.map });
      context.commit(CHANGE_DATE, { newDate: choosenPeriod.date });
    }
  },
  modules: {}
});
