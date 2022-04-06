import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: 'ko-KR',
  title: 'Code or Death',
  description: 'Just playing around',

  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.png',
  },
})
