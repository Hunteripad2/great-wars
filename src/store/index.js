import Vue from "vue";
import Vuex from "vuex";
import scenariosData from "@/utils/scenariosData.js";

Vue.use(Vuex);

export const INIT_STATE = "INIT_STATE";
export const SET_ACTIVE_MUSIC = "SET_ACTIVE_MUSIC";

export default new Vuex.Store({
  state: {
    currentScenarioName: null,
    currentPeriod: null,
    currentMusicList: null,
    playingMusic: null,
    scenariosData,
  },
  mutations: {
    [INIT_STATE]: (state, payload) => {
      state.currentPeriod = payload.newPeriod;
      state.currentScenarioName = payload.newScenario;
      state.currentMusicList = payload.newMusicList;
      state.playingMusic = payload.newPlayingMusic;
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
    currentMusicList: state => {
      return state.currentMusicList ? state.currentMusicList : null;
    },
    playingMusic: state => {
      return state.playingMusic ? state.playingMusic : null;
    },
  },
  actions: {
    [INIT_STATE]: (context) => {
      const scenarioName = document.URL.slice(document.URL.indexOf("?") + 1);
      const currentPeriodIndex = localStorage.getItem(`${scenarioName}CurrentPeriodIndex`);
      const currentMusicList = JSON.parse(localStorage.getItem(`${scenarioName}CurrentMusicList`));

      context.commit(INIT_STATE, { newPeriod: context.state.scenariosData[scenarioName][currentPeriodIndex], 
                                   newScenario: scenarioName, 
                                   newMusicList: currentMusicList,
                                  });
    },
    [SET_ACTIVE_MUSIC]: (context)  => {
      const playingMusic = document.querySelector(".audio");

      context.commit(SET_ACTIVE_MUSIC, { newPlayingMusic: playingMusic });
    }
  },
  modules: {}
});
