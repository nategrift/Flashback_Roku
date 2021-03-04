<template>
  <header class="header" :class="{kidsTheme: isKid}">
    <router-link to="/">
      <img :src="publicPath + 'logo.svg'" alt="Logo" />
    </router-link>

    <!-- Profile Nav -->
    <ul v-if="hasProfileSelected">
      <li>
        <router-link to="/media">Media</router-link>
      </li>
      <li>
        <router-link to="/profiles">Profiles</router-link>
      </li>
      <li>
        <a @click="logout">Logout</a>
      </li>
    </ul>
    <!-- Logged in but no profile Nav -->
    <ul v-else-if="isLoggedIn">
      <li>
        <router-link to="profiles">Profiles</router-link>
      </li>
      <li>
        <a @click="logout">Logout</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/");
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      isKid: this.$store.getters.isKid
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    hasProfileSelected() {
      return this.$store.getters.hasProfileSelected;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.header {
  width: 100%;
  padding: 1rem 3rem;
  background-color: $color-darkest-nav;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  li {
    cursor: pointer;
    a {
      padding: 0 1rem;
      color: white;
      text-decoration: none;
      font-size: 1.6rem;
      display: inline-block;
    }
  }
}

.kidsTheme {
  // Kids theme goes here
}
</style>