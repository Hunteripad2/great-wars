<template>
  <div class="resource-menu" :style="resourceTabStatus">
    <ul class="resource-menu__category-list">
      <li class="resource-menu__category-item_inactive">
        <button class="resource-menu__category-button" @click="chooseThisCategory">Книги</button>
      </li>
      <li class="resource-menu__category-item_inactive">
        <button class="resource-menu__category-button" @click="chooseThisCategory">Статьи</button>
      </li>
      <li class="resource-menu__category-item_inactive">
        <button class="resource-menu__category-button" @click="chooseThisCategory">Фильмы</button>
      </li>
    </ul>
    <h1 class="resource-menu__choose-category">Выберите раздел</h1>
  </div>
</template>

<script>

export default {
  name: "resource-menu",
  computed: {
    currentResourceTabStatus() {
      return this.$store.getters.currentResourceTabStatus;
    },
    resourceTabStatus() {
      if (this.currentResourceTabStatus) {
        return 'transform: translateY(0%)';
      } else return 'transform: translateY(100%)';
    },
  },
  methods: {
    chooseThisCategory() {
      if (document.querySelector('.resource-menu__category-item_active')) {
        document.querySelector('.resource-menu__category-item_active').className = "resource-menu__category-item_inactive";
      }
      event.target.parentNode.className = "resource-menu__category-item_active";
    },
  }
};
</script>

<style scoped>
</style>