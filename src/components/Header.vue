<template>
  <div class="header">
    <div class="header-wrapper">
      <navigation-bar />
      <div class="header-content">
        <content-block text-location-init="row">
          <div slot="text">
            <div slot="title">
              <p>Track feedback to build better products</p>
            </div>
            <div slot="paragraph">
              <p>Capture feedback in one organized place to inform your product decisions.</p>
            </div>
            <div slot="button">

            </div>
          </div>
          <div slot="image">
            <img src="../assets/logo.png" alt="">
          </div>
        </content-block>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar";
import ContentBlock from "./Content";

export default {
  name: "Header",
  components: {ContentBlock, NavigationBar}
}
</script>

<style>

  .header {
    width: 100%;
    height: 736px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #d1d3d6;
    }

  .header-wrapper {
    width: 100%;
    max-width: 1100px;
    padding: 0 30px;
    box-sizing: border-box;
    height: 736px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header-content {
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>