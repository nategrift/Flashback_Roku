<template>
  <div class="login">
    <logo-full></logo-full>
    <h1>Login</h1>
    <form @submit.prevent="submitLoginForm">
      <base-input
        label="Username"
        type="username"
        v-model.trim="username"
      ></base-input>
      <base-input
        label="Password"
        type="password"
        v-model.trim="password"
      ></base-input>
      <base-button type="submit">Login</base-button>
      <div>
        <p>Don't have an account yet?</p>
        <router-link to="/signup">
          <base-sub-button>SignUp</base-sub-button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput";
import BaseButton from "../components/BaseButton";
import LogoFull from "../components/LogoFull.vue";
import BaseSubButton from "../components/BaseSubButton.vue";

export default {
  components: {
    BaseInput,
    BaseButton,
    LogoFull,
    BaseSubButton,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async submitLoginForm() {
      try {
        await this.$store.dispatch("login", {
          username: this.username,
          password: this.password,
        });
        this.$router.replace("/profiles");
      } catch (err) {
        await this.$store.dispatch("setError", { error: err });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30vh;


  input:last-of-type {
    margin-bottom: 20p !important;
  }
}

div {
    p {
      font-size: 1.4rem;
    }
  }
</style>