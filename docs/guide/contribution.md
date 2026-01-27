# 贡献指南

感谢你对 Plus Components 的关注！

## 如何贡献

### 报告 Bug

如果你发现了 Bug，请：

1. 在 GitHub Issues 中搜索是否已有相关 Issue
2. 如果没有，创建新的 Issue，并提供：
   - Bug 的详细描述
   - 复现步骤
   - 预期行为
   - 实际行为
   - 环境信息（浏览器、操作系统等）
   - 代码示例（如有）

### 提出新功能

如果你有新功能建议：

1. 在 [Issues](https://github.com/your-org/plus-components/issues) 中搜索是否已有相关请求
2. 如果没有，创建新的 Issue，并提供：
   - 功能的详细描述
   - 使用场景
   - 可能的实现方案（如有）

### 提交代码

#### 开发环境

```bash
# 克隆仓库
git clone https://github.com/your-org/plus-components.git
cd plus-components

# 安装依赖
pnpm install

# 启动开发
pnpm dev

# 启动文档
pnpm docs:dev

# 运行测试
pnpm test
```

#### 代码规范

在提交代码前，请确保：

1. **通过 lint 检查**

   ```bash
   pnpm run lint
   ```

2. **通过类型检查**

   ```bash
   pnpm run typecheck
   ```

3. **通过测试**

   ```bash
   pnpm test
   ```

4. **代码格式化**
   ```bash
   pnpm run format
   ```

#### 提交 PR

1. Fork 本仓库
2. 创建新的分支
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. 提交代码
   ```bash
   git add .
   git commit -m "feat: 添加 XXX 组件"
   ```
4. 推送到你的 Fork
   ```bash
   git push origin feature/your-feature-name
   ```
5. 创建 Pull Request

#### Commit 规范

我们遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

- `feat`: 新功能
- `fix`: 修复 Bug
- `docs`: 文档更新
- `style`: 代码格式（不影响代码运行）
- `refactor`: 重构（既不是新功能也不是修复）
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

示例：

```
feat(button): 添加 loading 属性支持
fix(table): 修复分页不更新问题
docs: 更新 Button 组件文档
```

## 开发指南

### 目录结构

```
src/
├── button/              # Button 模块
│   ├── index.ts        # 模块入口
│   ├── Button.vue      # 组件实现
│   ├── typing.ts       # 类型定义
│   └── composables/   # 组合式函数
├── table/              # Table 模块
├── form/               # Form 模块
├── composables/        # 通用 composables
├── utils/              # 工具函数
├── types/              # 全局类型
└── index.ts            # 主入口
```

### 添加新组件

#### 1. 创建组件目录

```bash
# 创建组件目录
mkdir src/your-component

# 创建必要文件
touch src/your-component/index.ts
touch src/your-component/YourComponent.vue
touch src/your-component/typing.ts
```

#### 2. 实现组件

```vue
<!-- src/your-component/YourComponent.vue -->
<script setup lang="ts">
import type { YourComponentProps } from './typing';

const props = defineProps<YourComponentProps>();
</script>

<template>
  <div class="your-component">
    {{ props.text }}
  </div>
</template>
```

#### 3. 定义类型

```typescript
// src/your-component/typing.ts
export interface YourComponentProps {
  text?: string;
  disabled?: boolean;
}
```

#### 4. 导出组件

```typescript
// src/your-component/index.ts
export { default as YourComponent } from './YourComponent.vue';
export type { YourComponentProps } from './typing';
```

#### 5. 在主入口导出

```typescript
// src/index.ts
export * from './your-component';
```

#### 6. 添加文档

在 `docs/components/your-component/` 目录下创建文档：

- `index.md`: 组件概览
- `api.md`: API 文档
- `examples.md`: 示例代码
- `demos/`: 实时演示组件

### 编写测试

在组件目录下创建 `__tests__/` 目录：

```typescript
// src/your-component/__tests__/index.test.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import YourComponent from '../YourComponent.vue';

describe('YourComponent', () => {
  it('renders correctly', () => {
    const wrapper = mount(YourComponent, {
      props: {
        text: 'Hello',
      },
    });

    expect(wrapper.text()).toBe('Hello');
  });
});
```

## 行为准则

- 尊重所有贡献者
- 保持友好和专业的交流
- 接受建设性的批评
- 关注对社区最有利的事情

## 许可证

通过贡献代码，你同意你的贡献将在 [MIT License](LICENSE) 下发布。
