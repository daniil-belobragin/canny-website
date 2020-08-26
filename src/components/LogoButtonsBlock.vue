<template>
  <ul class="logo-buttons-wrapper" v-bind:class="{integration: isIntegration}">
    <li v-for="logoButton in logoButtons" :key="logoButton.id">
      <logo-button :logo="logoButton.name" :is-integration="isIntegration"
                 :path="logoButton.logoPath" :image-size="logoButtonImageSize"/>
    </li>
  </ul>
</template>

<script>
import LogoButton from "./buttons/LogoButton";
export default {
  name: "LogoButtonsBlock",

  components: {LogoButton},

  props: {
    logoButtons: {
      required: true
    },
    isIntegration: {
      default: false
    },
    logoButtonImageSize: {
      default: "heightMax"
    }
  }
}
</script>

<style lang="scss">
  .logo-buttons-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 60px;
    padding-bottom: 80px;
  }

  .integration {
    display: flex;
    max-width: 700px;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>