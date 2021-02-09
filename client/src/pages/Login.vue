<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="submitLoginForm">
      <base-input label="email" type="email" v-model.trim="email"></base-input>
      <base-input
        label="Password"
        type="password"
        v-model.trim="password"
      ></base-input>
      <base-button type="submit">Login</base-button>
      <router-link to="/signup">SignUp</router-link>
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
      email: "",
      password: "",
    };
  },
  methods: {
    submitLoginForm() {
      console.log(this.email, this.password);
    },
  },
};
</script>

<style lang="scss" scoped>
.login form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>