<script setup>
import { ref } from 'vue'
import ListSkeleton from '../../../src/skeleton/components/List/ListSkeleton.vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 3000)
</script>

<template>
  <div>
    <ListSkeleton v-if="loading" :size="3" :active="true" />
    <div v-else>
      <p>数据加载完成!</p>
      <p>这里是实际的内容...</p>
    </div>
  </div>
</template>
