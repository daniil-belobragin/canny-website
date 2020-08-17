<template>
  <div class="navigation-bar-wrapper">
    <div class="logo-wrapper">
      <primary-button label="Canny" :is-logo-button="true"/>
    </div>
    <drop-down-menu />
    <div class="sign-in-demo-buttons-wrapper">
      <primary-button :label="logInButtonTitle" :is-drop-down="true" />
      <border-button :label="demoButtonTitle" button-type="demo"/>
    </div>
  </div>
</template>

<script>
import BorderButton from "./buttons/BorderButton";
import PrimaryButton from "./buttons/PrimaryButton";
import DropDownMenu from "./DropDownMenu";
export default {
  name: "NavigationBar",

  components: {DropDownMenu, PrimaryButton, BorderButton},

  data () {
    return {
      demoButtonTitle: "request a demo",
      logInButtonTitle: "log in"
    }
  },

  mounted() {
    this.demoButtonTitle = this.demoButtonTitle.toUpperCase()
    this.logInButtonTitle = this.logInButtonTitle.toUpperCase()
  }

}
</script>

<style scoped>
  .navigation-bar-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .sign-in-demo-buttons-wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>