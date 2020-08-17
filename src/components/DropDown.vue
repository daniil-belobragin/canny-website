<template>
  <div class="drop-down">
    <div v-for="dropDownSection in dropDownList" :key="dropDownSection.id" class="drop-down-section-wrapper">
      <primary-button class="drop-down-section-title" v-bind:class="{alone: isAlone(dropDownSection.section.sectionItems)}"
                      :label="dropDownSection.section.sectionTitle" :is-drop-down-item-title="true" />
      <primary-button v-for="dropDownSectionItem in dropDownSection.section.sectionItems"
                      :key="dropDownSectionItem.id" class="drop-down-section-item" :label="dropDownSectionItem" :is-drop-down-item="true"/>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "./buttons/PrimaryButton";
export default {
  name: "DropDown",
  components: {PrimaryButton},

  props: {
    dropDownList: {}
  },

  methods: {
    isAlone (items) {
      return items.length === 0
    }
  },
}
</script>
<style scoped>
  .drop-down {
    display: flex;
    flex-direction: column;
    justify-content: left;
    position: absolute;
    top: 50px;
    font-size: 15px;
    background: white;
    border: 1px solid #888888;
    border-radius: 5px;
    box-sizing: border-box;
    color: #666666;
    visibility: hidden;
  }

  .drop-down-section-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 100%;
    border-top: 1px solid #888888;
  }

  .drop-down-section-wrapper:first-child {
    border-top: none;
  }

  .drop-down-section-title {
    padding: 15px 20px 10px;
  }

  .drop-down-section-item {
    padding: 0 20px 10px;
  }

  .alone {
    padding: 15px 20px;
  }

</style>