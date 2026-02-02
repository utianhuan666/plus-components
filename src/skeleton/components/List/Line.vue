<template>
  <div :style="containerStyle">
    <el-divider :style="{ margin: 0 }" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ElDivider } from 'element-plus'

interface Props {
  padding?: string | number
}

const props = withDefaults(defineProps<Props>(), {
  padding: '0 24px',
})

const containerStyle = computed(() => ({
  padding: props.padding,
}))
</script>

<style lang="scss" scoped></style>
