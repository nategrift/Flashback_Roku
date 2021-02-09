<template>
  <header class="header">
    <img src="../assets/logo.svg" alt="Logo" >
    <ul>
      <li>
        <router-link to='/'>Home</router-link>
        <router-link to='login'>Login</router-link>
        <router-link to='signup'>Signup</router-link>
        <router-link to='profiles'>Profiles</router-link>
      </li>
    </ul>
  </header>
</template>

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
    }
  }
}
</style>