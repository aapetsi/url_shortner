<template>
  <div id="app">
    <h3>Welcome, {{ user.username }}</h3>
    <h2>URL Shortener</h2>
    <!-- <UrlForm v-bind:shortenUrl="shortenUrl" /> -->
    <!-- <UrlList v-bind:urls="urls" v-bind:error="error" v-bind:handleDelete="handleDelete" /> -->
    <UrlForm />
    <UrlList />
    <button v-show="urls.length > 0" class="delete-all" @click="handleDeleteAll" :disabled="urls.length === 0">Delete all</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import UrlList from './UrlList.vue'
import UrlForm from './UrlForm.vue'
import { UrlsType } from '../../types'

export default Vue.extend({
  name: 'MainApp' as string,

  components: {
    UrlForm,
    UrlList
  },

  data: () => ({
    // urls: [] as UrlsType,
    // error: '' as string,
  }),

  computed: mapState({
    user: (state: any) => state.user.user,
    urls: (state: any) => state.urls.urls as UrlsType,
    error: (state: any) => state.urls.errors
  }),

  methods: {
    ...mapActions({
      getUrls: 'urls/getUrls',
      deleteUrls: 'urls/deleteUrls'
    }),

    // async shortenUrl(originalUrl : string) : Promise<void> {
    //   try {
    //     const res = await AxiosAuth().post('/url/createShortLink', { originalUrl })
    //     this.urls = [...this.urls, res.data]
    //     this.error = ''
    //   } catch (error) {
    //     this.error = error.response.data.error
    //   }
    // },

    async handleDeleteAll() : Promise<void> {
      const ans : boolean = confirm('Are you sure you want to delete all urls')
      // try {
      if (ans) {
        this.deleteUrls()
        // const res = await AxiosAuth().delete('/url/all', {data: ''})
        // alert(res.data.message)
        // this.urls = []
      }
      // } catch (error) {
      //   this.error = 'There was a problem deleting all urls'
      // }
    },

    // async handleDelete(id : string) : Promise<void> {
    //   try {
    //     const ans : boolean = confirm('Are you sure want to delete this url')
    //     if (ans) {
    //       await AxiosAuth().delete(`/url/one/${id}`, {data: ''})
    //       this.urls = this.urls.filter((url: any) => url._id !== id)
    //     }
    //   } catch (error) {
    //     this.error = 'There was a problem deleting the url'
    //   }
    // }
  },

  async mounted() {
    this.getUrls()
    // try {
    //   const res = await AxiosAuth().get('/url/get_urls')
      
    //   this.urls = res.data
    // } catch (error) {
    //   this.error = 'Oops there seems to be a problem fetching your saved urls'
    // }
  },
})
</script>

<style scoped>
  #app {
    background: white;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  h1 {
    font-size: 40px;
  }

  h3 {
    text-align: left;
  }

  .delete-all {
    margin: 0 auto;
    background: #dc3545;
    height: 38px;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    border-radius: 5px;
    margin-top: 20px;
    border: 0;
    box-shadow: none;
    cursor: pointer;
  }

  .delete-all:hover {
    background: #556476;
  }

  .delete-all[disabled]:hover {
    cursor: not-allowed;
  }
</style>
