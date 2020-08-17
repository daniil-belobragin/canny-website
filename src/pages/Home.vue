<template>
  <div class="home-screen">
    <header-block />
  </div>
</template>

<script>

import HeaderBlock from "../components/Header";
export default {
  name: "HomeScreen",
  components: {HeaderBlock}
}
</script>

<style scoped>
  .home-screen {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
