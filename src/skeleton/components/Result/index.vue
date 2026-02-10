<template>
  <div style="width: 100%">
    <PageHeaderSkeleton v-if="pageHeader !== false" :active="active" />

    <el-card shadow="never" style="border: none">
      <el-skeleton :rows="0" :animated="active">
        <template #template>
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              padding: 128px;
            "
          >
            <!-- Avatar -->
            <el-skeleton-item
              variant="circle"
              style="width: 64px; height: 64px; margin-block-end: 32px"
            />
            <!-- Title Button -->
            <el-skeleton-item
              variant="button"
              style="width: 214px; height: 32px; margin-block-end: 8px"
            />
            <!-- Subtitle Button (Small) -->
            <el-skeleton-item
              variant="button"
              style="width: 328px; height: 24px; margin-block-end: 24px"
            />
            <!-- Action Buttons -->
            <div style="display: flex; gap: 8px">
              <el-skeleton-item variant="button" style="width: 116px; height: 32px" />
              <el-skeleton-item variant="button" style="width: 116px; height: 32px" />
            </div>
          </div>
        </template>
      </el-skeleton>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import PageHeaderSkeleton from '../List/PageHeaderSkeleton.vue'

interface ResultPageSkeletonProps {
  active?: boolean
  pageHeader?: false
}

withDefaults(defineProps<ResultPageSkeletonProps>(), {
  active: true,
})
</script>

<style lang="scss" scoped></style>
