<template>
  <div>
    <form v-on:submit.prevent="handleSubmit">
      <input type="text" required v-model="url" placeholder="Enter your url">
      <button>Shorten</button>
    </form>
    <p v-show="formError">{{ formError }}</p>
    <p v-show="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  props: {
    // shortenUrl: {
    //   type: Function,
    //   required: true
    // }
  },
  name: 'UrlForm' as string,
  data: () =>  ({
    url: '' as string,
    // error: '' as string
  }),
  computed: mapState({
    formError: (state: any) => state.urls.formError,
    error: (state: any) => state.urls.errors.error,
    saveSuccess: (state: any) => state.urls.saveSuccess,
  }),
  methods: {
    ...mapActions({
      shortenUrl: 'urls/shortenUrl'
    }),
    handleSubmit(event : Event) : void {
      event.preventDefault()

      this.shortenUrl(this.url)

      // if (this.saveSuccess) {
      //   this.url = ''
      // }
      // this.url = ''
      // const httpRegex = /^https?:\/\/[a-zA-Z]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i
      // const wwwRegex = /^www\.[a-zA-Z]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i
      // const bareRegex = /[a-zA-Z]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i
      
      // if (httpRegex.test(this.url) || wwwRegex.test(this.url)) {
      //   this.shortenUrl(this.url)
      //   this.url = ''
      //   this.error = ''
      // } else {
      //   this.error = 'Make sure your url is of the form "https://somewebsite.com" or "www.somewebsite.com"'
      // }
    }
  }
})
</script>

<style scoped>
  form {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  input {
    width: 400px;
    height: 35px;
    padding: 5px;
    font-size: 18px;
    border: 1px solid #e3e3e3;
    border-radius: 2px;
    margin-bottom: auto 20px;
  }

  p {
    color: red;
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
  }

  button:hover {
    background: #556476;
  }

  @media only screen and (max-width: 540px) {
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
      margin: auto;
    }

    input {
      width: 70%;
    }

    button {
      width: 73%;
      margin-top: 15px;
      margin-left: 0;
    }
  }
</style>
