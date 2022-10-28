// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt/config'
// import asd from '@nuxtjs/i18n'
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n' // 加载 i18n 模块
  ],
  i18n: {
    locales: [
      { code: 'cn', iso: 'cn', file: 'cn.json' },
      { code: 'zh', iso: 'zh', file: 'zh.json' },
      { code: 'en', iso: 'en', file: 'en.json' },
      { code: 'zh-CN', iso: 'zh-CN', file: 'zh-CN.json' }
    ],
    langDir: 'i18n/', // 存放语言文件的地方
    defaultLocale: 'en', // 默认语言
    lazy: true, // 懒加载，被使用到的时候才去请求该语言文件
    strategy: 'no_prefix', // 我不需要生成多语言路由 所以设为 no_prefix 其他设置请参考 https://i18n.nuxtjs.org/strategies
    detectBrowserLanguage: { // 自动侦测语言，如果是服务端渲染时，会从请求头中获取；如果在客户端会通过 navigator.language 获取；
      useCookie: false, // 优先从 cookie 中获取 使用的语言 该选择设置为 true 时将不会自动侦测客户端语言，只会从cookies中获取 取不到会取默认值
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended 仅在根路径才会侦测
    },
    vueI18n: {
      legacy: false,
      locale: 'en',
      fallbackLocale: 'en',
    }
  }
})
