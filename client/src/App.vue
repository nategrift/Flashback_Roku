<template>
  <div class="layout">
    <p v-if="error">{{ error }}</p>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './layout/TheHeader';

export default {
  name: 'App',
  components: {
    TheHeader
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    isAutoLogout() {
      return this.$store.getters.isAutoLogout;
    }
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    isAutoLogout(currentValue, oldValue) {
      if (currentValue && currentValue !== oldValue) {
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: $gradient-background;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  color: $color-text;
}
html {
  font-size: 62.5%;
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

</style>
