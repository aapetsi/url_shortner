<template>
  <div id="app-nav">
    <nav>
      <router-link v-if="user.isLoggedIn" class="nav-link" to="/main">App</router-link>
      <router-link v-if="!user.isLoggedIn" class="nav-link" to="/">Login</router-link>
      <router-link v-if="!user.isLoggedIn" class="nav-link" to="/register">Register</router-link>
      <a v-if="user.isLoggedIn" class="nav-link" href="#" @click="handleLogout">Logout</a>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: 'App' as string,
  methods: {
    ...mapActions({
      logout: 'user/logout'
    }),
    async handleLogout(event: Event) {
      event.preventDefault()

      this.logout()
      this.$router.push('/')
    }
  },
  computed: mapState({
    user: (state: any) => state.user
  })
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

@media only screen and (max-width: 540px) {
  nav {
    width: 90%;
    background: #307cf6;
    border-radius: 5px;
  }

  .nav-link {
    color: white;
  }
}
</style>