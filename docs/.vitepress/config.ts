import { defineConfig } from 'vitepress'
import path from 'path'
import { mdPlugin } from './config/plugins'

export default defineConfig({
  title: 'Plus Components',
  description: 'Vue 3 Enterprise Component Library',
  
  srcDir: '.',
  outDir: './.vitepress/dist',
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '架构设计', link: '/guide/architecture' },
          { text: '组件总览', link: '/guide/components' },
        ],
      },
      {
        text: '组件',
        items: [
          { text: 'Skeleton', link: '/components/skeleton/' },
          { text: 'Layout', link: '/components/layout/' },
          { text: 'Table', link: '/components/table/' },
          { text: 'Form', link: '/components/form/' },
          { text: 'Card', link: '/components/card/' },
        ],
      },
      {
        text: '更多',
        items: [
          { text: '更新日志', link: '/blog/changelog' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '架构设计', link: '/guide/architecture' },
            { text: '组件总览', link: '/guide/components' },
            { text: '贡献指南', link: '/guide/contribution' },
          ],
        },
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            { text: 'Skeleton 骨架屏', link: '/components/skeleton/' },
            { text: 'Card 卡片', link: '/components/card/' },
            { text: 'Form 表单', link: '/components/form/' },
            { text: 'Layout 布局', link: '/components/layout/' },
            { text: 'List 列表', link: '/components/list/' },
            { text: 'Table 表格', link: '/components/table/' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/plus-components' },
    ],

    search: {
      provider: 'local',
    },
  },

  markdown: {
    lineNumbers: true,
    config: (md) => {
      mdPlugin(md)
    },
  },

  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
      },
    },
  },
})
