<template>
  <div class="inputField">
    <label v-if="label"> {{ label }}</label>
    <input
      :type="type"
      v-bind:value="modelValue"
      v-on:input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";
.inputField {
  width: 40%;
  max-width: 500px;
  min-width: 200px;
  font-size: 1.6rem;
  input {
    background-color: $color-input;
    color: $color-text;
    width: 100%;
    padding: 1rem 1.5rem;
    outline: none;
    border: none;
    margin-bottom: 10px;
    font-size: inherit;
  }
  label {
    display: block;
    text-align: left;
  }
}
</style>