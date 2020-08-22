<template>
  <div>
    <nav>
      <router-link to="/">App</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/logout">Logout</router-link>
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