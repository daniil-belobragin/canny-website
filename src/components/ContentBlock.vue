<template>
  <div class="content-wrapper" v-bind:class="{revert: isRevert}">
    <div class="text-content-wrapper">
      <div class="title-wrapper" v-bind:class="{titleWidth600: titleWidth === '600px', titleWidth380: titleWidth === '380px'}">
        <slot name="title" />
      </div>
      <div class="text-wrapper" v-bind:class="{textWidth500: textWidth === '500px', textWidth370: textWidth === '370px',
      textWidth480: textWidth === '480px'}">
        <slot name="text" />
      </div>
      <div class="trial-wrapper" v-bind:class="{top20: topMargin === '20px', top10: topMargin === '10px'}">
        <slot name="trial-button" />
        <div class="trial-description-wrapper">
          <slot name="trial-description" />
        </div>
      </div>
    </div>
    <div class="image-content-wrapper" v-bind:class="{idea: image === 'idea', chat: image === 'chat',
    integrations: image === 'integrations'}">
      <slot name="image" />
      <div class="more-button-wrapper">
        <slot name="more-button" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentBlock",

  props: {
    isRevert: {
      default: false
    },
    withButton: {
      default: false
    },
    topMargin: {
      type: String
    },
    image: {},
    titleWidth: {
      type: String
    },
    textWidth: {
      type: String
    }
  }
}
</script>

<style lang="scss">
  .content-wrapper {
    padding-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .revert {
    @extend .content-wrapper;

    flex-direction: row-reverse;
  }

  .text-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 33%;
  }

  .title-wrapper {
    max-width: 340px;
    font-size: 30px;
    font-weight: 700;
  }

  .titleWidth600 {
    max-width: 600px;
  }

  .titleWidth380 {
    max-width: 380px;
  }

  .text-wrapper {
    max-width: 250px;
    font-size: 17px;
    margin-top: 20px;
    color: #666666;
  }

  .textWidth370 {
    max-width: 370px;
  }

  .textWidth480 {
    max-width: 550px;
  }

  .textWidth500 {
    max-width: 500px;
  }

  .trial-wrapper {
    margin-top: 40px;
  }

  .top20 {
    margin-top: 20px;
  }

  .top10 {
    margin-top: 10px;
  }

  .trial-description-wrapper {
    font-size: 12px;
    color: #666666;
    margin-top: 5px;
  }

  .image-content-wrapper {
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #efefef;
    border-radius: 10px;
    overflow: hidden;
  }

  .idea {
    width: 300px;
  }

  .chat {
    max-width: 60%;
  }

  .integrations {
    width: 700px;
  }

  .more-button-wrapper {
    position: absolute;
  }

</style>