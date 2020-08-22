<template>
  <div>
    <form>
      <input type="text" required placeholder="username">
      <input type="email" name="email" required placeholder="email">
      <input type="password" required placeholder="Password">
      <input type="password" required placeholder="Confirm Password">
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Register' as string,
  data: () => ({
    username: '',
    email: '',
    password: '',
    password2: ''
  })
})
</script>

<style>

</style>