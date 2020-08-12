<template>
  <div class="home-screen">
    <header-block />
    <img alt="Vue logo" src="../assets/image/logo.png">
  </div>
</template>

<script>
import HeaderBlock from "../components/HeaderBlock";

export default {
  name: "HomeScreen",
  components: {HeaderBlock}
}
</script>

<style scoped>
  .home-screen {
    width: 100%;
    height: 1100px;
    background: #f8f8fa;
  }
</style>
