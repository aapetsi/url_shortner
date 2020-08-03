<template>
  <tr>
    <td>{{ originalUrl }}</td>
    <td>{{ shortUrl }}
      <button @click="handleCopyClipboard">Copy</button>
    </td>
    <td>
      <button @click="handleDeleteUrl">Delete </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    shortUrl: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    originalUrl: {
      type: String,
      required: true
    },
    shortUrlHash: {
      type: String,
      required: true
    },
    handleDelete: {
      type: String,
      required: true
    }
  },
  name: 'Url',
  data: function() {
    return {

    }
  },
  methods: {
    handleDeleteUrl: function() {
      this.handleDelete(this.id)
    },

    handleCopyClipboard: function() {
      navigator.clipboard.writeText(this.shortUrl)
      alert('copied to clipboard')
    }
  }
}
</script>

<style scoped>

</style>