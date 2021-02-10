<template>
  <div class="home">
    <logo-full></logo-full>
    <base-button routerLink="/signup">SignUp</base-button>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import LogoFull from "../components/LogoFull.vue";

export default {
  components: {
    BaseButton,
    LogoFull
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