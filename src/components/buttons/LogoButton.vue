<template>
  <button class="logo-button" v-bind:class="{integrationButton: isIntegration, ahrefs: logo === 'ahrefs',
    compass: logo === 'compass', lyft: logo === 'lyft', bench: logo === 'bench',
    clickup: logo === 'clickup', slack: logo === 'slack', intercom: logo === 'intercom',
    zapier: logo === 'zapier', jira: logo === 'jira', zendesk: logo === 'zendesk',
    salesforce: logo === 'salesforce', github: logo === 'github', canny: logo === 'canny'}">
    <img :src="path" alt="" class="logo-button-image" v-bind:class="{integrationButtonImage: isIntegration,
     widthMax: imageSize === 'widthMax', heightMax: imageSize === 'heightMax'}">
  </button>
</template>

<script>
export default {
  name: "LogoButton",

  props: {
    path: {
      required: true
    },
    logo: {},
    isIntegration: {
      default: false
    },
    imageSize: {
      required: true
    }
  }
}
</script>

<style lang="scss">
  .logo-button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
  }

  .logo-button:hover {
    filter: brightness(75%);
  }

  .integrationButton {
    @import "../../assets/animation/animation.scss";
    animation: wave 2s infinite;
    margin: 0 30px 30px 30px;
  }

  .integrationButton:hover {
    filter: brightness(100%);
  }

  .heightMax {
    height: 100%;
  }

  .widthMax {
    width: 100%;
  }

  .ahrefs {
    height: 25px;
  }

  .compass {
    height: 25px;
  }

  .lyft {
    height: 34px;
  }

  .bench {
    height: 28px;
  }

  .clickup {
    height: 38px;
  }

  .slack {
    animation-delay: 0.2s;
    width: 88px;
  }

  .intercom {
    animation-delay: 0.5s;
    width: 88px;
  }

  .zapier {
    animation-delay: 0.6s;
    width: 100px;
  }

  .jira {
    animation-delay: 0.8s;
    width: 100px;
  }

  .zendesk {
    animation-delay: 0.4s;
    width: 100px;
  }

  .salesforce {
    animation-delay: 0.6s;
    width: 120px;
  }

  .github {
    animation-delay: 0.8s;
    width: 100px;
  }

  .canny {
    width: 26px;
    margin-bottom: 30px;
  }
</style>