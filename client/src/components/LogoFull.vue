<template>
  <img :src="`${publicPath}logo_full.png`" alt="Logo Full" >
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    max-width: 709px;
    width: 60%;
    min-width: 320px;
  }
</style>