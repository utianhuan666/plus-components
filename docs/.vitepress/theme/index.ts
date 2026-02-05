import DefaultTheme from 'vitepress/theme'
import Demo from './components/Demo.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import type { Theme } from 'vitepress'
import type { Component } from 'vue'

// 自动导入所有示例组件
const modules = import.meta.glob<{ default: Component }>('../../examples/**/*.vue', { eager: true })
const components: Record<string, Component> = {}

for (const path in modules) {
  const mod = modules[path]
  const componentName = path
    .replace('../../examples/', '')
    .replace('.vue', '')
    .replaceAll('/', '-')
  components[componentName] = mod.default
}

import { watch } from 'vue'
import './styles/index.css'

// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }
  `
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(window.location.pathname === '/' || window.location.pathname === '/plus-components/'),
        { immediate: true },
      )
    }

    // 注册 Demo 组件
    app.component('Demo', Demo)
    app.use(ElementPlus)
    
    // 注册所有示例组件
    for (const name in components) {
      app.component(name, components[name])
    }
  },
} satisfies Theme
