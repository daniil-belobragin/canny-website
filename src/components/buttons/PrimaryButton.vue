<template>
  <button class="primary-button" v-bind:class="{logo: isLogoButton, dropDown: isDropDown, dropDownItem: isDropDownItem , dropDownItemTitle: isDropDownItemTitle}">
    {{ label }}
    <img :src="icon" class="primary-button-icon" v-show="withIcon" alt="primary-button-icon" />
  </button>
</template>

<script>

export default {
  name: "PrimaryButton",

  props: {
    label: {
      required: true
    },
    isLogoButton: {
      default: false
    },
    isDropDown: {
      default: false
    },
    isDropDownItem: {
      default: false
    },
    isDropDownItemTitle: {
      default: false
    },
    withIcon: {
      default: false
    },
    icon: {}
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
  
  .primary-button-icon {
    width: 11px;
    padding-left: 5px;
  }
</style>