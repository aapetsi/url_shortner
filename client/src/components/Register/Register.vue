<template>
  <div id="app-register">
    <div id="register-form">
      <form v-on:submit="handleRegister">
        <h1>Register</h1>
        <input v-model="username" type="text" required placeholder="Username">
        <span class="error-message" v-if="errors.username">{{ errors.username }}</span>
        <span class="error-message" v-if="errors.message">{{ errors.message }}</span>

        <input v-model="email" type="email" name="email" required placeholder="Email">
        <span class="error-message" v-if="errors.email">{{ errors.email }}</span>

        <input v-model="password" type="password" required placeholder="Password">
        <span class="error-message" v-if="errors.password">{{ errors.password }}</span>

        <input v-model="password2" type="password" required placeholder="Confirm Password">
        <span class="error-message" v-if="errors.password2">{{ errors.password2}}</span>

        <button type="submit">Register</button>
        <p>Already have an account? Click <router-link to="/">here</router-link> to login</p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  name: 'Register' as string,
  data: () => ({
    username: '',
    email: '',
    password: '',
    password2: '',
  }),
  computed: mapState({
    // eslint-disable-next-line
    errors: (state: any) => state.user.errors
  }),
  methods: {
    ...mapActions({
      registerUser: 'user/register'
    }),
    async handleRegister(event: Event) {
      event.preventDefault()

      this.registerUser({ email: this.email, password: this.password, username: this.username, password2: this.password2, router: this.$router })
    }
  }
})
</script>

<style scoped>
 #app-register {
  background: #fff;
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
  height: 80vh;
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
  margin-top: 100px;
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