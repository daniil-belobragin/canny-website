<template>
  <div class="content-wrapper" v-bind:class="{revert: isRevert}">
    <div class="text-content-wrapper">
      <div class="title">
        <slot name="title"/>
      </div>
      <div class="text">
        <slot name="text"/>
      </div>
      <slot name="button"/>
    </div>
    <div class="image-content-wrapper">
      <slot name="image-content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentBlock",

  props: {
    isRevert: {
      default: false
    }
  }
}
</script>

<style lang="scss">
  .content-wrapper {
    padding-top: 60px;
    padding-bottom: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .revert {
    flex-direction: row-reverse;
  }

  .text-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 33%;
  }

  .title {
    max-width: 340px;
    font-size: 30px;
    font-weight: 700;
  }

  .text {
    max-width: 250px;
    font-size: 17px;
    margin-top: 20px;
    color: #666666;
  }

  .image-content-wrapper {
    width: 65%;
    display: flex;
    align-items: center;
    border: 1px solid #efefef;
    border-radius: 10px;
    overflow: hidden;
  }
</style>