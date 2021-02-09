<template>
  <button @click="handleClick" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    handleClick() {
      this.$emit("clickAction");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 40%;
  max-width: 500px;
  min-width: 200px;
  font-size: 1.6rem;
  padding: 1rem 2rem;
}
</style>