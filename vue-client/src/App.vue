<template>
  <div id="app">
    <UrlForm />
    <UrlList />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UrlList from './components/UrlList.vue'
import UrlForm from './components/UrlForm.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    UrlForm,
    UrlList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
