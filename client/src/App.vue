<template>
  <div>
    <nav>
      <a href="/">App</a>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
      <a href="/logout">Logout</a>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
  }
</style>