<template>
  <div>
    <form v-on:submit.prevent="handleSubmit">
      <input type="text" required name='text' v-model="url">
      <button>Shorten</button>
    </form>
    <p v-show="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    shortenUrl: {
      type: Function,
      required: true
    }
  },
  name: 'UrlForm',
  data: function() {
    return {
      url: '',
      error: ''
    }
  },
  methods: {
    handleSubmit: function (event) {
      event.preventDefault()

      const httpRegex = /^https?:\/\/[a-zA-Z]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i
      const wwwRegex = /^www\.[a-zA-Z]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i
      
      if (httpRegex.test(this.url) || wwwRegex.test(this.url)) {
        this.shortenUrl(this.url)
        this.url = ''
        this.error = ''
      } else {
        this.error = 'Make sure your url is of the form "https://somewebsite.com" or "www.somewebsite.com"'
      }
    }
  }
}
</script>

<style scoped>

</style>

'''
<div>
      <form onSubmit={handleSubmit} data-testid="url-form">
        <input
          type='text'
          required={true}
          onChange={handleChange}
          name='text'
          placeholder='https://example.com'
          value={text}
          data-testid='url'
        />
        <button data-testid="submit">Shorten</button>
      </form>
      {error && <p data-testid="error-text">{error}</p>}
    </div>
'''