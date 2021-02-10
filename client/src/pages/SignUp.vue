<template>
  <div class="signup">
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
      <base-input label="Pin" type="number" v-model.trim="pin"></base-input>
      <base-button type="submit">SignUp</base-button>
      <router-link to="/login">Login</router-link>
    </form>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput";
import BaseButton from "../components/BaseButton";

export default {
  components: {
    BaseInput,
    BaseButton,
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
</style>