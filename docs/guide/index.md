# Plus Components

Vue 3 企业级组件库，基于 RS 生态构建。

## 特性

- 🚀 **高性能**: 基于 Rust 实现的 Oxlint，提供 50-100x 的 lint 速度
- 🎨 **优雅设计**: 遵循现代 UI 设计规范
- 🔧 **开箱即用**: 提供丰富的企业级组件
- 📦 **类型安全**: 完整的 TypeScript 类型定义
- 🎯 **易于定制**: 灵活的配置和主题系统

## 技术栈

- Vue 3 + TypeScript
- Rspress (文档)
- Oxlint (代码检查)
- Prettier (代码格式化)
- Rslib (库打包)
- Rstest (测试)

## 快速开始

### 安装

```bash
npm install @your-org/plus-components
```

### 使用

```vue
<script setup>
import { Button, ProTable } from '@your-org/plus-components';
</script>

<template>
  <Button type="primary">点击我</Button>
</template>
```

## 开发

### 代码检查

```bash
pnpm run lint        # 运行 Oxlint 检查代码
pnpm run lint:fix    # 自动修复问题
```

### 代码格式化

```bash
pnpm run format       # 使用 Prettier 格式化
pnpm run format:check # 检查格式化状态
```

### 测试

```bash
pnpm test           # 运行测试
pnpm test:coverage  # 测试覆盖率
```

### 文档开发

```bash
pnpm docs:dev       # 启动文档开发服务器
pnpm docs:build     # 构建文档站点
pnpm docs:preview   # 预览文档站点
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT
