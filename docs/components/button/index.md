---
title: Button 按钮
category: components
---

# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 基础用法

使用 `type`、`plain`、`round` 和 `circle` 属性来定义按钮的样式。

:::preview

```vue
<script setup>
import { Button } from '@your-org/plus-components';
</script>

<template>
  <div class="button-demo">
    <Button type="primary">主要按钮</Button>
    <Button>默认按钮</Button>
    <Button type="dashed">虚线按钮</Button>
    <Button type="text">文本按钮</Button>
  </div>
</template>

<style scoped>
.button-demo button {
  margin-right: 10px;
}
</style>
```

:::

### 不同尺寸

使用 `size` 属性设置按钮大小。

:::preview

```vue
<script setup>
import { Button } from '@your-org/plus-components';
</script>

<template>
  <div class="button-demo">
    <Button size="large">Large</Button>
    <Button>Default</Button>
    <Button size="small">Small</Button>
  </div>
</template>
```

:::

### 加载状态

使用 `loading` 属性设置按钮加载状态。

:::preview

```vue
<script setup>
import { ref } from 'vue';
import { Button } from '@your-org/plus-components';

const loading = ref(false);
const handleClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <Button type="primary" :loading="loading" @click="handleClick">
    点击加载
  </Button>
</template>
```

:::

### 禁用状态

使用 `disabled` 属性禁用按钮。

:::preview

```vue
<script setup>
import { Button } from '@your-org/plus-components';
</script>

<template>
  <Button type="primary" disabled>禁用按钮</Button>
  <Button disabled>禁用按钮</Button>
</template>
```

:::

## API

### Button Props

| 参数     | 说明                       | 类型                                           | 默认值    |
| -------- | -------------------------- | ---------------------------------------------- | --------- |
| type     | 按钮类型                   | `'primary' \| 'default' \| 'dashed' \| 'text'` | 'default' |
| size     | 按钮大小                   | `'large' \| 'default' \| 'small'`              | 'default' |
| loading  | 是否加载中                 | `boolean`                                      | false     |
| disabled | 是否禁用                   | `boolean`                                      | false     |
| block    | 是否为块级元素             | `boolean`                                      | false     |
| danger   | 是否为危险按钮             | `boolean`                                      | false     |
| ghost    | 是否为幽灵按钮             | `boolean`                                      | false     |
| icon     | 按钮图标                   | `Component`                                    | -         |
| htmlType | 设置 button 原生的 type 值 | `'submit' \| 'reset' \| 'button'`              | 'button'  |

### Button Events

| 事件名 | 说明           | 回调参数                      |
| ------ | -------------- | ----------------------------- |
| click  | 点击按钮时触发 | `(event: MouseEvent) => void` |

### Button Slots

| 插槽名  | 说明         |
| ------- | ------------ |
| icon    | 图标插槽     |
| default | 默认内容插槽 |

## 主题定制

### CSS 变量

```css
.button {
  --button-height: 32px;
  --button-padding: 4px 15px;
  --button-font-size: 14px;
  --button-border-radius: 2px;
}
```

## 相关链接

- [ProTable 高级表格](/components/table)
- [ProForm 高级表单](/components/form)
