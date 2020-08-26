<template>
  <button class="filled-button" v-bind:class="{green: buttonColor === 'green', blue: buttonColor === 'blue'}">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "FilledButton",

  props: {
    label: {
      required: true
    },
    buttonColor: {
      default: "green"
    }
  }
}
</script>

<style lang="scss">
  .filled-button {
    padding: 18px 25px;
    font-size: 13px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .green {
    @extend .filled-button;

    background: #6dd345;
  }

  .green:hover {
    background: #7edb75;
  }
</style>