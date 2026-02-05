<script setup lang="ts">
import { computed, ref } from 'vue'
import { useClipboard, useToggle } from '@vueuse/core'
import SourceCode from './SourceCode.vue'

const props = defineProps<{
  source: string
  path: string
  rawSource: string
  description: string
}>()

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, toggleSourceVisible] = useToggle()

const sourceCodeRef = ref<HTMLButtonElement>()

const decodedDescription = computed(() => decodeURIComponent(props.description))

const copyCode = async () => {
  if (!isSupported) {
    console.error('Clipboard API not supported')
    return
  }
  try {
    await copy()
    console.log('Code copied!')
  } catch (e: any) {
    console.error(e.message)
  }
}
</script>

<template>
  <div v-if="decodedDescription" class="demo-description" v-html="decodedDescription" />

  <div class="demo-block">
    <div class="demo-showcase">
      <slot name="source" />
    </div>

    <div class="demo-actions">
      <button
        class="demo-action-button"
        title="复制代码"
        @click="copyCode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      </button>
      <button
        ref="sourceCodeRef"
        class="demo-action-button"
        :title="sourceVisible ? '隐藏代码' : '查看代码'"
        @click="toggleSourceVisible()"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      </button>
    </div>

    <SourceCode :visible="sourceVisible" :source="source" />
  </div>
</template>

<style scoped>
.demo-description {
  margin: 1rem 0;
  font-size: 14px;
  line-height: 1.6;
}

.demo-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1rem 0;
  overflow: hidden;
}

.demo-showcase {
  padding: 1.5rem;
  background-color: var(--vp-c-bg);
}

.demo-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.5rem;
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
}

.demo-action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
}

.demo-action-button:hover {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-default-soft);
}
</style>
