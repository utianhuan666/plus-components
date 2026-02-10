<template>
  <div class="skeleton-result-demo">
      <ProSkeleton type="result" :page-header="true"/>
  </div>
</template>

<script setup lang="ts">
import ProSkeleton from '../../../src/skeleton/index.vue'
</script>

<style scoped>
.skeleton-result-demo {
  padding: 24px;
  background: #f5f5f5;
}
</style>
