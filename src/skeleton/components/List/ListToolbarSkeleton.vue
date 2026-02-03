<template>
  <el-card
    shadow="never"
    :body-style="{ paddingBottom: '8px' }"
    style="border: none; border-bottom-left-radius: 0; border-bottom-right-radius: 0"
  >
    <el-skeleton :rows="0" :animated="active">
      <template #template>
        <el-space style="width: 100%" justify="space-between">
          <el-skeleton-item variant="button" style="width: 200px" />

          <el-space>
            <el-skeleton-item variant="button" style="width: 120px" />
            <el-skeleton-item variant="button" style="width: 80px" />
          </el-space>
        </el-space>
      </template>
    </el-skeleton>
  </el-card>
</template>

<script setup lang="ts">
  import { ElCard, ElSkeleton, ElSkeletonItem, ElSpace } from 'element-plus'

  interface Props {
    active: boolean
  }

  const props = defineProps<Props>()
</script>

<style lang="scss" scoped></style>
