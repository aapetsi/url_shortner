<template>
  <div>
    <h1>Login</h1>
    <form v-on:submit="handleLogin">
      <input type="email" placeholder="Email" v-model="email" required>
      <input type="password" placeholder="Password" v-model="password" required>
      <button>Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Axios from 'axios'

export default Vue.extend({
  name: 'Login' as string,
  components: {},
  data: () => ({
    email: 'johndoe@gmail.com',
    password: '123456',
    error: ''
  }),
  methods: {
    async handleLogin(event: Event) {
      event.preventDefault()
      const res = await Axios.post('http://localhost:3000/api/auth/login', {email: this.email, password: this.password})
      localStorage.setItem('token', res.data.token.token)
    }
  }
})
</script>

<style>

</style>