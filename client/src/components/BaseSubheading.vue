<template>
  <h2 class="sub-title">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

.sub-title {
  color: yellow;
}


</style>