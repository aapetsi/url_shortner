<template>
  <div id="app-nav">
    <nav>
      <router-link class="nav-link" to="/">App</router-link>
      <router-link class="nav-link" to="/login">Login</router-link>
      <router-link class="nav-link" to="/register">Register</router-link>
      <router-link class="nav-link" to="/logout">Logout</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App' as string
})
</script>

<style scoped>
#app-nav {
  background: #e3e3e3;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.nav-link {
  color: blue;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 18px;
  width: 45%;
}
</style>