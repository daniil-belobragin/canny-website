<template>
  <div class="header">
    <div class="header-wrapper">
      <navigation-bar />
      <div class="header-content">
        <content-block text-location-init="row">
          <div slot="text" class="text-wrapper">
            <div slot="title" class="title">
              <span class="title-text">Track feedback to build better products</span>
            </div>
            <div slot="paragraph" class="paragraph">
              <span class="paragraph-text">Capture feedback in one organized place to inform your product decisions.</span>
            </div>
            <div slot="button" class="free-trial-button-wrapper">
              <button class="free-trial-button">{{ freeTrialButtonText }}</button>
              <span class="free-trial-text">Free 14 day trial · No credit card required</span>
            </div>
          </div>
          <div slot="image" class="image-wrapper">
            <img src="https://canny.io/admin-view.jpg?52fbe67b5eaae40f9fdecaeb66bb4d7a" alt="" class="image">
            <div class="see-more-button-wrapper">
              <button class="see-more-button">
                <img src="../assets/image/play-button.svg" class="play-button-image" alt="">
                <span class="see-more-button-text">{{ seeMoreButtonText }}</span>
              </button>
            </div>
          </div>
        </content-block>
        <div class="logo-content-wrapper">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar";
import ContentBlock from "./ContentBlock";

export default {
  name: "HeaderBlock",

  components: {ContentBlock, NavigationBar},

  data () {
    return {
      freeTrialButtonText: "get started",
      seeMoreButtonText: "see how it works"
    }
  },

  mounted() {
    this.freeTrialButtonText = this.freeTrialButtonText.toUpperCase()
    this.seeMoreButtonText = this.seeMoreButtonText.toUpperCase()
  }
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .text-wrapper {
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .title {
    font-size: 30px;
    font-weight: 800;
    text-align: left;
  }

  .paragraph {
    font-size: 18px;
    text-align: left;
    margin-top: 20px;
    padding-right: 30px;
    color: #666667;
  }

  .image-wrapper {
    border-radius: 10px;
    border: 1px solid #efefef;
    width: 65%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .image {
    width: 100%;
    height: 100%;
    min-height: 350px;
  }

  .see-more-button-wrapper {
    position: absolute;
    border: 2px solid #525df9;
    border-radius: 18px;
    padding: 6px 15px;
    background: white;
    cursor: pointer;
  }

  .see-more-button {
    background: none;
    border: none;
    outline: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    cursor: pointer;
  }

  .see-more-button-text {
    font-size: 10px;
    font-weight: 550;
    letter-spacing: 1px;
    color: #525df9;
    white-space: nowrap;
    padding: 5px;
  }

  .play-button-image {
    padding-bottom: 1px;
    height: 12px;
    margin-right: 8px;
  }

  .free-trial-button-wrapper {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  }

  .free-trial-button {
    padding: 10px;
    width: 60%;
    height: 50px;
    font-size: 13px;
    color: white;
    background: #6dd345;
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .free-trial-button:hover {
    background: #8fda75;
  }

  .free-trial-text {
    font-size: 12px;
    margin-top: 6px;
    color: #9c9c9f;
  }

  .logo-wrapper {
    width: 100%;
    margin-top: 40px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }


</style>