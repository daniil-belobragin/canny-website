<template>
  <div class="drop-down-wrapper">
    <button class="drop-down-button-wrapper">
      <span class="drop-down-button">{{ name }}</span>
      <div class="down-arrow-image-wrapper">
        <img class="down-arrow-image" src="../assets/down-arrow.svg" v-if="state"  alt="down-arrow">
      </div>
    </button>
    <div  v-if="showProducts" class="drop-down-container-wrapper">
      <drop-down-item class="drop-down-container-item-title" title-init="Features" :drop-down-container-items="featuresDropDown"/>
      <drop-down-item class="drop-down-container-item-title" title-init="Use Cases" :drop-down-container-items="useCasesDropDown"/>
      <drop-down-item class="drop-down-container-item-title" title-init="Integrations" />
    </div>
    <div v-if="showResources" class="drop-down-container-wrapper">
      <drop-down-item class="drop-down-container-item-title" title-init="Blog" :drop-down-container-items="blogDropDown"/>
      <drop-down-item class="drop-down-container-item-title" title-init="Documentation" :drop-down-container-items="documentationDropDown"/>
      <drop-down-item class="drop-down-container-item-title" title-init="Other resources" :drop-down-container-items="otherResourcesDropDown" />
    </div>
  </div>
</template>

<script>
import DropDownItem from "./DropDownItem";
export default {
  name: "DropDown",
  components: {DropDownItem},
  props: {
    nameInit: {
      required: true
    },
    isUpperCase: {
      default: false
    },
    stateInit: {
      default: false
    },
    dropDownButtonInit: {
      default: ''
    }
  },
  mounted () {
    console.log(typeof(this.stateInit))
  },
  computed: {
    name () {
      return this.isUpperCase ? this.nameInit.toUpperCase() : this.nameInit
    },
    showProducts () {
      return this.state && this.dropDownButton === 'product'
    },
    showResources () {
      return this.state && this.dropDownButton === 'resources'
    }
  },
  data () {
    return {
      state: this.stateInit,
      featuresDropDown: ["Collect Feedback", "Analyze Feedback", "Plan Road Map", "Share Updates"],
      useCasesDropDown: ["Feature Request Tracking", "Idea Management", "Internal Feedback", "Product Management",
        "Sales", "Public Roadmap"],
      blogDropDown : ["Founder Stories", "Building SaaS", "Customer Feedback", "Product Management",
        "Canny Best Practices"],
      documentationDropDown: ["Install Canny", "API Docs"],
      otherResourcesDropDown: ["Help Center", "Feedback", "Security"],
      dropDownButton: this.dropDownButtonInit
    }
  }
}
</script>

<style scoped lang="scss">
  .drop-down-container-wrapper {
    display: none;
    position: absolute;
    top: 50px;
    border: 1px solid #cbcbce;
    border-radius: 4px;
    background: white;
  }
  .drop-down-container-item-title {
    border-top: 1px solid #cbcbce;
    cursor: pointer;
    color: #666667;
  }
  .drop-down-container-item-title:first-child{
    border: none;
  }
  .drop-down-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .drop-down-wrapper:hover .drop-down-container-wrapper {
    display: flex;
    flex-direction: column;
  }
  .drop-down-button-wrapper {
    font-size: 11px;
    font-weight: 600;
    color: #9c9c9f;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
  .drop-down-button-wrapper:hover {
    filter: brightness(85%);
  }
  .down-arrow-image-wrapper {
    height: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .down-arrow-image {
    height: 100%;
    margin-left: 6px;
  }
</style>