<template>
  <div>
    <img :src="`${publicPath}logo_full.png`" alt="Logo Full" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
}
img {
  max-width: 709px;
  width: 60%;
  min-width: 320px;
  margin: 3rem auto 0 auto;
}
</style>