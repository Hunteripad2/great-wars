<template>
  <span class="turn-counter__date">{{currentDate}}</span>
</template>

<script>
export default {
  name: 'date-count',
  computed: {
    currentDate() {
      return this.$store.getters.currentDate
    }
  }
}
</script>

<style scoped>
</style>