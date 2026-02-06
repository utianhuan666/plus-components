<template>
  <div style="background: #fafafa; padding: 24px">
    <PlusSkeleton type="list" :statistic="2" :active="false"/>
  </div>
</template>

<script setup lang="ts">
import { PlusSkeleton } from '@/skeleton'
</script>

