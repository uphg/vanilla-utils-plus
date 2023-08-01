import { title } from 'process'
import { UserConfig, defineConfig, DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/peach-utils/',

  locales: {
    root: {
      label: 'English',
      title: "Peach Utils",
      description: "A modular JavaScript utility library.",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Documentation', link: '/document/' }
        ],
    
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Quick Start', link: '/document/' },
            ]
          },
          {
            text: 'APIs',
            items: [
              { text: 'Emitter', link: '/document/emitter' },
            ]
          }
        ],
      }
    },
    zh: {
      link: '/zh/',
      label: '简体中文',
      title: 'Peach Utils',
      description: '一个模块化 JavaScript 实用程序库。',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '文档', link: '/zh/document/' }
        ],
    
        sidebar: [
          {
            text: '指南',
            items: [
              { text: '快速开始', link: '/zh/document/' },
            ]
          },
          {
            text: 'APIs',
            items: [
              { text: 'Emitter', link: '/zh/document/emitter' },
            ]
          }
        ],
      }
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/uphg/ts-library-starter' }
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
