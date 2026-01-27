# 架构设计

## 设计理念

Plus Components 遵循以下设计原则：

### 1. 中粗粒度 + 细粒度子组件

顶层组件（如 ProTable、ProForm）提供完整的功能实现，内部拆分为多个可复用的细粒度子组件。

**示例**:

```
ProTable (顶层)
├── TableSearch (搜索表单)
├── TableToolbar (工具栏)
├── EditableTable (可编辑表格)
└── DragSortTable (拖拽排序)
```

### 2. 类型驱动开发

每个模块都有独立的 TypeScript 类型定义文件 `typing.ts`，确保类型安全和良好的 IDE 支持。

**示例**:

```typescript
// src/table/typing.ts
export interface ProTableProps<T = any> {
  columns?: ProColumns<T>[];
  request?: (params: any) => Promise<ProTableResponse<T>>;
  pagination?: PaginationConfig;
}

export interface ProColumns<T = any> {
  dataIndex: string | string[];
  title: string;
  valueType?: ValueType;
  valueEnum?: Record<string, LabelValue>;
}
```

### 3. Schema 配置模式

使用统一的配置接口，提高组件的可扩展性和一致性。

**示例**:

```typescript
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    valueType: 'text',
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueType: 'select',
    valueEnum: {
      active: { label: '活跃', status: 'Success' },
      inactive: { label: '禁用', status: 'Default' },
    },
  },
];
```

### 4. 组合式 API 封装

将可复用的逻辑提取到 composables 中，提高代码复用性。

**示例**:

```typescript
// src/composables/useRequest.ts
export function useRequest<T>(
  service: (params: any) => Promise<T>,
  options?: RequestOptions,
) {
  const loading = ref(false);
  const data = ref<T | null>(null);
  // ...

  return { loading, data, run, refresh };
}
```

## 目录结构

```
src/
├── button/              # Button 模块
│   ├── index.ts        # 模块入口
│   ├── Button.vue      # 组件实现
│   ├── typing.ts       # 类型定义
│   └── composables/   # 组合式函数
├── table/              # Table 模块
│   ├── index.ts
│   ├── typing.ts
│   ├── ProTable/      # ProTable 组件
│   └── components/     # 子组件
│       ├── EditableTable/
│       ├── DragSortTable/
│       └── TableToolbar/
├── form/               # Form 模块
├── layout/             # Layout 模块
├── card/               # Card 模块
├── list/               # List 模块
├── composables/        # 通用 composables
│   ├── useRequest.ts
│   ├── useEditable.ts
│   └── index.ts
├── utils/              # 工具函数
│   ├── index.ts
│   ├── format.ts
│   └── validator.ts
├── types/              # 全局类型
│   └── common.ts
└── index.ts            # 主入口
```

## 组件分类

### Layout (布局)

- **ProLayout**: 企业级布局，包含侧边栏、顶部导航等
- **PageContainer**: 页面容器，提供面包屑、标题等
- **SettingDrawer**: 设置抽屉

### Table (表格)

- **ProTable**: 高级表格，支持搜索、分页、工具栏
- **EditableTable**: 可编辑表格
- **DragSortTable**: 拖拽排序表格

### Form (表单)

- **ProForm**: 高级表单
- **ProFormField**: 表单字段
- **ProFormList**: 表单列表

### Card (卡片)

- **ProCard**: 高级卡片
- **CheckCard**: 选择卡片
- **StatisticCard**: 统计卡片

### List (列表)

- **ProList**: 高级列表
- **ProDescriptions**: 描述列表

### Basic (基础组件)

- **Button**: 按钮
- **Input**: 输入框
- **Select**: 选择器

## 工程化

### 构建工具

- **Rslib**: 专门用于库开发的构建工具
- **Rsbuild**: 底层构建引擎，提供快速的构建体验

### 代码检查

- **Oxlint**: 高性能的 linter（50-100x faster than ESLint）
- **Prettier**: 代码格式化工具

### 文档

- **Rspress**: 基于 Rsbuild 的文档生成器，性能优于 Storybook

### 测试

- **Rstest**: 基于 Vitest 的测试框架

## 性能优化

1. **按需引入**: 支持 Tree Shaking，只打包使用的组件
2. **代码分割**: 组件代码分割，减少首屏加载时间
3. **虚拟滚动**: 表格组件支持虚拟滚动，处理大量数据
4. **懒加载**: 图片等资源懒加载

## 设计规范

组件遵循以下设计规范：

- Material Design
- Ant Design
- WAI-ARIA 无障碍标准
