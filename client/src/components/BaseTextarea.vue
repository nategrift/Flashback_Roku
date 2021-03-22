<template>
  <div class="inputField">
    <label v-if="label"> {{ label }}</label>
    <textarea
      v-bind:value="modelValue"
      v-on:input="$emit('update:modelValue', $event.target.value)"
    />
      <img class="clear-button" @click="clearText" :src="`${publicPath}times-circle-solid.svg`" alt="X" :class="{showX: valueEmpty}">
    
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    clearText() {
      this.$emit("update:modelValue", "");
    },
  },
  computed: {
    valueEmpty() {
      return this.modelValue.length > 0 ? true : false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.inputField {
  font-size: 1.6rem;
  width: 100%;
  position: relative;
  .clear-button {
    width: 2.4rem;
    position: absolute;
    top: 4.4rem;
    right: 0.4rem;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s;
    padding: 0.4rem;
    cursor: pointer;
  }

  .showX {
    opacity: 0.4;
  }

  textarea {
    background-color: $color-input;
    color: $color-text;
    width: 100%;
    padding: 1rem 1.5rem;
    outline: none;
    border: none;
    margin-bottom: 10px;
    font-size: inherit;
    font: inherit;
    resize: vertical;
    min-height: 50px;
  }
  label {
    display: block;
    text-align: left;
  }
  textarea::-webkit-outer-spin-button,
  textarea::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  textarea[type="number"] {
    -moz-appearance: textfeild;
  }
}
</style>