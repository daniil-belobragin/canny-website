<template>
  <div class="content-wrapper" :style="textLocation">
    <slot name="text">
      <slot name="title"/>
      <slot name="paragraph" />
      <slot name="button" />
    </slot>
    <slot name="image" />
    <slot name="links" />
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
    padding-top: 60px;
  }

</style>