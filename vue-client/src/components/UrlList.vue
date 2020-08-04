<template>
  <div>
    <p v-if="urls.length === 0">Start shortening your urls</p>
    <p v-else-if="urls.length > 0">Here are your shortened urls</p>
    <p v-show="error">{{ error }}</p>
    <table v-show="urls.length != 0">
      <thead>
        <tr>
          <td>Original Url</td>
          <td>Shortened Url</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <Url v-for="url in urls" :key="url._id" :shortUrl="url.shortUrl" :id="url._id" :originalUrl="url.originalUrl" :shortUrlHash="url.shortUrlHash" :handleDelete="handleDelete"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import Url from './Url.vue'
export default {
  props: {
    urls: {
      type: Array,
      required: true
    },
    error: {
      type: String,
      required: true
    },
    handleDelete: {
      type: Function,
      required: true
    }
  },
  components: {
    Url
  },
  name: 'UrlList',
  data: function() {
    return {

    }
  }
}
</script>

<style scoped>
  table {
    margin: 0 auto;
    width: 80%;
  }

  thead {
    background-color: blue;
    color: white;
    height: 32px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  @media only screen and (max-width: 540px) {
    table {
      width: 100%;
    }

    td:nth-child(3) {
      display: none;
    }
  }
</style>