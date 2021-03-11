<template>
  <div class="home">
    <logo-full></logo-full>
      <base-button routerLink="/signup">SignUp</base-button>
      <div>
        <p>Have an account already?</p>
        <router-link to="/login">
          <base-sub-button>Login</base-sub-button>
        </router-link>
      </div>
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import BaseSubButton from "../components/BaseSubButton.vue";
import LogoFull from "../components/LogoFull.vue";

export default {
  components: {
    BaseButton,
    LogoFull,
    BaseSubButton
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
  width: 100%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    p {
      font-size: 1.4rem;
    }
  }
}
</style>