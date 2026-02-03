<template>
  <el-card shadow="never" style="border: none" :body-style="{ padding: '0' }">
    <ListSkeletonItem v-for="index in size" :key="index" :active="active" />

    <el-card
      shadow="never"
      v-if="actionButton !== false"
      style="border: none; border-top-left-radius: 0; border-top-right-radius: 0"
      :body-style="{ display: 'flex', alignItems: 'center', justifyContent: 'center' }"
    >
      <el-skeleton :rows="0" :animated="active">
        <template #template>
          <el-skeleton-item variant="button" style="width: 102px"></el-skeleton-item>
        </template>
      </el-skeleton>
    </el-card>
  </el-card>
</template>

<script setup lang="ts">
  import { ElCard, ElSkeleton, ElSkeletonItem } from 'element-plus'
  import ListSkeletonItem from './ListSkeletonItem.vue'
  interface Props {
    size: number
    active?: boolean
    actionButton?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    active: true,
  })
</script>

<style lang="scss" scoped></style>
