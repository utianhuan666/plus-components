<template>
  <div style="width: 100%">
    <!-- 1. 页头骨架 -->
    <PageHeaderSkeleton v-if="pageHeader !== false" :active="active" />

    <!-- 2. 统计卡片骨架 -->
    <StatisticSkeleton
      v-if="statistic !== false"
      :size="typeof statistic === 'number' ? statistic : undefined"
      :active="active"
    />

    <!-- 3. 工具栏 + 列表 -->
    <el-card
      v-if="toolbar !== false || list !== false"
      shadow="never"
      :body-style="{ padding: 0 }"
      style="border: none"
    >
      <!-- 3.1 工具栏骨架 -->
      <ListToolbarSkeleton v-if="toolbar !== false" :active="active" />

      <!-- 3.2 列表骨架 -->
      <ListSkeleton
        v-if="list !== false"
        :size="typeof list === 'number' ? list : 5"
        :active="active"
        :action-button="actionButton !== false"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import PageHeaderSkeleton from './PageHeaderSkeleton.vue'
import StatisticSkeleton from './StatisticSkeleton.vue'
import ListToolbarSkeleton from './ListToolbarSkeleton.vue'
import ListSkeleton from './ListSkeleton.vue'

interface Props {
  active?: boolean
  pageHeader?: boolean
  statistic?: number | false
  actionButton?: boolean
  toolbar?: boolean
  list?: number | false
}

const props = withDefaults(defineProps<Props>(), {
  active: true,
  pageHeader: true,
  statistic: 2,
  actionButton: true,
  toolbar: true,
  list: 5,
})
</script>

<style lang="scss" scoped></style>
