<template>
  <tr>
    <td class="link" data-testid="originalUrl">{{ originalUrl }}</td>
    <td class="link" data-testid="shortUrl">{{ shortUrl }}
      <button class="copy-clipboard" @click="handleCopyClipboard">Copy</button>
    </td>
    <td>
      <button class="delete-one" @click="handleDeleteUrl">Delete</button>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
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
    }
  },
  name: 'Url' as string,
  data: () => ({}),
  methods: {
    ...mapActions({
      handleDelete: 'urls/deleteUrl'
    }),
    handleDeleteUrl() : void {
      this.handleDelete(this.id)
    },

    handleCopyClipboard() : void {
      navigator.clipboard.writeText(this.shortUrl)
      alert('copied to clipboard')
    }
  }
})
</script>

<style scoped>
  .copy-clipboard {
    display: inline-block;
    background: green;
    color: white;
    height: 32px;
    margin-left: 10px;
    width: 60px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    border: 0;
    box-shadow: none;
    cursor: pointer;
  }

  .delete-one {
    height: 32px;
    background: #dc3545;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    border: 0;
    box-shadow: none;
    text-align: center;
    cursor: pointer;
  }

  button:hover {
    background: #556476;
  }

  .link {
    color: blue;
    cursor: pointer;
    text-decoration: underline;
  }

  @media only screen and (max-width: 540px) {
    .copy-clipboard {
      display: none;
    }

    .delete-one {
      display: none;
    }
  }
</style>