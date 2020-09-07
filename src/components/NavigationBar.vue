<template>
  <div class="navigation-bar-wrapper">
    <router-link to="home" title="Canny" class="link">
      <primary-button label="Canny" button-type="logo" />
    </router-link>
    <drop-down-menu />
    <div class="sign-in-demo-buttons-wrapper">
      <primary-button :label="logInButtonTitle" button-type="dropDown" />
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
  },
}
</script>

<style lang="scss">
  @import "../assets/style/style";

  .navigation-bar-wrapper {
    padding-top: 2px;
    height: 70px;
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