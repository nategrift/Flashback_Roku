<template>
  <button @click="click"><slot></slot></button>
</template>

<script>
export default {
  props: {
    click: {
      type: Function
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/_variables.scss';

  button {
    background-color: $color-input;
    color: $color-text;
    border-radius: 3px;
    outline: 0;
    border: 0;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: color 1s;

    &:hover {
      background-color: $color-input-hover;
    }
  }
</style>