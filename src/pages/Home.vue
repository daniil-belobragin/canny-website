<template>
  <div class="home-screen">
    <Header/>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import Header from '../components/Header';

export default {
  name: "HomeScreen",
  components: {Header}
}
</script>

<style scoped>
  .home-screen {
    width: 100%;
    height: 1100px;
    background: #f8f8fa;
  }
</style>
