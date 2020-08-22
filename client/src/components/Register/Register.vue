<template>
  <div>
    <form v-on:submit="handleRegister">
      <input v-model="username" type="text" required placeholder="username">
      <input v-model="email" type="email" name="email" required placeholder="email">
      <input v-model="password" type="password" required placeholder="Password">
      <input v-model="password2" type="password" required placeholder="Confirm Password">
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AxiosNoAuth from '@/utils/AxiosNoAuth'

export default Vue.extend({
  name: 'Register' as string,
  data: () => ({
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    password: '123456',
    password2: '123456'
  }),
  methods: {
    async handleRegister(event: Event) {
      event.preventDefault()
      const res = await AxiosNoAuth().post('/auth/register', {
        username: this.username, 
        email: this.email, 
        password: this.password, 
        password2: this.password2
      })

      console.log(res.data)
    }
  }
})
</script>

<style>

</style>