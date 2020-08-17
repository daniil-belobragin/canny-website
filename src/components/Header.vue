<template>
  <div class="header-wrapper">
    <navigation-bar />
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar";
export default {
  name: "Header",
  components: {NavigationBar}
}
</script>

<style scoped>
  .header-wrapper {
    height: 70px;
    width: 100%;
    max-width: 1200px;
    padding:  0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
  }
</style>