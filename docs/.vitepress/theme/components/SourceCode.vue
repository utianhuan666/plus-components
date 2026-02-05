<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  visible: boolean
  source: string
}>()

const decoded = computed(() => {
  return decodeURIComponent(props.source)
})
</script>

<template>
  <div v-show="visible" class="source-code-wrapper">
    <div class="source-code" v-html="decoded" />
  </div>
</template>

<style scoped>
.source-code-wrapper {
  border-top: 1px solid var(--vp-c-divider);
}

:deep(.language-vue) {
  margin: 0 !important;
  border-radius: 0 !important;
}

:deep(pre) {
  margin: 0 !important;
}
</style>
