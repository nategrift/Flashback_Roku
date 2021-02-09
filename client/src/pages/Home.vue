<template>
  <div class="home">
    <logo-full></logo-full>
  </div>
</template>

<script>
import LogoFull from "../components/LogoFull.vue";
export default {
  components: {
    LogoFull,
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>