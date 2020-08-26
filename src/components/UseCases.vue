<template>
  <div class="use-cases-wrapper">
    <ul class="use-cases">
      <li class="use-case-item" v-for="useCase in useCases" :key="useCase.id">
        <div class="comment-wrapper">
          {{ useCase.comment }}
        </div>
        <user :user-name="useCase.username" :avatar-path="useCase.avatarPath">
          <span slot="position">{{ useCase.position }}</span>
        </user>
      </li>
    </ul>
    <div class="use-cases-button">
      <primary-button label="Check out our case studies →" button-type="features"/>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "./buttons/PrimaryButton";
import User from "./User";

export default {
  name: "UseCases",
  components: {User, PrimaryButton},
  props: {
    useCases: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .use-cases-wrapper {
    background: white;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    overflow: hidden;
  }

  .use-cases {
    border-bottom: 1px solid #e6e6e6;
    display: flex;
  }

  .use-case-item {
    border-left: 1px solid #e6e6e6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 24px 24px;
    flex: 1;
    cursor: pointer;
  }

  .use-case-item:hover {
    background: #f5f5f5;
  }

  .use-case-item:first-child {
    border-left: none;
  }

  .comment-wrapper {
    font-size: 17px;
    color: #333333;
    line-height: 24px;
    text-indent: -8px;
  }

  .use-cases-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 20px;
    cursor: pointer;
  }

  .use-cases-button:hover {
    background: #f5f5f5;
  }

</style>