---
title: ProSkeleton 骨架屏
group: Skeleton
atomId: ProSkeleton
---

# ProSkeleton - 骨架屏

> 该组件为内部组件，请勿直接使用。

页面级别的骨架屏，不支持自定义

## 安装和初始化

```typescript
import Skeleton from '@plus-ui/pro-skeleton';

return <Skeleton type="list" />;
```

## DEMO

### 列表页面

:::demo

skeleton/list

:::

### 静态列表

:::demo

skeleton/list-static

:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 不同类型的骨架屏 | `'list' \| 'result' \| 'descriptions'` | list |
| active | 是否显示动态 | boolean | true |
| pageHeader | 是否显示 pageHeader 的骨架屏 descriptions 和 list 有效 | boolean | true |
| statistic | 统计信息骨架屏的数量 | `number` \| `false` | 4 |
| list | 列表的骨架屏，可以控制数量 | `number` \| `false` | 5 |
| toolbar | 列表的操作栏骨架屏 | boolean | true |
