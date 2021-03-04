<template>
  <div class="notification">
    <p><slot></slot></p>
  </div>
</template>

<style lang="scss" scoped>

@import "../assets/scss/_variables.scss";

.notification {
  position: fixed;
  left: 50%;
  color: $color-text;
  background-color: $notification-error;
  padding: 1.2rem 0;
  width: 60%;
  font-size: 2rem;
  border-radius: 0.3rem;
  transform: translate(-50%, 0%);
  top: 1rem;
  p {
    margin: 0;
  }
  z-index: 1000;
}
</style>