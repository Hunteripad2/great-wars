import Vue from "vue";
import Vuex from "vuex";
import scenariosData from "@/utils/scenariosData.js";

Vue.use(Vuex);

export const INIT_STATE = "INIT_STATE";

export const SET_ACTIVE_MUSIC = "SET_ACTIVE_MUSIC";
export const SET_EVENT_DATA = "SET_EVENT_DATA";
export const END_TURN = "END_TURN";
export const CHANGE_MUSIC_STATUS = "CHANGE_MUSIC_STATUS";

export const CLOSE_TABS = "CLOSE_TABS";
export const SHOW_SETTINGS_MENU = "SHOW_SETTINGS_MENU";
export const SHOW_RESOURCE_MENU = "SHOW_RESOURCE_MENU";
export const SHOW_MUSIC_MENU = "SHOW_MUSIC_MENU";
export const SHOW_EVENT_MENU = "SHOW_EVENT_MENU";

export const CHANGE_SETTINGS_TAB_STATUS = "CHANGE_SETTINGS_TAB_STATUS";
export const CHANGE_RESOURCE_TAB_STATUS = "CHANGE_RESOURCE_TAB_STATUS";
export const CHANGE_MUSIC_TAB_STATUS = "CHANGE_MUSIC_TAB_STATUS";
export const CHANGE_EVENT_TAB_STATUS = "CHANGE_EVENT_TAB_STATUS";

export const EVENT_BLINK = "EVENT_BLINK";
export const EVENT_UNBLINK = "EVENT_UNBLINK";
export const CHANGE_EVENT_ICONS_BLINKING_STATUS = "CHANGE_EVENT_ICONS_BLINKING_STATUS";

