<template>
  <component :is="skeletonComponent" :active="props.active" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ListPageSkeleton from './components/List/ListPageSkeleton.vue'
import ResultPageSkeleton from './components/Result/index.vue'

interface Props {
  type?: 'list' | 'result' | 'descriptions'
  active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'list',
  active: true,
})

const skeletonComponent = computed(() => {
  if (props.type === 'result') {
    return ResultPageSkeleton
  }

  if (props.type === 'descriptions') {
    return ListPageSkeleton
  }

  return ListPageSkeleton
})
</script>
