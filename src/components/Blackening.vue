<template>
  <div class="blackening" @click="closeTabs" :style="blackeningStatus"></div>
</template>

<script>
import { CLOSE_TABS } from '@/store';
import { mapActions } from 'vuex'

export default {
  name: "map-image",
  computed: {
    currentSettingsTabStatus() {
      return this.$store.getters.currentSettingsTabStatus;
    },
    currentResourceTabStatus() {
      return this.$store.getters.currentResourceTabStatus;
    },
    currentMusicTabStatus() {
      return this.$store.getters.currentMusicTabStatus;
    },
    blackeningStatus() {
      if (this.currentSettingsTabStatus || this.currentResourceTabStatus || this.currentMusicTabStatus) {
        return 'opacity: 0.8; transform: translate(0%)'; 
      } else return 'opacity: 0; transform: translate(100%)';
    },
  },
  methods: {
    //    document.querySelectorAll('.event')[0].style.transform = "scale(0, 0)";
    //    document.querySelector('.resource-menu').style.transform = "translateY(100%)";
    //    document.querySelector('.settings-menu').style.transform = "scale(0, 0)";
    ...mapActions({
      closeTabs: CLOSE_TABS
    })
  }
};
</script>

<style scoped>
</style>