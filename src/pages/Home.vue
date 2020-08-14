<template>
  <div class="home-screen">
    <header-block />
    <body-block />
    <img alt="Vue logo" src="../assets/image/logo.png">
  </div>
</template>

<script>
import HeaderBlock from "../components/HeaderBlock";
import BodyBlock from "@/components/BodyBlock";

export default {
  name: "HomeScreen",
  components: {BodyBlock, HeaderBlock}
}
</script>

<style scoped>
  .home-screen {
    width: 100%;
    height: 1100px;
    background: #f8f8fa;
  }
</style>
