<template>
  <div id="app">
    <h1>URL Shortener</h1>
    <UrlForm v-bind:shortenUrl="shortenUrl" />
    <UrlList v-bind:urls="urls" v-bind:error="error" v-bind:handleDelete="handleDelete" />
    <button class="delete-all" @click="handleDeleteAll" :disabled="urls.length === 0">Delete all</button>
  </div>
</template>

<script>
import UrlList from './components/UrlList.vue'
import UrlForm from './components/UrlForm.vue'
import Axios from 'axios'

export default {
  name: 'App',
  components: {
    UrlForm,
    UrlList
  },
  data: function() {
    return {
      urls: [],
      error: ''
    }
  },
  methods: {
    shortenUrl: async function(originalUrl) {
      try {
        const res = await Axios.post('http://localhost:3000/api/url/createShortLink', { originalUrl })
        this.urls = [...this.urls, res.data]
        this.error = ''
      } catch (error) {
        this.error = error.response.data.error
      }
    },

    handleDeleteAll: async function() {
      const ans = confirm('Are you sure you want to delete all urls')
      try {
        if (ans) {
          const res = await Axios.delete('http://localhost:3000/api/url/all', {data: ''})
          alert(res.data.message)
          this.urls = []
        }
      } catch (error) {
        this.error = 'There was a problem deleting all urls'
      }
    },

    handleDelete: async function(id) {
      try {
        const ans = confirm('Are you sure want to delete this url')
        if (ans) {
          await Axios.delete(`http://localhost:3000/api/url/one/${id}`, {data: ''})
          this.urls = this.urls.filter(url => url._id !== id)
        }
      } catch (error) {
        this.error = 'There was a problem deleting the url'
      }
      console.log('handleDelete')
    }
  },
  mounted: async function() {
    try {
      const res = await Axios.get('http://localhost:3000/api/url/get_urls')
      this.urls = res.data
    } catch (error) {
      this.error = 'Oops there seems to be a problem fetching your saved urls'
    }
  },
}
</script>

<style scoped>
  #app {
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

  .delete-all {
    margin: 0 auto;
    background: #dc3545;
    height: 32px;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    border-radius: 5px;
    margin-top: 20px;
  }

  .delete-all[disabled]:hover {
    cursor: not-allowed;
  }
</style>