export default new Vuex.Store({
  state: {
    scenariosData,

    currentScenarioName: null,
    currentPeriodIndex: null,
    currentStoryline: null,

    currentPeriod: null,
    currentMusicList: null,
    currentEventData: null,

    playingMusic: null,
    
    currentSettingsTabStatus: null,
    currentResourceTabStatus: null,
    currentMusicTabStatus: null,
    currentEventTabStatus: null,

    currentEventIconsBlinkingStatus: true,
  },
  getters: {
    scenarioFirstProgress: state => {
      return Math.round(100 / state.scenariosData.scenarioFirst.length * localStorage.getItem(`scenarioFirstCurrentPeriodIndex`) * 10) / 10 + "%";
    },
    scenarioSecondProgress: state => {
      return Math.round(100 / state.scenariosData.scenarioSecond.length * localStorage.getItem(`scenarioSecondCurrentPeriodIndex`) * 10) / 10 + "%";
    },
    scenarioThirdProgress: state => {
      return Math.round(100 / state.scenariosData.scenarioThird.length * localStorage.getItem(`scenarioThirdCurrentPeriodIndex`) * 10) / 10 + "%";
    },
    scenariosData: state => {
      return state.scenariosData ? state.scenariosData : null;
    },
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
    currentEventData: state => {
      return state.currentEventData ? state.currentEventData : null;
    },
    currentSettingsTabStatus: state => {
      return state.currentSettingsTabStatus ? state.currentSettingsTabStatus : null;
    },
    currentResourceTabStatus: state => {
      return state.currentResourceTabStatus ? state.currentResourceTabStatus : null;
    },
    currentMusicTabStatus: state => {
      return state.currentMusicTabStatus ? state.currentMusicTabStatus : null;
    },
    currentEventTabStatus: state => {
      return state.currentEventTabStatus ? state.currentEventTabStatus : null;
    },
    currentEventIconsBlinkingStatus: state => {
      return state.currentEventIconsBlinkingStatus ? state.currentEventIconsBlinkingStatus : null;
    },
  },
  mutations: {
    [INIT_STATE]: (state, payload) => {
      state.currentPeriod = payload.newPeriod;
      state.currentScenarioName = payload.newScenarioName;
      state.currentPeriodIndex = payload.newPeriodIndex;
      state.currentStoryline = payload.newStoryline;
      state.currentMusicList = payload.newMusicList;
      state.playingMusic = payload.newPlayingMusic
    },
    [SET_ACTIVE_MUSIC]: (state, payload) => {
      state.playingMusic = payload.newPlayingMusic;
    },
    [SET_EVENT_DATA]: (state, payload) => {
      state.currentEventData = payload.newEventData;
    },
    [END_TURN]: (state, payload) => {
      state.currentPeriod = payload.newPeriod;
      state.currentPeriodIndex = payload.newPeriodIndex;
    },
    [CHANGE_MUSIC_STATUS]: (state, payload) => {
      state.currentMusicList = payload.newMusicList;
    },
    [CHANGE_SETTINGS_TAB_STATUS]: (state, payload) => {
      state.currentSettingsTabStatus = payload.newSettingsTabStatus;
    },
    [CHANGE_RESOURCE_TAB_STATUS]: (state, payload) => {
      state.currentResourceTabStatus = payload.newResourceTabStatus;
    },
    [CHANGE_MUSIC_TAB_STATUS]: (state, payload) => {
      state.currentMusicTabStatus = payload.newMusicTabStatus;
    },
    [CHANGE_EVENT_TAB_STATUS]: (state, payload) => {
      state.currentEventTabStatus = payload.newEventTabStatus;
    },
    [CHANGE_EVENT_ICONS_BLINKING_STATUS]: (state, payload) => {
      state.currentEventIconsBlinkingStatus = payload.newEventIconsBlinkingStatus;
    },
  },
  actions: {
    [INIT_STATE]: (context) => {
      const currentScenarioName = document.URL.slice(document.URL.indexOf("?") + 1);
      const currentScenario = context.state.scenariosData[currentScenarioName];
      const currentPeriodIndex = localStorage.getItem(`${currentScenarioName}CurrentPeriodIndex`);
      const currentMusicList = JSON.parse(localStorage.getItem(`${currentScenarioName}CurrentMusicList`));
      const currentStoryline = localStorage.getItem(`${currentScenarioName}CurrentStoryline`);
      const initialMusic = currentMusicList[0];

      context.commit(INIT_STATE, { newPeriod: currentScenario[currentPeriodIndex], 
                                   newScenarioName: currentScenarioName,
                                   newPeriodIndex: currentPeriodIndex,
                                   newStoryline: currentStoryline,
                                   newMusicList: currentMusicList,
                                   newPlayingMusic: initialMusic,
                                  });
    },
    [SET_ACTIVE_MUSIC]: (context, payload) => {
      context.commit(SET_ACTIVE_MUSIC, { newPlayingMusic: payload.newPlayingMusic });
    },
    [SET_EVENT_DATA]: (context, payload) => {
      context.commit(SET_EVENT_DATA, { newEventData: payload.newEventData });
    },
    [END_TURN]: (context) => {
      const currentPeriodIndex = context.state.currentPeriodIndex;
      const currentScenarioName = context.state.currentScenarioName;
      const currentScenario = context.state.scenariosData[currentScenarioName];
      const currentStoryline = context.state.currentStoryline;

      for (let i = +currentPeriodIndex + 1; i < currentScenario.length; i += 1) {
        if (currentScenario[i].storyLine.some(storyline => storyline === currentStoryline)) {
          localStorage.setItem(`${currentScenarioName}CurrentPeriodIndex`, `${i}`);
          context.commit(END_TURN, { newPeriod: currentScenario[i], newPeriodIndex: i, });
          break;
        } // else endscreen
      }
    },
    [CHANGE_MUSIC_STATUS]: (context, payload) => {
      let currentMusicList = context.state.currentMusicList;
      const targetMusic = currentMusicList[payload.musicIndex];
      const currentScenarioName = context.state.currentScenarioName;

      if (targetMusic.status === "allowed") {
        targetMusic.status = "forbidden";
      } else targetMusic.status = "allowed";

      localStorage.setItem(`${currentScenarioName}CurrentMusicList`, JSON.stringify(currentMusicList));
      context.commit(CHANGE_MUSIC_STATUS, { newMusicList: currentMusicList });
    },
    [CLOSE_TABS]: (context) => {
      context.commit(CHANGE_SETTINGS_TAB_STATUS, { newSettingsTabStatus: false });
      context.commit(CHANGE_RESOURCE_TAB_STATUS, { newResourceTabStatus: false });
      context.commit(CHANGE_MUSIC_TAB_STATUS, { newMusicTabStatus: false });
      context.commit(CHANGE_EVENT_TAB_STATUS, { newEventTabStatus: false });
    },
    [SHOW_SETTINGS_MENU]: (context) => {
      context.commit(CHANGE_SETTINGS_TAB_STATUS, { newSettingsTabStatus: true });
    },
    [SHOW_RESOURCE_MENU]: (context) => {
      context.commit(CHANGE_RESOURCE_TAB_STATUS, { newResourceTabStatus: true });
    },
    [SHOW_MUSIC_MENU]: (context) => {
      context.commit(CHANGE_MUSIC_TAB_STATUS, { newMusicTabStatus: true });
    },
    [SHOW_EVENT_MENU]: (context) => {
      context.commit(CHANGE_EVENT_TAB_STATUS, { newEventTabStatus: true });
    },
    [EVENT_BLINK]: (context) => {
      context.commit(CHANGE_EVENT_ICONS_BLINKING_STATUS, { newEventIconsBlinkingStatus: false });
    },
    [EVENT_UNBLINK]: (context) => {
      context.commit(CHANGE_EVENT_ICONS_BLINKING_STATUS, { newEventIconsBlinkingStatus: true });
    },
  },
  modules: {}
});
