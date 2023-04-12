<script setup lang="ts">
import { ref, useFetch } from '@nuxtjs/composition-api'
import axios from 'axios';

const users = ref([])

const { fetch } = useFetch(async () => {
  const results = await axios.get('https://jsonplaceholder.typicode.com/users')
  users.value = results.data
})

fetch()
</script>

<template>
  <div>
    <div v-for="user in users" :key="user.id">
      <span>{{ user.id }}</span>
      <span>{{ user.name }}</span>
    </div>
  </div>
</template>