<template>
  <li class="scenarios__item">
    <router-link :to="pageLink" class="scenarios__link">
      <img :src="require('@/assets/' + image + '.jpg')" class="scenarios__image" />
      <div class="scenarios__blackout">
        <h3 class="scenarios__progress">{{progress}}</h3>
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
    scenario: String,
    image: String,
    progress: String,
    title: String,
    date: String,
  },
  computed: {
    pageLink() {
      return `/map?${this.scenario}`;
    },
  },
}
</script>

<style scoped>
.scenarios__item {
  position: relative;
  width: 30%;
}
.scenarios__link:hover {
  opacity: 1;
}
.scenarios__image {
  width: 100%;
  border-radius: 8%;
}
.scenarios__blackout {
  background-color: #202020;
  position: absolute;
  left: 0%;
  top: -0.2%;
  width: 100%;
  height: 99.6%;
  border-radius: 8%;
  opacity: 0;
  transition: opacity 0.3s;
}
.scenarios__item:hover .scenarios__blackout {
  opacity: 0.8;
}
.scenarios__progress,
.scenarios__name,
.scenarios__date {
  font-size: 20px;
  text-align: center;
  line-height: 60%;
}
@media (max-width: 1600px) {
  .scenarios__progress, .scenarios__date { font-size: 17px; }
}
@media (max-width: 1280px) {
  .scenarios__progress, .scenarios__date { font-size: 14px; }
}
@media (max-width: 960px) {
  .scenarios__progress, .scenarios__date { font-size: 11px; }
}
@media (max-width: 640px) {
  .scenarios__progress, .scenarios__date { font-size: 9px; }
}
.scenarios__progress {
  margin-top: 45%;
  margin-left: 15%;
  transition: margin-left 0.3s;
}
.scenarios__name {
  font-size: 25px;
  margin-right: 15%;
  transition: margin-right 0.3s;
}
@media (max-width: 1600px) {
  .scenarios__name { font-size: 21px; }
}
@media (max-width: 1280px) {
  .scenarios__name { font-size: 17px; }
}
@media (max-width: 960px) {
  .scenarios__name { font-size: 14px; }
}
@media (max-width: 640px) {
  .scenarios__name { font-size: 11px; }
}
.scenarios__date {
  margin-left: 15%;
  transition: margin-left 0.3s;
}
.scenarios__item:hover .scenarios__date,
.scenarios__item:hover .scenarios__progress {
  margin-left: 0;
}
.scenarios__item:hover .scenarios__name {
  margin-right: 0;
}
</style>