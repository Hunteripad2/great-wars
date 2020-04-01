<template>
  <div class="blackening" @click="closeTabs" :style="blackeningStatus"></div>
</template>

<script>
import { CLOSE_TABS } from '@/store';
import { mapActions } from 'vuex'

export default {
  name: "blackening",
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
    currentEventTabStatus() {
      return this.$store.getters.currentEventTabStatus;
    },
    blackeningStatus() {
      if (this.currentSettingsTabStatus || this.currentResourceTabStatus || this.currentMusicTabStatus || this.currentEventTabStatus) {
        return 'opacity: 0.8; transform: translate(0%)'; 
      } else return 'opacity: 0; transform: translate(100%)';
    },
  },
  methods: {
    ...mapActions({
      closeTabs: CLOSE_TABS
    })
  }
};
</script>

<style scoped>
</style>