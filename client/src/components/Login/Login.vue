<template>
  <div id="app-login">
    <div id="login-form">
      <form v-on:submit="handleLogin">
        <h1>Login</h1>

        <input v-model="email" type="email" name="email" required placeholder="Email">

        <input v-model="password" type="password" required placeholder="Password">
        <span class="error-message" v-if="errors.message">{{ errors.message }}</span>

        <button type="submit">Login</button>
        <p>Don't have an account yet? Click <router-link to="/register">here</router-link> to register</p>
      </form>
    </div>
    <button @click="loginUser({email, password})">test</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import AxiosNoAuth from '@/utils/AxiosNoAuth'
import { UserState } from '../../types'

export default Vue.extend({
  name: 'Register' as string,
  data: () => ({
    email: '',
    password: '',
  }),
  computed: mapState({
    errors: (state: any) => state.user.errors
  }),
  methods: {
    ...mapActions({
      loginUser: 'user/login'
    }),
    async handleLogin(event: Event) {
      event.preventDefault()

      try {
        this.loginUser({email: this.email, password: this.password, router: this.$router})
      } catch (error) {
        this.errors = {...error.response.data}
      }
    }
  }
})
</script>

<style scoped>
 #app-login {
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

#login-form {
  margin-top: 55px;
}

.error-message {
  font-size: 12px;
  color: red;
}

form {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 55vh;
  margin: 0 auto;
  box-shadow: green;
  -webkit-box-shadow: 0px 0px 50px -16px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 50px -16px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 50px -16px rgba(0,0,0,0.75);
  border-radius: 25px;
}

input {
  margin: 10px;
  width: 350px;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  align-self: center;
  font-size: 18px;
}

button {
  width: 90px;
  height: 47px;
  border-radius: 5px;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  color: white;
  background-color: #307cf6;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 10px;
  align-self: center;
  margin-top: 60px;
}

@media only screen and (max-width: 540px) {
  form {
    width: 90%;
  }

  input {
    width: 80%;
    font-size: 12px;
  }

  p {
    padding: 20px;
  }
}
</style>