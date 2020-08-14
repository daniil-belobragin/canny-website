<template>
  <div class="drop-down-container">
    <span class="drop-down-container-title">{{ title }}</span>
    <ul class="drop-down-container-item-wrapper">
      <li class="drop-down-container-item" :key="dropDownContainerItem" v-for="dropDownContainerItem in dropDownContainerItems">
        {{ dropDownContainerItem }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DropDownItem",

  props: {
    titleInit: {
      required: true
    },
    dropDownContainerItems: Array
  },

  data () {
    return {
      title: this.titleInit
    }
  }
}
</script>

<style scoped lang="scss">
  .drop-down-container {
    display: flex;
    flex-direction: column;
    text-align: left;

  }
  .drop-down-container-title {
    padding: 12px;
    font-weight: bold;
  }
  .drop-down-container-title:hover{
    filter: brightness(0%);
  }
  .drop-down-container-item {
    margin: 0 12px 12px;
    color: #9c9c9f;
    cursor: pointer;
  }
  .drop-down-container-item:hover{
    filter: brightness(85%);
  }
  .drop-down-container-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
</style>