<template>
  <div id="wrapper">
    <HomeScreen/>
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
  @import "src/assets/style/style";
  #wrapper {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>
