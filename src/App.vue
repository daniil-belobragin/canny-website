<template>
  <div id="wrapper">
    <home-screen/>
  </div>
</template>

<script>
import HomeScreen from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    HomeScreen
  }
}
</script>

<style lang="scss">
  @import "./assets/style/style.css";

  #wrapper {
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>
