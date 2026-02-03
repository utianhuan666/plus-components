<template>
  <div>
    <el-card
      shadow="never"
      :body-style="{ padding: '24px' }"
      style="border: none; border-radius: 0"
    >
      <el-skeleton :rows="0" :animated="active">
        <template #template>
          <div
            :style="{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }"
          >
            <div :style="{ maxWidth: '100%', flex: 1 }">
              <el-skeleton-item variant="text" style="width: 100px" />
              <el-skeleton-item variant="text" style="width: 100%; margin-top: 16px" />
            </div>
            <el-skeleton-item variant="button" style="width: 165px; margin-top: 12px" />
          </div>
        </template>
      </el-skeleton>
    </el-card>

    <Line />
  </div>
</template>

<script setup lang="ts">
  import { ElCard, ElSkeleton } from 'element-plus'
  import Line from './Line.vue'

  /**
   * 列表项骨架屏
   * 用于模拟列表项的加载状态
   */
  interface Props {
    active: boolean
  }

  const props = defineProps<Props>()
</script>
