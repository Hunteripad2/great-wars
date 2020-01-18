<template>
  <li class="scenarios__item">
    <router-link :to="pageLink">
      <img :src="require('@/assets/' + image + '.jpg')" class="scenarios__image" />
      <div class="scenarios__blackout">
        <h3 class="scenarios__progress"></h3>
        <h2 class="scenarios__name">{{title}}</h2>
        <h3 class="scenarios__date">{{date}}</h3>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'scenario-tile',
  props: {
    date: String,
    title: String,
    image: String,
    scenario: String
  },
  computed: {
    pageLink() {
      return `/map?${this.scenario}`;
    }
  }
}
</script>

<style scoped>
</style>