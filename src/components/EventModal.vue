<template>
    <div v-if="currentEvent" class="event">
      <h1 class="event__name">{{currentEvent.name}}</h1>
      <img class="event__image" src>
      <p class="event__desc">{{currentEvent.desc}}</p>
      <button class="event__button-first" @click="chooseEventOption" />
      <button class="event__button-second" @click="chooseEventOption" />
    </div>
</template>

<script>
export default {
  name: "event-modal",
  computed: {
    currentEvent() {
      return this.$store.state.currentEvent;
    }
  }
};
</script>

<style scoped>
.event {
    background-color: #2e2e2e;
    position: fixed;
    left: 35%;
    top: 15%;
    width: 30%;
    height: 70%;
    transform: scale(1, 1);
    transition: transform 0.3s;
    z-index: 100;
}

.event__name {
    font-size: 25px;
    line-height: 40px;
    margin: 0;
    text-align: center;
    background-color: #484848;
}

.event__image {
    position: relative;
    width: 50%;
    border: 5px solid #484848;
}

.event__desc {
    text-align: center;
}

.event__button-first {
    bottom: 0;
    border-top: 1px solid #2e2e2e;
}

.event__button-second {
    bottom: 5%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom: 1px solid #2e2e2e;
}

.event__button-first,
.event__button-second {
    position: absolute;
    font-size: 20px;
    background-color: #484848;
    left: 20%;
    width: 60%;
    height: 5%;
}

.event__button-first:hover,
.event__button-second:hover {
    opacity: 0.5;
}
</style>