<template>
  <div>
    <h1>Login</h1>
    <form action="">
      <input type="text" placeholder="Email">
      <input type="password" placeholder="Password">
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
    email: '',
    password: ''
  }),
  methods: {
    handleLogin(event: Event): void {
      event.preventDefault()
      const res = Axios.post('http://localhost:3000/api/auth/login', {email: this.email, password: this.password})
    }
  }
})
</script>

<style>

</style>