<template>
  <span class="turn-counter__date">{{currentDate}}</span>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'date-count',
  computed: mapState([
    'currentDate'
  ]),
}
</script>

<style scoped>
</style>