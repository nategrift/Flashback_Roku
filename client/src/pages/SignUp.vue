<template>
  <div class="signup">
    <logo-full></logo-full>
    <h1>Sign Up</h1>
    <form @submit.prevent="submitLoginForm">
      <base-input
        label="Username"
        type="text"
        v-model.trim="username"
      ></base-input>
      <base-input label="Email" type="email" v-model.trim="email"></base-input>
      <base-input
        label="Password"
        type="password"
        v-model.trim="password"
      ></base-input>
      <base-input label="Pin (4 Numbers)" type="number" v-model.trim="pin"></base-input>
      <base-button type="submit">SignUp</base-button>
      <div class="mb-small">
        <p>Have an account already?</p>
        <router-link to="/login">
          <base-sub-button>Login</base-sub-button>
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
    BaseSubButton
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      pin: "",
    };
  },
  methods: {
    async submitLoginForm() {
      try {
        await this.$store.dispatch("signup", {
          username: this.username,
          email: this.email,
          password: this.password,
          pin: this.pin,
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
.signup form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.mb-small {
  margin-bottom: 2rem;
}
</style>