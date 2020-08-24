<template>
  <div id="app-register">
    <div id="register-form">
      <form v-on:submit="handleRegister">
        <h1>Register</h1>
        <input v-model="username" type="text" required placeholder="username">
        <input v-model="email" type="email" name="email" required placeholder="email">
        <input v-model="password" type="password" required placeholder="Password">
        <input v-model="password2" type="password" required placeholder="Confirm Password">
        <button type="submit">Register</button>
      </form>
    </div>
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
    password2: '123456',
    error: {}
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

<style scoped>
 #app-register {
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

#register-form {
  margin-top: 25px;
}

form {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 60vh;
  margin: 0 auto;
  box-shadow: green;
  -webkit-box-shadow: 0px 0px 50px -16px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 50px -16px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 50px -16px rgba(0,0,0,0.75);
}

input {
  margin: 10px;
  height: 35px;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

button {
  width: 90px;
  height: 47px;
  border-radius: 5px;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  color: white;
  background-color: blue;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 10px;
  align-self: center;
}
</style>