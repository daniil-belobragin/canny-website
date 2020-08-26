<template>
  <button class="border-button" v-bind:class="{demo: buttonType === 'demo', play: buttonType === 'play'}">
    {{ label }}
    <primary-image :path="path" v-show="withImage" :image-size="imageSize" />
  </button>
</template>

<script>
import PrimaryImage from "../PrimaryImage";
export default {
  name: "BorderButton",
  components: {PrimaryImage},
  props: {
    label: {
      required: true
    },
    buttonType: {
      type: String
    },
    withImage: {
      default: false
    },
    path: {
      type: String
    },
    imageSize: {
      type: String
    }
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
    @import "../../assets/animation/animation";

    border: 2px solid #525df9;
    color: #525df9;
    border-radius: 100px;
    padding: 8px 15px;
    flex-direction: row-reverse;
    background: white;
    font-weight: 600;
    animation: pulse 1.5s infinite;
  }
</style>