<script setup>
import ListSkeleton from '../../../src/skeleton/components/List/ListSkeleton.vue'
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <h4>默认动画</h4>
      <ListSkeleton :size="2" :active="true" />
    </div>
    
    <div>
      <h4>无动画</h4>
      <ListSkeleton :size="2" :active="false" />
    </div>
  </div>
</template>
