---
title: Skeleton 骨架屏
category: components
---

# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢,需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。
- 可以被 Loading 完全代替,但是在可用的场景下可以比 Loading 提供更好的视觉效果和用户体验。

## 代码演示

### 基础用法

最简单的占位效果。

:::demo

skeleton/basic

:::

### 复杂的组合

更复杂的组合,包含列表骨架屏。

:::demo

skeleton/loading

:::

### 动画效果

显示动画效果。

:::demo

skeleton/animated

:::

## API

### ListSkeleton Props

| 参数         | 说明           | 类型      | 默认值 |
| ------------ | -------------- | --------- | ------ |
| size         | 列表项数量     | `number`  | -      |
| active       | 是否展示动画效果 | `boolean` | true   |
| actionButton | 是否显示操作按钮 | `boolean` | true   |

## 相关组件

- [ProList 高级列表](/components/list)
- [ProTable 高级表格](/components/table)
