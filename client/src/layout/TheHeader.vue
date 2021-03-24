<template>
  <header class="header" :class="{kidsTheme: isKid}">
    <router-link to="/">
      <img :src="publicPath + 'logo.svg'" alt="Logo" />
    </router-link>

    <!-- Profile Nav -->
    <ul v-if="hasProfileSelected">
      <div>
        <li>
        <router-link to="/media">Media</router-link>
      </li>
      <li>
        <router-link to="/profiles">Profiles</router-link>
      </li>
      <li>
        <a @click="logout">Logout</a>
      </li>
      </div>
      <div v-if="isKid" class="kidsTitle">
        <li>
        <p>Flashback Kids</p>
      </li>
      </div>
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
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    hasProfileSelected() {
      return this.$store.getters.hasProfileSelected;
    },
    isKid() {
      return this.$store.getters.isKid
    } 
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
  justify-content: space-between;
  width: 100%;
  div {
    display: flex;
    align-items: center;
  }
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

.kidsTitle {

  p {
    font-size: 1.8rem;
    font-weight: 800;
    margin: 0;
    padding: 0.7rem 3rem;
    border-radius: 1rem;
    background-color: $light-background-color;
  }
  
}
</style>