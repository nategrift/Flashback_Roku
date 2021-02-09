<template>
  <button v-if="!routerLink" @click="handleClick" :type="type">
    <slot></slot>
  </button>
  <router-link v-else :to="routerLink">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
    routerLink: {
      type: String,
    },
  },
  methods: {
    handleClick() {
      this.$emit("clickAction");
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

button, a {
  width: 40%;
  max-width: 500px;
  min-width: 200px;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  background-color: $color-accent;
  color: $color-text;
  outline: none;
  border: none;
  border-radius: 3px;
}
</style>