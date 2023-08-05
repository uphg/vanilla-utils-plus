import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/peach-utils/',

  locales: {
    root: {
      label: 'English',
      title: "🍑 Peach Utils",
      description: "A modular JavaScript utility library.",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Documentation', link: '/docs/' }
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Quick Start', link: '/docs/' },
            ]
          },
          {
            text: 'APIs',
            items: [
              { text: 'Emitter', link: '/docs/emitter' },
              { text: 'DOM API', link: '/docs/dom' },
              { text: 'Collection', link: '/docs/collection' },
              { text: 'Array', link: '/docs/array' },
              { text: 'Object', link: '/docs/object' },
              { text: 'Function', link: '/docs/function' },
              { text: 'Type', link: '/docs/type' },
            ]
          }
        ],
      }
    },
    zh: {
      link: '/zh/',
      label: '简体中文',
      title: '🍑 Peach Utils',
      description: '一个模块化 JavaScript 实用程序库。',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '文档', link: '/zh/docs/' }
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { text: '快速开始', link: '/zh/docs/' },
            ]
          },
          {
            text: 'APIs',
            items: [
              { text: 'Emitter', link: '/zh/docs/emitter' },
              { text: 'DOM API', link: '/zh/docs/dom' },
              { text: '合集', link: '/zh/docs/collection' },
              { text: '数组', link: '/zh/docs/array' },
              { text: '对象', link: '/zh/docs/object' },
              { text: '函数', link: '/zh/docs/function' },
              { text: '类型', link: '/zh/docs/type' },
            ]
          }
        ],
      }
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/uphg/peach-utils' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/uphg/ts-library-starter/edit/master/src/:path',
    }
  }
})
