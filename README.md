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
# 或
pnpm add @your-org/plus-components
# 或
yarn add @your-org/plus-components
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

使用 **Oxlint** 进行代码检查，提供 50-100x 更快的性能：

```bash
pnpm run lint        # 运行 Oxlint 检查代码
pnpm run lint:fix    # 自动修复问题
```

Oxlint 配置文件: `.oxlintrc.json`

### 代码格式化

使用 **Prettier** 进行代码格式化：

```bash
pnpm run format       # 格式化所有文件
pnpm run format:check # 检查格式化状态（不修改文件）
```

Prettier 配置文件: `.prettierrc`

### 测试

```bash
pnpm test           # 运行测试
pnpm test:coverage  # 测试覆盖率
```

### 文档开发

```bash
pnpm docs:dev       # 启动文档开发服务器 (http://localhost:3000)
pnpm docs:build     # 构建文档站点
pnpm docs:preview   # 预览文档站点
```

### 构建

```bash
pnpm run build       # 构建组件库
pnpm run dev        # 监听模式构建组件库
```

## 组件文档

查看 [完整文档](https://your-docs-site.com) 了解所有组件的详细用法。

## 组件列表

### Layout (布局)

- [ ] ProLayout - 企业级布局
- [ ] PageContainer - 页面容器

### Table (表格)

- [ ] ProTable - 高级表格
- [ ] EditableTable - 可编辑表格
- [ ] DragSortTable - 拖拽排序表格

### Form (表单)

- [ ] ProForm - 高级表单
- [ ] ProFormField - 表单字段

### Card (卡片)

- [ ] ProCard - 高级卡片
- [ ] CheckCard - 选择卡片
- [ ] StatisticCard - 统计卡片

### List (列表)

- [ ] ProList - 高级列表
- [ ] ProDescriptions - 描述列表

### Basic (基础组件)

- [x] Button - 按钮
- [ ] Input - 输入框
- [ ] Select - 选择器

## 重构进度

当前正在执行 [重构计划](./plan.md)，将项目升级到 RS 生态。

### 已完成

- [x] 安装 Oxlint
- [x] 安装 Rspress
- [x] 配置 Oxlint (.oxlintrc.json)
- [x] 配置 Rspress (rspress.config.ts)
- [x] 更新 package.json scripts
- [x] 创建文档目录结构
- [x] 编写指南文档
- [x] 编写 Button 组件文档

### 进行中

- [ ] 创建完整的目录结构
- [ ] 开发 ProTable 组件

### 待完成

- [ ] 开发 ProForm 组件
- [ ] 开发 ProLayout 组件
- [ ] 开发 ProCard 组件
- [ ] 完善单元测试
- [ ] 配置 CI/CD

## 工具说明

- **Oxlint**: 高性能 JavaScript/TypeScript linter（Rust 实现）
- **Prettier**: 代码格式化工具
- **Rspress**: 文档站点生成器
- **Rslib**: 库开发构建工具
- **Rstest**: 测试框架

## 贡献

欢迎提交 Issue 和 Pull Request！详见 [贡献指南](./docs/guide/contribution.md)。

## 许可证

MIT

## Get started

Build the library:

```bash
pnpm run build
```

Build the library in watch mode:

```bash
pnpm run dev
```
