<template>
  <div class="user-wrapper">
    <div class="avatar-wrapper">
      <primary-image image-size="avatar" :path="avatarPath"/>
    </div>
    <div class="user-info">
      <span class="user-name-wrapper">{{ userName }}</span>
      <div class="position-wrapper">
        <slot name="position" />
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryImage from "./PrimaryImage";
export default {
  name: "User",
  components: {PrimaryImage},
  props: {
    userName: {
      required: true
    },
    avatarPath: {
      default: require("../assets/image/avatar.jpg")
    }
  }
}
</script>

<style scoped>

  .user-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
  }

  .user-name-wrapper {
    font-size: 15px;
    color: #666666;
    font-weight: 700;
  }

  .position-wrapper {
    font-size: 15px;
    color: #666666;
  }

</style>