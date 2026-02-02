<template>
  <div :style="{ marginBottom: '16px' }">
    <!-- 使用 el-skeleton 包裹，支持动画效果 -->
    <el-skeleton :rows="0" :animated="active">
      <template #template>
        <!-- 标题骨架：宽度 185px -->
        <el-skeleton-item variant="text" style="width: 185px" />

        <!-- 按钮骨架：小尺寸 -->
        <el-skeleton-item variant="button" style="width: 80px" />
      </template>
    </el-skeleton>
  </div>
</template>

<script setup lang="ts">
/**
 * 页面头部骨架屏
 * 用于模拟页面标题和操作按钮的加载状态
 */
interface Props {
  active: boolean // 是否显示动画效果
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped></style>
