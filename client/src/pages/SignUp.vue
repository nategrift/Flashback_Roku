<template>
  <div class="login">
    <h1>Sign Up</h1>
    <form @submit.prevent="submitLoginForm">
      <base-input label="name" type="name" v-model.trim="name"></base-input>
      <base-input label="email" type="email" v-model.trim="email"></base-input>
      <base-input
        label="Password"
        type="password"
        v-model.trim="password"
      ></base-input>
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
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submitLoginForm() {
      console.log(this.name, this.email, this.password);
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