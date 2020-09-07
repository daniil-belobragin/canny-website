<template>
  <button class="primary-button" v-bind:class="{logo: buttonType === 'logo', dropDown: buttonType === 'dropDown',
   dropDownItem: buttonType === 'dropDownItem' , dropDownItemTitle: buttonType === 'dropDownItemTitle',
   features: buttonType === 'features', decorated: buttonType === 'decorated', copyright: buttonType === 'copyright',
   footerButton: buttonType === 'footerButton'}">
    {{ label }}
    <primary-image v-show="withImage" :path="path" :image-size="imageSize" />
  </button>
</template>

<script>

import PrimaryImage from "../PrimaryImage";
export default {
  name: "PrimaryButton",
  components: {PrimaryImage},
  props: {
    label: {
      required: true
    },
    buttonType: {
      type: String
    },
    imageSize: {
      type: String
    },
    withImage: {
      default: false
    },
    path: {
      type: String
    }
  }
}

</script>

<style lang="scss">
  .primary-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    box-sizing: border-box;
    text-decoration: none;
  }

  .logo {
    @extend .primary-button;

    color: #4568f5;
    font-size: 20px;
  }

  .dropDown {
    color: #888888;
    font-size: 11px;
    font-weight: 700;
  }

  .dropDown:hover {
    filter: brightness(75%);
  }

  .dropDownItem {
    color: #666666;
    font-size: 15px;
  }

  .dropDownItem:hover {
    filter: brightness(50%);
  }

  .dropDownItemTitle {
    @extend .dropDownItem;

    font-weight: 700;
  }

  .features {
    color: #525df9;
    font-size: 17px;
  }

  .primary-button-icon {
    width: 11px;
    padding-left: 5px;
  }

  .decorated {
    color: #525df9;
    font-size: 17px;
    text-decoration: underline;
  }

  .decorated:hover {
    filter: brightness(120%);
  }

  .copyright {
    font-size: 12px;
    color: #666666;
    line-height: 20px;
  }

  .copyright:hover {
    filter: brightness(75%);
  }

  .footerButton {
    font-size: 15px;
    color: #666666;
    padding: 5px 0;
  }

  .footerButton:hover {
    filter: brightness(75%);
  }
</style>