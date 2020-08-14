<template>
  <div>
    <content-block v-bind:style="{width: '100%', padding: '0 30px'}">
      <div class="text-wrapper" slot="text">
        <div slot="title">
          <span>Collect feedback from customers + teammates</span>
        </div>
        <div slot="paragraph">
          <span>Ditch your messy spreadsheets. Stop letting ideas slip through the cracks. Manage and organize all feedback in one tool.</span>
        </div>
      </div>
      <div class="image-wrapper" slot="image">
        <img src="https://canny.io/new-landing-hero.gif?764244d20f4c018ac7b394ccc02a4d58" alt="">
      </div>
    </content-block>
  </div>
</template>

<script>
import ContentBlock from "@/components/ContentBlock";
export default {
  name: "BodyBlock",

  components: {ContentBlock}

}
</script>

<style scoped>
</style>