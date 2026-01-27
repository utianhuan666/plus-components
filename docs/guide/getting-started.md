# 快速开始

## 安装

```bash
npm install @your-org/plus-components
# 或
pnpm add @your-org/plus-components
# 或
yarn add @your-org/plus-components
```

## 引入

### 完整引入

```typescript
import { Button, Input, Select } from '@your-org/plus-components';
```

### 按需引入

```typescript
import Button from '@your-org/plus-components/es/button';
```

## 基础用法

### Button 组件

```vue
<script setup>
import { Button } from '@your-org/plus-components';
</script>

<template>
  <Button type="primary">主要按钮</Button>
  <Button>默认按钮</Button>
  <Button type="dashed">虚线按钮</Button>
</template>
```

### ProTable 组件

```vue
<script setup>
import { ref } from 'vue';
import { ProTable } from '@your-org/plus-components';

const columns = ref([
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
]);

const request = async (params) => {
  const res = await fetch('/api/users');
  return res;
};
</script>

<template>
  <ProTable :columns="columns" :request="request" />
</template>
```

## 配置

### 全局配置

```typescript
import { createApp } from 'vue';
import PlusComponents from '@your-org/plus-components';

const app = createApp(App);
app.use(PlusComponents);
```

### 按需配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['@your-org/plus-components'],
    }),
  ],
});
```

## 下一步

- 查看[组件总览](/guide/components)了解所有可用组件
- 阅读[架构设计](/guide/architecture)了解组件库架构
