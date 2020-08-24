<template>
  <div id="app-nav">
    <nav>
      <router-link class="nav-link" to="/main">App</router-link>
      <router-link class="nav-link" to="/">Login</router-link>
      <router-link class="nav-link" to="/register">Register</router-link>
      <a class="nav-link" href="#" @click="handleLogout">Logout</a>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App' as string,
  methods: {
    async handleLogout(event: Event) {
      event.preventDefault()

      localStorage.clear()
      this.$router.push('/')
    }
  }
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
  text-decoration: undeline;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 18px;
  width: 30%;
}
</style>