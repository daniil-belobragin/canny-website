<template>
  <div class="logo-button-wrapper" :style="logoStyle">
    <slot name="logo-button" />
  </div>
</template>

<script>
export default {
  name: "LogoButton",

  props: {
    logoStyleInit: {
      default: "26px"
    }
  },

  computed: {
    logoStyle () {
      return {
        "height": this.logoStyleInit
      }
    }
  }
}
</script>

<style scoped>

  .logo-button-wrapper {
    padding: 0;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .logo-button-wrapper:hover {
    filter: brightness(85%);
  }

  .logo-button-wrapper > * {
    height: 100%;
  }

</style>