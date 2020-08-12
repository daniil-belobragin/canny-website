<template>
  <div class="header">
    <div class="header-wrapper">
      <navigation-bar />
      <div class="header-content">
        <content-block text-location-init="row">
          <div slot="text" class="text-wrapper">
            <div slot="title" class="title">
              <span>Track feedback to build better products</span>
            </div>
            <div slot="paragraph" class="paragraph">
              <span>Capture feedback in one organized place to inform your product decisions.</span>
            </div>
            <div slot="button" class="button">

            </div>
          </div>
          <div slot="image">
            <img src="../assets/image/logo.png" alt="">
          </div>
        </content-block>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar";
import ContentBlock from "./ContentBlock";

export default {
  name: "HeaderBlock",
  components: {ContentBlock, NavigationBar}
}
</script>

<style>

  .header-wrapper {
    width: 100%;
    max-width: 1200px;
    padding: 0 30px;
    box-sizing: border-box;
    height: 736px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


.header {
    width: 100%;
    height: 736px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #d1d3d6;
    }

  .header-content {
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text-wrapper {
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-size: 26px;
    font-weight: bold;
    text-align: left;
  }

  .paragraph {
    font-size: 18px;
    text-align: left;
  }

</style>