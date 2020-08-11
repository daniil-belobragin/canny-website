<template>
  <div class="navigation-bar">
    <HomeButton />
    <div class="drop-down-menu">
      <DropDown name-init="PRODUCT" state-init="true" drop-down-button-init='product'/>
      <DropDown name-init="PRICING" />
      <DropDown name-init="RESOURCES" state-init="true"/>
      <DropDown name-init="CASE STUDIES" />
    </div>
  </div>
</template>

<script>
import HomeButton from "./HomeButton";
import DropDown from "./DropDown";

export default {
  name: "NavigationBar",
  components: {DropDown, HomeButton}
}
</script>

<style scoped>
  .navigation-bar {
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: 18px;
  }
  .drop-down-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 450px;
  }

</style>