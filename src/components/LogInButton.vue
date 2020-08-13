<template>
  <button class="login-button-wrapper">
    <span class="login-button">{{ logInButton }}</span>
  </button>
</template>

<script>
export default {
  name: "LogInButton",

  data () {
    return{
      logInButton: "log in"
    }
  },

  mounted() {
    this.logInButton = this.logInButton.toUpperCase()
  }
}
</script>

<style scoped>
  .login-button-wrapper {
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
  .login-button-wrapper:hover {
    filter: brightness(85%);
  }
</style>