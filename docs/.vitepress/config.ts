import { title } from 'process'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/peach-utils/',

  locales: {
    root: {
      label: 'English',
      title: "Peach Utils",
      description: "A modular JavaScript utility library.",
    },
    zh: {
      link: '/zh/',
      label: '简体中文',
      title: 'Peach Utils',
      description: '一个模块化 JavaScript 实用程序库。'
    },
    // '/': {
    //   lang: 'en-US',
    //   title: 'VuePress',
    //   description: 'Vue-powered Static Site Generator',
    //   link: '',
    // },
    // '/zh/': {
    //   lang: 'zh-CN',
    //   title: 'VuePress',
    //   description: 'Vue 驱动的静态网站生成器',
    //   link: ''
    // },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/quick-start' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/uphg/ts-library-starter' }
    ],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/uphg/ts-library-starter/edit/master/src/:path',
    }
  }
})
