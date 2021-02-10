<template>
  <div>
    <div class="container">
      <div class="display">
        <p>{{ modelValue.length >= 1 ? "*" : null }}</p>
        <p>{{ modelValue.length >= 2 ? "*" : null }}</p>
        <p>{{ modelValue.length >= 3 ? "*" : null }}</p>
        <p>{{ modelValue.length >= 4 ? "*" : null }}</p>
      </div>
      <div class="pinpad">
        <div class="column">
          <button @click="clickButton('1')">1</button>
          <button @click="clickButton('2')">2</button>
          <button @click="clickButton('3')">3</button>
        </div>
        <div class="column">
          <button @click="clickButton('4')">4</button>
          <button @click="clickButton('5')">5</button>
          <button @click="clickButton('6')">6</button>
        </div>
        <div class="column">
          <button @click="clickButton('7')">7</button>
          <button @click="clickButton('8')">8</button>
          <button @click="clickButton('9')">9</button>
        </div>
        <div class="column">
          <button @click="clickButton('-')">-</button>
          <button @click="clickButton('0')">0</button>
          <button @click="clickButton('>')">></button>
        </div>
      </div>
    </div>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      required: true,
      type: String,
    },
  },
  methods: {
    clickButton(char) {
      if (char == "-") {
        this.$emit("update:modelValue", this.modelValue.slice(0, -1));
      } else if (char == ">") {
        // ..
      } else {
        if (this.modelValue.length <= 4) {
         this.$emit("update:modelValue", this.modelValue + char);
        } 
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.background {
  width: 100%;
  height: 100vh;
  background-color: $color-dark-overlay;
  z-index: 100;
  position: fixed;
}
.container {
  z-index: 200;
  background: $gradient-background-light;
  padding: 10rem 6rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 0.7rem;
}

.display {
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    display: inline-block;
    margin: 1rem;
    height: 4rem;
    width: 4rem;
    background-color: $color-input-dark;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.8rem;
    border-radius: 0.3rem;
  }
}

.column {
  button {
    width: 6rem;
    height: 6rem;
    margin: 1rem;
    font-size: 2.4rem;
    outline: none;
    border: none;
    background-color: $color-input;
    color: $color-text;
    border-radius: 0.3rem;
    &:active {
      opacity: 0.6;
    }
  }
}
</style>