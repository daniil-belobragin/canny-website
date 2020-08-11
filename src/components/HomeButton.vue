<template>
  <button class="button-wrapper">
    <span class="home-button">Canny</span>
  </button>
</template>

<script>
  export default {
    name: "HomeButton"
  }
</script>

<style>
  .home-button {
    font-size: 22px;
    color: #5379ff;
  }
  .button-wrapper {
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
    padding: 0;
  }
  .button-wrapper::-moz-focus-inner {
    border: 0;
  }

</style>