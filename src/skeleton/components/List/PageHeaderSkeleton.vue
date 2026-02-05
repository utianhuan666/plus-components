<template>
  <div :style="{ marginBottom: '16px' }">
    <el-skeleton :rows="0" :animated="active">
      <template #template>
        <!-- Title Skeleton: Block element, 32px height to match Ant Design h3, margin-bottom for spacing -->
        <el-skeleton-item 
          variant="h3" 
          style="width: 185px; height: 32px; display: block; margin-bottom: 24px" 
        />
        
        <!-- Button Skeleton: Small size (24px height), default width 64px -->
        <el-skeleton-item 
          variant="button" 
          style="width: 64px; height: 24px" 
        />
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
