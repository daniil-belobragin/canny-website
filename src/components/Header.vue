<template>
  <div class="header">
    <div class="header-wrapper">
      <NavigationBar />
    </div>
    <div class="header-content">

    </div>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar";

export default {
  name: "Header",
  components: {NavigationBar}
}
</script>

<style>
  .header {
    width: 100%;
    height: 736px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #d1d3d6;
    }
  .header-wrapper {
    width: 90%;
    max-width: 1100px;
    height: 736px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>