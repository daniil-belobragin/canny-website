<template>
  <div class="header-wrapper">
    <navigation-bar/>
    <content-block :is-revert="false">
      <span slot="title">
          Track feedback to build better products
      </span>
      <span slot="text">
          Capture feedback in one organized place to inform your product decisions.
      </span>
      <img src="https://canny.io/admin-view.jpg?52fbe67b5eaae40f9fdecaeb66bb4d7a" alt="" width="100%" slot="image-content">
    </content-block>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar";
import ContentBlock from "./ContentBlock";

export default {
  name: "Header",
  components: {ContentBlock, NavigationBar}
}
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  max-width: 1200px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
</style>