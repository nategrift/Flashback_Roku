<template>
  <div class="layout">
    <base-notification v-if="error" @click="clearError">{{
      error
    }}</base-notification>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "./layout/TheHeader";
import BaseNotification from "./components/BaseNotification";

export default {
  name: "App",
  components: {
    TheHeader,
    BaseNotification,
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    isAutoLogout() {
      return this.$store.getters.isAutoLogout;
    },
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
  watch: {
    isAutoLogout(currentValue, oldValue) {
      if (currentValue && currentValue !== oldValue) {
        this.$router.replace("/");
      }
    },
  },
  methods: {
    clearError() {
      this.$store.dispatch("clearError");
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100vh;
  color: $color-text;
}
html {
  font-size: 62.5%;
  background: $gradient-background;
}
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}

.layout {
  display: grid;
  grid-template-rows: 6rem auto;
}
a {
  color: inherit;
  text-decoration: none;
  font-size: 1.6rem;
}
p {
      font-size: 1.4rem;
}

  
</style>
