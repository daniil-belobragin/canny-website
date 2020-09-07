<template>
  <button class="filled-button" v-bind:class="{green: buttonColor === 'green', blue: buttonColor === 'blue',
   black: buttonColor === 'black', pricingButton: buttonType === 'pricing'}">
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
    },
    buttonType: {
      default: ""
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

  .black {
    background: #464856;
  }

  .black:hover {
    background: #6b6d77;
  }

  .pricingButton {
    font-size: 11px;
    padding: 14px 16px;
  }
</style>