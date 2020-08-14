<template>
  <button class="demo-button-wrapper">
    <span class="demo-button">{{ demoButton }}</span>
  </button>
</template>

<script>
export default {
  name: "DemoButton",

  data () {
    return {
      demoButton: "request a demo"
    }
  },

  mounted() {
    this.demoButton = this.demoButton.toUpperCase()
  }
}
</script>

<style scoped>
  .demo-button-wrapper {
    height: 100%;
    font-weight: 600;
    padding: 8px 12px;
    filter: brightness(85%);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    border: 1px solid #cbcbce;
    border-radius: 4px;
    background: none;
    outline: none;
  }
  .demo-button-wrapper:hover {
    border-color: #666667;
  }
  .demo-button {
    font-size: 11px;
    color: #9c9c9f;
  }

</style>