<template>
  <header class="header">
    <img src="../assets/logo.svg" alt="Logo" >
    <ul>
      <li>
        <router-link to='/'>Home</router-link>
        <router-link to='login'>Login</router-link>
        <router-link to='signup'>Signup</router-link>
        <router-link to='profiles'>Profiles</router-link>
        <a @click="logout">Logout</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('./')
    }
  }
}
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
  li {
    a {
      padding: 0 1rem;
      color: white;
      text-decoration: none;
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
}
</style>