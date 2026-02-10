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

### 结果页面

用于结果页面的骨架屏，适用于成功、失败等操作结果展示页面。

:::demo

skeleton/result

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

## 类型说明

### list

列表页面骨架屏，包含页面头部、统计信息、工具栏和列表内容。

### result

结果页面骨架屏，包含页面头部、居中的图标、标题、描述和操作按钮。适用于：
- 成功提示页面
- 失败提示页面
- 403/404/500 等状态页面

### descriptions

描述列表页面骨架屏（开发中）。
