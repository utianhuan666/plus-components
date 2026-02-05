<template>
  <el-card
    shadow="never"
    :body-style="{ paddingBottom: '8px' }"
    style="border: none; border-bottom-left-radius: 0; border-bottom-right-radius: 0"
  >
    <el-skeleton :rows="0" :animated="active">
      <template #template>
        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
          <el-skeleton-item variant="button" style="width: 200px; height: 24px" />

          <div style="display: flex; gap: 8px;">
            <el-skeleton-item variant="button" style="width: 120px; height: 24px" />
            <el-skeleton-item variant="button" style="width: 80px; height: 24px" />
          </div>
        </div>
      </template>
    </el-skeleton>
  </el-card>
</template>

<script setup lang="ts">
  import { ElCard, ElSkeleton, ElSkeletonItem } from 'element-plus'

  interface Props {
    active: boolean
  }

  const props = defineProps<Props>()
</script>

<style lang="scss" scoped></style>
