import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const CHANGE_MAP = "CHANGE_MAP";

export const END_TURN = "END_TURN";

export default new Vuex.Store({
  state: {
    currentMap: 'map-1934-01-historical'
  },
  mutations: {
    [CHANGE_MAP]: (state, payload) => {
      state.currentMap = payload.newMap;
    }
  },
  actions: {
    [END_TURN]: (context) => {
      // const currentPeriodIndex = Number(
      //   localStorage.getItem(`${currentScenario}CurrentPeriodIndex`)
      // );

      // const currentStoryline = localStorage.getItem(
      //   `${currentScenario}CurrentStoryline`
      // );

      context.commit(CHANGE_MAP, { newMap: 'map' });

      // const currentEventList = document.querySelectorAll(".map__event-button");

      // for (
      //   let i = currentPeriodIndex + 1;
      //   i < allData[currentScenario].length;
      //   i += 1
      // ) {
      //   if (currentStoryline === allData[currentScenario][i].storyLine) {
      //     localStorage.setItem(`${currentScenario}CurrentPeriodIndex`, `${i}`);
      //     for (let evnt of currentEventList) {
      //       evnt.remove();
      //     }
      //     this.choosePeriod();
      //     break;
      //   }
      // }
    }
  },
  modules: {}
});
