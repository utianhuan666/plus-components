<template>
  <el-card shadow="never" style="border: none; margin-bottom: 16px">
    <div
      :style="{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }"
    >
      <!-- 循环渲染卡片 -->
      <div
        v-for="index in arraySize"
        :key="index"
        :style="{
          flex: 1,
          borderLeft: arraySize > 2 && index === 2 ? '1px solid rgba(0,0,0,0.06)' : undefined,
          paddingLeft: getPaddingLeft(index) + 'px',
          marginRight: index === 1 ? '16px' : '0',
        }"
      >
        <el-skeleton :rows="0" :animated="active">
          <template #template>
            <!-- 标题骨架 -->
            <el-skeleton-item variant="text" style="width: 100px; margin-top: 0" />
            <!-- 数值骨架 -->
            <el-skeleton-item variant="button" style="width: 100%; height: 48px; margin-top: 8px" />
          </template>
        </el-skeleton>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBreakpoints } from '@vueuse/core'

interface Props {
  size?: number
  active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  active: true,
})

//Element plus断点配置
const breakpoints = useBreakpoints({
  xs: 0,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1920,
})

//断点对应的卡片数量配置
const BREAKPOINT_SIZES = {
  xs: 2,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 6,
  xxl: 6,
} as const

const arraySize = computed(() => {
  if (props.size !== undefined) return props.size

  // 从大到小判断断点
  if (breakpoints.greaterOrEqual('xl').value) return BREAKPOINT_SIZES.xxl
  if (breakpoints.greaterOrEqual('lg').value) return BREAKPOINT_SIZES.xl
  if (breakpoints.greaterOrEqual('md').value) return BREAKPOINT_SIZES.lg
  if (breakpoints.greaterOrEqual('sm').value) return BREAKPOINT_SIZES.md

  return BREAKPOINT_SIZES.xs
})

const getPaddingLeft = (index: number) => {
  if (index === 1) return 0
  if (arraySize.value > 2) return 42
  return 16
}
</script>

<style lang="scss" scoped></style>
