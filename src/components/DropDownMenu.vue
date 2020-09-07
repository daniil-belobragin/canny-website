<template>
  <ul class="drop-down-menu-wrapper">
    <li class="drop-down-wrapper" v-bind:key="dropDownButton" v-for="dropDownButton in dropDownButtons">
      <router-link class="link" :to="isActive(dropDownButton) ? '' : {name: dropDownButton}">
        <primary-button :label="dropDownButton.toUpperCase()" button-type="dropDown"
                        :path="require('../assets/image/down.svg')" :with-image="isActive(dropDownButton)" image-size="width11" />
      </router-link>

      <drop-down v-show="dropDownButton === 'product'" :drop-down-list="productDropDownList" />
      <drop-down v-show="dropDownButton === 'resources'" :drop-down-list="resourcesDropDownList" />
    </li>
  </ul>
</template>

<script>
import PrimaryButton from "./buttons/PrimaryButton";
import DropDown from "./DropDown";

export default {
  name: "DropDownMenu",

  components: {DropDown, PrimaryButton},

  data () {
    return {
      dropDownButtons: ["product", "pricing", "resources", "case studies"],
      productDropDownList: [
          {section: {sectionTitle: "Features", sectionItems: ["Collect FeedBack", "Analyze Feedback", "Plan Roadmap", "Share Update"]}},
          {section: {sectionTitle: "Use Cases", sectionItems: ["Feature Request Tracking", "Idea Management", "Internal Feedback", "Product Management", "Sales", "Public Roadmap"]}},
          {section: {sectionTitle: "Integration", sectionItems: []}}
      ],
      resourcesDropDownList: [
        {section: {sectionTitle: "Blog", sectionItems: ["Founder Stories", "Building SaaS", "Customer Feedback", "Product Management", "Canny Best Practices"]}},
        {section: {sectionTitle: "Documentation", sectionItems: ["Install Canny", "API Docs"]}},
        {section: {sectionTitle: "Other Resources", sectionItems: ["Help Center", "Feedback", "Security"]}}
      ]
    }
  },

  methods: {
    isActive (label) {
      return label === "product" || label === "resources"
    }
  },
}
</script>

<style lang="scss">
  @import "../assets/style/style";

  .drop-down-menu-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
  }

  .drop-down-wrapper {
    padding: 15px;
    margin-left: 15px;
    cursor: pointer;
  }

  .drop-down-wrapper:hover > .drop-down {
    visibility: visible;
  }
</style>