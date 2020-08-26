<template>
  <div class="image-wrapper" v-bind:class="{width11: imageSize === 'width11', widthMax: imageSize === 'max',
  avatar: imageSize === 'avatar'}">
    <img :src="path" class="icon" :alt="imageAlt"/>
  </div>
</template>

<script>
export default {
  name: "PrimaryImage",

  props: {
    path: {},
    imageAlt: {
      default: ""
    },
    imageSize: {
      type: String
    }
  }
}
</script>

<style lang="scss">
  .image-wrapper {
    padding-left: 5px;
    padding-right: 10px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .width11 {
    @extend .image-wrapper;

    width: 11px;
  }

  .widthMax {
    width: 100%;
    padding: 0;
  }

  .icon {
    width: 100%;
    height: 100%;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    overflow: hidden;
    padding: 0;
    margin-right: 10px;
  }

</style>