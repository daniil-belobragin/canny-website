<template>
  <div class="navigation-bar">
    <HomeButton />
    <div class="drop-down-menu">
      <DropDown name-init="PRODUCT" state-init="true" drop-down-button-init="product"/>
      <DropDown name-init="PRICING" />
      <DropDown name-init="RESOURCES" state-init="true" drop-down-button-init="resources"/>
      <DropDown name-init="CASE STUDIES" />
    </div>
    <div class="action-menu">
      <LogInButton />
      <DemoButton />
    </div>
  </div>
</template>

<script>
import HomeButton from "./HomeButton";
import DropDown from "./DropDown";
import LogInButton from "./LogInButton";
import DemoButton from "./DemoButton";

export default {
  name: "NavigationBar",
  components: {DemoButton, LogInButton, DropDown, HomeButton}
}
</script>

<style scoped>
  .navigation-bar {
    height: 32px;
    width: 100%;
    padding: 18px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: 2px;
  }
  .drop-down-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 450px;
    height: 100%;
  }
  .action-menu {
    height: 100%;
    width: 220px;
    font-weight: normal;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

</style>