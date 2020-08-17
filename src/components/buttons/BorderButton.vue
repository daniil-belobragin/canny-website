<template>
  <button class="border-button" v-bind:class="{demo: buttonType === 'demo', play: buttonType === 'play'}">
    <img :src="icon" class="border-button-icon" v-show="withImage" alt="border-button-icon" />
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "BorderButton",

  props: {
    label: {
      required: true
    },
    buttonType: {

    },
    withImage: {
      default: false
    },
    icon: {}
  }
}
</script>

<style lang="scss">
  .border-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
    outline: none;
    box-sizing: border-box;
    font-size: 11px;
    padding: 0;
    cursor: pointer;
  }

  .demo {
    @extend .border-button;

    border: 1px solid #aaaaaa;
    color: #666666;
    border-radius: 4px;
    padding: 8px 10px;
    font-weight: 700;
    margin-left: 30px;
  }

  .demo:hover {
    border-color: #666666;
  }

  .play {
    @extend .border-button;

    border: 1px solid #525df9;
    color: #525df9;
    border-radius: 8px;
  }

  .primary-button-icon {
    height: 11px;
  }
</style>