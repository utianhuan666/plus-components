import { defineConfig } from 'rspress/config';
import path from 'path';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Plus Components',
  description: 'Vue 3 Enterprise Component Library',

  themeConfig: {
    projectName: {
      link: '/',
      text: 'Plus Components',
    },

    nav: [
      {
        text: '指南',
        items: [
          {
            text: '快速开始',
            link: '/guide/getting-started',
          },
          {
            text: '架构设计',
            link: '/guide/architecture',
          },
          {
            text: '组件总览',
            link: '/guide/components',
          },
        ],
      },
      {
        text: '组件',
        items: [
          {
            text: 'Layout',
            link: '/components/layout',
          },
          {
            text: 'Table',
            link: '/components/table',
          },
          {
            text: 'Form',
            link: '/components/form',
          },
          {
            text: 'Card',
            link: '/components/card',
          },
          {
            text: 'Button',
            link: '/components/button',
          },
        ],
      },
      {
        text: '更多',
        items: [
          {
            text: '更新日志',
            link: '/blog/changelog',
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/your-org/plus-components',
      },
    ],
  },

  globalUIComponents: [],

  markdown: {
    lineNumbers: true,
    codeHighlighter: 'shiki',
    checkDeadLinks: true,
  },

  builderConfig: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
  },

  plugins: [],
});
