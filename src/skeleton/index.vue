<template>
  <component :is="skeletonComponent" :active="props.active" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ListPageSkeleton from './components/List/ListPageSkeleton.vue'

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
    // TODO: 实现 ResultPageSkeleton
    return ListPageSkeleton
  }

  if (props.type === 'descriptions') {
    // TODO: 实现 DescriptionsPageSkeleton
    return ListPageSkeleton
  }

  return ListPageSkeleton
})
</script>
