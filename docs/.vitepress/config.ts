import { createRequire } from 'module'
import { defineConfig } from 'vitepress'
import menu2022 from '../2022/menu.json'
import menu2023 from '../2023/menu.json'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  lang: 'zh-CN',
  title: '长空',
  description: '一尊今雨，万里长空',

  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    logo: '/favicon.jpg',
    siteTitle: '长空',
    nav: nav(),

    sidebar: {
      '/2023/': menu2023,
      '/2022/': menu2022,
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qingfengmy/qingfengmy.github.io' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
  },
})

function nav() {
  return [
    { text: '2023', link: '/2023/index', activeMatch: '/2023/' },
    { text: '2022', link: '/2022/index', activeMatch: '/2022/' },
  ]
}
