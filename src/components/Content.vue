<template>
  <div class="content-wrapper" :style="textLocation">
    <slot name="text">
      <slot name="title" />
      <slot name="paragraph" />
      <slot name="button" />
    </slot>
  </div>
</template>

<script>
export default {
  name: "ContentBlock",
  props: {
    textLocationInit: {
      default: "row-reverse"
    }
  },
  computed: {
    textLocation () {
      return {
        "flex-direction": this.textLocationInit
      }
    }
  }
}

</script>

<style scoped lang="scss">
  .content-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
  .text {
  }
  .image {
    width: 400px;
    height: 600px;
  }
</style>